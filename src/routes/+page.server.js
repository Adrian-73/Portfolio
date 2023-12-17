/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals: { supabase } }) => {
    
    const { data, error } = await supabase
    .from('Posts')
    .select('*')
    .range(0,5)
    .order('id', { ascending: false })

    if (error) {
        return {
            status: 500,
            posts: null
            
        }
    }
    let posts = data
    return {
        status: 201,
        posts: posts
    }
    
}
