<!-- import components -->
<script>
  import Blog from "../lib/components/blog.svelte";
  import Lander from "../lib/components/lander.svelte";
  import Contact from "../lib/components/contact.svelte";
  import Skills from "../lib/components/skills.svelte";
  

</script> 

<main
  class="grid-cols-1 grid place-items-center justify-items-center item"
>
  <section class="relative" id="top"
   ><Lander/>
   <div
        class="absolute top-0 -right-16 w-[30rem] h-[30rem] bg-fuchsia-500 rounded-full blob animate-blob"
        ></div>
        <div
        class="absolute -bottom-[64px] -left-16 w-[30rem] h-[30rem] bg-fuchsia-300 rounded-full blob animate-blob animation-delay-2000"
        ></div>
        <div
        class="absolute -bottom-8 left-1/2 w-[30rem] h-[30rem] bg-blue-300 rounded-full blob animate-blob animation-delay-2000"
        ></div>
    
</section >
  <Blog/>
  <section class="flex-center">
    <Skills></Skills>
  </section>
<section>
    <Contact></Contact>
</section>
    
        
    <div class="fixed top-0 -z-[5]">
    <div class="relative  h-screen" >
        
    </div>
</div>
    
</main>
<style>
  section {
    width: 100%;
    min-height: 100vh;
    height: 100%;
    /* clip x axis overflow */
    overflow-x: clip;

  }

</style>