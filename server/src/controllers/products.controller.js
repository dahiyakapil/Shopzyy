import Product from "../models/product.model.js";
import { generateSlug } from "../utils/slugify.js";
import mongoose from "mongoose";

export const createProduct = async (req, res) => {
  try {
    const { title, category, brand } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Product title is required" });
    }


    if (!mongoose.Types.ObjectId.isValid(category)) {
      return res.status(400).json({ message: "Invalid category id" });
    }

    if (!mongoose.Types.ObjectId.isValid(brand)) {
      return res.status(400).json({ message: "Invalid brand id" });
    }

    const slug = generateSlug(title);

    const existingProduct = await Product.findOne({ slug });
    if (existingProduct) {
      return res.status(409).json({
        message: "Product with same title already exists"
      });
    }

    const newProduct = await Product.create({
      ...req.body,
      slug
    });

    return res.status(201).json({
      message: "Product created successfully",
      data: newProduct
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
};


export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find().populate("brand", "name").populate("category", "name");
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
