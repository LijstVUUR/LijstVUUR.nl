<script lang="ts">
  import { getLocale } from "$lib/paraglide/runtime";

  const SITE_NAME = "LijstVUUR";
  const SITE_URL = "https://lijstvuur.nl";
  const PRIMARY_COLOR = "#C00A35";

  interface Props {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
    url?: string;
    type?: string;
    themeColor?: string;
  }

  let {
    title,
    description,
    image,
    imageAlt,
    url,
    type = "website",
    themeColor = PRIMARY_COLOR,
  }: Props = $props();

  const fullTitle = $derived(`${SITE_NAME} | ${title}`);
  const canonicalUrl = $derived(url ?? SITE_URL);
  const twitterCardType = $derived(image ? "summary_large_image" : "summary");
  const locale = $derived(getLocale() === "nl" ? "nl_NL" : "en_US");
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalUrl} />
  <meta name="theme-color" content={themeColor} />

  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:type" content={type} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:locale" content={locale} />
  {#if image}
    <meta property="og:image" content={image} />
    {#if imageAlt}
      <meta property="og:image:alt" content={imageAlt} />
    {/if}
  {/if}

  <meta name="twitter:card" content={twitterCardType} />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  {#if image}
    <meta name="twitter:image" content={image} />
    {#if imageAlt}
      <meta name="twitter:image:alt" content={imageAlt} />
    {/if}
  {/if}
</svelte:head>
