<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div class="px-6 md:px-16 xl:px-24 flex flex-col items-center">
  <div class="w-full max-w-[1400px]">
    {@render children?.()}
  </div>
</div>
