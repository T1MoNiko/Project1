import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlice"
import Regreducer from "./regSlice"

export const store = configureStore({
    reducer : {
        CartReducer,
        Regreducer
    }
})

