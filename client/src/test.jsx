import { useState } from "react";
import ChatList from "../components/ChatList/ChatList";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import ChatPage from "../pages/ChatPage";
import Sidebar from "../Sidebar/Sidebar";

const ChatLayout = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="flex h-screen">
      {/* Sidebar (icons) */}
      <div className="bg-primary border-r border-border text-primary-foreground w-16 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main section (Chat list + Chat window) */}
      <div className="flex flex-1">
        {/* Chat List */}
        <div
          className={`${
            selectedUser ? "hidden sm:block" : "block"
          } w-full sm:w-1/4 border-r border-border`}
        >
          <ChatList onSelectUser={setSelectedUser} />
        </div>

        {/* Chat Window */}
        <div className={`${selectedUser ? "block" : "hidden sm:block"} flex-1`}>
          {selectedUser ? (
            <ChatPage
              user={selectedUser}
              onBack={() => setSelectedUser(null)}
            />
          ) : (
            <ChatWindow />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
