<script>
  import Card from "../../lib/components/card1.svelte";
  import { enhance} from "$app/forms";
    export let data;
    let posts = data.posts;
    let search = ""
    
    

</script>
<section class='flex justify-center items-center flex-col '>
    <form class="join w-full">
        <div>
          <div>
            <input class="input input-bordered w-full join-item" placeholder="Search"/>
          </div>
        </div>
        <select class="select select-bordered join-item">
          <option disabled selected>Filter</option>
          <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option>
        </select>
        <button type="submit" class="btn join-item">Search</button>
        
    </form>
    <!-- search bar -->
    
    <div class= "grid-list px-5 w-full" id="holder">
        
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
  @media (max-width: 1024px) {
    .grid-list{
      grid-template-columns: repeat(3,minmax(0,1fr));
    }
  }
  @media (max-width: 768px) {
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