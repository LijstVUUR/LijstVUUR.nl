<script lang="ts">
  let { title = "", img_src = "" }: { title: string; img_src: string } = $props();
</script>

<div class="relative rounded-md shrink-0 overflow-hidden w-[256px] h-[360px] md:w-[320px] md:h-[500px]">
  <img src={img_src} alt="" class="absolute inset-0 w-full h-full object-cover" />

  <div class="absolute bottom-4 left-4 flex flex-col gap-2">
    <h1 class="text-text-light leading-10">{@html title}</h1>
    <p class="text-text-light font-bold">Read more</p>
  </div>
</div>
