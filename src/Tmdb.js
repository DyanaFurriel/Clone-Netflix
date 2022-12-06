const API_KEY = '6c98a8edf75b6bd1a0c9fe7d16865c14';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da netflix',
                items: await basicFetch(`discover/tv?with_network=123&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`trending/all/week`),
            },
            {
                slug: 'top rated',
                title: 'Em alta',
                items: [],
            },
            {
                slug: 'action',
                title: 'Ação',
                items: [],
            },{
                slug: 'comedy',
                title: 'Comédia',
                items: [],
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: [],
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: [],
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: [],
            }
        ]
    }
}