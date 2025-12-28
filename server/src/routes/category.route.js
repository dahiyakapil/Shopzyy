import express from "express";
import { createCategory } from "../controllers/category.controller.js";


const categoryRouter = express.Router();


categoryRouter.post("/create-category", createCategory);

export default categoryRouter;