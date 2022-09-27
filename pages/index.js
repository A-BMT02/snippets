import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import snippet from "../images/snippet.png";
import Image from "next/image";

import { useEffect } from "react";
import Home from "../components/home";

export default () => (
  <div>
    <Head />
    <div className="ml-5 mr-5 mt-5">
      <Nav />

      <div className="flex flex-col mt-10 space-y-6 items-center">
        <h2 className="font-bold text-opink text-3xl text-center md:text-6xl">
          Save <span className="text-owhite">your</span> code Snippets
        </h2>
        <h3 className="text-owhite text-md text-center md:text-2xl">
          Save time and <span>increase</span>{" "}
          <span className="text-opink font-bold">productivity</span>
        </h3>
        <div>
          <button className="bg-owhite text-dark p-2 rounded-lg font-bold text-sm md:text-lg md:p-4 hover:bg-dark hover:border hover:border-opink hover:text-owhite">
            Explore
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-10 mb-10 ">
        <div className="max-w-[900px] ">
          <Image src={snippet} />
        </div>
      </div>

      <Home />
    </div>
  </div>
);
