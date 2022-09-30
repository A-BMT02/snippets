import Link from "next/link";
import bars from "../images/bars.png";
import Image from "next/image";

const Nav = () => (
  <div>
    <nav className="flex md:hidden justify-between w-full">
      <p className="font-a text-owhite text-2xl">Snippets</p>
      <div className="flex space-x-4">
        <div className="w-5">
          <Image src={bars} />
        </div>
      </div>
    </nav>

    <nav className="hidden md:flex justify-between text-owhite mb-20 ">
      <p className="font-a text-owhite text-3xl">Snippets</p>
      <div className="flex justify-end space-x-10 text-xl">
        <p>Home</p>
        <Link href="/browse">
          <p>Explore</p>
        </Link>
        <p>Sign up</p>
        <p>Login</p>
      </div>
    </nav>
  </div>
);

export default Nav;
