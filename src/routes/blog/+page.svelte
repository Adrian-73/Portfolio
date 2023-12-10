<script>
  import Card from "../../lib/components/card.svelte";
    export let data;
    let posts = data.posts;
    

</script>
<main class='flex justify-center items-center pt-[78px]'>
    <div class= "flex justify-evenly flex-wrap gap-5 px-5 w-full" id="holder">
        
        {#each posts as post}
            <div class='w-max'><Card post={post}></Card></div>
        {/each}
    </div>
    
</main>
<style>
</style>