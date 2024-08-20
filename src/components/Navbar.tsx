import { BellPlus, CircleUserRound, MessageCircleMore, Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/** Search Bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-600 px-2">
        <Search className="w-4 h-4" />
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
      </div>
      {/** Icons and User Profile */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <MessageCircleMore className="w-5 h-5"  />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <BellPlus className="w-5 h-5" />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-blue-500 text-white rounded-full text-xs">1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <CircleUserRound className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Navbar;
