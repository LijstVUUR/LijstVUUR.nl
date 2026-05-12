 <script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";

  let { children } = $props();
</script>

<Header />
  <div class="overflow-hidden flex-1">
    {@render children()}
  </div>
<Footer />