<script lang="ts">
  import * as m from "$lib/paraglide/messages.js";
  import Arrow from "$lib/assets/icons/arrow.svg";

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
</script>

<Banner></Banner>

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
