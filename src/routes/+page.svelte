<script lang="ts">
  import * as m from "$lib/paraglide/messages.js";
  import Arrow from "$lib/assets/icons/arrow.svg";
  import Logo from "$lib/assets/logo/logo_color_no_text.svg";

  import Block from "$lib/components/Block.svelte";
  import Standpunt from "$lib/components/Standpunt.svelte";
  import Button from "$lib/components/Button.svelte";
  import Banner from "$lib/components/Banner.svelte";

  let gallery: HTMLElement;

  function scroll(direction: "left" | "right") {
    const cardWidth = gallery.firstElementChild?.clientWidth ?? 0;
    const cardPadding = 32;
    const totalWidth = cardWidth + cardPadding;
    gallery.scrollBy({ left: direction === "left" ? -totalWidth : totalWidth, behavior: "smooth" });
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

<Banner></Banner>

<!-- STANDPUNTEN -->
<Block>
  <div class="flex flex-col gap-16 pt-16 pb-8 lg:flex-row overflow-visible">
    <div id="textual_content" class="flex flex-col gap-4 flex-1">
      <h1>Onze standpunten</h1>
      <div class="flex flex-col gap-2">
        <p class="font-bold max-w-[60ch]">We vertegenwoordigen het studentenperspectief binnen de universiteit, en zorgen dat de student wordt gehoord: niet beleid over, maar met studenten.</p>
        <p class="max-w-[60ch]">Lijst VUUR is een progressieve studentenpartij die zich inzet voor hoge kwaliteit van het onderwijs: actueel, inclusief en vernieuwend. We zetten ons in voor een universiteit die toegankelijk is voor iedereen – ongeacht achtergrond, identiteit of omstandigheden. We willen een democratische academische gemeenschap die verantwoordelijkheid neemt voor mens, maatschappij en klimaat.<br /><br />Een omgeving met verschillende perspectieven, waar ruimte is voor verwondering, debat en activisme. Dat is wat waar we voor staan.</p>
      </div>

      <Button size="medium">
        <p class="font-medium">Lees ons programma</p>
      </Button>
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
        <Button size="medium" onclick={() => scroll("left")}>
          <img src={Arrow} alt="" class="-rotate-90" />
        </Button>
        <Button size="medium" onclick={() => scroll("right")}>
          <img src={Arrow} alt="" class="rotate-90" />
        </Button>
      </div>
    </div>
  </div>
</Block>

<!-- CONTACT FORM -->
<Block>
  <div class="relative flex flex-col gap-4 pt-16 pb-8 lg:my-16 lg:bg-red-1 lg:flex-row lg:px-8 lg:py-8 lg:text-text-light lg:rounded">
    <div class="flex flex-col gap-4 flex-1">
      <h2>Meer weten?</h2>
      <p class="max-w-[50ch]">Heb je vragen over de partij, het programma, of iets anders? Stel hier je vraag en dan komen we zo snel mogelijk bij je terug!</p>
    </div>

    <div class="flex flex-col gap-4 w-full lg:flex-1">
      <div class="input_field">
        <label>Email*</label>
        <input type="text" name="name" placeholder="john@doe.com" bind:value={email} required />
      </div>
      <div class="input_field">
        <label>Waar kunnen we je mee helpen?*</label>
        <textarea name="company" placeholder="Ik zou graag..." class="h-24 lg:h-52" bind:value={message} required></textarea>
      </div>
      <div class="self-end">
        <div class="hidden lg:block">
          <Button size="medium" colour="secondary" onclick={submit}>
            <p class="font-medium">Versturen</p>
          </Button>
        </div>

        <div class="lg:hidden">
          <Button size="medium" onclick={submit}>
            <p class="font-medium">Versturen</p>
          </Button>
        </div>
      </div>
    </div>

    <div class="absolute -bottom-4 left-4 opacity-10">
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
