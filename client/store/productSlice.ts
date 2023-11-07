import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface Product {
    id: string
    name: string;
    price: number;
    rating: number;
    count: number;
    picture: string;
    color: string[];
    size: string[];
    type: string;
}

// Initial state
const initialState: Product[] = []

// Actual Slice
export const productSlice = createSlice({
    name: "product",
    initialState: {
        productList: initialState
    },
    reducers: {
        // // Action to set the authentication status
        // setAuthState(state, action) {
        //     state.Cart = action.payload;
        // },
        setProduct(state, action) {
            state.productList = action.payload;
        }
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    // extraReducers: {
    //     [HYDRATE]: (state, action) => {
    //         return {
    //             ...state,
    //             ...action.payload.auth,
    //         };
    //     },
    // },
});
export const { setProduct } = productSlice.actions;


export const selectProduct = (state: AppState) => state.product.productList;

export default productSlice.reducer;

