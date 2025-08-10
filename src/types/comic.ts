export interface Comic {
    id: string;
    title: string;
    description: string;
    coverImage: string;
    price: number;
    series: string;
    issueNumber: number;
    publishDate: string;
    writers: string[];
    artists: string[];
    characters: string[];
    rating: number;
    availability: 'available' | 'out-of-stock' | 'pre-order';
    rarity?: 'common' | 'rare';
}

export interface CartItem {
    comic: Comic;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
    total: number;
}