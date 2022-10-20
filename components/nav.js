import React from "react";
import Link from "next/link";
import { useState, useRef } from "react";
import Sidebar from "./sidebar";
import { useData } from "../Context/dataContext";
import { getNavByPath } from "../helper/navigations";
import ToogleLight from "./toggle-light";

export default function Nav() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { activeNavbar } = useData();
  const ref = useRef(null);
  const toggleSidebar = () => {
    ref.current.classList.toggle("open");
    setShowSidebar(!showSidebar);
  };
  const NavLink = ({ pathName, label }) => {
    const selectedClass = activeNavbar === getNavByPath(pathName) && "border-b-4 border-opink";
    const className = `cursor-pointer pr-4 hover:text-opink font-bold ${selectedClass}`;
    return (
    <Link href={pathName}>
      <p className={className}>{label}</p>
    </Link>
  )}

  return (
    <div className="relative">
      <Sidebar
        Ref={ref}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <nav className="flex md:hidden justify-between w-full">
        <Link href="/" >
        <p className="font-a text-owhite text-2xl cursor-pointer" >Snippets</p></Link>
        <div className="flex space-x-4">
          <button
            ref={ref}
            id="menu-btn"
            className="block hamburger focus:outline-none z-20"
            onClick={(e) => {
              toggleSidebar();
            }}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>

      <nav className="hidden md:flex justify-between text-owhite mb-10 ">
        <Link href="/" >
        <p className="font-a text-owhite text-3xl cursor-pointer hover:text-opink font-bold"> Snippets </p></Link>
        <div className="flex justify-end space-x-10 text-xl">
          <NavLink pathName='/' label='Home'  />
          <NavLink pathName='/browse' label='Explore'  />
          <NavLink pathName='/register' label='Sign up'  />
          <NavLink pathName='/login' label='Login'  />
        </div>
      </nav>
      <ToogleLight />
    </div>
  );
}
