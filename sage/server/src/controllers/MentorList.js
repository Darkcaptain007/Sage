import { MentorDetails } from "../models/mentorDetails.model.js";
import { asyncHandler, apiResponse, apiError } from "../utils/index.js";

// The getMentors function to fetch mentors based on the field provided in the request
const getMentors = asyncHandler(async (req, res) => {
  const { Field } = req.body;

  // Validate if the Field is provided
  if (!Field || Field.trim() === "") {
    throw new apiError(400, "Field is required.");
  }

  // Fetch mentors from the database
  let mentors = await MentorDetails.aggregate([
    {
      $match: {
        field: Field,
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "mentorId",
        foreignField: "_id",
        as: "mentor",
        pipeline: [
          {
            $project: {
              _id: 1,
              name: 1,
              profilePic: 1,
            },
          },
        ],
      },
    },
  ]);

  console.log(mentors);

  // If no mentors found, throw an error
  if (!mentors || mentors.length === 0) {
    throw new apiError(500, "Could not fetch mentors.");
  }

  // Send the fetched mentors in the response
  return res
    .status(200)
    .json(new apiResponse(200, mentors, "Mentors fetched successfully."));
});

// Export getMentors as part of an object
export default { getMentors };
