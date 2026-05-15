<script lang="ts">
  import Person from "$lib/components/Person.svelte";
  // import * as People from "$lib/assets/OurPeople.json";
  import Block from "$lib/components/Block.svelte";
  import ButtonLink from "$lib/components/ButtonLink.svelte";
  import { lists } from "$lib/assets/People";

  const u_council = lists.u_council;
  // const beta = People.beta_faculty as any as Person[];
  // const gw = People.gw_faculty as any as Person[];
  // const rebo = People.rebo_faculty as any as Person[];
  // const fsw = People.fsw_faculty as any as Person[];
  const beta = [] as Person[];
  const gw = [] as Person[];
  const rebo = [] as Person[];
  const fsw = [] as Person[];

  const full_list = [
    { title: "Universiteitsraad", description: "Description yet to come", people: u_council, scroll: "u_council" },
    // { title: "Faculteit BETA", description: "Description yet to come", people: beta, scroll: "beta" },
    // { title: "Faculteit GW", description: "Description yet to come", people: gw, scroll: "gw" },
    // { title: "Faculteit REBO", description: "Description yet to come", people: rebo, scroll: "rebo" },
    // { title: "Faculteit FSW", description: "Description yet to come", people: fsw, scroll: "fsw" },
  ];

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
</script>

<Block>
  <div class="flex flex-wrap gap-2 pt-16">
    <ButtonLink onclick={() => scrollTo("u_council")} colour="secondary"><p>Universiteitsraad</p></ButtonLink>
    <ButtonLink onclick={() => scrollTo("beta")} colour="secondary"><p>Faculteit BETA</p></ButtonLink>
    <ButtonLink onclick={() => scrollTo("gw")} colour="secondary"><p>Faculteit GW</p></ButtonLink>
    <ButtonLink onclick={() => scrollTo("rebo")} colour="secondary"><p>Faculteit REBO</p></ButtonLink>
    <ButtonLink onclick={() => scrollTo("fsw")} colour="secondary"><p>Faculteit FSW</p></ButtonLink>
  </div>

  {#each full_list as list}
    <div class="flex flex-col gap-8 pt-8 pb-16">
      <div class="flex flex-col gap-1">
        <h1 id={list.scroll}>{list.title}</h1>
        <p>{list.description}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {#each list.people.candidates as member}
          <Person colour="beige" variant="bordered" orientation="landscape" person={member} />
        {/each}
      </div>
    </div>
  {/each}
</Block>
