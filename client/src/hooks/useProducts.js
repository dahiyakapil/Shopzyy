import { useDispatch, useSelector } from "react-redux";
import { getAllProductsThunk } from "../store/slice/products.slice";

export const useProducts = () => {

    const dispatch = useDispatch();


    const { products, loading, error } = useSelector((state) => {
        return state.products
    });

    const loadProdcuts = () => {
        dispatch(getAllProductsThunk());
    }

    

    return { products, loading, error, loadProdcuts }
}