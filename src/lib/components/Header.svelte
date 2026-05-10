<script lang="ts">
    import logo from "$lib/assets/logo/logo_color_dark.svg";
    import hamburger from "$lib/assets/icons/hamburgerMenu.svg";

</script>


<header class="w-full h-17.5 md:h-20 xl:h-25 px-6 md:px-16 xl:px-24 py-2 xl:px-24 bg-bg-light text-text-dark flex flex-row justify-between items-center">
    <img src={logo} alt="VUUR logo full color" class="h-full w-auto"/>
    <div class="flex flex-row gap-12 ">
        <a>Home</a>
        <a>Election programme</a>
        <a>Our people</a>
    </div>   
    <img src={hamburger} alt="hamburger menu icon" class="h-11 aspect-square xl:hidden"/>
</header>