<script>
  import Card from "../../lib/components/card1.svelte";
  import { navigate } from 'svelte-routing';

    export let data;
    let posts = data.posts;
    let search = "";
    function strToUrl(str) {
      return str.replace(/\s+/g, '_');
    }
        

    const searchPosts = (event) => {
      event.preventDefault()
      navigate("?q="+strToUrl(search));
      location.reload(true);
      
    };
    

</script>
<section class='flex justify-center items-center flex-col '>
    <form class="join w-full flex-center" on:submit={searchPosts} >
        <div>
          <div>
            <input class="input input-bordered w-full join-item" bind:value={search} placeholder="Search"/>
          </div>
        </div>
        
        <button type="submit" class="btn join-item" >Search</button>
        
    </form>
    <!-- search bar -->
    
    <div class= "grid-list p-5 w-full" id="holder">
        
        {#each posts as post}
            <div class='w-full flex justify-center'><Card post={post}></Card></div>
        {/each}
    </div>
    
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