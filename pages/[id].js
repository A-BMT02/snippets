import javascript from "../images/javascript.svg";
import Nav from "../components/nav";
import Image from "next/image";
import edit from "../images/edit.svg";
import share from "../images/share.svg";
import deleteIcon from "../images/deleteIcon.svg";
import profile from "../images/profile.png";
import star from "../images/star.png";
import snippet from "../images/snippet.png";

export default function OneSnippet() {
  return (
    <div className="flex flex-col p-5">
      <Nav />
      <div className="w-full flex justify-center">
        <div className="bg-owhite flex flex-col mt-12 py-10 px-4 space-y-2 md:space-y-3 rounded-lg max-w-[800px]">
          <div className="md:flex md:justify-between">
            <div className="flex space-x-6 items-center">
              <div className="w-8 md:w-10 ">
                <Image src={javascript} />
              </div>
              <p className="font-bold text-lg md:text-2xl">
                Hello world in javascript
              </p>
            </div>

            <div className="hidden md:flex space-x-4">
              <div className="w-10">
                <Image src={edit} />
              </div>
              <div className="w-10">
                <Image src={share} />
              </div>
              <div className="w-10">
                <Image src={deleteIcon} />
              </div>
            </div>
          </div>

          <div className="flex space-x-2 items-center ">
            <div className="w-4 flex items-center ">
              <Image src={profile} />
            </div>
            <p className="text-xs md:text-md">AhmadBMTahir</p>

            <div className="flex space-x-2 items-center">
              <div className="w-3 md:w-5 flex items-center">
                <Image src={star} />
              </div>
              <p className="text-xs md:text-md">10</p>
            </div>
          </div>
          <div>
            <Image src={snippet} />
          </div>

          <div className="flex space-x-4 md:hidden">
            <div className="w-8">
              <Image src={edit} />
            </div>
            <div className="w-8">
              <Image src={share} />
            </div>
            <div className="w-8">
              <Image src={deleteIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
