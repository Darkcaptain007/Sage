import { Router } from "express";
import {
	postMentorDetails,
	fetchMentorDetails,
	fetchFields,
} from "../controllers/mentorDetails.controller.js";
import authorize from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

router
	.route("/")
	.post(authorize, upload.single("resume"), postMentorDetails)
	.get(authorize, fetchMentorDetails);
router.route("/fields").get(authorize, fetchFields);

export default router;
