/** @type {import('./$types').PageServerLoad} */
export const actions = {
    default: async ({ request, locals: { supabase } }) => {
        // post formdata
        const formData = await request.formData();
        const title = formData.get('title');
        const tags = formData.get('tags');
        const content = formData.get('content');
        const date = formData.get('date');
        const Description = formData.get('Description');

        const { data, error } = await supabase
        .from('Posts')
        .insert({
            'created_at': date,
            'title': title,
            // prepairing tags for supabase database
            'Tags': tags.split(',').map((tag) => tag.trim()),
            'content': content,
            'Description': Description
        }).select();


        console.log(data);
        console.log(title,tags.split(',').map((tag) => tag.trim()),content,date,Description);
        console.log(error);
        
        
    }
};