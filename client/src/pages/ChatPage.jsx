import React, { useEffect, useRef, useState } from "react";
import profileImg from "../assets/images/profile.jpg";
import { messages as initialMessages } from "../data/messages";

import {
  Mic,
  Video,
  PhoneOutgoing,
  Search,
  Smile,
  Paperclip,
} from "lucide-react";

const ChatPage = () => {
  const bottomRef = useRef(null);

  // ✅ State for messages
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

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
            <div className="text-Secondary font-bold">Alice</div>
            <div className="text-muted">last seen today at 5:00 am</div>
          </div>
        </div>
        <div className="flex gap-6 items-center mr-3">
          <div className="flex gap-4 border border-border">
            <Video size={24} />
            <PhoneOutgoing size={20} />
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
                    className={`p-2 rounded-lg ${
                      msg.sender === "Me"
                        ? "self-end bg-message-sent"
                        : "self-start bg-message-received"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
            </div>
          ))}
        <div ref={bottomRef}></div>
      </div>

      {/* Footer */}
      <div className="flex justify-between px-2 pb-2 ml-2 mr-2 gap-4 border border-amber-50">
        <div className="flex items-center gap-4">
          <Smile />
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
    </div>
  );
};

export default ChatPage;
