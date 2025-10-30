import { useState } from "react";
import ChatList from "../components/ChatList/ChatList";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import ChatPage from "../pages/ChatPage";
import Sidebar from "../Sidebar/Sidebar";
import CallHistory from "../components/Calls/CallHistory";
const ChatLayout = () => {
  const [selectedUser, setSelectedUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState("chats"); // "chats" | "status" | "calls"

  return (
    <div className="chat-container w-full">
      {/* side bar */}
      <div className="bg-primary w-15 flex-shrink-0">
        <Sidebar
          onTabChange={(val) => {
            setActiveTab(val);
          }}
        />
      </div>

      {/* users and chatwindow */}
      <div className="flex w-full ">
        {/* users */}
        <div
          className={` w-full sm:w-1/3  ${
            selectedUser ? "hidden  sm:block" : "block w-full sm:block "
          }`}
        >
          {activeTab === "chats" && (
            <ChatList
              onSelectUser={(user) => {
                setCurrentUser(user);
                setSelectedUser(true);
              }}
            />
          )}

          {activeTab === "status" && (
            <div className="p-4 text-white">Status feature coming soon...</div>
          )}

          {activeTab === "calls" && <CallHistory />}
        </div>
        {/* chatwindow */}
        {activeTab === "chats" && (
          <div
            className={` flex-1 ${
              selectedUser ? "w-full block" : "hidden sm:block"
            } `}
          >
            {selectedUser ? <ChatPage user={currentUser} /> : <ChatWindow />}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatLayout;
