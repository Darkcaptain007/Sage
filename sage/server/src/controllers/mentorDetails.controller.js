import { asyncHandler, apiResponse, apiError } from "../utils/index.js";
import uploadToCloudinary from "../utils/cloudinary.util.js";
import { MentorDetails } from "../models/mentorDetails.model.js";

/*
 * @desc Register mentor details
 * @route POST /api/v1/mentor
 * @access Private
 */

const postMentorDetails = asyncHandler(async (req, res) => {
	const {
		field,
		upiId,
		description,
		fees,
		role,
		yearsOfExperience,
		company,
		eventLink,
	} = req.body;

	if (
		[
			field,
			upiId,
			description,
			fees,
			role,
			yearsOfExperience,
			company,
			eventLink,
		].some((val) => val?.trim() === "")
	) {
		throw new apiError(400, "All the details are required.");
	}

	const resumeLocalPath = req.file?.path;

	if (!resumeLocalPath) {
		throw new apiError(400, "Resume is required.");
	}

	const resume = await uploadToCloudinary(resumeLocalPath);

	console.log("Resume after upload: ", resume);

	if (!resume) {
		throw new apiError(500, "Could not upload resume to cloudinary.");
	}

	const details = await MentorDetails.create({
		mentorId: req.user._id,
		field,
		upiId,
		description,
		fees,
		role,
		yearsOfExperience,
		company,
		resume: resume.url,
		eventLink,
	});

	if (!details) {
		throw new apiError(400, "Could not store details of the mentor.");
	}

	return res
		.status(201)
		.json(new apiResponse(201, "Mentor details stored successfully", details));
});

/*
 * @desc Fetch mentor details
 * @route GET /api/v1/mentor
 * @access Private
 */

const fetchMentorDetails = asyncHandler(async (req, res) => {
	const details = await MentorDetails.findOne({ mentorId: req.user._id });

	if (!details) {
		throw new apiError(400, "Mentor details not found.");
	}

	return res
		.status(200)
		.json(new apiResponse(200, "Mentor details fetched successfully", details));
});

/*
 * @desc Fetch unique mentor fields
 * @route GET /api/v1/mentor/fields
 * @access Private
 */

const fetchFields = asyncHandler(async (req, res) => {
	const fields = await MentorDetails.find().distinct("field");

	if (!fields) {
		throw new apiError(400, "Fields not found.");
	}

	return res
		.status(200)
		.json(new apiResponse(200, "Fields fetched successfully", fields));
});

export { postMentorDetails, fetchMentorDetails, fetchFields };
