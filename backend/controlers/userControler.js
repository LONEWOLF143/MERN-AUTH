
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js"
// Auth user/set token
// public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'This is the gadem auth user' });
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
    res.status(200).json({ message: 'Logout user' });
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
