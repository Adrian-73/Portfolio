<script>
  import Card from "../../lib/components/card.svelte";

</script>
<main class='flex justify-center items-center'>
    <div class= "flex justify-evenly flex-wrap gap-5 px-5 w-full" id="holder">
        {#each [1,2,3,4,5,6,78,9,1,1,2,3,558,] as item}
            <div class='w-max'><Card></Card></div>
        {/each}
    </div>
    
</main>
<style>
</style>