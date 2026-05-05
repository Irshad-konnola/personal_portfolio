"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes"; // Correct global hook

const Header = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div 
        initial={{scale:0 }}
        whileInView={{scale:1}}
        transition={{duration:0.8,type:'spring',stiffness:100}}
      >
        <Image 
          src={assets.profile_img} 
          alt="Irshad Konnola" 
          className="rounded-full w-32 border-4 border-white dark:border-white/10 shadow-lg" 
          priority 
        />
      </motion.div>

      <motion.h3 
        initial={{y:-20,opacity:0 }}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6,delay:0.3}}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo dark:text-white"
      >
        Hi! I'm Irshad Konnola
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>

      <motion.h1
        initial={{y:-30,opacity:0 }}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.8,delay:0.5}}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo dark:text-white leading-tight"
      >
        MERN Stack & Mobile Engineer based in Kerala.
      </motion.h1>

      <motion.p 
        initial={{opacity:0 }}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:0.7}}
        className="max-w-2xl mx-auto font-Ovo text-gray-700 dark:text-gray-300"
      >
        I am a MERN Stack Engineer from Malappuram with 3+ years of experience 
        specializing in React, Next.js, and React Native.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{y: 30,opacity:0 }}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.6,delay:1}}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2  font-semibold"
        >
          contact me
          <Image src={ assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
        
        <motion.a
          initial={{y: 30,opacity:0 }}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.6,delay:1.2}}
          href="/Irshad-developer-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white text-black dark:border-white/20 hover:bg-gray-50 transition-all font-semibold shadow-sm"
        >
          my resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;