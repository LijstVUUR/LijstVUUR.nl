<script lang="ts">
  import Person from "$lib/components/Person.svelte";
  import Block from "$lib/components/Block.svelte";
  import Button from "$lib/components/Button.svelte";
  import { lists } from "$lib/assets/People";
  import { m } from "$src/lib/paraglide/messages";

  const u_council = lists.u_council;
  const beta = lists.science;
  const gw = lists.humanities;
  const rebo = lists.lego;
  const fsw = lists.social_science;

  const full_list = [
    {
      title: m.title_ucouncil(),
      description: m.desc_ucouncil(),
      people: u_council,
      scroll: "u_council",
    },
    {
      title: m.title_beta(),
      description: m.desc_beta(),
      people: beta,
      scroll: "beta",
    },
    {
      title: m.title_gw(),
      description: m.desc_gw(),
      people: gw,
      scroll: "gw",
    },
    {
      title: m.title_rebo(),
      description: m.desc_rebo(),
      people: rebo,
      scroll: "rebo",
    },
    {
      title: m.title_fsw(),
      description: m.desc_fsw(),
      people: fsw,
      scroll: "fsw",
    },
  ];

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
</script>

<Block>
  <div class="flex flex-wrap gap-2 pt-16">
    <Button onclick={() => scrollTo("u_council")} colour="secondary"
      ><p>{m.title_ucouncil()}</p></Button
    >
    <Button onclick={() => scrollTo("beta")} colour="secondary"
      ><p>{m.title_beta()}</p></Button
    >
    <Button onclick={() => scrollTo("gw")} colour="secondary"
      ><p>{m.title_gw()}</p></Button
    >
    <Button onclick={() => scrollTo("rebo")} colour="secondary"
      ><p>{m.title_rebo()}</p></Button
    >
    <Button onclick={() => scrollTo("fsw")} colour="secondary"
      ><p>{m.title_fsw()}</p></Button
    >
  </div>

  {#each full_list as list}
    <div class="flex flex-col gap-8 pt-8 pb-16">
      <div class="flex flex-col gap-1">
        <h1 id={list.scroll}>{list.title}</h1>
        <p>{list.description}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {#each list.people.candidates as member, index}
          <Person
            colour="beige"
            variant="bordered"
            orientation="landscape"
            person={member}
            position={index + 1}
          />
        {/each}
      </div>
    </div>
  {/each}
</Block>
