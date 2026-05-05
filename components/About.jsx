"use client";
import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes"; // Global theme hook

const About = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <motion.div
      id="about"
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
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About me
      </motion.h2>

      <motion.div
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* PROFILE IMAGE BOX */}
        <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none relative aspect-square"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={assets.profile_img}
            alt="Irshad Konnola"
            fill
            className="w-full rounded-3xl object-cover"
          />
        </motion.div>

        <motion.div
          className="flex-1 font-Ovo"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* UPDATED SUMMARY BASED ON RESUME */}
          <p className="mb-10 max-w-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-Ovo">
            I am a results-driven{" "}
            <strong className="font-semibold text-black dark:text-white">
              MERN Stack Engineer
            </strong>{" "}
            with over 3 years of professional experience. I specialize
            in architecting scalable{" "}
            <strong className="font-semibold text-black dark:text-white">
              multi-tenant ERP SaaS platforms
            </strong>
            , real-time booking engines, and high-performance mobile
            applications using{" "}
            <strong className="font-semibold text-black dark:text-white">
              React Native
            </strong>
            . My focus is on performance optimization, consistently achieving{" "}
            <strong className="font-semibold text-black dark:text-white">
              90+ Lighthouse scores
            </strong>{" "}
            and reducing server loads through advanced caching.
          </p>

          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:border-white/30 dark:hover:bg-darkHover/50 shadow-sm"
                key={index}
              >
                <Image
                  className="w-7 mt-3"
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                />
                <h3 className="my-4 font-semibold text-gray-800 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-gray-400">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* LANGUAGES SECTION - UPDATED FOR MERN STACK */}
          <div className="mt-10">
            <h4 className="my-6 text-gray-700 font-semibold dark:text-white/80">
              Core Technologies
            </h4>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Next.js (App Router)",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "React Native",
                "TypeScript",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 rounded-full text-xs font-bold border border-rose-100 dark:border-rose-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h4 className="my-6 text-gray-700 font-semibold dark:text-white/80">
              Advanced Tooling
            </h4>
            <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
              {toolsData.map((tool, index) => (
                <motion.li
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/10 rounded-xl cursor-pointer bg-white dark:bg-transparent shadow-sm"
                  key={index}
                >
                  <Image
                    src={tool}
                    alt="Development Tool"
                    className="w-6 sm:w-8"
                  />
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
