import Image from "next/image"
import Link from "next/link"
import Nav from "../components/nav"
import googleIcon from "../images/google-icon.svg"
import snap4 from "../images/snap-4.png"

export default function Create() {
  return (
    <div className="flex flex-col p-5">
      <Nav />
      <div className="flex justify-center w-full self-center ">
        <div className="md:block hidden ml-auto mr-auto pr-8 my-auto ">
          <Image src={snap4} />
        </div>
        <div className="bg-owhite min-h-full pb-52 pt-8 px-6 mt-12 md:mt-0 rounded-xl flex flex-col  w-[400px]  md:min-w-[450px] md:w-[534px]">
          <p className="flex justify-center text-4xl mb-12 font-semibold">Sign up</p>

          <label className="text-xl flex flex-col mb-4 font-light">
            Email
            <input className="p-2 bg-dark rounded-xl text-owhite md:text-lg" type="email" />
          </label>

          <label className="text-xl flex flex-col mb-4 font-light">
            Password
            <input className="p-2 bg-dark rounded-xl text-owhite md:text-lg" type="email" />
          </label>

          <label className="text-xl flex flex-col mb-4 font-light">
            Password Again
            <input className="p-2 bg-dark rounded-xl text-owhite md:text-lg" type="email" />
          </label>

          <div className="rounded-xl bg-dark text-owhite py-4 px-12 mt-6 mb-12 self-center w-fit cursor-pointer select-none">
            <p className="text-2xl font-semibold">Sign up</p>
          </div>

          <div className="self-center rounded-3xl bg-dark  w-full cursor-pointer py-4 px-10 flex justify-center select-none">
            <Image src={googleIcon} />
            <p className="text-xl md:text-2xl font-semibold text-owhite ml-4">Sign in with Google</p>
          </div>

          <p className="mt-4 self-center">
            Don’t have an account?
            <span className="text-opink ml-2">
              <Link href="/register">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
