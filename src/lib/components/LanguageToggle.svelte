<script lang="ts">
  import English from "$lib/assets/icons/language/flagUK.svg";
  import Dutch from "$lib/assets/icons/language/flagNL.svg";
  import type { AvailableLanguageTag } from "$lib/paraglide/runtime";
  import { languageTag } from "$lib/paraglide/runtime";
  import { i18n } from "$lib/i18n";
  import { page } from "$app/state";
  import { goto } from "$app/navigation";

  function switchToLanguage(newLanguage: AvailableLanguageTag) {
    const canonicalPath = i18n.route(page.url.pathname);
    const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
    goto(localisedPath);
  }
</script>

<div>
  {#if languageTag() == "en"}
    <button onclick={() => switchToLanguage("nl")}>
      <img src={Dutch} alt="" />
    </button>
  {:else}
    <button onclick={() => switchToLanguage("en")}>
      <img src={English} alt="" />
    </button>
  {/if}
</div>
