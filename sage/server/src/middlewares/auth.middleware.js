import { asyncHandler, apiError } from "../utils/index.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const authorize = asyncHandler(async (req, res, next) => {
	try {
		const token =
			req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");

		if (!token) {
			throw new apiError(401, "No token found!");
		}

		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

		const user = await User.findById(decodedToken._id).select("-token");

		if (!user) {
			throw new apiError(404, "User not found! Invalid token!");
		}

		req.user = user;

		next();
	} catch (error) {
		throw new apiError(401, "Invalid token!");
	}
});

export default authorize;
