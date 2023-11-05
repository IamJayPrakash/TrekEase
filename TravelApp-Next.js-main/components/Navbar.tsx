import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav id="top" className="mx-auto max-w-[1440px] padding-container relative z-30 py-5 p-5 flex justify-between items-center">
      <Link href="/">
        <img src="logo.png" alt="logo" width={160} height={100} className=" " />
        {/* <Image src='TrekEase-logo.svg' alt='logo' width={74} height={29} /> */}
      </Link>
      <ul className="h-full gap-12 lg:flex hidden">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="font-light text-gray-500 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold  hover:text-neutral-800  hover:underline hover:decoration-solid"
            style={{ textDecorationColor: "orange" }}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flex-center">
        <Link href="/login">
          {" "}
          <Button
            type="button"
            title="Login"
            icon="user.svg"
            variant="bg-black p-2 px-3 text-gray-300 flex transition-all hover:bg-cyan-500 hover:text-blue-200 hover:border-light-900 "
          />
        </Link>
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
