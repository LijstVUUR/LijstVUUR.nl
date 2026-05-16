<script lang="ts">
  import English from "$lib/assets/icons/language/flagUK.svg";
  import Dutch from "$lib/assets/icons/language/flagNL.svg";

  import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { getLocale, deLocalizeUrl, localizeHref } from '$lib/paraglide/runtime';

	const a = page.url.pathname as string
</script>

<div>
  {#if getLocale() == "en"}
	<a href={localizeHref(deLocalizeUrl(page.url).pathname as `/${string}`, { locale: "nl" })} data-sveltekit-reload>
		<img src={Dutch} alt="" />
	</a>
  {:else}
	<a href={localizeHref(deLocalizeUrl(page.url).pathname as `/${string}`, { locale: "en" })} data-sveltekit-reload>
      <img src={English} alt="" />
	</a>
  {/if}
</div>
