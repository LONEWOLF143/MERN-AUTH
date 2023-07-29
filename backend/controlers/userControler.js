
import asyncHandler from "express-async-handler";
// Auth user/set token
// public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'This is the gadem auth user' });
});
//Register user
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Register user' });
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
