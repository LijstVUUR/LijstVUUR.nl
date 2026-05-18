<script>
  import Accordion from "$lib/components/Accordion.svelte";
  import Block from "$lib/components/Block.svelte";
  import Button from "$lib/components/Button.svelte";

  import * as m from "$lib/paraglide/messages.js";

  const elements = [
    {
      title: m.footer_4_rule(),
      content: m.kernwaarden_4_rule_content(),
      img_src: "/images_unopt/4_rule.png",
      img_alt: "Person writing with a pen on paper",
    },
    {
      title: m.footer_inclusivity(),
      content: m.kernwaarden_inclusive_policy_content(),
      img_src: "/images_unopt/inclusive_policy.png",
      img_alt: "Person writing with a pen on paper",
    },
    {
      title: m.footer_digital_autonomy(),
      content: m.kernwaarden_digital_autonomy_content(),
      img_src: "/images_unopt/digital_autonomy.png",
      img_alt: "Person writing with a pen on paper",
    },
    {
      title: m.footer_end_bsa(),
      content: m.kernwaarden_end_bsa_content(),
      img_src: "/images_unopt/end_bsa.png",
      img_alt: "Person writing with a pen on paper",
    },
    {
      title: m.footer_protect_protesting(),
      content: m.kernwaarden_protect_protesting_content(),
      img_src: "/images_unopt/protect_protesting.png",
      img_alt: "Person writing with a pen on paper",
    },
  ];
</script>

<Block>
  <div class="pt-16 pb-8">
    <h1>{m.kernwaarden_header()}</h1>

    <div class="flex flex-col gap-16">
      <div>
        <Accordion {elements}></Accordion>
      </div>

      <div class="flex flex-col gap-10 justify-center align-middle">
        <h2 class="text-center leading-9">{m.kernwaarden_read_program()}</h2>

        <!-- BEETJE KUT MAAR LATER PAS FIXEN  -->
        <embed src="/Election Programme 2026-2027.pdf" type="application/pdf" class="aspect-[21/30] self-center w-full xl:w-[70%]" />

        <Button>
          <p>{m.kernwaarden_download()}</p>
        </Button>
      </div>
    </div>
  </div>
</Block>
