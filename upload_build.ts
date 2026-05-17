// deno run -A --env upload_build.ts

import { Client } from "basic-ftp";
import { relative, dirname } from "@std/path";
import { walk } from "@std/fs";
type PendingFile = { localPath: string; remotePath: string };

const client = new Client()
const ROOT_DIR = Deno.env.get("REMOTE_DIR");
const LOCAL_DIR = Deno.env.get("LOCAL_DIR");
if (ROOT_DIR === undefined || LOCAL_DIR === undefined) {
  console.log(`Environment variables ROOT_DIR or LOCAL_DIR are undefined`)
  Deno.exit()
}

async function connectClient(client: Client) {
  await client.access({
    host: Deno.env.get("HOST"),
    user: Deno.env.get("USER"),
    password: Deno.env.get("PASSWORD"),
    secure: true
  });
}

const doTerminalThingie = () => {
  const t = new TextEncoder().encode("\x1B[1A\x1B[2K");
  Deno.stdout.writeSync(t);
  Deno.stdout.writeSync(t);
}

try {
  await connectClient(client);

  const toUpload: PendingFile[] = [];

  for await (const entry of walk(LOCAL_DIR, { includeDirs: false })) {
    const relPath = relative(LOCAL_DIR, entry.path).replace(/\\/g, "/");
    toUpload.push({
      localPath: entry.path,
      remotePath: `${ROOT_DIR}/${relPath}`
    });
  }

  let currentFile = "";
  let currentFileIndex = 0;
  const totalFiles = toUpload.length;

  client.trackProgress(info => {
    if (info.name !== currentFile) {
      if (currentFile !== "") {
        doTerminalThingie();
        console.log(`Finished: ${currentFile}`);
      }
      currentFile = info.name;
      currentFileIndex++;
    } else { doTerminalThingie(); }

    const barWidth = 30;
    const percent = currentFileIndex / totalFiles;
    const filled = Math.round(barWidth * percent);
    const bar = "█".repeat(filled) + "░".repeat(barWidth - filled);

    console.log(`Uploading: ${info.name} | ${info.bytes} bytes`);
    console.log(`[${bar}] ${currentFileIndex}/${totalFiles}`);
  });

  const createdDirs = new Set<string>();
  let uploaded = 0;
  let skipped = 0;

  for (const { localPath, remotePath } of toUpload) {
    const localStat = await Deno.stat(localPath);

    // Reconnect on stupid FIN packets
    if (client.closed) {
      console.log("\nReconnecting...");
      await connectClient(client);
    }

    let changed = true;
    try {
      const remoteSize = await client.size(remotePath);
      if (localStat.size === remoteSize) {
        try {
          const remoteMod = await client.lastMod(remotePath);
          if (localStat.mtime && localStat.mtime <= remoteMod) changed = false;
        } catch { changed = false; }
      }
    } catch { changed = true; }

    if (!changed) {
      skipped++;
      continue;
    }

    // don't ensureDir multiple times for the same dir
    const remoteParent = dirname(remotePath);
    if (!createdDirs.has(remoteParent)) {
      await client.ensureDir(remoteParent);
      await client.cd("/");
      createdDirs.add(remoteParent);
    }

    // Retry upload once on connection error
    try {
      await client.uploadFrom(localPath, remotePath);
    } catch (err) {
      if (client.closed) {
        console.log("\nReconnecting...");
        await connectClient(client);
        await client.uploadFrom(localPath, remotePath);
      } else { throw err; }
    }

    uploaded++;
  }

  if (currentFile !== "") {
    doTerminalThingie();
    console.log(`Finished: ${currentFile}`);
  }
  client.trackProgress();

  console.log(`\nDone! ${uploaded} uploaded, ${skipped} skipped.`);
} catch (err) { console.log(err); }

client.close();