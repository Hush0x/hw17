import { useState } from "react";

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="w-full h-fit grid grid-cols-3 items-center justify-between py-8">
        <div className="col-start-1 md:col-start-2 xl:col-start-1 flex gap-4 items-center text-2xl font-black w-fit row-start-1">
          <img src="/Vector.svg" alt="logo" />
          <p>Travlog</p>
        </div>
        <div className="xl:hidden flex justify-end col-start-3 md:col-start-1 md:justify-start">
          <img
            src="/menu.svg"
            alt="menu"
            onClick={() => {
              setMenuOpen((last) => {
                const next = !last;
                return next;
              });
            }}
          />
        </div>
        <div
          className={`${
            menuOpen
              ? "flex justify-self-end md:justify-self-start text-center absolute border-2 rounded-lg border-purple-royal p-2 top-20 bg-white z-10"
              : "hidden"
          } col-start-3  md:col-start-1 xl:col-start-2 xl:flex flex-col xl:flex-row font-bold text-sm text-gray-500 gap-4 xl:gap-16 w-fit`}
        >
          <a href="" className="">
            Home
          </a>
          <a href="#">Discover</a>
          <a href="#">Special Deals</a>
          <a href="#">Contact</a>
        </div>
        <div className="hidden md:col-start-3 md:flex font-bold text-sm items-center justify-end row-start-1">
          <button className="px-8 py-4 shrink-0">Log In</button>
          <button className="bg-purple-royal px-8 py-4 text-white whitespace-nowrap rounded-full">
            Sign Up
          </button>
        </div>
      </header>
    </>
  );
}
