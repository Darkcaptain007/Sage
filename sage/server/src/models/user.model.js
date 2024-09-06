import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { defaultProfilePic } from "../constants.js";

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		name: {
			type: String,
			required: true,
			trim: true,
		},
		profilePic: {
			type: String,
			default: defaultProfilePic,
		},
		isMentor: {
			type: Boolean,
			default: false,
		},
		token: {
			type: String,
		},
	},
	{ timestamps: true }
);

userSchema.methods.generateToken = function () {
	return jwt.sign(
		{
			_id: this._id,
			email: this.email,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: process.env.JWT_EXPIRY,
		}
	);
};

export const User = mongoose.model("User", userSchema);
