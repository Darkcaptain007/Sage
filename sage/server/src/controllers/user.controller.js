import { asyncHandler, apiResponse, apiError } from "../utils/index.js";
import { User } from "../models/user.model.js";
import mongoose from "mongoose";
import { defaultProfilePic } from "../constants.js";

const generateToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new apiError(404, "User not found while generating token.");
    }

    const token = await user.generateToken();

    user.token = token;

    await user.save({ validateBeforeSave: false });

    return token;
  } catch (error) {
    throw new apiError(500, "Error generating token.");
  }
};

const options = {
  httpOnly: true,
  secure: true,
};

/*
 * @desc Register/Login user
 * @route POST /api/v1/user/register
 * @access Public
 */

const login = asyncHandler(async (req, res) => {
  const { email, name, profilePic, isMentor } = req.body;

  if (!email || !name) {
    throw new apiError(400, "Email and name are required.");
  }

  const existingUser = await User.findOne({ email }).select("-token");

  if (existingUser) {
    const token = await generateToken(existingUser._id);

    return res
      .status(200)
      .cookie("token", token, options)
      .json(new apiResponse(200, "User logged in successfully.", existingUser));
  }

  const user = await User.create({
    email,
    name,
    profilePic: profilePic ? profilePic : defaultProfilePic,
    isMentor,
  });

  if (!user) {
    throw new apiError(500, "Error creating user.");
  }

  console.log("User id before generating tokens: ", user._id);

  const token = await generateToken(user._id);

  const loggedInUser = await User.findById(user._id).select("-token");

  return res
    .status(200)
    .cookie("token", token, options)
    .json(
      new apiResponse(
        200,
        "User created and logged in successfully.",
        loggedInUser
      )
    );
});

/*
 * @desc Logout user
 * @route POST /api/v1/user/logout
 * @access Private
 */

const logout = asyncHandler(async (_, res) => {
  return res
    .status(200)
    .clearCookie("token", options)
    .json(new apiResponse(200, "User logged out successfully."));
});

export { login, logout };
