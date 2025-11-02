import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String },
  password: { type: String },
  phone: { type: String },
  avatar: { type: String },
  provider: { type: String, enum: ["local", "google", "facebook"], default: "local" },
}, { timestamps: true });

export default mongoose.model("User", userSchema);
