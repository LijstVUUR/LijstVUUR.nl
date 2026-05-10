<script lang="ts">
    let { url } = $props();
</script>



<a target="_blank" href={url}>
    <slot />
</a>