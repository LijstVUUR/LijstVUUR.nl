<script lang="ts">
  import LanguageToggle from "$src/lib/components/LanguageToggle.svelte";
  import "../app.css";

  let { children } = $props();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LijstVUUR",
    url: "https://lijstvuur.nl",
    logo: "https://lijstvuur.nl/favicon/apple-touch-icon.png",
    sameAs: ["https://www.instagram.com/vuurlijst", "https://www.linkedin.com/company/vuur"],
  };
</script>

<!-- https://www.strato.nl/hosting/json-ld-volgens-schema-org-tutorial -->
<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`}
</svelte:head>

{@render children()}

<div class="fixed z-10 bottom-6 right-6 h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
  <div class="flex items-center justify-center leading-none">
    <LanguageToggle />
  </div>
</div>
