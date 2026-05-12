<script lang="ts">
  import logo from "$lib/assets/logo/logo_color_white.svg";
  import LinkedIn from "$lib/assets/icons/social/LinkedIn.svelte";
  import Instagram from "$lib/assets/icons/social/Instagram.svelte";

  import * as m from "$lib/paraglide/messages.js";
</script>

<footer class="text-text-light bg-red-1 flex flex-wrap justify-between gap-y-4 w-full py-12 px-12 md:px-20 xl:px-24 xl:py-16">
  <img src={logo} alt="VUUR logo white with colored flame" class="h-full" />
  <div class="flex flex-wrap gap-x-12 gap-y-8">
    <div class="flex flex-col gap-2">
      <h2>{m.footer_contact()}</h2>
      <a href="mailto:bestuur@verenigingvuur.nl" class="underline">bestuur@verenigingvuur.nl</a>
      <div class="flex gap-4">
        <a class="w-11 h-11" target="_blank" href="https://www.linkedin.com/company/vuur"><LinkedIn /></a>
        <a class="w-11 h-11" target="_blank" href="https://www.instagram.com/vuurlijst"><Instagram /></a>
      </div>
    </div>
    <div class="flex flex-col">
      <h2>{m.footer_positions()}</h2>
      <ul class="flex flex-col gap-2">
        <li><a href="">{m.footer_digital_autonomy()}</a></li>
        <li><a href="">{m.footer_4_rule()}</a></li>
        <li><a href="">{m.footer_inclusivity()}</a></li>
        <li><a href="">{m.footer_end_bsa()}</a></li>
        <li><a href="">{m.footer_protect_protesting()}</a></li>
      </ul>
    </div>
    <div class="flex flex-col gap-2">
      <h2>{m.footer_people()}</h2>
      <ul class="flex flex-col gap-2">
        <li><a href="u_council">{m.footer_ucouncil()}</a></li>
        <li><a href="beta">{m.footer_beta()}</a></li>
        <li><a href="gw">{m.footer_gw()}</a></li>
        <li><a href="rebo">{m.footer_rebo()}</a></li>
        <li><a href="fsw">{m.footer_fsw()}</a></li>
      </ul>
    </div>
  </div>
</footer>
