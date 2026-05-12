<script lang="ts">
  import logo from "$lib/assets/logo/VUUR.svg";
  import Navigation from "./Navigation.svelte";
</script>

<header class="relative w-full h-60 md:h-80 bg-[radial-gradient(80%_140%_at_30%_50%,var(--secondary,#F0B67F)_0%,var(--red-2,#B9002D)_54.7%,var(--red-1,#981829)_99.52%)] text-text-light">
    <img src={logo} class="absolute w-44 sm:w-58 md:w-64 xl:w-72 left-4 sm:left-16 lg:left-24 bottom-0">
    <div class="z-10 w-full h-full px-6 md:px-16 xl:px-24 py-4 flex flex-col items-end justify-between">
            <Navigation />
            <div class="text-right flex flex-col gap-1 md:gap-4 items-end">
                <h1 class="text-4xl sm:text-5xl md:text-6xl">Welkom bij<br class="sm:hidden"/> lijst VUUR</h1>
                <p class="text-l sm:text-xl md:text-2xl">Jouw stem binnen<br class="sm:hidden"/> de universiteit.</p>
            </div>
        </div>
</header>