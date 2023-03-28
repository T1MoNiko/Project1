import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const CartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            state.products.push({...action.payload})
        },
        deleteFromCart(state, action) {
            state.products = state.products.filter((obj) => Number(obj.id) !== Number(action.payload))
        }
    }
})

export const { addToCart, deleteFromCart } = CartSlice.actions
export default CartSlice.reducer
