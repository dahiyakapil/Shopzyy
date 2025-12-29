import dotenv from "dotenv";
dotenv.config();
import express, { urlencoded } from "express";
import cors from "cors"
import morgan from "morgan";
import { dbConnect } from "./config/dbConnect.js";
import userRouter from "./routes/user.route.js";
import productsRouter from "./routes/products.route.js";
import cookieParser from "cookie-parser"
import brandRouter from "./routes/brand.route.js";
import categoryRouter from "./routes/category.route.js";
import reviewRouter from "./routes/review.route.js";

const app = express();
app.use(cors(
    {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"]
    },

));
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

// Import Routes
app.use("/api/user", userRouter);
app.use("/api/products", productsRouter)
app.use("/api/brands", brandRouter)
app.use("/api/category", categoryRouter)
app.use("/api/reviews", reviewRouter);

// Connect Databse
dbConnect()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port http://localhost:${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.error("Failed to connect to the database:", error);
    })



app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

// Graceful shutdown
process.on("unhandledRejection", (error) => {
  console.error("Unhandled Rejection:", error?.message); 
  process.exit(1);
});