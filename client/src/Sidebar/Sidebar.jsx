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
} from "lucide-react";

const Sidebar = () => {
  const iconsTop = [Menu, PhoneCall, ChartPie];
  const iconsBottom = [Star, Archive, Settings, CircleUserRound];
  return (
    <div className="flex flex-col items-center justify-between h-screen bg-primary text-muted-foreground py-4 ">
      <div className="flex flex-col gap-6">
        {iconsTop.map((Icon, key) => (
          <Icon
            key={key}
            className="size-6 hover-sidebar-icons cursor-pointer hover:text-secondary"
          />
        ))}
      </div>
      <div className="flex flex-col gap-6 ">
        {iconsBottom.map((Icon, key) => (
          <Icon
            key={key}
            className="size-6 hover-sidebar-icons cursor-pointer hover:text-secondary"
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
