import { asyncHandler, apiResponse } from "../utils/index.js";

const healthCheck = asyncHandler(async (_, res) => {
	return res.status(200).json(new apiResponse(200, "OK", "Server is running."));
});

export { healthCheck };
