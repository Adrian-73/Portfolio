<!-- import components -->
<script >
    import "../app.css"
    // import jsonfile from lib
    import { base } from '$app/paths'
    import { uri } from '$lib/link.json'
    
    import { invalidate } from '$app/navigation'
    import { onMount,onDestroy } from 'svelte'
  
    export let data
  
    let { supabase, session } = data
    $: ({ supabase, session } = data)
  
    onMount(() => {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((event, _session) => {
        if (_session?.expires_at !== session?.expires_at) {
          invalidate('supabase:auth')
        }
      })
  
      return () => subscription.unsubscribe()
    });
    // onDestroy(() => {
    //     window.addEventListener('beforeunload', supabase.auth.signOut);
    //     return () => {
    //   window.removeEventListener('beforeunload', supabase.auth.signOut);
    // };
    // })
</script>
  
<header class=" h-[76.25px] px-5 pt-5 justify-between items-start inline-flex w-full bg-cyan-600">
    <div class="lg:w-max h-[56.25px] ">
        <div class=" h-min left-[1.16px] lg:w-max w-min lg:text-2xl font-bold">Mandar Majumder</div>
    </div>
        <nav class="w-full h-[27.64px] flex justify-end px-2">
            {#each uri as uri}
                
            <a class="w-max h-[27.64px] px-1 lg:text-2xl font-bold " href={uri.uri } >{uri.name}</a>
            {/each}
            
        </nav>
</header>
<!-- session data -->
<div>
    {#if session}{
    session.user.email
    }{/if}
</div>
<slot/>
<footer class="w-full h-[356.50px] px-[35px] py-[37px] bg-cyan-950 flex-col justify-start items-start gap-2.5 inline-flex">
    <div class="w-full h-[282.50px] relative">
        <div >
        </div>
        <div class="w-full h-[31.35px] left-[17.50px] top-[251.15px] absolute justify-start items-start gap-[142px] inline-flex">
            <div class="w-full h-7"><span style="text-white text-2xl font-normal font-['Ubuntu']">COPYRIGHT @ 2023 </span><span style="text-white text-2xl font-bold font-['Ubuntu']">mfaouzi.com</span></div>
            <div class="w-full h-[22px] text-right"><span style="text-white text-2xl font-normal font-['Ubuntu']">Developed by </span><span style="text-white text-2xl font-bold font-['Ubuntu']">Faouzi Mohamed</span></div>
        </div>
        <div class="w-full h-40 left-0 top-0 absolute justify-center items-start gap-[94px] inline-flex">
            <div class="w-full h-40 relative">
                <div class="w-full h-[62.82px] ">
                    <div class="w-full h-[34.01px]  text-white text-[32px] font-bold font-['Ubuntu']">Mandar Majiumder</div>
                </div>
                <div class="w-full h-[100.43px]  text-white text-2xl font-normal font-['Ubuntu']">Software Engineer | Full-stack Web Developer (ReactJs/ Angular / Asp.Net)</div>
            </div>
            <div class="w-full h-[136px] relative">
                <div class="w-full h-11  text-white text-[32px] font-normal font-['Ubuntu']">Home</div>
                <div class="w-full h-11 text-white text-[32px] font-normal font-['Ubuntu']">Contact</div>
                <div class="w-full h-[45px]  text-white text-[32px] font-normal font-['Ubuntu']">Blog</div>
                <div class="w-full h-[43px]  text-white text-[32px] font-normal font-['Ubuntu']">Guestbook</div>
            </div>
        </div>
    </div>
</footer>
<style lang="postcss">
    :global(html) {
    /* bg shadow */
    
      background-color:  #010F27;
      color: #ffffff;
      @apply shadow-black shadow-inner ;
    }
    
</style>