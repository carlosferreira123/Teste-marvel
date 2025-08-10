import type { Comic } from '../types/comic';
import { fetchComics, fetchComicById } from '../services/api';

export const getComics = async (page: number = 1, limit: number = 6): Promise<{ comics: Comic[], total: number, totalPages: number }> => {
    try {
        return await fetchComics(page, limit);
    } catch (error) {
        console.error('Error fetching comics:', error);
        // Return empty state in case of error
        return {
            comics: [],
            total: 0,
            totalPages: 0
        };
    }
};

export const getComicById = async (id: string): Promise<Comic | undefined> => {
    try {
        const comic = await fetchComicById(id);
        return comic || undefined;
    } catch (error) {
        console.error('Error fetching comic by ID:', error);
        return undefined;
    }
};