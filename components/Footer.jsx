"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes"; // Use global theme hook

const Footer = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <footer className="mt-20 py-12 border-t border-gray-100 dark:border-white/5 font-Ovo">
      <div className="text-center">
        {/* LOGO */}
        <Image 
          src={isDarkMode ? assets.logo_dark : assets.logo_light} 
          alt="Irshad Konnola Logo" 
          className="w-36 mx-auto mb-4" 
        />

        {/* CONTACT INFO */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="w-max flex items-center gap-2 mx-auto text-gray-700 dark:text-white hover:text-rose-600 transition-colors">
            <Image 
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} 
              alt="Email" 
              className="w-5" 
            />
            <a href="mailto:irshadkonnola.dev@gmail.com">irshadkonnola.dev@gmail.com</a>
          </div>
          
          {/* SEO LOCATION TAG */}
          <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
            Based in Malappuram, Kerala, India
          </p>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between mx-[10%] mt-12 py-8 border-t border-gray-200 dark:border-white/10 text-sm text-gray-600 dark:text-gray-400">
        <p>© 2026 Irshad Konnola. All rights reserved.</p>
        
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 font-medium">
          <li>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://www.linkedin.com/in/irshad-konnola-954516226"
              className="hover:text-rose-600 transition-all"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://github.com/Irshad-konnola"
              className="hover:text-rose-600 transition-all"
            >
              GitHub
            </a>
          </li>
          <li>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://www.instagram.com/irshad.konnola/"
              className="hover:text-rose-600 transition-all"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;