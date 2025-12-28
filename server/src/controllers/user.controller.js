import { generateJWTToken } from "../config/generateJwtToken.js";
import User from "../models/user.model.js";

export const registerUser = async (req, res) => {

    const { firstName, lastName, email, password } = req.body;

    try {
        if (!firstName || !email || !password) {
            return resizeBy.status(400).json({
                message: "Enter all fields required"
            })
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            })
        }




        const newUser = new User({ firstName, lastName, email, password});

        // now save the user
        await newUser.save();

        res.status(201).json({
            message: "User created successfully !!!",
            data: newUser,
            token: generateJWTToken(newUser._id)
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        })
    }
}