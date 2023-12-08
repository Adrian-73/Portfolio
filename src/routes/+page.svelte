<!-- import components -->
<script>

    import { social } from '$lib/link.json'
  import Blog from '../lib/components/blog.svelte';
  import Lander from '../lib/components/lander.svelte';
  import Skills from '../lib/components/skills.svelte';
    

</script>

<main class="grid-cols-1 grid place-items-center pb-9 justify-items-center item">
<Lander></Lander>

    <div class="max-w-[544px] h-[108px ] my-8">
        <div class="max-w-[544px] h-[45.20px] flex-center">
            <div class="w-full p-2 text-center text-white text-3xl font-normal">Find me on socials </div>

        </div>
        <!-- divider -->
        <div class="max-w-[544px] h-[0px] m-2 border border-white"></div>
        <div class="w-[365px] h-[51px] justify-center items-start gap-[42.49px] inline-flex">
            {#each social as s}
            <div class="w-[58.76px] h-[51px]  ">
                <img src={s.icon} alt={s.name} class="h-full">
            </div>
            {/each}
            
            
        </div>
    </div>
<Blog></Blog>
<Skills></Skills>
</main>