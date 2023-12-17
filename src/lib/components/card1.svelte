<script>
    export let post;
    function strToUrl(str) {
      return str.replace(/\s+/g, '_');
    }
</script>
<a class="card max-w-[24rem] w-full  glass hover:scale-110 hover:z-[5] transition ease-in-out border border-accent h-max " href="/blog/{strToUrl(post.title) }">
    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        {post.title}
        
      </h2>
      <p>{post.Description}</p>
      <div class="card-actions justify-end">
        {#if post.Tags}
          
        {#each post.Tags as tag}
        <span
        class="badge badge-secondary">{tag}</span>
        {/each}
        {/if}
      </div>
    </div>
</a>