import { Router } from "express";
import MentorList from "../controllers/MentorList.js"; // Import the controller

const router = Router();

// Correctly access the getMentors function from the MentorList object
router.route("/getMentorList").get(MentorList.getMentors);

export default router;
