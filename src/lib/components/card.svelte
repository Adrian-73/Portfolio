<script>
  export let post;
  function strToUrl(str) {
    return str.replace(/\s+/g, '_');
  }
</script>



<div
  class="max-w-[3800px] w-full h-[250.40px] px-[13px] py-[7px] bg-sky-500 rounded-[15px] flex-col justify-center items-center gap-[13px] bg-opacity-30 inline-flex"
>
  <div
    class="w-[300px] h-[189.54px] flex-col justify-start items-start gap-2.5 inline-flex"
  >
    <div
      class="w-[300px] h-[34px] text-xl font-bold font-['Inter'] capitalize leading-none tracking-wider"
    >
      {post.title}
    </div>
    <div
      class="max-w-[290px] w-full h-[58px] text-[11px] flex overflow-clip font-normal font-['Inter'] leading-none tracking-wider"
    >
      {post.Description}
    </div>
    <div class="max-w-[300px] w-full h-[35px] relative">
      <div class="max-w-[300px] w-full h-[35px] bg-neutral-50 bg-opacity-0">
        <a href="/blog/{strToUrl(post.title) }"
          class="max-w-[101.48px] w-full h-[31.31px] bg-slate-600 rounded-[7px] flex justify-center items-center center"
        >
          Read more
      </a>
      </div>
      <div class="min-w-[101.48px] w-full flex h-[32.73px]">
        <div class="w-full h-[23.66px] flex flex-wrap">
          <span class="p-1 w-max text-sm flex-center">Tags:</span>
        {#if post.Tags}
          
        {#each post.Tags as tag}
        <span
          class="px-2 w-max text-sm flex-center bg-violet-950 rounded-[15px]">{tag}</span>
        {/each}
        {/if}
        </div>
      </div>
    </div>
  </div>
</div>
