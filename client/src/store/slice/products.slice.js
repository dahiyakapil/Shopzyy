import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProrducts, createProduct } from "../../services/products.service"

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

export const createProductThunk = createAsyncThunk(
    "products/createProduct",
    async (productPayload, thunkAPI) => {
        try {
            const response = await createProduct(productPayload)
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)






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
            .addCase(createProductThunk.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(createProductThunk.fulfilled, (state, payload) => {
                state.loading = false;
                state.products.push(payload.payload.data);
                state.error = null;
            })
            .addCase(createProductThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            })
    }
})

export const { setCurrentPage } = productSlice.actions;
export default productSlice.reducer;