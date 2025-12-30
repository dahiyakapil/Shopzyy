import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth.slice";
import productsReducer from "./slice/products.slice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
    }
})