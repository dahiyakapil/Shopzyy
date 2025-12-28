import { generateJWTToken } from "../config/generateJwtToken.js";
import { generateRefreshToken } from "../config/generateRefreshToken.js";
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

        const findUser = await User.findOne({ email });

        if (findUser && (await findUser.comparePassword(password))) {
            const refreshToken = await generateRefreshToken(findUser?.id);
            const updateUser = await User.findByIdAndUpdate(
                findUser._id,
                {
                    refreshToken: refreshToken
                },
                {
                    new: true
                }
            );

            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                maxAge: 72 * 60 * 60 * 1000,// 72 hours = 3 days
            })

            res.json({
                message: "User logged in successfully",
                _id: findUser?._id,
                firstName: findUser?.firstName,
                lastName: findUser?.lastName,
                email: findUser?.email,
                token: generateJWTToken(findUser._id),
            })
        } else {
            return res.status(401).json({ message: "Invalid Credentials" })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error: error.message
        })
    }
}

export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const findAdmin = await User.findOne({ email });

        if (findAdmin && (await findAdmin.comparePassword(password))) {
            // res.json(findUser);
            const refreshToken = await generateRefreshToken(findAdmin?.id);
            const updateuser = await User.findByIdAndUpdate(
                findAdmin?._id,
                { refreshToken: refreshToken },
                {
                    new: true,
                }
            );
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                maxAge: 72 * 60 * 60 * 1000,
            });
            res.json({
                message: "Admin logged in successfully",
                _id: findAdmin?._id,
                firstName: findAdmin?.firstName,
                lastName: findAdmin?.lastName,
                email: findAdmin?.email,
                token: generateJWTToken(findAdmin?._id),
            });
        } else {
            throw new Error("Invalid Credential");
        }
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