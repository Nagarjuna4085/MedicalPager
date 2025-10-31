import React, { useEffect, useRef, useState } from "react";
import profileImg from "../assets/images/profile.jpg";
import { messages as initialMessages } from "../data/messages";
import EmojiPicker from "emoji-picker-react";

import {
  Mic,
  Video,
  PhoneOutgoing,
  Search,
  Smile,
  Paperclip,
} from "lucide-react";
import VideoCall from "../components/Video/VideoCall";
import AudioCall from "../components/Video/AudioCall";

const ChatPage = ({ user }) => {
  const bottomRef = useRef(null);

  // ✅ State for messages
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isVideoCalling, setIsVideoCalling] = useState(false);
  const [isAudioCalling, setIsAudioCalling] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiRef = useRef(null);

  const toggleVideoCall = () => {
    setIsVideoCalling((prev) => !prev);
  };
  const toggleAudioCall = () => {
    setIsAudioCalling((prev) => !prev);
  };

  // Group messages by date (YYYY-MM-DD)
  const groupedMessages = {};
  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];
    const date = msg.date.split("T")[0]; // ignore time
    if (!groupedMessages[date]) groupedMessages[date] = [];
    groupedMessages[date].push(msg);
  }

  // Scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Close emoji picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        setShowEmojiPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Format date header
  const formatDate = (dateStr) => {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const date = new Date(dateStr).toDateString();
    if (date === today) return "Today";
    if (date === yesterday) return "Yesterday";
    return date;
  };

  // Add new message function
  const handleSend = () => {
    if (!newMessage.trim()) return;

    const now = new Date();
    const messageObj = {
      text: newMessage,
      sender: "Me",
      date: now.toISOString(), // include time
    };

    setMessages((prev) => [...prev, messageObj]);
    setNewMessage("");
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between border border-amber-50 bg-primary p-1">
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10 rounded-full"
            src={profileImg}
            alt="user icon"
          />
          <div className="flex flex-col">
            <div className="text-Secondary font-bold">{user.name}</div>
            <div className="text-muted">last seen today at 5:00 am</div>
          </div>
        </div>
        <div className="flex gap-6 items-center mr-3">
          <div className="flex gap-4 border border-border">
            <Video size={24} onClick={toggleVideoCall} />
            <PhoneOutgoing onClick={toggleAudioCall} size={20} />
          </div>
          <Search size={20} />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-2">
        {Object.keys(groupedMessages)
          .sort((a, b) => new Date(a) - new Date(b)) // sort by date
          .map((date) => (
            <div key={date} className="flex flex-col gap-2">
              <div className="flex justify-center text-white">
                <div className="bg-black px-4 py-1 text-sm rounded-sm">
                  {formatDate(date)}
                </div>
              </div>
              {groupedMessages[date]
                .sort((a, b) => new Date(a.date) - new Date(b.date)) // sort by time
                .map((msg, idx) => (
                  <div
                    key={idx}
                    className={`relative group p-2 rounded-lg ${
                      msg.sender === "Me"
                        ? "self-end bg-message-sent"
                        : "self-start bg-message-received"
                    }`}
                  >
                    {msg.text}

                    {/* Reaction Picker (visible on hover) */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:flex gap-1 bg-gray-800 text-white px-2 py-1 rounded-full shadow-lg">
                      {["😂", "❤️", "👍", "😮", "😢"].map((emoji, i) => (
                        <span
                          key={i}
                          className="cursor-pointer hover:scale-125 transition-transform"
                          onClick={() => console.log(`Reacted with ${emoji}`)}
                        >
                          {emoji}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        <div ref={bottomRef}></div>
      </div>

      {/* Footer */}
      <div
        className="flex justify-between px-2 pb-2 ml-2 mr-2 gap-4 border border-amber-50 relative"
        ref={emojiRef}
      >
        <div className="flex items-center gap-4 relative">
          <Smile
            size={24}
            onClick={() => setShowEmojiPicker((prev) => !prev)}
            className="cursor-pointer"
          />

          {/* Emoji Picker Popover */}
          {showEmojiPicker && (
            <div
              className="absolute bottom-12 left-40 -translate-x-1/2 z-50"
              style={{ boxShadow: "0 0 10px rgba(0,0,0,0.3)" }}
            >
              <EmojiPicker
                onEmojiClick={(emoji) => {
                  setNewMessage((prev) => prev + emoji.emoji);
                  setShowEmojiPicker(false);
                }}
                theme="dark"
              />
            </div>
          )}

          <Paperclip />
        </div>

        <div className="flex-1 flex items-center">
          <input
            placeholder="Type a message"
            className="p-2 w-full"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
        </div>

        <div className="flex items-center">
          <Mic onClick={handleSend} />
        </div>
      </div>

      <VideoCall
        isVideoCalling={isVideoCalling}
        onEndCall={() => setIsVideoCalling(false)}
      />

      <AudioCall
        isCalling={isAudioCalling}
        onEndCall={() => setIsAudioCalling(false)}
      />
    </div>
  );
};

export default ChatPage;
