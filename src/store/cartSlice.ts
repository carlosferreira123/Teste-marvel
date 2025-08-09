import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Comic, type CartItem } from '../types/comic';

interface CartState {
    items: CartItem[];
    total: number;
}

const calculateTotal = (items: CartItem[]): number => {
    return items.reduce((total, item) => total + (item.comic.price * item.quantity), 0);
};

const initialState: CartState = {
    items: [],
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Comic>) => {
            const existingItem = state.items.find(item => item.comic.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ comic: action.payload, quantity: 1 });
            }

            state.total = calculateTotal(state.items);
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.comic.id !== action.payload);
            state.total = calculateTotal(state.items);
        },
        updateQuantity: (state, action: PayloadAction<{ comicId: string; quantity: number }>) => {
            const { comicId, quantity } = action.payload;

            if (quantity <= 0) {
                state.items = state.items.filter(item => item.comic.id !== comicId);
            } else {
                const item = state.items.find(item => item.comic.id === comicId);
                if (item) {
                    item.quantity = quantity;
                }
            }

            state.total = calculateTotal(state.items);
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        },
    },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;