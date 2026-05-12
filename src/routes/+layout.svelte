<script lang="ts">
  import { i18n } from "$lib/i18n";
  import { ParaglideJS } from "@inlang/paraglide-sveltekit";
  import "../app.css";
  import LanguageToggle from "$lib/components/LanguageToggle.svelte";

  let { children } = $props();
</script>

<ParaglideJS {i18n}>
      {@render children()}

  <div
    class="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-secondary flex items-center justify-center xl:hidden"
  >
    <div class="flex items-center justify-center leading-none">
      <LanguageToggle />
    </div>
  </div>
</ParaglideJS>
