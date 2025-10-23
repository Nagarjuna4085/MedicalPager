import React from "react";
import profileImg from "../assets/images/profile.jpg";
import {
  Mic,
  Video,
  PhoneOutgoing,
  Search,
  Smile,
  Paperclip,
  User,
} from "lucide-react";
const ChatPage = () => {
  const messages = [
    { text: "Hello!", sender: "Alice", date: "2025-10-23" },
    { text: "Hi Alice!", sender: "Me", date: "2025-10-23" },
    { text: "How are you?", sender: "Alice", date: "2025-10-22" },
    { text: "I'm good, thanks!", sender: "Me", date: "2025-10-22" },
    { text: "I'm good, thanks!", sender: "Me", date: "2025-10-22" },
    { text: "I'm good, thanks!", sender: "Me", date: "2025-10-22" },
    { text: "I'm good, thanks!", sender: "Me", date: "2025-10-22" },
    { text: "I'm good, thanks!", sender: "Me", date: "2025-10-22" },
    { text: "I'm good, thanks!", sender: "Me", date: "2025-10-22" },
    { text: "I'm good, thanks!", sender: "Me", date: "2025-10-22" },
    { text: "I'm good, thanks!", sender: "Me", date: "2025-10-22" },
    { text: "I'm good, thanks!", sender: "Me", date: "2025-10-22" },
  ];
  const groupedMessages = {}; // empty object to store messages by date

  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i]; // current message
    const date = msg.date; // message date

    // if this date is not in the object, create an array for it
    if (!groupedMessages[date]) {
      groupedMessages[date] = [];
    }

    // add the message to the array for this date
    groupedMessages[date].push(msg);
  }

  console.log(groupedMessages);

  const formatDate = (dateStr) => {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const date = new Date(dateStr).toDateString();

    if (date === today) return "Today";
    if (date === yesterday) return "Yesterday";
    return date;
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      {/* header audio,video icons */}
      <div className=" flex justify-between border border-amber-50 bg-primary  p-1">
        <div className="flex gap-2 justify-center items-center">
          <div className="">
            <img
              className="h-10 w-10 rounded-full"
              src={profileImg}
              alt="user icon"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-Secondary font-bold ">Alice</div>
            <div className="text-muted">last seen today at 5:00 am</div>
          </div>
        </div>
        <div className="flex gap-6 justify-center items-center mr-3">
          <div className="flex gap-4  border border-border">
            <Video size={24} />
            <PhoneOutgoing size={20} />
          </div>
          <div>
            <Search size={20} />
          </div>
        </div>
      </div>
      {/* message history ->*/}

      {/* <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-2">
        <div className="flex justify-center text-white">
          <div className=" bg-black px-4 py-1 text-sm rounded-sm">Today</div>
        </div>

        <div className="self-start bg-message-received p-2 rounded-lg">
          Hello!
        </div>
        <div className="self-end bg-message-sent p-2 rounded-lg">Hi Alice!</div>
      </div> */}
      <div className="flex-1 overflow-y-auto p-2 flex flex-col-reverse gap-2">
        {Object.keys(groupedMessages).map((date) => (
          <div key={date} className="flex flex-col gap-2">
            {/* Date separator */}
            <div className="flex justify-center text-white">
              <div className="bg-black px-4 py-1 text-sm rounded-sm">
                {formatDate(date)}{" "}
                {/* You can format this as 'Today', 'Yesterday' */}
              </div>
            </div>

            {/* Messages for that date */}
            {groupedMessages[date].map((msg, idx) => (
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
      </div>

      {/* footer- emoji,files, input for sending and audio recording */}
      <div className="flex justify-between px-2 pb-2 ml-2 mr-2 gap-4 border border-amber-50">
        <div className="flex justify-center items-center gap-4 ">
          <Smile />
          <Paperclip />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <input placeholder="Type a message" className="p-2 w-full" />
        </div>
        <div className="flex justify-center items-center">
          <Mic />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
