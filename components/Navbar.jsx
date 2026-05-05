"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes"; // Import global theme hook

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isScroll, setIsScroll] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const sideMenuRef = useRef();

  // 1. Prevent Hydration Mismatch for icons/theme logic
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translate(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translate(16rem)";
  };

  // 2. Intelligent Path Helper
  // If we are on /business, clicking "About" should go to "/#about"
  const getPath = (anchor) => {
    return pathname === "/business" ? `/${anchor}` : anchor;
  };

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <>
      {/* Dynamic Background for Light Mode */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" priority />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-[#110202] dark:shadow-white/10"
            : ""
        }`}
      >
        <Link href="/">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo_light}
            alt="Irshad Konnola Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </Link>

        {/* --- DESKTOP MENU --- */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/20 dark:bg-transparent"
          }`}
        >
          <li><a className="font-Ovo hover:text-rose-500 dark:text-white transition" href={getPath("#top")}>Home</a></li>
          <li><a className="font-Ovo hover:text-rose-500 dark:text-white transition" href={getPath("#about")}>About</a></li>
          <li><a className="font-Ovo hover:text-rose-500 dark:text-white transition" href={getPath("#services")}>Services</a></li>
          <li><a className="font-Ovo hover:text-rose-500 dark:text-white transition" href={getPath("#work")}>Work</a></li>
          
          {/* PREMIUM BUSINESS LINK */}
          <li>
            <Link 
              className={`font-Ovo font-bold px-4 py-1 rounded-full transition-all ${
                pathname === "/business" 
                ? "text-rose-500 bg-rose-50 dark:bg-rose-500/10" 
                : "text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-500/10"
              }`} 
              href="/business"
            >
              For Business
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* THEME TOGGLE */}
          <button 
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle Theme"
              className="w-6"
            />
          </button>

          <a
            href={getPath("#contact")}
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:text-white dark:border-white/50 hover:bg-gray-50 dark:hover:bg-white/5 transition"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3"
            />
          </a>

          {/* MOBILE TOGGLE */}
          <button className="block md:hidden ml-3 p-2" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className="w-6"
            />
          </button>
        </div>

        {/* --- MOBILE MENU --- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white transition-transform duration-500 dark:bg-[#110202] dark:text-white shadow-2xl"
        >
          <div className="absolute right-6 top-6 p-2" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close"
              className="w-5 cursor-pointer"
            />
          </div>

          <li><a className="font-Ovo text-lg dark:text-white" onClick={closeMenu} href={getPath("#top")}>Home</a></li>
          <li><a className="font-Ovo text-lg dark:text-white" onClick={closeMenu} href={getPath("#about")}>About</a></li>
          <li><a className="font-Ovo text-lg dark:text-white" onClick={closeMenu} href={getPath("#services")}>Services</a></li>
          <li><a className="font-Ovo text-lg dark:text-white" onClick={closeMenu} href={getPath("#work")}>My Work</a></li>
          
          <li className="mt-4">
            <Link 
              className="font-Ovo text-lg font-bold text-white bg-rose-600 px-6 py-3 rounded-xl inline-block w-full text-center shadow-lg active:scale-95 transition" 
              onClick={closeMenu} 
              href="/business"
            >
              Hire Me (Business)
            </Link>
          </li>

          <li><a className="font-Ovo text-lg dark:text-white" onClick={closeMenu} href={getPath("#contact")}>Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;