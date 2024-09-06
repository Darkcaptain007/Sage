import { Router } from "express";
import { login, logout } from "../controllers/user.controller.js";

const router = Router();

router.route("/login").post(login);
router.route("/logout").post(logout);

export default router;
