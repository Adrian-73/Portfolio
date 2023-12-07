<!-- import components -->
<script>

    import { social } from '$lib/link.json'
  import Blog from '../lib/components/blog.svelte';
  import Lander from '../lib/components/lander.svelte';
  import Skills from '../lib/components/skills.svelte';
    

</script>

<main class="grid-cols-1 grid place-items-center my-9 justify-items-center item">
<Lander></Lander>

    <div class="w-[544px] h-[108px] relative ">
        <div class="w-[544px] h-[45.20px] left-0 top-0 absolute">
            <div class="w-[109px] h-[0px] left-0 top-[23px] absolute border border-black"></div>
            <div class="w-[127px] h-[0px] left-[417px] top-[23px] absolute border border-black"></div>
            <div class="w-[264px] h-[45.20px] left-[132.50px] top-0 absolute">
                <div class="w-[264px] h-[31.85px] left-0 top-0 absolute text-center  text-2xl font-normal font-['Ubuntu']">Find me on socials</div>
            </div>
        </div>
        <div class="w-[365px] h-[51px] left-[90px] top-[57px] absolute justify-center items-start gap-[42.49px] inline-flex">
            {#each social as s}
            <div class="w-[58.76px] h-[51px] relative ">
                <img src={s.icon} alt={s.name} class="h-full">
            </div>
            {/each}
            
            
        </div>
    </div>
<Blog></Blog>
<Skills></Skills>
</main>