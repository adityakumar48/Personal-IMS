import express from "express";
import { login, register, verifyOTP } from "../controllers/authController";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/verify", verifyOTP);

export default router;
