<script>
  import { onMount } from "svelte";
  function strToUrl(str) {
    return str.replace(/\s+/g, "_");
  }
  import { fade} from "svelte/transition";
  let currentIndex = 0;

  const updateIndex = () => {
    currentIndex = (currentIndex + 1) % posts.length;
  };

  onMount(() => {
    const interval = setInterval(updateIndex, 5000); // Change 2000 to your desired interval in milliseconds

    // Cleanup the interval when the component is destroyed
    return () => clearInterval(interval);
  });

  export let posts = null;
</script>

<section class="hero min-h-screen items-start">
  <div class="hero-content p-0 sticky top-1/4 flex-col-reverse lg:flex-row-reverse">
    {#if posts}
    <div class="w-full p-4 bg-white bg-opacity-10 flex-center">
      {#key posts[currentIndex]}
        <div
          in:fade={{ duration: 1000 }}
          class="card w-full min-h-[400px] glass shadow-xl image-full"
        >
          <figure>
            <img
              class="object-fill"
              src={posts[currentIndex].Banner}
              alt="Banner"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{posts[currentIndex].title}</h2>
            <p class="h-full">{posts[currentIndex].Description}</p>
            <div class="card-actions justify-end">
              <a
                href={"/blog/" + strToUrl(posts[currentIndex].title)}
                class="btn btn-base-100">Read More</a
              >
            </div>
          </div>
        </div>
      {/key}
    </div>
    {/if}

    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">My Blogs</h1>
      <p class="py-6" >
        This is the place where I share my thoughts and experiences with the
        world. I write about my learnings, my projects, and my experiences. I
        hope you find something useful here.
      </p>
    </div>
  </div>
</section>
