<script>
  import Card from "../../lib/components/card1.svelte";
  import { navigate } from 'svelte-routing';

    export let data;
    let posts = data.posts;
    let search = data.search;
    function strToUrl(str) {
      return str.replace(/\s+/g, '_');
    }
        

    const searchPosts = (event) => {
      event.preventDefault()
      navigate("?q="+strToUrl(search));
      location.reload(true);
      
    };

    const next = () => {
      if(search!=""){
        navigate("/blog?q="+strToUrl(search)+"&page="+(data.page+1));
      }
      else{
        navigate("/blog?page="+(data.page+1));
        location.reload(true);}
    };

    const prev = () => {
      if(search!=""){
        navigate("/blog?q="+strToUrl(search)+"&page="+(data.page-1));
      }
      else
      navigate("/blog?page="+(data.page-1));
      location.reload(true);
    };

    const goBack = () => {
      navigate("/blog");
      location.reload(true);
    };
    

</script>
<section class='flex justify-center  items-center flex-col '>
    <form class="join w-full flex-center" on:submit={searchPosts} >
        <div>
          <div>
            <input class="input input-bordered w-full join-item" bind:value={search} placeholder="Search"/>
          </div>
        </div>
        
        <button type="submit" class="btn join-item" >Search</button>
        
    </form >
    <!-- search bar -->
    {#if posts && posts.length > 0}
    <div class= "grid-list p-5 min-h-screen w-full" id="holder">
        
        {#each posts as post}
            <div class='w-full flex justify-center'><Card post={post}></Card></div>
        {/each}
        
        
    </div>
    
    <div class="join grid py-4 grid-cols-2">
      {#if data.page!=1}
      <button on:click={prev} class="join-item btn btn-outline">Previous page</button>  
      {/if}
      {#if posts.length==10}
      <button on:click={next} class="join-item btn btn-outline">Next</button>
      {/if}
    </div>
    {/if}
    {#if !posts || posts.length == 0}
    <div class="flex-center flex-col h-[80vh] gap-3">
      <h1 class="text-5xl font-bold">Error 500</h1>
      <h2 class="text-3xl font-bold">Content not found</h2>
      <button on:click={goBack} href="/blog" class="btn hover:btn-accent ">Go back</button>
    </div>
    {/if}
    
  </section>
<style>
  .grid-list{
    display: grid;
    grid-template-columns: repeat(4,minmax(0,1fr));
    grid-gap: 1rem;
  }
  @media (max-width: 1200px) {
    .grid-list{
      grid-template-columns: repeat(3,minmax(0,1fr));
    }
  }
  @media (max-width: 900px) {
    .grid-list{
      grid-template-columns: repeat(2,minmax(0,1fr));
    }
  }
  @media (max-width: 640px) {
    .grid-list{
      grid-template-columns: repeat(1,minmax(0,1fr));
    }
  }

</style>