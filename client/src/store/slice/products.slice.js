import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProrducts } from "../../services/products.service"

export const getAllProductsThunk = createAsyncThunk(
    "products/getAllProducts",
    async (_, thunkAPI) => {
        try {
            const response = await getAllProrducts();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }

    });

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null,

        currentPage: 1, 
        pageSize: 5,
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },


    extraReducers: (builder) => {
        builder.addCase(getAllProductsThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(getAllProductsThunk.fulfilled, (state, action) => {
            state.loading = false;
            // The API returns { message, data: [...] }
            state.products = action.payload.data || [];
            state.error = null;
        })
        builder.addCase(getAllProductsThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Something went wrong";
        })
    }
})

export const { setCurrentPage } = productSlice.actions;
export default productSlice.reducer;