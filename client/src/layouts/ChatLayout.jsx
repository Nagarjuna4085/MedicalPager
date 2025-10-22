import { useState } from "react";
import ChatList from "../components/ChatList/ChatList";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import ChatPage from "../pages/ChatPage";
import Sidebar from "../Sidebar/Sidebar";

const ChatLayout = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="chat-container w-full">
      {/* side bar */}
      <div className="bg-primary w-15 flex-shrink-0">
        <Sidebar />
      </div>

      {/* users and chatwindow */}
      <div className="flex w-full ">
        {/* users */}
        <div
          className={` w-full sm:w-1/4  ${
            selectedUser ? "hidden  sm:block" : "block w-full sm:block "
          }`}
        >
          <ChatList />
        </div>
        {/* chatwindow */}
        <div
          className={` flex-1 ${
            selectedUser ? "w-full block" : "hidden sm:block"
          } `}
        >
          {selectedUser ? <ChatPage /> : <ChatWindow />}
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
