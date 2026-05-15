<script lang="ts">
  import LanguageToggle from "$src/lib/components/LanguageToggle.svelte";
  import "../app.css";

  let { children } = $props();
</script>

<!-- <nav class="locale-switcher" aria-label="Languages">
  {#each locales as locale}
    <a href={resolve(localizeHref(page.url.pathname, { locale }))} data-sveltekit-reload>
      {locale}
    </a>
  {/each}
</nav> -->

{@render children()}

<div class="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
  <div class="flex items-center justify-center leading-none">
    <LanguageToggle />
  </div>
</div>
