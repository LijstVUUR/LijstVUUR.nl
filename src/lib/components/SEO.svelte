<script lang="ts">
  const SITE_NAME = "LijstVUUR";
  const SITE_URL = "https://lijstvuur.nl";

  interface Props {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: string;
  }

  let { title, description, image, url, type = "website" }: Props = $props();

  const fullTitle = $derived(`${SITE_NAME} | ${title}`);
  const canonicalUrl = $derived(url ?? SITE_URL);
  const twitterCardType = $derived(image ? "summary_large_image" : "summary");
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalUrl} />

  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:type" content={type} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonicalUrl} />
  {#if image}
    <meta property="og:image" content={image} />
  {/if}

  <meta name="twitter:card" content={twitterCardType} />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  {#if image}
    <meta name="twitter:image" content={image} />
  {/if}
</svelte:head>
