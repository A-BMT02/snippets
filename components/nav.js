import Link from "next/link";
import bars from "../images/bars.png";

import Image from "next/image";

const Nav = () => (
  <div>
    <nav className="flex md:hidden justify-between w-full">
      <p className="font-a text-owhite">Snippets</p>
      <div className="flex space-x-4">
        <button className="bg-owhite text-dark p-1 rounded-lg font-bold text-sm">
          Sign up
        </button>
        <button className="bg-opink text-dark rounded-lg font-bold text-sm p-1">
          Login
        </button>
      </div>
    </nav>

    <nav className="hidden md:flex justify-between text-owhite mb-20 ">
      <p className="font-a text-owhite text-xl">Snippets</p>
      <div className="flex justify-end space-x-10 text-xl">
        <p>Home</p>
        <p>Explore</p>
        <p>Sign up</p>
        <p>Login</p>
      </div>
    </nav>
  </div>
);

export default Nav;
