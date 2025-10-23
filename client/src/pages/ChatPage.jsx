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
  return (
    <div className="h-screen flex flex-col justify-between">
      {/* header audio,video icons */}
      <div className=" flex justify-between border border-amber-50 bg-red  p-1">
        <div className="flex gap-2 justify-center items-center">
          <div className="">
            <img
              className="h-10 w-10 rounded-full"
              src={profileImg}
              alt="user icon"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-primary font-bold ">Alice</div>
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
      <div className=""></div>
      {/* footer- emoji,files, input for sending and audio recording */}
      <div className="flex justify-between ml-2 mr-2 gap-4 border border-amber-50">
        <div className="flex justify-center items-center gap-4 ">
          <Smile />
          <Paperclip />
        </div>
        <div className="w-full flex justify-center items-center">
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
