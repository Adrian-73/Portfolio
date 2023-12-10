<!-- import components -->
<script>
  import "../app.css";
  // import jsonfile from lib
  
  import { uri } from "$lib/link.json";
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";

  export let data;

  let { supabase, session } = data;
  $: ({ supabase, session } = data);

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth");
      }
    });

    return () => subscription.unsubscribe();
  });

  let menu = false;
  function toggleNavbar() {
    menu = !menu;
  }
  $: logedin = session ? true : false;
</script>
<header
  class=" h-[76.25px] pl-5 pt-5 justify-between items-start inline-flex w-full
  top-0 fixed bg-cyan-500 bg-opacity-25"
>
  <div class="lg:w-max h-[56.25px]">
    <div class=" h-min left-[1.16px] lg:w-max text-2xl font-bold" class:logedin>
      Mandar Majumder
    </div>
  </div>
  <div class="w-1/3 h-full">
    <div class="flex md:hidden justify-end pr-5">
      <button
        on:click={toggleNavbar}
        type="button"
        class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          class="w-6 h-6 fill-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
    <nav >
      <ul class="flex-col mt-8 space-y-4 bg-cyan-500 md:bg-opacity-0 bg-opacity-25 w-full 
      md:justify-end md:p-2 p-4  
      md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {menu
         ? 'flex'
         : 'hidden'}">
        {#each uri as uri}
          <li class="w-max h-[27.64px] px-3 lg:text-2xl font-bold">
            <a href={uri.uri}>{uri.name}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>
<!-- session data -->

<slot />
<footer
  class="w-full h-[356.50px] px-[35px] py-[37px] bg-cyan-950 flex-col justify-start items-start gap-2.5 inline-flex"
>
  <div class="w-full h-[282.50px] relative">
    <div></div>
    <div
      class="w-full h-[31.35px] left-[17.50px] top-[251.15px] absolute justify-start items-start gap-[142px] inline-flex"
    >
      <div class="w-full h-7">
        <span style="text-white text-2xl font-normal font-['Ubuntu']"
          >COPYRIGHT @ 2023
        </span><span style="text-white text-2xl font-bold font-['Ubuntu']"
          >mfaouzi.com</span
        >
      </div>
      <div class="w-full h-[22px] text-right">
        <span style="text-white text-2xl font-normal font-['Ubuntu']"
          >Developed by
        </span><span style="text-white text-2xl font-bold font-['Ubuntu']"
          >Faouzi Mohamed</span
        >
      </div>
    </div>
    <div
      class="w-full h-40 left-0 top-0 absolute justify-center items-start gap-[94px] inline-flex"
    >
      <div class="w-full h-40 relative">
        <div class="w-full h-[62.82px]">
          <div
            class="w-full h-[34.01px] text-white text-[32px] font-bold font-['Ubuntu']"
          >
            Mandar Majiumder
          </div>
        </div>
        <div
          class="w-full h-[100.43px] text-white text-2xl font-normal font-['Ubuntu']"
        >
          Software Engineer | Full-stack Web Developer (ReactJs/ Angular /
          Asp.Net)
        </div>
      </div>
      <div class="w-full h-[136px] relative">
        <div
          class="w-full h-11 text-white text-[32px] font-normal font-['Ubuntu']"
        >
          Home
        </div>
        <div
          class="w-full h-11 text-white text-[32px] font-normal font-['Ubuntu']"
        >
          Contact
        </div>
        <div
          class="w-full h-[45px] text-white text-[32px] font-normal font-['Ubuntu']"
        >
          Blog
        </div>
        <div
          class="w-full h-[43px] text-white text-[32px] font-normal font-['Ubuntu']"
        >
          Guestbook
        </div>
      </div>
    </div>
  </div>
</footer>

<style lang="postcss">
  :global(html) {
    /* bg shadow */

    background-color: #010f27;
    color: #ffffff;
    @apply shadow-black shadow-inner;
  }
  .logedin {
    /* flicker effect */
    @apply animate-pulse ease-in-out duration-100;
  }
</style>
