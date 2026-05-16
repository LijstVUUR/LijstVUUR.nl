<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  
  interface Props extends HTMLButtonAttributes{
    children?: Snippet;
    icon_left?: string;
    icon_right?: string;
    size?: "small" | "medium" | "large";
    colour?: "primary" | "secondary" | "white";
    onclick?: () => any;
  }

  let {
    children,
    icon_left = "",
    icon_right = "",
    size = "small",
    colour = "primary",
    onclick,
    class:className,
    ...props
  }: Props = $props();
</script>

<button {onclick} class={`flex rounded w-fit ${colour} ${size} ${className}`} {...props}>
  {#if icon_left}
    <img src={icon_left} alt="" class={`w-6 h-6`} />
  {/if}
  <!-- <p class="font-semibold">{content}</p> -->
  {@render children?.()}
  {#if icon_right}
    <img src={icon_right} alt="" class={`w-6 h-6`} />
  {/if}
</button>


<style lang="postcss">
    .small{
      @apply px-3 py-2 text-sm gap-1;
    }
    .medium{@apply  px-4 py-3 text-base gap-[6px];
  }
    .large{@apply px-5 py-4 text-lg gap-2; }

    .left:{@apply -rotate-90;}
    .right:{@apply rotate-90;}
    .primary:{@apply bg-primary text-text-light;}
    .secondary:{@apply bg-secondary text-text-dark;}
    .white:{@apply bg-support-white text-text-dark;}
</style>