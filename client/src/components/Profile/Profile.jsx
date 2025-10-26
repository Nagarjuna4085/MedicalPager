import { useState, useEffect, useRef } from "react";
import profileImg from "../../assets/images/profile.jpg";
import {
  LaptopMinimal,
  KeyRound,
  MessagesSquare,
  Video,
  Bell,
  Pencil,
  Server,
  Keyboard,
  Info,
} from "lucide-react";
import General from "./General";
import { Account } from "./Account";

const tabs = [
  { id: "General", icon: LaptopMinimal, label: "General" },
  { id: "Account", icon: KeyRound, label: "Account" },
  { id: "Chats", icon: MessagesSquare, label: "Chats" },
  { id: "Video", icon: Video, label: "Video" },
  { id: "Notifications", icon: Bell, label: "Notifications" },
  { id: "Edit", icon: Pencil, label: "Edit" },
  { id: "Server", icon: Server, label: "Server" },
  { id: "Keyboard", icon: Keyboard, label: "Keyboard" },
  { id: "Info", icon: Info, label: "Info" },
];

const Profile = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState(""); // "" means show user info by default
  const panelRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose(); // call the parent function to close
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div
      ref={panelRef}
      className={`fixed bottom-0 left-0 h-[80vh] w-[350px] bg-white shadow-lg flex border border-gray-200 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Tabs on left */}
      <div className="flex flex-col w-30 border-r border-gray-200 bg-gray-50 p-2 gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <div className="">
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex gap-2  items-center justify-center p-2 rounded hover:bg-gray-100 transition-colors ${
                  activeTab === tab.id ? "bg-gray-200" : ""
                }`}
              >
                <Icon size={20} />
                <p className="text-xs mt-1">{tab.label}</p>
              </button>
            </div>
          );
        })}
      </div>

      {/* Content on right */}
      <div className="flex-1 p-4 flex flex-col gap-6">
        {activeTab === "" && (
          <div className="flex flex-col items-center gap-4">
            <img
              src={profileImg}
              alt="Profile"
              className="w-28 h-28 rounded-full"
            />
            <div className="text-xl font-bold">Alice</div>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Logout
            </button>
          </div>
        )}

        {activeTab === "General" && <General />}

        {activeTab === "Account" && <Account />}

        {activeTab === "Chats" && (
          <div>
            <h2 className="font-bold text-lg mb-2">Chats Settings</h2>
            <p>Manage chat preferences, wallpapers, and notifications.</p>
          </div>
        )}

        {/* Add more tabs as needed */}
      </div>
    </div>
  );
};

export default Profile;
