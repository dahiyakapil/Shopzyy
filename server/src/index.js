import dotenv from "dotenv";
dotenv.config();
import express, { urlencoded } from "express";
import cors from "cors"
import morgan from "morgan";
import { dbConnect } from "./config/dbConnect.js";


const app = express();
app.use(cors(
    {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"]
    },

));

// For reading JSON Data
app.use(express.json());
app.use(morgan("dev"));

app.use(urlencoded({ extended: true }));

// Connect Databse
dbConnect()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.error("Failed to connect to the database:", error);
    })



process.on("unhandledRejection", (error) => {
    console.error("Unhandled Promise Rejection:", error.message);
    process.exit(1);
})




