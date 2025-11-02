import express from "express";
// import { createChat, getUserChats } from "../controllers/chatController.js";
// import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// @desc Create a chat between two users
router.post("/", (req,res)=>{
    console.log(req,res,"Hello World")
});

// @desc Get all chats of a user
router.get("/", (req,res)=>{
    console.log(req,res,"Hello World")
});

export default router;
