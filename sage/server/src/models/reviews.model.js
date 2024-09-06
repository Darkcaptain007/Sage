import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
	{
		mentorId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		menteeId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		rating: {
			type: Number,
			required: true,
		},
		comment: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export const Review = mongoose.model("Review", reviewSchema);
