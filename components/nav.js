import Link from "next/link";
import bars from "../images/bars.png";
import Image from "next/image";
import { useState, useRef } from "react";
import Sidebar from "./sidebar";

export default function Nav() {
  const [showSidebar, setShowSidebar] = useState(false);
  const ref = useRef(null);

  const toggleSidebar = () => {
    ref.current.classList.toggle("open");
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <Sidebar
        Ref={ref}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <nav className="flex md:hidden justify-between w-full">
        <p className="font-a text-owhite text-2xl">Snippets</p>
        <div className="flex space-x-4">
          <button
            ref={ref}
            id="menu-btn"
            class="block hamburger focus:outline-none z-20"
            onClick={(e) => {
              toggleSidebar();
            }}
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>
      </nav>

      <nav className="hidden md:flex justify-between text-owhite mb-10 ">
        <p className="font-a text-owhite text-3xl">Snippets</p>
        <div className="flex justify-end space-x-10 text-xl">
          <Link href="/">
            <p className="cursor-pointer">Home</p>
          </Link>
          <Link href="/browse">
            <p className="cursor-pointer">Explore</p>
          </Link>
          <p className="cursor-pointer">Sign up</p>
          <p className="cursor-pointer">Login</p>
        </div>
      </nav>
    </div>
  );
}
