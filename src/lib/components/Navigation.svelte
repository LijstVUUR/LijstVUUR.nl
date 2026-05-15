<script lang="ts">
  import Hamburger from "$lib/assets/icons/Hamburger.svelte";
  import MenuClose from "$lib/assets/icons/MenuClose.svelte";
  import LanguageToggle from "./LanguageToggle.svelte";
  import Button from "./Button.svelte";

  import * as m from "$lib/paraglide/messages.js";
  import ButtonLink from "./ButtonLink.svelte";
  
  let isOpen = false;
  const c = () => (isOpen = false);
</script>


<div class="w-full flex flex-row items-center justify-between">
    <a class="h-full flex flex-row items-center gap-4" href="/">
        <p class="leading-[0.8] text-[2.5rem] font-sans capitalize">Lijst Vuur</p>
    </a>
    <nav class="flex flex-row">
    <input
      id="menu-active"
      type="checkbox"
      class="peer appearance-none"
      bind:checked={isOpen}
    />
    <label
      for="menu-active"
      class="h-11 aspect-square lg:hidden block peer-checked:hidden"
    >
      <Hamburger />
    </label>

    <label
      for="menu-active"
      class="h-11 aspect-square lg:hidden hidden peer-checked:block"
    >
      <MenuClose />
    </label>
    <div
      class="hidden peer-checked:block peer-checked:box-border peer-checked:w-full peer-checked:h-screen peer-checked:z-10 peer-checked:absolute peer-checked:inset-x-0 peer-checked:inset-y-16 peer-checked:md:inset-y-20 peer-checked:py-16 peer-checked:bg-red-1 peer-checked:text-text-light peer-checked:z-10 peer-checked: transition-transform peer-checked: duration-300 peer-checked: ease-out lg:block h-fit"
    >
      <ul
        class="font-extrabold uppercase flex flex-col lg:flex-row gap-12 items-center"
      >
        <li><a href="/" onclick={c}>{m.header_home()}</a></li>
        <li>
          <a href="/election-programme" onclick={c}
            >{m.header_election_programme()}</a
          >
        </li>
        <li><a href="/our-people" onclick={c}>{m.header_candidates()}</a></li>
        <li>
          <div class="hidden lg:block">
            <ButtonLink
              target="_blank"
              size="medium"
              colour="secondary"
              href="https://www.uu.nl/vote"
              class=" text-sm">{m.header_cta()}</ButtonLink
            >
          </div>
          <div class="lg:hidden">
            <Button size="medium" colour="secondary"
              ><a href="https://www.uu.nl/vote" class="text-sm"
                >{m.header_cta()}</a
              ></Button
            >
          </div>
        </li>
      </ul>
    </div>
  </nav>
  </div>