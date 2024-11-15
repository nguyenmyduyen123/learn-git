"use client";
import React, { useEffect } from "react";
import NavBar from "../{component}/NavBar";
import SideBar from "../{component}/SideBar";
import { useAppSelector } from "../redux";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapse = useAppSelector(
    (state) => state.global.isSidebarCollapse
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`${
        isDarkMode ? "dark" : "light"
      } dark flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
      <SideBar />
      <main
        className={`flex flex-col w-full h-full py-7 px-7 bg-gray-200 ${
          isSidebarCollapse ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <NavBar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
