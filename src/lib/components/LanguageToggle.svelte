<script lang="ts">
  import English from "$lib/assets/icons/language/flagUK.svg";
  import Dutch from "$lib/assets/icons/language/flagNL.svg";
  import { getLocale, setLocale, locales } from "$lib/paraglide/runtime";
  import { page } from "$app/state";
  import { goto } from "$app/navigation";
</script>

<div>
  {#if getLocale() == "en"}
    <button onclick={() => setLocale("nl")}>
      <img src={Dutch} alt="" />
    </button>
  {:else}
    <button onclick={() => setLocale("en")}>
      <img src={English} alt="" />
    </button>
  {/if}
</div>
