import express from "express";
import { createProduct } from "../controllers/products.controller.js";
import { authMiddleware, isAdmin } from "../middleware/auth.middleware.js";

const productsRouter = express.Router();

productsRouter.post("/create-product", authMiddleware, isAdmin, createProduct)

export default productsRouter;