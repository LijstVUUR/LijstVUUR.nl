<script lang="ts">
  import DropdownChip from "$lib/assets/icons/DropdownChip.svelte";
  import { slide } from "svelte/transition";

  type Elem = {
    id: string;
    title: string;
    content: string;
    img_src: string;
    img_alt: string;
  };
  let { elements = [] }: { elements: Elem[] } = $props();

  // svelte-ignore state_referenced_locally
  // reasoning: the elements wont ever change
  let open = $state<boolean[]>(elements.map(() => false));
  open[0] = true;
  let current = $derived(elements[0]);

  function toggle(i: number) {
    if (open[i]) {
      open[i] = false;
      return;
    }
    elements.map((_, j) => {
      open[j] = j == i;
      if (j == i) current = elements[j];
    });
  }
</script>

<div class="flex gap-12">
  <div class="divide-y divide-[#CCCCCC] flex-1">
    {#each elements as elem, i}
      <div id={elem.id}>
        <button
          onclick={() => toggle(i)}
          class="flex w-full justify-between px-4 py-4 rounded-t items-center transition-colors
               {open[i] ? 'bg-primary' : 'bg-transparent'}"
          aria-expanded={open[i]}
          aria-controls="accordion-body-{i}"
        >
          <h3
            class="text-left {open[i] ? 'text-text-light' : 'text-text-dark'}"
          >
            {elem.title}
          </h3>
          <span
            class="m-2 {open[i]
              ? 'text-white'
              : 'text-text-dark'} transition-transform duration-200 {open[i]
              ? 'rotate-180'
              : 'rotate-0'}"
          >
            <DropdownChip />
          </span>
        </button>

        {#if open[i]}
          <div
            transition:slide={{ duration: 250 }}
            id="accordion-body-{i}"
            class="flex flex-col px-4 py-4 gap-6"
          >
            <p class="max-w-[75ch] leading-7">{@html elem.content}</p>
            <img
              src={elem.img_src}
              alt={elem.img_alt}
              class="w-full h-[350px] object-cover object-center
         md:w-auto md:h-auto md:max-h-[475px] md:object-contain
         lg:hidden
         rounded"
            />
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <div class="hidden lg:block flex-1 w-full max-w-[375px]">
    <img
      src={current.img_src}
      alt={current.img_alt}
      class="w-full h-full object-cover object-center rounded"
    />
  </div>
</div>
