import React, { useState } from "react";
import {
  Menu,
  MessageCircleMore,
  ChartPie,
  PhoneCall,
  Star,
  Archive,
  Settings,
  CircleUserRound,
} from "lucide-react";
import SidebarToggle from "./SidebarToggle";
import Profile from "../components/Profile/Profile";

const Sidebar = ({ onTabChange }) => {
  const iconsTop = [Menu, MessageCircleMore, PhoneCall, ChartPie];
  const iconsBottom = [Star, Archive, Settings, CircleUserRound];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ToggleMenu = () => {
    setIsMenuOpen(() => !isMenuOpen);
  };
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleIconClick = (id) => {
    switch (id) {
      case 0:
        ToggleMenu();
        break;
      case 1:
        onTabChange("chats");
        break;
      case 2:
        onTabChange("calls");
        break;
      case 3:
        onTabChange("status");
        break;
      default:
        break;
    }
  };

  const handleIconBottomClick = (id) => {
    switch (id) {
      case 0:
        // ToggleMenu();
        break;
      case 1:
        // alert("Calling...");
        break;
      case 2:
        // console.log("Chart clicked");
        break;
      case 3: // CircleUserRound icon
        setIsProfileOpen((prev) => !prev); // toggle profile
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-primary text-muted-foreground py-4 ">
      <div className="flex flex-col gap-6">
        {iconsTop.map((Icon, key) => (
          <Icon
            key={key}
            onClick={() => handleIconClick(key)}
            className="size-6 hover-sidebar-icons cursor-pointer hover:text-secondary"
          />
        ))}
      </div>
      <div className="flex flex-col gap-6 ">
        {iconsBottom.map((Icon, key) => (
          <Icon
            onClick={() => handleIconBottomClick(key)}
            key={key}
            className="size-6 hover-sidebar-icons cursor-pointer hover:text-secondary"
          />
        ))}
      </div>
      <SidebarToggle isMenuOpen={isMenuOpen} />
      <Profile isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </div>
  );
};

export default Sidebar;
