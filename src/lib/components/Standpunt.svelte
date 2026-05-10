<script lang="ts">
  let { title = "", img_src = "" } = $props();
</script>

<div id="wrapper" class="relative rounded-md overflow-clip">
  <img src={img_src} alt="" class="w-128" />

  <div id="content" class="absolute bottom-4 left-4 flex flex-col gap-2">
    <h1 class="text-text-light leading-10">{@html title}</h1>
    <p class="text-text-light font-bold">Read more</p>
  </div>
</div>
