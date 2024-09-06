import express from "express";
import { User } from "./models/user.model.js";
import { asyncHandler, apiResponse, apiError } from "./utils/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));

// importing routes
import healthCheckRouter from "./routes/healthCheck.routes.js";
import userRouter from "./routes/user.routes.js";
import mentorDetailsRouter from "./routes/mentorDetails.routes.js";
import getMentor from "./routes/getMentor.routes.js";
// declaring routes
app.use("/api/v1/health-check", healthCheckRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/mentor", mentorDetailsRouter);
app.use("/api/v1/getmentor", getMentor);
export default app;
