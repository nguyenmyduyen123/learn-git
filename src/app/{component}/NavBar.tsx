"use client";
import React from "react";
import { Bell, Menu, Settings, Sun } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../redux";
import { setIsSidebarCollapse } from "@/state";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapse = useAppSelector(
    (state) => state.global.isSidebarCollapse
  );

  const toggleSideBar = () => {
    dispatch(setIsSidebarCollapse(!isSidebarCollapse));
  };
  return (
    <div className={`flex justify-between items-center w-full mb-7`}>
      {/* //LEFT SIDE */}
      <div className={`flex justify-between items-center gap-5`}>
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSideBar}
        >
          <Menu className="w-4 h-4" />
        </button>
        <div className="relative">
          <input
            type="search"
            placeholder="Start typing to search products"
            className="pl-10 pr-4 py-2 w-50 border-2 border-gray-200 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>
      {/* //RIGHT SIDE */}
      <div className={`flex justify-between items-center gap-5`}>
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={() => {}}>
              <Sun className="text-gray-500" size={24} />
            </button>
          </div>
          <div className="relative">
            <button>
              <Bell className="text-gray-500" size={24} />
              <span className="absolute -top-2 -right-2 bg-red-400 rounded-full inline-flex items-center justify-between px-[0.4rem] py-1 text-xs leading-none font-semibold text-red-100">
                5
              </span>
            </button>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9">Image </div>
            <span className="font-seminbold"> Duyen </span>
          </div>
          <Link href={"/setting"}>
            <Settings className="text-gray-500" size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
