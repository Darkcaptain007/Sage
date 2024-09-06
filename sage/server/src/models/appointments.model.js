import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
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
		startTime: {
			type: Date,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		duration: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export const Appointment = mongoose.model("Appointment", appointmentSchema);
