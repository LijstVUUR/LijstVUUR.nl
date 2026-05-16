<script lang="ts">
  import Instagram from "$lib/assets/icons/social/Instagram.svelte";
  import LinkedIn from "$lib/assets/icons/social/LinkedIn.svelte";
  import UU from "$lib/assets/icons/social/UU.svelte";
  import type { Candidate } from "$lib/assets/People";

  let { colour = "light", orientation = "portrait", variant = "bordered", person }: { colour?: "beige" | "light"; orientation?: "landscape" | "portrait"; variant?: "bordered" | "borderless"; person: Candidate } = $props();
  let degree_localised = "en";
  const colourClasses: { beige: string; light: string } = {
    beige: "bg-bg-beige",
    light: "bg-bg-light",
  };
</script>

<div id="wrapper" class={`relative shrink-0 rounded overflow-hidden flex ${orientation} ${variant} ${colourClasses[colour]}`}>
  {#if orientation === "landscape"}
    <div class="ripple"></div>
  {/if}
  <div id="img" class=" relative z-10">
    <enhanced:img src={person.img_src} alt={`Picture of ${person.name}`} loading="lazy" class="h-full w-full object-cover object-top"></enhanced:img>
  </div>
  <div id="text" class="w-full flex flex-col shrink-0 relative z-10">
    <div class="flex flex-col gap-1">
      <h3>{person.name}</h3>
      <p>{degree_localised}</p>
    </div>
    <div class="w-full flex justify-between items-center">
      <div class="flex gap-2 items-center">
        {#if person.linkedin}
          <a href={person.linkedin}>
            <div class="w-6 h-6">
              <LinkedIn />
            </div>
          </a>
        {/if}
        {#if person.instagram}
          <a href={person.instagram}>
            <div class="w-6 h-6">
              <Instagram />
            </div>
          </a>
        {/if}
        {#if person.utrecht}
          <a href={person.utrecht}>
            <div class="w-6 h-6">
              <UU />
            </div>
          </a>
        {/if}
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .bordered.portrait #img {
    @apply pt-2 pb-0 px-2 flex-1 min-h-0;
  }
  .bordered.landscape #img {
    @apply py-2 pl-2 pr-0 w-1/3 shrink-0;
  }

  .borderless.portrait,
  .borderless.landscape {
    @apply py-0 px-0;
  }

  .portrait {
    @apply flex-col w-[256px] h-[400px];
  }

  .landscape {
    @apply flex-row h-[220px];
  }

  .portrait #text {
    @apply py-4 px-4 gap-2;
  }

  .landscape #text {
    @apply py-4 pl-4 pr-8 justify-between;
  }

  .ripple {
    @apply absolute top-1/2 left-1/2 w-0 h-0 bg-primary z-0;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition:
      width 0.5s ease,
      height 0.5s ease;
  }

  #wrapper.landscape {
    transition: color 0.5s ease;

    &:hover {
      @apply text-text-light;

      .ripple {
        @apply w-[800px] h-[800px];
      }
    }
  }
</style>
