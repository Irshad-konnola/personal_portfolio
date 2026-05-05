"use client";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Link from "next/link";
const Work = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="mb-12 max-w-2xl mx-auto mt-5 text-center font-Ovo text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        Showcasing 3+ years of engineering excellence. From <strong className="font-semibold">Enterprise ERP systems</strong> 
        to <strong className="font-semibold">Premium Client Showrooms</strong>, I deliver high-performance 
        digital products with pixel-perfect precision.
      </motion.p>

      {/* --- FLAGSHIP CLIENT PROJECT: BLOOMSPACE --- */}
      {/* --- FLAGSHIP CLIENT PROJECT: BLOOMSPACE --- */}
<div className="mb-20">
  <h3 className="text-2xl font-Ovo mb-8 dark:text-white flex items-center gap-3">
    <span className="w-10 h-[1px] bg-rose-500"></span> Client Success Story
  </h3>
  
  <div className="group relative rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-darkHover border border-gray-200 dark:border-white/5 shadow-xl">
    {/* Changed flex-col to lg:flex-row to stack on mobile */}
    <div className="flex flex-col lg:flex-row items-stretch">
      
      {/* IMAGE CONTAINER: Adjusted aspect ratio for mobile vs desktop */}
      <div className="lg:w-3/5 w-full relative aspect-[16/10] sm:aspect-video lg:aspect-auto overflow-hidden min-h-[300px]">
        <Image 
          src="/clients/bloomspace-client.png" 
          alt="Bloomspace Design - Abu Dhabi Interior Firm" 
          fill 
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>

      {/* TEXT CONTENT: Responsive padding and alignment */}
      <div className="lg:w-2/5 w-full p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-[10px] font-bold rounded-full uppercase tracking-widest">
            Featured Success
          </span>
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            Abu Dhabi • UAE
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold mb-4 dark:text-white leading-tight">
          Bloomspace Design
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
          Architected a high-conversion digital showroom for this premier <strong className="font-semibold text-black dark:text-white">Abu Dhabi interior design firm</strong>. 
          The solution features <strong className="font-semibold text-black dark:text-white">Snapchat Pixel</strong> integration and an automated lead capture system that transformed their customer inquiries.
        </p>

        {/* BUTTONS: Stack on very small screens, row on larger */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="https://bloomspacedesign.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 py-4 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-80 transition-all text-sm shadow-lg"
          >
            Live Site <FiExternalLink />
          </a>
          <Link 
            href="/business" 
            className="flex-1 py-4 border border-gray-300 dark:border-white/20 rounded-2xl font-bold flex items-center justify-center dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm"
          >
            Case Study
          </Link>
        </div>
      </div>

    </div>
  </div>
</div>

      {/* --- ENTERPRISE & SAAS PROJECTS --- */}
      <div className="mb-20">
        <h3 className="text-2xl font-Ovo mb-8 dark:text-white flex items-center gap-3">
          <span className="w-10 h-[1px] bg-blue-500"></span> Enterprise Solutions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workData.enterprise.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-1 border border-gray-200 dark:border-white/10 rounded-[2.5rem] bg-white dark:bg-darkHover shadow-sm"
            >
              <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-6">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                 <Image src={project.bgImage} alt={project.title} fill className="object-cover" />
                 <div className="absolute bottom-6 left-6 z-20">
                   <h4 className="text-white text-xl font-bold">{project.title}</h4>
                   <p className="text-gray-200 text-xs">{project.role || "Lead Developer"}</p>
                 </div>
                 {project.confidential && (
                  <span className="absolute top-4 right-4 z-20 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                    Confidential
                  </span>
                 )}
              </div>
              <div className="px-6 pb-8">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-bold py-1 px-3 bg-gray-100 dark:bg-white/5 dark:text-gray-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- PERSONAL & OPEN SOURCE --- */}
      <div>
        <h3 className="text-2xl font-Ovo mb-8 dark:text-white flex items-center gap-3">
          <span className="w-10 h-[1px] bg-green-500"></span> Innovative Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workData.personal.map((project, index) => (
            <motion.div 
              key={index}
              className="group p-6 rounded-3xl border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-transparent hover:bg-white dark:hover:bg-white/5 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white dark:bg-white/10 rounded-2xl shadow-sm">
                  <FiGithub className="text-xl dark:text-white" />
                </div>
                <a href={project.url} target="_blank" className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiExternalLink />
                </a>
              </div>
              <h4 className="font-bold text-lg mb-2 dark:text-white">{project.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex gap-2">
                {project.technologies?.slice(0, 3).map((t, i) => (
                  <span key={i} className="text-[9px] uppercase font-bold text-gray-400">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- CTA --- */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#contact"
        className="w-max flex items-center justify-center gap-3 bg-black text-white dark:bg-white dark:text-black font-bold rounded-full py-4 px-12 mx-auto my-24 shadow-2xl transition-all"
      >
        Scale Your Business
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="" className="w-4" />
      </motion.a>
    </motion.div>
  );
};

export default Work;