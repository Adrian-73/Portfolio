<script>
  import { Ai,Web,Software } from '$lib/link.json';

</script>
<div class="sticky top-1/4 w-full flex-center flex-col">
<h1 class="text-5xl font-bold p-6">My Tech Stack</h1>
<div class="hero glass  max-w-5xl  bg-opacity-10 h-[500px] w-full">
    <div class="hero-content w-full h-full text-center">
      
      <div role="tablist" class="tabs h-full   w-full tabs-bordered " style="align-items:start " >
        <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Web" />
        <div role="tabpanel" class="tab-content py-5 h-full">
          <div class="w-full h-full grid-list">
            {#each Web as i}
            <img src={i+".png"} alt={i} class="max-w-[76px] max-h-[76px] object-fill" />
            {/each}
          </div>

        </div>
      
        <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Ai" checked />
        <div role="tabpanel" class="tab-content py-5  h-full">
          <div class="w-full h-full grid-list">
            {#each Ai as i}
            <img src={i+".png"} alt={i} class="max-w-[76px] max-h-[76px] object-fill" />
            {/each}
          </div>
        </div>
      
        <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Software" />
        <div role="tabpanel" class="tab-content py-5  h-full"  >
          <div class="w-full h-full grid-list">
          {#each Software as i}
            <img src={i+".png"} alt={i} class="max-w-[76px] max-h-[76px] object-fill" />
            {/each}
          </div>
        </div>
      </div>
      <div class="h-full"></div>
    </div>
  </div>
</div>

<style>
  .grid-list{
    display: grid;
    grid-template-columns: repeat(4,minmax(0,1fr));
    grid-gap: 1rem;
    align-items: center;
    justify-items: center;
  }
</style>