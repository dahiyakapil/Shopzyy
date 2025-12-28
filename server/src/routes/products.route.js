import express from "express";
import { createProduct, getAllProducts, getProductById, updateProduct } from "../controllers/products.controller.js";
import { authMiddleware, isAdmin } from "../middleware/auth.middleware.js";

const productsRouter = express.Router();

productsRouter.post("/create-product", authMiddleware, isAdmin, createProduct);
productsRouter.get("/all-products", authMiddleware, isAdmin, getAllProducts);
productsRouter.get("/:id", authMiddleware, isAdmin, getProductById);
productsRouter.put("/:id", authMiddleware, isAdmin, updateProduct);



export default productsRouter;