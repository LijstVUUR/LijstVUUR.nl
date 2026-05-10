<script lang="ts">
  import * as m from "$lib/paraglide/messages.js";

  import Block from "$lib/components/Block.svelte";
  import Standpunt from "$lib/components/Standpunt.svelte";
  import Button from "$lib/components/Button.svelte";
</script>

<Block>
  <div id="textual_content" class="flex flex-col gap-4">
    <h1>Onze standpunten</h1>
    <div class="flex flex-col gap-2">
      <p class="font-bold">We vertegenwoordigen het studentenperspectief binnen de universiteit, en zorgen dat de student wordt gehoord: niet beleid over, maar met studenten.</p>
      <p>Lijst VUUR is een progressieve studentenpartij die zich inzet voor hoge kwaliteit van het onderwijs: actueel, inclusief en vernieuwend. We zetten ons in voor een universiteit die toegankelijk is voor iedereen – ongeacht achtergrond, identiteit of omstandigheden. We willen een democratische academische gemeenschap die verantwoordelijkheid neemt voor mens, maatschappij en klimaat. Een omgeving met verschillende perspectieven, waar ruimte is voor verwondering, debat en activisme. Dat is wat waar we voor staan.</p>
    </div>
  </div>

  <Button colour="primary" size="small" content="Small" />
  <Button colour="secondary" size="medium" content="Medium" />
  <Button colour="white" size="large" content="Large" />

  <Standpunt title={m.vision_digital_autonomy()} img_src="/images_unopt/digital_autonomy.png"></Standpunt>
  <Standpunt title={m.vision_abolish_4_0()} img_src="/images_unopt/4_rule.png"></Standpunt>
  <Standpunt title={m.vision_inclusive_policy()} img_src="/images_unopt/inclusive_policy.png"></Standpunt>
  <Standpunt title={m.vision_end_bsa()} img_src="/images_unopt/end_bsa.png"></Standpunt>
  <Standpunt title={m.vision_protect_protesting()} img_src="/images_unopt/protect_protesting.png"></Standpunt>
</Block>
