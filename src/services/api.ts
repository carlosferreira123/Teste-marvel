import type { Comic } from '../types/comic';
import axios, { AxiosError } from 'axios';
import md5 from 'md5';

const PUBLIC_KEY = '3c18f3c24fbf842f4c92503ed42aa490';
const PRIVATE_KEY = '2f29670ca65aab27aa75cfca793621dc8ea95c6a';

// Timestamp and hash computed once at module load (as requested)
const ts = Number(new Date());
const hash = md5(String(ts) + PRIVATE_KEY + PUBLIC_KEY).toString();

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/',
    params: {
        ts,
        apikey: PUBLIC_KEY,
        hash,
    },
});

export interface MarvelComic {
    id: number;
    title: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    prices: Array<{
        type: string;
        price: number;
    }>;
    series: {
        name: string;
    };
    issueNumber: number;
    dates: Array<{
        type: string;
        date: string;
    }>;
    creators: {
        items: Array<{
            name: string;
            role: string;
        }>;
    };
    characters: {
        items: Array<{
            name: string;
        }>;
    };
}

interface MarvelApiResponse {
    data: {
        results: MarvelComic[];
        total: number;
        count: number;
        limit: number;
        offset: number;
    };
}

const transformMarvelComic = (marvelComic: MarvelComic): Comic => {
    const printPrice = marvelComic.prices.find(p => p.type === 'printPrice')?.price || 0;
    const publishDate = marvelComic.dates.find(d => d.type === 'onsaleDate')?.date || '';

    const writers = marvelComic.creators.items
        .filter(creator => creator.role.toLowerCase().includes('writer'))
        .map(creator => creator.name);

    const artists = marvelComic.creators.items
        .filter(creator => creator.role.toLowerCase().includes('artist') || creator.role.toLowerCase().includes('penciler'))
        .map(creator => creator.name);

    const characters = marvelComic.characters.items.map(char => char.name);

    return {
        id: marvelComic.id.toString(),
        title: marvelComic.title,
        description: marvelComic.description || 'Descrição não disponível',
        coverImage: `${marvelComic.thumbnail.path}/portrait_incredible.${marvelComic.thumbnail.extension}`,
        price: printPrice,
        series: marvelComic.series.name,
        issueNumber: marvelComic.issueNumber || 1,
        publishDate: publishDate ? new Date(publishDate).toISOString().split('T')[0] : '2024-01-01',
        writers: writers.length > 0 ? writers : ['Autor não informado'],
        artists: artists.length > 0 ? artists : ['Artista não informado'],
        characters: characters.length > 0 ? characters : ['Personagens não informados'],
        rating: Math.random() * 2 + 3, // Random rating between 3-5
        availability: 'available' as const,
        rarity: 'common',
    };
};

export const fetchComics = async (page: number = 1, limit: number = 6): Promise<{ comics: Comic[], total: number, totalPages: number }> => {
    const offset = (page - 1) * limit;

    try {
        const { data } = await api.get<MarvelApiResponse>('/comics', {
            params: {
                limit,
                offset,
                format: 'comic',
                formatType: 'comic',
                orderBy: '-onsaleDate',
            },
        });

        const comics = data.data.results.map(transformMarvelComic);

        // Aleatoriamente marca 10% dos quadrinhos como raros no carregamento
        const rareCount = Math.max(1, Math.round(comics.length * 0.1));
        const indices = new Set<number>();
        while (indices.size < rareCount && indices.size < comics.length) {
            indices.add(Math.floor(Math.random() * comics.length));
        }
        indices.forEach((i) => {
            comics[i].rarity = 'rare';
        });

        const total = data.data.total;
        const totalPages = Math.ceil(total / limit);

        return { comics, total, totalPages };
    } catch (error) {
        const err = error as AxiosError;
        console.error('Error fetching comics from Marvel API:', err.response?.status, err.response?.data || err.message);
        throw err;
    }
};

export const fetchComicById = async (id: string): Promise<Comic | null> => {
    try {
        const { data } = await api.get<MarvelApiResponse>(`/comics/${id}`);
        if (data.data.results.length === 0) {
            return null;
        }
        return transformMarvelComic(data.data.results[0]);
    } catch (error) {
        const err = error as AxiosError;
        console.error('Error fetching comic from Marvel API:', err.response?.status, err.response?.data || err.message);
        throw err;
    }
};

export default api;



