/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url, locals: { supabase } }) => {
    const titel = url.pathname.split('/')[2]
    const { data, error } = await supabase
    .from('Posts')
    .select('*')
    .eq('title', urlToStr(titel))
    .single()
    console.log(urlToStr(titel))
    console.log(data)
    if (error) {
        return {
            status: 500,
            error: new Error(error.message)
        }
    }
    let post = data
    return {
        status: 201,
        post: post
    }
}

function urlToStr(str) {
    // replace _ with space
    return str.replace(/_/g, ' ')
  }