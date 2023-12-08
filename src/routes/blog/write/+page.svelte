<script >
    import Page from '$lib/components/page.svelte'
    
    let view = false;
    let title = '';
    let tags = [];
    let tag = '';
    let md = ``
    let date = new Date().toLocaleDateString();

</script>
<main class="py-10 w-full h-full flex-center flex-col">
    {#if date.session}
    <div class="flex p-2 justify-center items-center gap-5">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => view = !view}>
            {!view ? 'Preview' : 'Edit'}
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => view = !view}>
            Save
        </button>
    </div>
    <div class=" max-w-[960px] w-full h-full flex-center" >
        {#if view}
        <Page {md} />
    {:else}
        <form class="w-full h-full min-h-max" action="" >
            <input type="text" name="title" id="title" placeholder="Title" class="w-full p-4 text-black border text-3xl border-gray-300 rounded mb-2" bind:value={title}/>
            <input name="date" id="date" type="date" class=" p-4 text-black border border-gray-300 rounded mb-2" value={date} />
            <input type="text" name="tag" bind:value={tag} placeholder="Tag" class=" p-4 text-black border border-gray-300 rounded mb-2" />
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => tags = [...tags, tag]}>
                Add Tag
            </button>
            <div id=tags class="flex flex-wrap gap-2 bg-slate-500 p-3 ">
                {#each tags as tag}
                <span class="px-2 py-1 w-max h-max text-center bg-violet-950 rounded-[15px]">{tag}</span>
                {/each}
            </div>
            <textarea class="max-w-[764 px] w-full text-2xl p-4 text-black h-full min-h-[60vh]" bind:value={md} />
            
        </form>
        
    {/if}
    </div>
    {:else}
    no
    {/if}
    
</main>