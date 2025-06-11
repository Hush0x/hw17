import { useState } from "react";

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="w-full h-fit flex items-center justify-between py-8">
        <div className="flex gap-4 items-center text-2xl font-black w-fit ">
          <img src="/Vector.svg" alt="logo" />
          <p>Travlog</p>
        </div>
        <div className="hidden md:flex flex-col xl:flex-row font-bold text-sm text-gray-500 gap-4 xl:gap-16">
          <a href="" className="">
            Home
          </a>
          <a href="#">Discover</a>
          <a href="#">Special Deals</a>
          <a href="#">Contact</a>
        </div>
        <div className="hidden md:flex w-fit font-bold text-sm items-center">
          <button className="w-1/2 px-8 py-4">Log In</button>
          <button className="w-1/2 bg-purple-royal px-8 py-4 text-white whitespace-nowrap rounded-full">
            Sign Up
          </button>
        </div>
      </nav>
    </>
  );
}
