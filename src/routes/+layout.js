// src/routes/+layout.js
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'

export const load = async ({ fetch, data, depends }) => {
  depends('supabase:auth')

  const supabase = createSupabaseLoadClient({
    supabaseUrl: "https://whjdhzrdaivxmsmifapd.supabase.co",
    supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoamRoenJkYWl2eG1zbWlmYXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ2NzY4ODcsImV4cCI6MTk5MDI1Mjg4N30.bAGqzbYFgv9UqS2GxTYUiCIWmJ_cnbgsU5vBIdmKf2g',
    event: { fetch },
    serverSession: data.session,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return { supabase, session }
}