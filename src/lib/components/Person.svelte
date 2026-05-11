<script lang="ts">
  import Instagram from "$lib/assets/icons/social/Instagram.svelte";
  import LinkedIn from "$lib/assets/icons/social/LinkedIn.svelte";
  import UU from "$lib/assets/icons/social/UU.svelte";
  import { languageTag } from "$lib/paraglide/runtime";

  type Person = {
    name: string;
    degree: {
      nl: string;
      en: string;
    };
    img_src: string;
    linkedin: string;
    instagram: string;
    utrecht: string;
  };
  let { variant = "border", person }: { variant?: "border" | "borderless"; person: Person } = $props();

  let degree_localised = $derived(person.degree[languageTag()]);
</script>

<div id="wrapper" class="w-full rounded overflow-hidden h-[500px] flex flex-col bg-bg-beige">
  <img src={person.img_src} alt={`Picture of ${person.name}`} class="h-full object-cover object-top" />

  <div class="flex flex-col gap-2 flex-1 p-4">
    <div class="flex flex-col gap-1">
      <h3>{person.name}</h3>
      <p>{degree_localised}</p>
    </div>
    <div class="flex gap-2">
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
