import React from "react";
import {
  Menu,
  MessageCircleMore,
  ChartPie,
  PhoneCall,
  Star,
  Archive,
  Settings,
  CircleUserRound,
  X,
} from "lucide-react";

const SidebarToggle = ({ isMenuOpen }) => {
  return (
    <div
      className={`fixed w-50 bg-chat-bg border border-border  top-0  h-screen transform transition-all duration-300 ${
        isMenuOpen
          ? "translate-x-0 opacity-100 left-12"
          : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex flex-col  justify-between h-screen bg-primary text-muted-foreground py-4  ">
        <div className="flex flex-col gap-6 ml-2 mr-2">
          <div className="invisible">Menu</div>
          <div className="flex justify-between">
            <div>Chats</div>
            <div className="rounded-full h-5 w-5 flex justify-center items-center bg-green-600 text-white text-xs">
              0
            </div>
          </div>
          <div className="flex justify-between">
            <div>Calls</div>
            <div className="rounded-full h-5 w-5 flex justify-center items-center bg-orange-400 text-amber-300 text-xs">
              0
            </div>
          </div>
          <div>Status</div>
        </div>
        <div className="flex flex-col gap-6 ml-2 ">
          <div>Starred messages</div>
          <div>Archived Chats</div>
          <div>Settings</div>
          <div>Profile</div>
          {/* {iconsBottom.map((Icon, key) => (
            <Icon
              key={key}
              className="size-6 hover-sidebar-icons cursor-pointer hover:text-secondary"
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default SidebarToggle;
