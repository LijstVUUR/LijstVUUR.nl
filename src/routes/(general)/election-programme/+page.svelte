<script>
  import Accordion from "$lib/components/Accordion.svelte";
  import Block from "$lib/components/Block.svelte";
  import * as m from "$lib/paraglide/messages.js";
  import ButtonLink from "$src/lib/components/ButtonLink.svelte";

  import img4Rule from "$lib/assets/media/4_rule.png";
  import imgInclusivePolicy from "$lib/assets/media/inclusive_policy.png";
  import imgDigitalAutonomy from "$lib/assets/media/digital_autonomy.png";
  import imgEndBsa from "$lib/assets/media/end_bsa.png";
  import imgProtectProtesting from "$lib/assets/media/protect_protesting.png";
  import SEO from "$src/lib/components/SEO.svelte";

  const elements = [
    {
      id: "4_rule",
      title: m.kernwaarden_4_rule(),
      content: m.kernwaarden_4_rule_content(),
      img_src: img4Rule,
      img_alt: "Person writing with a pen on paper",
    },
    {
      id: "inclusivity",
      title: m.kernwaarden_inclusivity(),
      content: m.kernwaarden_inclusive_policy_content(),
      img_src: imgInclusivePolicy,
      img_alt: "Person writing with a pen on paper",
    },
    {
      id: "digital_autonomy",
      title: m.kernwaarden_digital_autonomy(),
      content: m.kernwaarden_digital_autonomy_content(),
      img_src: imgDigitalAutonomy,
      img_alt: "Person writing with a pen on paper",
    },
    {
      id: "end_bsa",
      title: m.kernwaarden_end_bsa(),
      content: m.kernwaarden_end_bsa_content(),
      img_src: imgEndBsa,
      img_alt: "Person writing with a pen on paper",
    },
    {
      id: "protesting",
      title: m.kernwaarden_protect_protesting(),
      content: m.kernwaarden_protect_protesting_content(),
      img_src: imgProtectProtesting,
      img_alt: "Person writing with a pen on paper",
    },
  ];
</script>

<SEO title="Election Programme" description="LijstVUUR's election programme: abolish the 4.0 rule, inclusive policy, digital autonomy, end BSA, and protect the right to protest at UU."></SEO>

<Block>
  <div class="flex flex-col gap-8 pt-16 pb-8">
    <div>
      <h1>{m.kernwaarden_header()}</h1>
      <p><em>{m.kernwaarden_body()}</em></p>
    </div>
    <div class="flex flex-col gap-16">
      <div>
        <Accordion {elements}></Accordion>
      </div>

      <div class="flex flex-col gap-10 justify-center items-center align-middle">
        <h2 class="text-center leading-9">{m.kernwaarden_read_program()}</h2>

        <!-- BEETJE KUT MAAR LATER PAS FIXEN  -->
        <embed src="https://lijstvuur.nl/Election%20Programme%202026-2027.pdf" type="application/pdf" class="aspect-[21/30] self-center w-full xl:w-[70%]" />

        <ButtonLink href="https://lijstvuur.nl/Election%20Programme%202026-2027.pdf" localize={false} target="_blank">
          <p>{m.kernwaarden_download()}</p>
        </ButtonLink>
      </div>

      <!-- TODO ACTUALLY FIX THIS, THIS WAS REQUESTED AND QUICKLY ADDED IN!! -->
      <div class="flex flex-col gap-2">
        <h2>Or read our vision</h2>
        <p class="max-w-[75ch]">Our vision helps us stay on course and guard the core values of our party. It is essential to formulate our positions sharply and define our vision clearly. Only in this way can we give direction to the future.</p>

        <ButtonLink href="/Vision_LijstVUUR.pdf" localize={false} target="_blank">
          <p>{m.kernwaarden_download()}</p>
        </ButtonLink>
      </div>
    </div>
  </div>
</Block>
