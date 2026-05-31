<script lang="ts">
  let { header_title = "LIJST VUUR" } = $props();
</script>

<div id="wrapper" class="h-[210px] md:h-[300px] flex flex-col md:flex-row">
  <div class="hidden md:flex py-6 px-4 bg-primary h-[300px] w-18">
    <h1 class="text-text-light" style="writing-mode: sideways-lr;">{header_title}</h1>
  </div>

  <div class="flex-1 overflow-hidden">
    <enhanced:img src="$lib/assets/media/zebrapad.png" alt="" class="w-full h-full object-cover object-bottom" />
  </div>

  <div class="flex md:hidden px-6 py-4 bg-primary h-20">
    <h1 class="text-text-light">{header_title}</h1>
  </div>
</div>
