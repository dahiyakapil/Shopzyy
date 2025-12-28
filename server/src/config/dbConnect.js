import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        throw new Error(`Database connection failed: ${error.message}`);
        process.exit(1); // Exit process with failure, if needed
    }
}