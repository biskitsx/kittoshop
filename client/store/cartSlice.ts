import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface Cart {
    name: string;
    price: number;
    rating: number;
    count: number;
    image: string;
}

// Initial state
const initialState: Cart[] = []

// Actual Slice
export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: initialState
    },
    reducers: {
        // // Action to set the authentication status
        // setAuthState(state, action) {
        //     state.cart = action.payload;
        // },
        addToCart(state, action) {
            state.cartList.push(action.payload);
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
export const { addToCart } = cartSlice.actions;


export const selectCart = (state: AppState) => state.cart.cartList;

export default cartSlice.reducer;