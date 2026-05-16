<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { localizeHref } from "../paraglide/runtime";

  interface Props extends HTMLAnchorAttributes {
    children?: Snippet;
    icon_left?: string;
    icon_right?: string;
    size?: "small" | "medium" | "large";
    colour?: "primary" | "secondary" | "white";
    href: string;
  }

  let {
    children,
    icon_left = "",
    icon_right = "",
    size = "small",
    colour = "primary",
    href = "",
    class: className,
    ...props
  }: Props = $props();

  const rotateClasses = {
    none: "",
    left: "-rotate-90",
    right: "rotate-90",
  };

  const colourClasses: { primary: string; secondary: string; white: string } = {
    primary: "bg-primary text-text-light",
    secondary: "bg-secondary text-text-dark",
    white: "bg-support-white text-text-dark",
  };

  const sizeClasses: { small: string; medium: string; large: string } = {
    small: "px-3 py-2 text-sm gap-1",
    medium: "px-4 py-3 text-base gap-[6px]",
    large: "px-5 py-4 text-lg gap-2",
  };
</script>

<a
  href={localizeHref(href)}
  class={`${className} flex rounded w-fit ${colourClasses[colour]} ${sizeClasses[size]}`}
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
</a>
