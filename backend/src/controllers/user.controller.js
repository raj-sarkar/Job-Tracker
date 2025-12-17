import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../lib/utils.js";

export const signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        if (!email || !password || !name) {
            return res
                .status(400)
                .json({ message: "Please provide all credentials" });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res
                .status(400)
                .json({ message: "User with this mail already exist" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ email, name, password: hashedPassword });
        if (newUser) {
            generateToken(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        console.log("Error in signup controller:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Please provide all credentials" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res
                .status(404)
                .json({ message: "No user found with this email" });
        }

        const isPasswordSame = await bcrypt.compare(password, user.password);

        if (!isPasswordSame) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        generateToken(user._id, res);

        res.json({
            _id: user._id,
            email: user.email,
            name: user.name,
        });
    } catch (error) {
        console.log("Error in login controller:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "logged out successfully" });
    } catch (err) {
        console.log("Logout controller error:", err.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
