import express from "express";
// import {
//   sendMessage,
//   getMessagesByChatId,
// } from "../controllers/messageController.js";
// import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// @desc Send a new message
router.post("/", (req,res)=>{
    console.log(req,res,"Hello World")
});

// @desc Get all messages for a chat
router.get("/:chatId", (req,res)=>{
    console.log(req,res,"Hello World")
});

export default router;
