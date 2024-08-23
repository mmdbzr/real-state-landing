import React from "react";
import Logo from "./Icons/Logo";
import HumbergerMenuIcon from "./Icons/HumbergerMenuIcon";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = () => {
  return (
    <nav className=" h-[4.25rem] xl:h-20 2xl:h-[6.25rem] w-full bg-grayShades-10 flex items-center justify-between px-5">
      <Logo />
      <div className="hidden xl:flex">
        <button>d</button>
        <button>d</button>
        <button>d</button>
        <button>d</button>
      </div>

      <HumbergerMenuIcon />
    </nav>
  );
};

export default Navbar;
