/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url, locals: { supabase } }) => {
    const page = url.searchParams.get('page') || 1
    
    const { data, error } = await supabase
    .from('Posts')
    .select('*')
    .range(page*10-10, page*10-1)
    .order('id', { ascending: false })

    if (error) {
        return {
            status: 500,
            error: new Error(error.message)
        }
    }
    let posts = data
    return {
        status: 201,
        posts: posts
    }
    
}