<script >
    import Page from '$lib/components/page.svelte'
    import {enhance} from '$app/forms'
    
        
    let view = false;
    let title = 'Title';
    let tags = ['python','javascript'];
    let tag = '';
    let Description = 'a description of the post goes here ';
    let md = ` 
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
**bold text**
*italicized text*
> blockquote
1. First item
2. Second item
3. Third item
- First item
- Second item
- Third item
[title](https://www.example.com)
![alt text](image.jpg)
\`\`\`
code
\`\`\`

    `
    let date = new Date('10/22/22').toLocaleDateString();
let options = [ 'javascript', 'svelte', 'css', 'html', 'nodejs', 'python', 'c++', 'c', 'java','AI','open source','web development',
'web design','machine learning','data science','data']
    


</script>
<main class="py-10 w-full h-full flex-center flex-col">

    <div class="flex p-2 justify-center items-center gap-5">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => view = !view}>
            {!view ? 'Preview' : 'Edit'}
        </button>

    </div>
    <div class=" max-w-[960px] w-full h-full flex-center" >
        {#if view}
        <Page {md} />
    {:else}
        <form class="w-full h-full min-h-max" use:enhance method="post">            
            <input type="text" name="title" id="title" placeholder="Title" class="w-full p-4 text-black border text-3xl border-gray-300 rounded mb-2" bind:value={title}/>
            <input name="date" id="date" type="date" class=" p-4 text-black border border-gray-300 rounded mb-2" bind:value={date} />
            <input type="text" name="tag" bind:value={tag} placeholder="Tag" class=" p-4 text-black border border-gray-300 rounded mb-2" />
            <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => options = [...options, tag]}>
                Add Tag
            </button>
            <div id=tags class="flex flex-wrap  gap-2 bg-slate-500 p-3 ">
                {#each options as tag}
                <div class = 'flex'>
                    <lable class="p-2  w-max h-max flex-center items-center justify-center text-center bg-violet-950 rounded-[15px]">{tag}
                    <input type="checkbox" bind:group={tags} value={tag} class="ml-1" />
                    </lable>
                </div>
                {/each}
            </div>
            <input type="text" name="tags" id="tags" placeholder="Tags" class="hidden" bind:value={tags}/>
            <textarea name="content" id="content" class="max-w-[764 px] w-full text-2xl p-4 text-black h-full min-h-[60vh]" bind:value={md} placeholder="content" />
            <textarea name="Description" id="Description" class="max-w-[764 px] w-full text-2xl p-4 text-black h-full min-h-[60vh]" bind:value={Description} placeholder="Description" />
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  >
                Save
            </button>
        </form>
        
    {/if}
    </div>
    
    
</main>