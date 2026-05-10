<script lang="ts">
  import type { Snippet } from "svelte";
  let { content }: { content: Snippet } = $props();
</script>

<div class="px-6 md:px-16 xl:px-24">
  {@render content()}
</div>
