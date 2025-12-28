import { generateJWTToken } from "../config/generateJwtToken.js";
import User from "../models/user.model.js";

export const registerUser = async (req, res) => {

    const { firstName, lastName, email, password } = req.body;

    try {
        if (!firstName || !email || !password) {
            return res.status(400).json({
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

        const newUser = new User({ firstName, lastName, email, password });

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


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }


        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched) {
            return res.status(401).json({ message: "Invalid Credentials", error: error.message })
        }

        // User can login now
        return res.status(200).json({ message: "Login Successful", data: user, token: generateJWTToken(user._id) })
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error: error.message
        })
    }
}



export const getAllUsers = async (req, res) => {

    try {
        const allUsers = await User.find();
        return res.status(200).json({ message: "All users fetched", data: allUsers })
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error: error.message
        })
    }
}


export const getUsreById = async (req, res) => {

    try {
        const { id } = req.params;

        // Now find user by id 
        const user = await User.findById(id).select("-password");

        if (!user) {
            return res.status(400).json({
                messaege: "User not found",
            })
        }
        res.status(200).json({
            message: "User found succesfully",
            userData: user
        })
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message })
    }
}