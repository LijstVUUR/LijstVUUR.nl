<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import { page } from "$app/state";
  import Block from "$src/lib/components/Block.svelte";
  import Button from "$src/lib/components/Button.svelte";
  import ButtonLink from "$src/lib/components/ButtonLink.svelte";
  import { localizeHref } from "$src/lib/paraglide/runtime";

  let { children } = $props();
</script>

<div class="flex flex-col min-h-lvh">
  <Header />
  <div class="flex-1 overflow-hidden py-16">
    <Block>
      <h1>{page.status} {page.error?.message}</h1>
      <ButtonLink href={localizeHref("/")}><p>Return home</p></ButtonLink>
    </Block>
  </div>
  <Footer />
</div>
