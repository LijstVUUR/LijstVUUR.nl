<script lang="ts">
import type { Snippet } from "svelte";
  import type { HTMLSelectAttributes } from "svelte/elements";
  
  interface Props extends HTMLSelectAttributes{
    children?: Snippet;
    options: { key: string, value: string}[];
    colour?: "primary" | "secondary" | "white";
    onclick?: () => any;
  }

  let {
    children,
    options,
    colour = "primary",
    onclick,
    class:className,
    ...props
  }: Props = $props();

</script>


<select class="px-4 py-3 text-base gap-[6px] ${colour} ${className}" {...props}>
    {#each options as option}
        <option id={option.key} value={option.value} />
    {/each}
</select>


<style lang="postcss">
    .primary:{@apply bg-primary text-text-light;}
    .secondary:{@apply bg-secondary text-text-dark;}
    .white:{@apply bg-support-white text-text-dark;}
</style>