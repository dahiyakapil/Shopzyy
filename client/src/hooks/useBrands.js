import { useDispatch, useSelector } from "react-redux"
import { CreateBrandThunk, DeleteBrandThunkById, GetAllBrandsThunk } from "../store/slice/brand.slice";

export const useBrands = () => {

    const dispatch = useDispatch();
    const { brands, loading, error } = useSelector((state) => {
        return state.brands || {};
    });

    // Create Brand
    const createBrand = (brandData) => {
        return dispatch(CreateBrandThunk(brandData));
    }

    // Load Brands
    const loadBrands = () => {
        return dispatch(GetAllBrandsThunk());
    }

    // Delete brand by ID
    const deleteBrandById = (brandId) => {
        return dispatch(DeleteBrandThunkById(brandId));
    }

    // keep returned shape compatible with existing callers expecting `brand`
    return { brands, loading, error, createBrand, loadBrands, deleteBrandById }
}