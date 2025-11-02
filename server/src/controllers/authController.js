import User from "../models/userModel.js";
import { hashPassword, comparePassword } from "../utils/hashPassword.js";
// import { generateToken } from "../utils/generateToken.js";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "User already exists" });

    const hashed = await hashPassword(password);
    const user = await User.create({ name, email, password: hashed });
    const token = "generateToken(user._id)";

    res.status(201).json({ user, token });
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await comparePassword(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = "generateToken(user._id)";
    res.json({ user, token });
  } catch (err) {
    next(err);
  }
};

export const socialAuth = async (req, res) => {
  res.json({ message: "Social Auth (Google/Facebook) placeholder" });
};

export const verifyPhone = async (req, res) => {
  res.json({ message: "Phone verification placeholder" });
};
