
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateTokens.js";
import User from "../models/userModel.js"
// Auth user/set token
// public
const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400);
        throw new Error('Invalid email or password')
    }
});
//Register user
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body

    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400);
        throw new Error('User already exist')
    }
    const user = await User.create({
        name,
        email,
        password
    })
    if(user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }
});
// logout user
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({ message: 'User logged out' });
});

//user profile
//private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'user profile' });
});
// update user
// @accessprivate
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'update user profile' });
});

export {
     authUser,
     registerUser,
     logoutUser,
     getUserProfile,
     updateUserProfile 
    };
