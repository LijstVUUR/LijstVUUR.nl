<script lang="ts">
  import * as m from "$lib/paraglide/messages.js";
  import Arrow from "$lib/assets/icons/Arrow.svelte";
  import Logo from "$lib/assets/logo/logo_color_no_text.svg";

  import Block from "$lib/components/Block.svelte";
  import Standpunt from "$lib/components/Standpunt.svelte";
  import Button from "$lib/components/Button.svelte";

  import * as People from "$lib/assets/OurPeople.json";
  import ButtonLink from "$lib/components/ButtonLink.svelte";
  import Person from "$lib/components/Person.svelte";
  import type { Candidate } from "$lib/assets/People.js";

  const u_council = People.u_council as any as Candidate[];
  const beta = People.beta_faculty as any as Candidate[];
  const gw = People.gw_faculty as any as Candidate[];
  const rebo = People.rebo_faculty as any as Candidate[];
  const fsw = People.fsw_faculty as any as Candidate[];

  let gallery: HTMLElement;
  let galleryPeople: HTMLElement;

  function scroll(direction: "left" | "right", parentGallery: HTMLElement) {
    const cardWidth = parentGallery.firstElementChild?.clientWidth ?? 0;
    const cardPadding = 32;
    const totalWidth = cardWidth + cardPadding;
    parentGallery.scrollBy({ left: direction === "left" ? -totalWidth : totalWidth, behavior: "smooth" });
  }

  let email = $state("");
  let message = $state("");

  function submit() {
    const board_email = "bestuur@verenigingvuur.nl";
    const title = "Vraag via website";
    const body = `I have a question about VUUR:\n` + message;
    const mailto = `mailto:${board_email}?subject=${title}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }
</script>

<!-- STANDPUNTEN -->
<Block>
  <div class="flex flex-col gap-16 pt-16 pb-8 lg:flex-row overflow-visible">
    <div id="textual_content" class="flex flex-col gap-4 flex-1">
      <h1>{m.vision_title()}</h1>
      <div class="flex flex-col gap-2">
        <p class="font-bold max-w-[60ch]">{m.vision_intro_bold()}</p>
        <p class="max-w-[60ch]">{@html m.vision_about_vuur()}</p>
      </div>

      <ButtonLink href="/election-programme" size="medium">
        <p class="font-medium">{m.vision_cta_button()}</p>
      </ButtonLink>
    </div>

    <div class="flex flex-col gap-4 flex-1 min-w-0">
      <div bind:this={gallery} class="flex gap-8 overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <Standpunt title={m.vision_digital_autonomy()} img_src="/images_unopt/digital_autonomy.png" />
        <Standpunt title={m.vision_abolish_4_0()} img_src="/images_unopt/4_rule.png" />
        <Standpunt title={m.vision_inclusive_policy()} img_src="/images_unopt/inclusive_policy.png" />
        <Standpunt title={m.vision_end_bsa()} img_src="/images_unopt/end_bsa.png" />
        <Standpunt title={m.vision_protect_protesting()} img_src="/images_unopt/protect_protesting.png" />
      </div>
      <div class="flex w-full justify-between">
        <Button size="medium" onclick={() => scroll("left", gallery)}>
          <Arrow class="-rotate-90 w-6 h-6" />
        </Button>
        <Button size="medium" onclick={() => scroll("right", gallery)}>
          <Arrow class="rotate-90 w-6 h-6" />
        </Button>
      </div>
    </div>
  </div>
</Block>

<!-- PEOPLE -->
<Block>
  <div class="group rounded-md overflow-hidden flex flex-col items-center py-8 md:py-16 px-6 lg:px-12 md:px-8 gap-8 bg-red-1 lg:bg-secondary hover:bg-red-1 transition-all duration-600 ease-in-out">
    <div class="flex flex-col lg:gap-6 items-center">
      <h2 class="text-text-light lg:text-text-dark group-hover:text-text-light">Our people</h2>
      <Button>DROPDOWN</Button>
    </div>
      <div bind:this={galleryPeople} class="w-full lg:w-fit flex gap-8 overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {#each u_council as member}
          <Person colour="light" variant="bordered" orientation="portrait" person={member} />
        {/each}
      </div>
      <div class="flex w-full lg:w-fit items-center justify-between">
        <Button class="lg:hidden" colour="white" size="small" onclick={() => scroll("left", galleryPeople)}>
          <Arrow class="-rotate-90 h-5" />
        </Button>
        <ButtonLink size="small" colour="primary" class="h-full group-hover:bg-secondary group-hover:text-text-dark" href="/our-people">All our people</ButtonLink>
        <Button class="lg:hidden" colour="white" size="small" onclick={() => scroll("right", galleryPeople)}>
          <Arrow class="rotate-90 h-5" />
        </Button>
        </div>
      </div>
</Block>

<!-- CONTACT FORM -->
<Block>
  <div class="relative flex flex-col gap-4 pt-16 pb-8 lg:my-16 lg:bg-red-1 lg:flex-row lg:px-8 lg:py-8 lg:text-text-light lg:rounded-md">
    <div class="flex flex-col gap-4 flex-1">
      <h2>{m.contact_form_title()}</h2>
      <p class="max-w-[50ch]">{m.contact_form_description()}</p>
    </div>

    <div class="flex flex-col gap-4 w-full lg:flex-1">
      <div class="input_field">
        <label>{m.contact_form_email()}</label>
        <input type="text" name="name" placeholder="john@doe.com" bind:value={email} required />
      </div>
      <div class="input_field">
        <label>{m.contact_form_description()}</label>
        <textarea name="company" placeholder={m.contact_form_input_placeholder()} class="h-24 lg:h-52" bind:value={message} required></textarea>
      </div>
      <div class="self-end">
        <div class="hidden lg:block">
          <Button size="medium" colour="secondary" onclick={submit}>
            <p class="font-medium">{m.contact_form_submit()}</p>
          </Button>
        </div>

        <div class="lg:hidden">
          <Button size="medium" onclick={submit}>
            <p class="font-medium">{m.contact_form_submit()}</p>
          </Button>
        </div>
      </div>
    </div>

    <div class="absolute -bottom-4 left-4 opacity-10 hidden lg:block">
      <img src={Logo} alt="" />
    </div>
  </div>
</Block>

<style lang="postcss">
  .input_field {
    @apply flex flex-col gap-1 flex-1;

    label {
      @apply text-[1rem] leading-[22px] font-display font-bold;
    }

    input,
    textarea {
      @apply px-4 pt-3 pb-[10px] rounded w-full placeholder-support-grey font-display border border-[#666666];
    }
  }
</style>
