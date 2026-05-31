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
  import { localizeHref } from "$src/lib/paraglide/runtime";

  import { lists } from "$lib/assets/People";

  import img4Rule from "$lib/assets/media/4_rule.png";
  import imgInclusivePolicy from "$lib/assets/media/inclusive_policy.png";
  import imgDigitalAutonomy from "$lib/assets/media/digital_autonomy.png";
  import imgEndBsa from "$lib/assets/media/end_bsa.png";
  import imgProtectProtesting from "$lib/assets/media/protect_protesting.png";

  const full_list = {
    u_council: lists.u_council.candidates,
    beta: lists.science.candidates,
    gw: lists.humanities.candidates,
    rebo: lists.lego.candidates,
    fsw: lists.social_science.candidates,
  };

  let gallery: HTMLElement;
  let galleryPeople: HTMLElement;
  let dropdown = $state<"u_council" | "beta" | "gw" | "fsw" | "rebo">(
    "u_council",
  );

  function sliceList(list: Candidate[]) {
    return list.slice(0, Math.min(list.length, 3));
  }

  function scroll(direction: "left" | "right", parentGallery: HTMLElement) {
    const cardWidth = parentGallery.firstElementChild?.clientWidth ?? 0;
    const cardPadding = 32;
    const totalWidth = cardWidth + cardPadding;
    parentGallery.scrollBy({
      left: direction === "left" ? -totalWidth : totalWidth,
      behavior: "smooth",
    });
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
      <div
        bind:this={gallery}
        class="flex gap-8 overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <Standpunt
          title={m.vision_abolish_4_0()}
          img_src={img4Rule}
          href="/election-programme"
        />
        <Standpunt
          title={m.vision_inclusive_policy()}
          img_src={imgInclusivePolicy}
          href="/election-programme"
        />
        <Standpunt
          title={m.vision_digital_autonomy()}
          img_src={imgDigitalAutonomy}
          href="/election-programme"
        />
        <Standpunt
          title={m.vision_end_bsa()}
          img_src={imgEndBsa}
          href="/election-programme"
        />
        <Standpunt
          title={m.vision_protect_protesting()}
          img_src={imgProtectProtesting}
          href="/election-programme"
        />
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
  <div
    class="people group relative rounded-md overflow-hidden flex flex-col items-center py-8 md:py-16 px-6 lg:px-12 md:px-8 gap-8 bg-primary lg:bg-secondary"
  >
    <div class="ripple"></div>

    <div class="flex flex-col lg:gap-6 items-center relative z-10">
      <h2 class="header text-text-light lg:text-text-dark">
        {m.home_ourpeople_header()}
      </h2>
      <div
        class="group/dropdown overflow-hidden relative inline-block rounded text-base gap-[6px] bg-secondary text-text-dark uppercase lg:bg-primary lg:text-text-light group-hover:bg-secondary group-hover:text-text-dark"
      >
        <select
          class="px-4 py-3 w-full h-full cursor-pointer appearance-auto bg-transparent transition duration-300 ease"
          bind:value={dropdown}
        >
          <option value="u_council">{m.title_ucouncil()}</option>
          <option value="beta">{m.title_beta()}</option>
          <option value="gw">{m.title_gw()}</option>
          <option value="rebo">{m.title_rebo()}</option>
          <option value="fsw">{m.title_fsw()}</option>
        </select>

        <div
          class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover/dropdown:duration-1000 group-hover/dropdown:[transform:skew(-12deg)_translateX(100%)]"
        >
          <div class="relative h-full w-8 bg-white/20"></div>
        </div>
      </div>
    </div>
    <div
      bind:this={galleryPeople}
      class="relative w-fit max-w-full items-center flex gap-8 overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative z-10"
    >
      {#each sliceList(full_list[dropdown]) as member, index}
        <Person
          colour="light"
          variant="bordered"
          orientation="portrait"
          position={index + 1}
          person={member}
        />
      {/each}
    </div>

    <div
      class="flex w-full lg:w-fit items-center justify-between relative z-10"
    >
      <Button
        class="lg:hidden anim"
        colour="white"
        size="small"
        onclick={() => scroll("left", galleryPeople)}
      >
        <Arrow class="-rotate-90 h-5" />
      </Button>
      <ButtonLink
        class="anim h-full max-w-[10rem] sm:max-w-none lg:bg-primary lg:text-text-light group-hover:bg-secondary group-hover:text-text-dark transition-all"
        size="small"
        colour="custom"
        href={localizeHref("/our-people")}
      >
        <p class="text-center font-medium">{m.home_ourpeople_button()}</p>
      </ButtonLink>
      <Button
        class="anim lg:hidden"
        colour="white"
        size="small"
        onclick={() => scroll("right", galleryPeople)}
      >
        <Arrow class="rotate-90 h-5" />
      </Button>
    </div>
  </div>
</Block>

<!-- CONTACT FORM -->
<Block>
  <div
    class="relative flex flex-col gap-4 pt-16 pb-8 lg:my-16 lg:bg-red-1 lg:flex-row lg:px-8 lg:py-8 lg:text-text-light lg:rounded-md"
  >
    <div class="flex flex-col gap-4 flex-1">
      <h2>{m.contact_form_title()}</h2>
      <p class="max-w-[50ch]">{m.contact_form_description()}</p>
    </div>

    <div class="flex flex-col gap-4 w-full lg:flex-1">
      <div class="input_field">
        <label>{m.contact_form_email()}</label>
        <input
          type="text"
          name="name"
          placeholder="john@doe.com"
          bind:value={email}
          required
        />
      </div>
      <div class="input_field">
        <label>{m.contact_form_description()}</label>
        <textarea
          name="company"
          placeholder={m.contact_form_input_placeholder()}
          class="h-24 lg:h-52"
          bind:value={message}
          required
        ></textarea>
      </div>
      <div class="self-end">
        <div class="hidden lg:block">
          <Button
            size="medium"
            colour="secondary"
            onclick={submit}
            animate={true}
          >
            <p class="font-medium">{m.contact_form_submit()}</p>
          </Button>
        </div>

        <div class="lg:hidden">
          <Button size="medium" onclick={submit} animate={true}>
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

  .ripple {
    @apply absolute top-1/2 left-1/2 w-0 h-0 bg-primary z-0;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition:
      width 0.8s ease,
      height 0.8s ease;
  }

  .button-link a {
    @apply bg-secondary text-text-dark h-full lg:bg-primary lg:text-text-light;
  }

  .people {
    h2 {
      transition: color 0.8s ease;
    }

    &:hover {
      .ripple {
        @apply w-[1600px] h-[1600px];
      }

      .header {
        @apply text-text-light;
      }
    }
  }
</style>
