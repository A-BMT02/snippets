import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useData } from "../Context/dataContext";

export default function Sidebar({ showSidebar, setShowSidebar, Ref }) {
  const router = useRouter();

  const { activeNavbar, setActiveNavbar } = useData();

  useEffect(() => {
    if (activeNavbar === "") {
      setActiveNavbar("home");
    }
  }, [activeNavbar]);
  const goto = (text) => {
    setActiveNavbar(text);
    Ref.current.classList.toggle("open");
    setShowSidebar(false);

    switch (text) {
      case "home":
        return router.push("/");
      case "explore":
        return router.push("/mysnippets");
      case "sign up":
        return router.push("/");
      case "login":
        return router.push("/");
    }
  };
  return (
    <div
      className={`fixed flex flex-col text-owhite text-2xl items-center space-y-6 bg-opink w-[100px] h-full top-0 right-0 w-screen z-10 max-w-[300px] ease-in-out duration-300 ${
        showSidebar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <p
        onClick={(e) => goto("home")}
        className={`mt-20 cursor-pointer ${activeNavbar === "home" && "text-dark "}`}
      >
        Home
      </p>
      <p
        onClick={(e) => goto("explore")}
        className={`cursor-pointer ${activeNavbar === "explore" && "text-dark"}`}
      >
        Explore
      </p>
      <p
        onClick={(e) => goto("login")}
        className={`cursor-pointer ${activeNavbar === "login" && "text-dark"}`}
      >
        Login
      </p>
      <p
        onClick={(e) => goto("sign up")}
        className={`cursor-pointer ${activeNavbar === "sign up" && "text-dark"}`}
      >
        Sign up
      </p>
    </div>
  );
}
