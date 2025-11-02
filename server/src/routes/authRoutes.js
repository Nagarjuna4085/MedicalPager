import express from "express";
import {
  registerUser,
  loginUser,
  socialAuth,
  verifyPhone,
} from "../controllers/authController.js";

const router = express.Router();

// @desc Register a new user
router.post("/register", registerUser);

// @desc Login user with email/password
router.post("/login", loginUser);

// @desc Login/Register using Google or Facebook
router.post("/social", socialAuth);

// @desc Verify phone number (later integrate OTP)
router.post("/verify-phone", verifyPhone);

export default router;
