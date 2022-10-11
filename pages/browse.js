import Nav from "../components/nav";
import test from "../images/test.png";
import Image from "next/image";
import profile from "../images/profile.png";
import star from "../images/star.png";
import test2 from "../images/test2.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Browse() {
  const router = useRouter();

  return (
    <div className="flex flex-col p-5">
       <Nav />
      <div className="flex justify-center mt-12 md:mt-0">
        <div className="flex flex-col space-y-6 w-full max-w-[500px] md:max-w-[700px]">
          <p className="text-opink font-bold text-3xl md:hidden ">
            Browse Snippets
          </p>
          <div className="w-full flex flex-col items-center md:space-y-6">
            <div className="hidden md:flex rounded-3xl items-center font-bold w-full max-w-[800px] p-1 bg-owhite justify-between text-xl">
              <Link href="/mysnippets">
                <div className="rounded-3xl p-3 cursor-pointer">
                  <p>My Snippets</p>
                </div>
              </Link>

              <div className="rounded-3xl p-3 bg-dark text-owhite cursor-pointer ">
                <p>Browse</p>
              </div>
              <Link href="/create">
                <div className="rounded-3xl p-3 cursor-pointer">
                  <p>Create</p>
                </div>
              </Link>
            </div>
            <div className="w-full max-w-[500px] flex justify-center">
              <input
                className="p-2 rounded-xl w-full"
                placeholder="Search snippets..."
              />
            </div>
            <div className="hidden md:block w-full">
              <p className="self-left text-opink font-bold text-3xl ">
                Browse Snippets
              </p>
            </div>
          </div>

          <div
            onClick={(e) => router.push("/snippet")}
            className="bg-owhite rounded-xl flex flex-col space-y-2 md:space-y-3 items-start p-2 pt-2 pb-2"
          >
            <p className="text-2xl md:text-3xl self-center font-bold">
              Navbar with CSS
            </p>
            <div className="w-full md:hidden">
              <Image className="w-full" src={test} />
            </div>
            <div className="hidden md:block md:w-full">
              <Image className="w-full" src={test2} />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex space-x-2 items-center">
                <Image src={profile} />
                <p className="text-xs md:text-lg">by AhmadBMTahir</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-1 bg-dark text-owhite rounded-lg text-xs md:text-lg rounded-lg">
                  HTML
                </button>
                <button className="p-1 bg-dark text-owhite rounded-lg text-xs md:text-lg rounded-lg">
                  CSS
                </button>

                <button className="p-1 bg-dark text-owhite rounded-lg text-xs md:text-lg rounded-lg">
                  Javascript
                </button>
              </div>
            </div>
            <div className="flex justify-end w-full space-x-2">
              <div className="w-3 md:w-5">
                <Image src={star} />
              </div>
              <p>10</p>
            </div>
          </div>

          <div className="bg-owhite rounded-xl flex flex-col space-y-2 md:space-y-3 items-start p-2 pt-2 pb-2">
            <p className="text-2xl md:text-3xl self-center font-bold">
              Redux Boilerplate
            </p>
            <div className="w-full md:hidden">
              <Image className="w-full" src={test} />
            </div>
            <div className="hidden md:block md:w-full">
              <Image className="w-full" src={test2} />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex space-x-2 items-center">
                <Image src={profile} />
                <p className="text-xs md:text-lg">by AhmadBMTahir</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-1 bg-dark text-owhite rounded-lg text-xs md:text-lg rounded-lg">
                  HTML
                </button>
                <button className="p-1 bg-dark text-owhite rounded-lg text-xs md:text-lg rounded-lg">
                  CSS
                </button>

                <button className="p-1 bg-dark text-owhite rounded-lg text-xs md:text-lg rounded-lg">
                  Javascript
                </button>
              </div>
            </div>
            <div className="flex justify-end w-full space-x-2">
              <div className="w-3 md:w-5">
                <Image src={star} />
              </div>
              <p>10</p>
            </div>
          </div>

          <div className="bg-owhite rounded-xl flex flex-col space-y-2 md:space-y-3 items-start p-2 pt-2 pb-2">
            <p className="text-2xl md:text-3xl self-center font-bold text-center">
              Sidebar Animation with tailwind
            </p>
            <div className="w-full md:hidden">
              <Image className="w-full" src={test} />
            </div>
            <div className="hidden md:block md:w-full">
              <Image className="w-full" src={test2} />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex space-x-2 items-center">
                <Image src={profile} />
                <p className="text-xs md:text-lg">by AhmadBMTahir</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-1 bg-dark text-owhite rounded-lg text-xs md:text-lg rounded-lg">
                  HTML
                </button>
                <button className="p-1 bg-dark text-owhite rounded-lg text-xs md:text-lg rounded-lg">
                  CSS
                </button>

                <button className="p-1 bg-dark text-owhite rounded-lg text-xs md:text-lg rounded-lg">
                  Javascript
                </button>
              </div>
            </div>
            <div className="flex justify-end w-full space-x-2">
              <div className="w-3 md:w-5">
                <Image src={star} />
              </div>
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
