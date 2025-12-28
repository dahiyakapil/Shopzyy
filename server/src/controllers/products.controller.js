import Product from "../models/product.model.js";
import { generateSlug } from "../utils/slugify.js";

export const createProduct = async (req, res) => {
    try {
        // Slugify the product title to create a slug for better SEO

        const { title } = req.body;

        if (!title) {
            return res.status(400).json(
                {
                    message: "Product Title is required"
                }
            )
        }

        const slugify = generateSlug(title);

        const productDataFromReq = { ...req.body, slug: slugify };
        const newProduct = await Product.create(productDataFromReq);
        return res.status(201).json({
            message: "Product created successfully",
            data: newProduct
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

export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        res.status(200).json({
            message: "Products fetched successfully",
            data: allProducts
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


export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const findProduct = await Product.findById(id);
        res.status(200).json({
            message: "Product fetched successfully",
            data: findProduct
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


export const updateProduct = async (req, res) => {
    try {
        // Take id from req.params
        const { id } = req.params;

        // Find the product by Id and update
        const newUpdatedPoduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json({
            message: "Product updated successfully",
            data: newUpdatedPoduct
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


export const deleteProduct = async (req, res) => {
    try {
        // get id from params
        const { id } = req.params;

        const findAndDeleteProduct = await Product.findByIdAndDelete(id);
        res.status(200).json({
            message: "Product deleted successfully",
            data: findAndDeleteProduct
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
