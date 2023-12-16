<script>
    let scroll

</script>
<svelte:window bind:scrollY={scroll} />
<section class="hero min-h-screen items-start ">
    <div class="hero-content sticky top-1/4 flex-col lg:flex-row-reverse"  >
        
        <div class="card  w-full max-w-sm shadow-2xl bg-base-100">
            <form class="card-body">
              <div class="form-control">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" class="input input-bordered" required />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" class="input input-bordered" required />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
              </div>
            </form>
          </div>


      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now </h1>
        <p class="py-6  " style="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      
    </div>
</section>