import Link from "next/link";
import bars from "../images/bars.png";
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
          <Link href="/">
            <p className="cursor-pointer hover:text-opink font-bold">Home</p>
          </Link>
          <Link href="/browse">
            <p className="cursor-pointer hover:text-opink font-bold">Explore</p>
          </Link>
          <p className="cursor-pointer hover:text-opink font-bold">Sign up</p>
          <p className="cursor-pointer hover:text-opink font-bold">Login</p>
        </div>
      </nav>
    </div>
  );
}
