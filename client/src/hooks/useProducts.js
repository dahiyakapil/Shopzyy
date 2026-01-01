import { useDispatch, useSelector } from "react-redux";
import { createProductThunk, getAllProductsThunk, setCurrentPage } from "../store/slice/products.slice";

export const useProducts = () => {

    const dispatch = useDispatch();


    const { products, loading, error, currentPage, pageSize } = useSelector((state) => {
        return state.products
    });

    const loadProdcuts = () => {
        dispatch(getAllProductsThunk());
    }

    const changePage = (pageNumber) => {    
        dispatch(setCurrentPage(pageNumber));
    }

    const createProduct = (payloadProuct) => {
        return dispatch(createProductThunk(payloadProuct));
    }



    return { products, loading, error, loadProdcuts, changePage, createProduct, currentPage, pageSize };
}