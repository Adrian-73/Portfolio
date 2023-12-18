// +page.server.js

export const load = async ({ url, locals: { supabase } }) => {
    const page = url.searchParams.get('page') || 1;
    const searchQuery = url.searchParams.get('q') || '';

    let { data, error } = {};
    
    let query = supabase.from('Posts').select('*');

    
    if (searchQuery) {
        ({ data, error } = await query.textSearch('content', convertStr(searchQuery))
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
            posts: null,
            search: urlToStr(searchQuery)
        };
    }

    let posts = data;
    return {
        status: 201,
        posts: posts,
        page: page,
        search: urlToStr(searchQuery)
    };
};


function urlToStr(str) {
    // replace _ with space
    return str.replace(/_/g, ' ')
  }

  function convertStr(str) {
    // Split the string into an array of words
    const wordsArray = str.split('_');
  
    // Join the words using the '&' operator
    const result = "'" + wordsArray.join("' & '") + "'";
  
    return result;
  }
