<script lang="ts">
    import logo from "$lib/assets/logo/logo_color_dark.svg";
  import Hamburger from "$lib/assets/icons/Hamburger.svelte";
  import MenuClose from "$lib/assets/icons/MenuClose.svelte";

</script>


<header class="  box-border w-full h-16 md:h-20 lg:h-24 px-6 md:px-16 lg:px-24 py-2 bg-bg-light text-text-dark flex flex-row justify-between items-center">
    <img src={logo} alt="VUUR logo full color" class="h-full w-auto"/>
    <nav class="flex flex-row gap-12">
      <input id="menu-active" type="checkbox" class="peer appearance-none" />
        <label for="menu-active" class="h-11 aspect-square lg:hidden block peer-checked:hidden">
            <Hamburger />
        </label>
       
        <label for="menu-active" class="h-11 aspect-square lg:hidden hidden peer-checked:block">
            <MenuClose />
        </label>
        <div class="hidden 
        peer-checked:block
        peer-checked:box-border
        peer-checked:w-full
        peer-checked:h-full
        peer-checked:absolute
        peer-checked:inset-x-0
        peer-checked:inset-y-16
        peer-checked:md:inset-y-20
        peer-checked:py-16
        peer-checked:bg-red-1
        peer-checked:text-text-light
        peer-checked:z-10
        peer-checked: transition-transform
        peer-checked: duration-300
        peer-checked: ease-out
        lg:block ">
        <ul class="font-extrabold uppercase flex 
        flex-col
        lg:flex-row 
        gap-12 items-center">
            <li><a href="/">Home</a></li>
            <li><a href="/election-programme">Election programme</a></li>
            <li><a href="/our-people">Our people</a></li>
        </ul>
        </div>
    </nav>
</header>