"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import style from "../app/utils.module.css";

export default function Navbar() {
  const [navdrop, setNavdrop] = useState(false);

  return (
    <nav
      className={`py-5 px-6 lg:px-20 flex flex-col md:flex-row md:justify-between items-center gap-3 z-10 ${
        navdrop ? "animate-slideIn " + style.navUi : ""
      }`}
    >
      <div className={`${style.navTitle} flex items-center justify-between`}>
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
        </Link>
        <button
          className="inline-block cursor-pointer md:hidden"
          onClick={() => setNavdrop(!navdrop)}
        >
          <Image
            src={navdrop ? "cross.svg" : "/hamburger.svg"}
            alt="logo"
            height={35}
            width={35}
          />
        </button>
      </div>
      <div
        className={`${style.links} self-start md:flex md:text-stone-300 ${
          navdrop ? "flex" : "hidden"
        } flex-col md:flex-row gap-2 lg:gap-10`}
      >
        <Link
          className="py-1 md:px-3 rounded-md md:hover:bg-btn-background-hover"
          href="/#about"
        >
          About
        </Link>
        <Link
          className="py-1 md:px-3 rounded-md md:hover:bg-btn-background-hover"
          href="/#contact"
        >
          Contact
        </Link>
        <Link className="py-1 md:px-3 text-white flex items-center rounded-md bg-btn-background hover:bg-btn-background-hover"
          href="/login">
          <Image src="/login.svg" alt="login" height={20} width={20} />
          Login
        </Link>
      </div>
    </nav>
  );
}
