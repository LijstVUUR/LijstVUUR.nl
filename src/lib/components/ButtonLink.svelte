<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { localizeHref } from "../paraglide/runtime";

  interface Props extends HTMLAnchorAttributes {
    children?: Snippet;
    icon_left?: string;
    icon_right?: string;
    size?: "small" | "medium" | "large";
    colour?: "primary" | "secondary" | "white" | "custom";
    href: string;
    localize?: boolean;
    animate?: boolean;
  }

  let {
    children,
    icon_left = "",
    icon_right = "",
    size = "small",
    colour = "primary",
    href = "",
    localize = true,
    class: className,
    animate = true,
    ...props
  }: Props = $props();

  const url = localize ? localizeHref(href) : href;
</script>

<a
  href={url}
  class={`relative group/button overflow-hidden flex rounded w-fit ${colour} ${size} ${className}`}
  {...props}
>
  {#if icon_left}
    <img src={icon_left} alt="" class={`w-6 h-6`} />
  {/if}
  <!-- <p class="font-semibold">{content}</p> -->
  {@render children?.()}
  {#if icon_right}
    <img src={icon_right} alt="" class={`w-6 h-6`} />
  {/if}

  {#if animate}
    <div
      class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-12deg)_translateX(100%)]"
    >
      <div class="relative h-full w-8 bg-white/20"></div>
    </div>
  {/if}
</a>

<style lang="postcss">
  .small {
    @apply px-3 py-2 text-sm gap-1;
  }
  .medium {
    @apply px-4 py-3 text-base gap-[6px];
  }
  .large {
    @apply px-5 py-4 text-lg gap-2;
  }

  .left {
    @apply -rotate-90;
  }
  .right {
    @apply rotate-90;
  }
  .primary {
    @apply bg-primary text-text-light;
  }
  .secondary {
    @apply bg-secondary text-text-dark;
  }
  .white {
    @apply bg-support-white text-text-dark;
  }

  .custom {
  }
</style>
