import express from "express";
import { createBrand } from "../controllers/brand.controller.js";


const brandRouter = express.Router();


brandRouter.post("/create-brand", createBrand);

export default brandRouter;