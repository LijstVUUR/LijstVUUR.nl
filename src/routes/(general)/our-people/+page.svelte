<script lang="ts">
  import Person from "$lib/components/Person.svelte";
  import Block from "$lib/components/Block.svelte";
  import Button from "$lib/components/Button.svelte";
  import { lists } from "$lib/assets/People";

  const u_council = lists.u_council;
  const beta = lists.science;
  const gw = lists.humanities;
  const rebo = lists.lego;
  const fsw = lists.social_science;

  const full_list = [
    { title: "Universiteitsraad", description: "Description yet to come", people: u_council, scroll: "u_council" },
    { title: "Faculteit BETA", description: "Description yet to come", people: beta, scroll: "beta" },
    { title: "Faculteit GW", description: "Description yet to come", people: gw, scroll: "gw" },
    { title: "Faculteit REBO", description: "Description yet to come", people: rebo, scroll: "rebo" },
    { title: "Faculteit FSW", description: "Description yet to come", people: fsw, scroll: "fsw" },
  ];

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
</script>

<Block>
  <div class="flex flex-wrap gap-2 pt-16">
    <Button onclick={() => scrollTo("u_council")} colour="secondary"><p>Universiteitsraad</p></Button>
    <Button onclick={() => scrollTo("beta")} colour="secondary"><p>Faculteit BETA</p></Button>
    <Button onclick={() => scrollTo("gw")} colour="secondary"><p>Faculteit GW</p></Button>
    <Button onclick={() => scrollTo("rebo")} colour="secondary"><p>Faculteit REBO</p></Button>
    <Button onclick={() => scrollTo("fsw")} colour="secondary"><p>Faculteit FSW</p></Button>
  </div>

  {#each full_list as list}
    <div class="flex flex-col gap-8 pt-8 pb-16">
      <div class="flex flex-col gap-1">
        <h1 id={list.scroll}>{list.title}</h1>
        <p>{list.description}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {#each list.people.candidates as member, index}
          <Person colour="beige" variant="bordered" orientation="landscape" person={member} position={index + 1} />
        {/each}
      </div>
    </div>
  {/each}
</Block>
