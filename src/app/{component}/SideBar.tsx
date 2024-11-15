import { Archive, Clipboard, Layout, LucideIcon, Menu } from "lucide-react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import { setIsSidebarCollapse } from "@/state";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapse: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapse,
}: SidebarLinkProps) => {
  const pathName = usePathname();
  const isActive =
    href === pathName || (pathName === "/" && href === "/dashboard");
  return (
    <Link href={href}>
      <div
        className={`flex items-center ${
          isCollapse ? "jsutify-center py-4" : "justify-start px-8 py-4"
        } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors
        ${isActive ? "bg-blue-200 text-white" : ""}
        
        `}
      >
        <Icon />
        <span>{label}</span>
      </div>
    </Link>
  );
};

const SideBar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapse = useAppSelector(
    (state) => state.global.isSidebarCollapse
  );
  const sidebarClassName = `bg-white  transition-all duration-300 overflow-hidden h-full shadow-md z-40 fixed flex flex-col ${
    isSidebarCollapse ? "w-0 md:w-16" : "w-25 md:w-64"
  }`;
  const toggleSideBar = () => {
    dispatch(setIsSidebarCollapse(!isSidebarCollapse));
  };
  const SidebarLinkData = [
    {
      href: "/dashboard",
      icon: Layout,
      label: "Dashboard",
      isCollapse: isSidebarCollapse,
    },
    {
      href: "/inventory",
      icon: Archive,
      label: "Inventory",
      isCollapse: isSidebarCollapse,
    },
    {
      href: "/products",
      icon: Clipboard,
      label: "Products",
      isCollapse: isSidebarCollapse,
    },
  ];
  return (
    <div className={sidebarClassName}>
      <div
        className={`${
          isSidebarCollapse ? "px-5" : "px-8"
        } flex gap-3 justify-between items-center pt-8`}
      >
        <div>Logo</div>
        <div
          className={`${
            isSidebarCollapse ? "px-5" : "px-8"
          } font-extrabold text-2xl`}
        >
          EDSTOCK
        </div>
        <button
          onClick={toggleSideBar}
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      <div className="flex-grow mt-8">
        {SidebarLinkData.map((data) => {
          return <SidebarLink key={data.label} {...data} />;
        })}
      </div>
      <div>
        <p className="text-center text-xs text-gray-500">@2024 CopyRight</p>
      </div>
    </div>
  );
};

export default SideBar;
