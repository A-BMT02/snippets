import React from "react";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  return (
    <div
      className={`fixed flex flex-col text-owhite text-2xl items-center space-y-6 bg-opink w-[100px] h-full top-0 right-0 w-screen z-10 max-w-[300px] ease-in-out duration-300 ${
        showSidebar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <p className="mt-20">Home</p>
      <p>Explore</p>
      <p>Login</p>
      <p>Sign up</p>
    </div>
  );
}
