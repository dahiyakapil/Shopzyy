import Brand from "../models/brand.model.js";
import asyncHandler from "express-async-handler"


export const createBrand = async (req, res) => {
    try {
        const { name } = req.body;

        const newBrand = await Brand.create({ name });
        return res.status(201).json({
            message: "Brand created successfully",
            data: newBrand
        })
    } catch (error) {
        return res.status(500).json(
            {
                message: "Server Error",
                error: error.message
            }
        )
    }
}

export const getBrandById = async (req, res) => {
    try {
    } catch (error) {
        return res.status(500).json({
            message: ""
        })
    }
}


export const getAllBrands = asyncHandler(async (req, res) => {
    const allBrands = await Brand.find();
    return res.status(200).json({
        message: "Brands fetched successfully",
        data: allBrands
    })
})


export const deleteBrandById = asyncHandler(async (req, res) => {
    const { brandId } = req.params;

    const findBrand = await Brand.findById(brandId);
    if (!findBrand) {
        return res.status(404).json({
            message: "Brand not found"
        });
    }

    const deleltedBrand = await Brand.findByIdAndDelete(brandId);

    return res.status(200).json({
        message: "Brand deleted successfully",
        data: deleltedBrand
    })
})