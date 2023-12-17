<!-- import components -->
<script>
  import "../app.css";
  // import jsonfile from lib
  
  import { uri } from "$lib/link.json";
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";

  export let data;
  let scroll;
  
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
  
  // home = url.psthname.aplit("/")[2] === "" 
  $: shownav = ((scroll < 100) ) ? true : false;
  $: logedin = session ? true : false;
</script>
<svelte:window bind:scrollY={scroll}></svelte:window>
<div class="drawer ">
  <input id="my-drawer-3"  type="checkbox" class="drawer-toggle"  /> 
  <div class="drawer-content flex flex-col" >
    <!-- Navbar -->
    <div class="w-full navbar z-10  bg-black top-0 transition-all duration-500 fixed" class:shownav>
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <a href="/" class="flex-1 px-2 mx-2 text-2xl">Mandar Majumder</a>
      <nav class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal text-xl">
          <!-- Navbar menu content here -->
          {#each uri as i}
            <li><a href={i.uri} >{i.name}</a></li> 
          {/each}
        </ul>
      </nav>
    </div>
    <!-- Page content here -->
<main class ="pt-14"><slot/></main>
<a class="fixed bottom-16 right-16 transition-all duration-300" href="#top" class:shownav>
  <div class="btn-accent btn btn-circle "><svg fill="#ffffff" height="1.5rem" width="1.5rem" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 330 330" xml:space="preserve">
 <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
   l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
   C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
 </svg></div>
</a>
  </div> 
  <nav class="z-20 drawer-side">
    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
    <ul class="menu  w-80 min-h-full bg-base-200 text-lg">
      <!-- Sidebar content here -->
      <span class="text-2xl px-4 pt-4 text-bold">Menu</span>
      <div class="divider"></div>
      {#each uri as i}
      <li><a class="px-4" href={i.uri} >{i.name}</a>
      
      </li> 
      
      {/each}
      
    </ul>
  </nav>
</div>


<footer class="footer p-10 bg-base-200 w-full text-base-content">
  <aside>
    <img src="/favicon.png" alt="">
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <span class="footer-title">Pages</span> 
    {#each uri as i}
    <a class="link link-hover" href={i.uri} >{i.name}</a>  
    {/each}
  </nav> 
  <nav>
    <header class="footer-title">Company</header> 
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Jobs</a>
    <a class="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header class="footer-title">Legal</header> 
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
    <a class="link link-hover">Cookie policy</a>
  </nav>
</footer>
<style lang="postcss">
  :global(html) {
    scroll-behavior: smooth;
    scrollbar-width: none;
    webkit-scrollbar-width: none

  }
  .shownav {
    opacity: 0;
  }
  .logedin {
    /* flicker effect */
    @apply animate-pulse ease-in-out duration-100;
  }
</style>
