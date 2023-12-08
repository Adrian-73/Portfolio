// src/routes/login/+page.server.js
import { fail, redirect } from '@sveltejs/kit'

export const actions = {
  default: async ({ request, url, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
      options: {
        emailRedirectTo: `${url.origin}/auth/callback`,
      },
    })

    if (error) {
      if (error.message.includes('No user found')) {
        throw redirect(500,'/')
      }
      return fail(error.message)
    }
    throw redirect(303,'/blog/write')
  }
}