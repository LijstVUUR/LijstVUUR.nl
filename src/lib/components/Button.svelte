<script lang="ts">
  let {
    content,
    icon_left = "",
    icon_right = "",
    size = "small",
    colour = "primary",
  }: {
    content: string;
    icon_left: string;
    icon_right: string;
    size: "small" | "medium" | "large";
    colour: "primary" | "secondary" | "white";
  } = $props();

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

<button class={`flex rounded ${colourClasses[colour]} ${sizeClasses[size]}`}>
  {#if icon_left}
    <img src={icon_left} alt="" class="w-6 h-6" />
  {/if}
  <p class="font-semibold">{content}</p>
  {#if icon_right}
    <img src={icon_right} alt="" class="w-6 h-6" />
  {/if}
</button>
