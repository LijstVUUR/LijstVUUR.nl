<script lang="ts">
  import English from "$lib/assets/icons/language/flagUK.svg";
  import Dutch from "$lib/assets/icons/language/flagNL.svg";

  import { page } from "$app/state";
  import { getLocale, deLocalizeUrl, localizeHref, type Locale } from "$lib/paraglide/runtime";

  const a = page.url.pathname as string;

  function switchLocale(lang: Locale) {
    return localizeHref(deLocalizeUrl(page.url).pathname as `/${string}`, { locale: lang });
  }
</script>

<div>
  {#if getLocale() == "en"}
    <a href={switchLocale("nl")} data-sveltekit-reload>
      <img src={Dutch} alt="" />
    </a>
  {:else}
    <a href={switchLocale("en")} data-sveltekit-reload>
      <img src={English} alt="" />
    </a>
  {/if}
</div>
