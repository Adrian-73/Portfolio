<script>

    import Markdown from 'svelte-exmarkdown';
    // pass data intp md
    export let md = `# Hello World`
</script>

<div class="prose py-10 md:px-10 px-4 prose-invert prose-p:text-2xl
prose-h1:text-center md:prose-h1:text-5xl
border border-emerald-300 min-w-full min-h-full 
bg-emerald-600 bg-opacity-20 ">
    <Markdown md={md}  />
</div>