<!-- // src/routes/login/+page.svelte -->
<script>
  export let data
	import { enhance } from '$app/forms'
	export let form
</script>



<main class="flex-center flex-col h-screen w-full">
  {#if data.session}
    <div class="flex-center flex-col gap-4">
      <div class="text-2xl font-bold">You are logged in</div>
      <button class="text-xl font-bold bg-cyan-700 p-2" on:click={() => data.supabase.auth.signOut()}>logout</button>
    </div>
  {:else}
  <form method="post" use:enhance class=" flex-center flex-col gap-4 ">
    <input name="email" value={form?.email ?? ''} class="w-[300px] h-[34px] text-xl font-bold font-['Inter']  leading-none text-black tracking-wider" placeholder="email" />
    <input type="password" name="password" value={form?.password ?? ''} class="w-[300px] h-[34px] text-black text-xl font-bold font-['Inter'] leading-none tracking-wider" placeholder="password" />
    <button class="text-xl font-bold bg-cyan-700 p-2" >login</button>
  </form>
  {/if}
</main>
