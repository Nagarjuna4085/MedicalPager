import { useState, useEffect } from "react";
import ChatList from "../components/ChatList/ChatList";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import ChatPage from "../pages/ChatPage";
import Sidebar from "../Sidebar/Sidebar";
import CallHistory from "../components/Calls/CallHistory";
const ChatLayout = () => {
  const [selectedUser, setSelectedUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState("chats"); // "chats" | "status" | "calls"
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640); // ✅ track screen size

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ this handles clicking the Chat icon
  const handleChatToggle = () => {
    if (activeTab !== "chats") {
      setActiveTab("chats");
      return;
    }

    // If already in chats
    if (isSmallScreen && selectedUser) {
      // On mobile → go back to ChatList
      setSelectedUser(false);
    }
  };

  return (
    <div className="chat-container w-full">
      {/* side bar */}
      <div className="bg-primary w-15 flex-shrink-0">
        <Sidebar
          onTabChange={(val) => {
            setActiveTab(val);
          }}
          onChatToggle={handleChatToggle} // ✅ add this line
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
