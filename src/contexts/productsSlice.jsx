import { createSlice } from '@reduxjs/toolkit';
import PRODUCTS from '../data/products';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        productsData: PRODUCTS,
    },
    reducers: {
        updateProducts(state, action) {
            const updatedProducts = action.payload;
            state.productsData = updatedProducts;
        }
    },
});

export default productsSlice;

export const productActions = productsSlice.actions;
