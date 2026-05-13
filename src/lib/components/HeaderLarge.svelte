<script lang="ts">
  import logo from "$lib/assets/logo/VUUR.svg";
  import Navigation from "./Navigation.svelte";
  
  import * as m from "$lib/paraglide/messages.js";

</script>

<header class="relative w-full h-60 bg-[radial-gradient(70%_130%_at_30%_50%,#F0B67F_0%,transparent_60%),linear-gradient(135deg,#C00A35_20%,#981829_50.52%)] md:h-80 md:bg-[radial-gradient(70%_130%_at_23%_50%,#F0B67F_0%,transparent_60%),linear-gradient(135deg,#C00A35_20%,#981829_50.52%)] text-text-light">
    <img src={logo} alt="VUUR logo no text white coloured flame" class="absolute w-44 sm:w-58 md:w-64 xl:w-72 left-4 sm:left-16 lg:left-24 bottom-0">
    <div class="z-10 w-full h-full px-6 md:px-16 xl:px-24 py-4 flex flex-col items-end justify-between">
            <Navigation />
            <div class="text-right flex flex-col gap-1 md:gap-4 items-end justify-center h-full max-w-40 sm:max-w-none">
                <h1 class="text-4xl sm:text-5xl md:text-6xl">{m.welcome_header()}</h1>
                <p class="text-l sm:text-xl md:text-2xl">{m.welcome_body()}</p>
            </div>
        </div>
</header>