import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth.slice";
import productsReducer from "./slice/products.slice";
import brandReducer from "./slice/brand.slice";
import categoryReducer from "./slice/category.slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
        brands: brandReducer,
        category: categoryReducer
    }
})