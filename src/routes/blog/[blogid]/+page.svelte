<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import Markdown from "svelte-exmarkdown";
</script>

<main class="flex justify-center items-center pt-[78px]">
  <div class="flex justify-evenly flex-wrap gap-5 px-5 w-full" id="holder">
    <div
      class="prose py-10 md:px-10 px-4 prose-invert prose-p:text-2xl
        prose-h1:text-center md:prose-h1:text-5xl
        border border-accent glass w-full max-w-5xl min-h-full"
    >
      <Markdown md={data.post.content} />
    </div>
  </div>
</main>
