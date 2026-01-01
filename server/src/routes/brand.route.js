import express from "express";
import { createBrand, deleteBrandById, getAllBrands } from "../controllers/brand.controller.js";

import { authMiddleware, isAdmin } from "../middleware/auth.middleware.js";
const brandRouter = express.Router();


brandRouter.post("/create-brand", authMiddleware, isAdmin, createBrand);
brandRouter.get("/get-all-brands",authMiddleware, isAdmin, getAllBrands);
brandRouter.delete("/:brandId", authMiddleware, isAdmin, deleteBrandById);

export default brandRouter;