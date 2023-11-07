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
        },
        removeFromCart(state, action) {
            console.log("ky")
            const index = state.cartList.findIndex((cartItem) => cartItem.name === action.payload.name);
            let newCart = [...state.cartList];
            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.payload.name}) as its not in cart!`)
            }
            state.cartList = newCart;
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
export const { addToCart, removeFromCart } = cartSlice.actions;


export const selectCart = (state: AppState) => state.cart.cartList;

export default cartSlice.reducer;