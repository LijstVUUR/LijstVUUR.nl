 <script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import HeaderLarge from "$lib/components/HeaderLarge.svelte";

  let { children } = $props();
</script>

<HeaderLarge />
  <div class="overflow-hidden flex-1">
    {@render children()}
  </div>
<Footer />