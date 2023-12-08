/** @type {import('./$types').PageServerLoad} */
export const load = async ({ local }) => {
    return {
        props: {
        session: local.session,
        },
    }
    }