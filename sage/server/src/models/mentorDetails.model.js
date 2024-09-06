import mongoose from "mongoose";

const mentorDetailsSchema = new mongoose.Schema(
	{
		mentorId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		field: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		fees: {
			type: String,
			required: true,
			trim: true,
		},
		upiId: {
			type: String,
			required: true,
			trim: true,
		},
		role: {
			type: String,
			required: true,
			trim: true,
		},
		yearsOfExperience: {
			type: String,
			required: true,
			trim: true,
		},
		company: {
			type: String,
			required: true,
			trim: true,
		},
		eventLink: {
			type: String,
			required: true,
			trim: true,
		},
		resume: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export const MentorDetails = mongoose.model(
	"MentorDetails",
	mentorDetailsSchema
);
