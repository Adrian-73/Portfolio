// +page.server.js

export const load = async ({ url, locals: { supabase } }) => {
    const page = url.searchParams.get('page') || 1;
    const searchQuery = url.searchParams.get('q') || '';
    const selectedTag = url.searchParams.get('tag') || ''; // Get the selected tag from the URL

    let { data, error } = {};

    let query = supabase.from('Posts').select('*');

    
    if (searchQuery) {
        ({ data, error } = await query.textSearch('content', urlToStr(searchQuery))
            .range(page * 10 - 10, page * 10 - 1)
            .order('id', { ascending: false }));
    }else{

    // Continue with the rest of the query
    ({ data, error } = await query
        .range(page * 10 - 10, page * 10 - 1)
        .order('id', { ascending: false }));
    }
    if (error) {
        return {
            status: 500,
            error: new Error(error.message),
        };
    }

    let posts = data;
    return {
        status: 201,
        posts: posts,
    };
};


function urlToStr(str) {
    // replace _ with space
    return str.replace(/_/g, ' ')
  }
