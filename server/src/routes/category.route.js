import express from "express";
import { createCategory, deleteCategoryById, getAllCategories } from "../controllers/category.controller.js";


const categoryRouter = express.Router();


categoryRouter.post("/create-category", createCategory);
categoryRouter.get("/get-all-categories", getAllCategories);
categoryRouter.delete("/:categoryId", deleteCategoryById);

export default categoryRouter;