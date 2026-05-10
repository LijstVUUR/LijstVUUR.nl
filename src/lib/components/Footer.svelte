<script lang="ts">
  import logo from "$lib/assets/logo/logo_color_white.svg";
  import LinkedIn from "$lib/assets/icons/social/LinkedIn.svelte";
  import Instagram from "$lib/assets/icons/social/Instagram.svelte";
</script>

<footer class="text-text-light bg-red-1 flex flex-wrap justify-between gap-y-4 w-full py-12 px-12 md:px-20 xl:px-24 xl:py-16">
  <img src={logo} alt="VUUR logo white with colored flame" class="h-full" />
  <div class="flex flex-wrap gap-x-12 gap-y-8">
    <div class="flex flex-col gap-2">
      <h2>Contact</h2>
      <a href="mailto:bestuur@verenigingvuur.nl" class="underline">bestuur@verenigingvuur.nl</a>
      <div class="flex flex-row gap-4 h-11">
        <a target="_blank" href="https://www.linkedin.com/company/vuur"><LinkedIn /></a>
        <a target="_blank" href="https://www.instagram.com/vuurlijst"><Instagram /></a>
      </div>
    </div>
    <div class="flex flex-col">
      <h2>Our positions</h2>
      <ul class="flex flex-col gap-2">
        <li><a href="">Digital autonomy</a></li>
        <li><a href="">Abolish the 4.0 rule</a></li>
        <li><a href="">Expand inclusive policy</a></li>
        <li><a href="">Put an end to BSA</a></li>
        <li><a href="">Protect protesting</a></li>
      </ul>
    </div>
    <div class="flex flex-col gap-2">
      <h2>Our people</h2>
      <ul class="flex flex-col gap-2">
        <li><a href="">University council</a></li>
        <li><a href="">Faculty BETA</a></li>
        <li><a href="">Faculty GW</a></li>
        <li><a href="">Faculty REBO</a></li>
        <li><a href="">Faculty FSW</a></li>
        <li><a href="">Board</a></li>
      </ul>
    </div>
  </div>
</footer>
