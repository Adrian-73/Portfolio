// src/hooks.server.js
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import { redirect } from '@sveltejs/kit'

export const handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: "https://whjdhzrdaivxmsmifapd.supabase.co",
    supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoamRoenJkYWl2eG1zbWlmYXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ2NzY4ODcsImV4cCI6MTk5MDI1Mjg4N30.bAGqzbYFgv9UqS2GxTYUiCIWmJ_cnbgsU5vBIdmKf2g',
    event,
  })

  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    return session
  }

  if( event.url.pathname.startsWith('/blog/write') ) {

    if (!event.locals.session) {
      throw redirect(303,'/login')
    }
  
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range'
    },
  })
}