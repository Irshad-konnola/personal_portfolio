import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div id="about" className="w-full px-[12%] py-10 scroll-mt-20"
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
      <motion.h4 className="text-center mb-2 text-lg font-Ovo"
      initial={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5,delay:0.3}}
      > Introduction</motion.h4>
      <motion.h2 className="text-center text-5xl font-Ovo"
      initial={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5,delay:0.5}}
      >About me</motion.h2>
      <motion.div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.8}}
      >
        <motion.div className="w-64 sm:w-80 rounded-3xl max-w-none"
        initial={{opacity:0,scale:0.9}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.6}}
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div className="flex-1"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6,delay:0.8}}
        >
          <p className="mb-10 max-w-2xl font-Ovo">
            I am a Full-Stack & Mobile Developer with 3+ years of experience specializing in
            building scalable web applications, mobile apps, and desktop solutions. With expertise in
            React, Next.js, React Native, Node.js, and modern web technologies, I focus on delivering
            high-performance solutions across multiple platforms.
          </p>
          
          {/* Updated Info List - You'll need to update your assets.js file accordingly */}
          <motion.ul className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration:0.8,delay:1}}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => {
             
              
              return (
                <motion.li
                  whileInView={{scale:1.05}}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                  key={index}
                >
                  <Image className="w-7 mt-3" src={isDarkMode ? iconDark : icon} alt={title} />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                  <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
                </motion.li>
              );
            })}
          </motion.ul>
          
          {/* Enhanced Languages & Tools Section */}
          <div className="mt-10">
            <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Languages & Technologies</h4>
            <div className="mb-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">JavaScript (ES6+)</span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">React.js</span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">Next.js</span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">React Native</span>
                <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium">Node.js</span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium">HTML5/CSS3</span>
              </div>
            </div>
            
            <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Development Tools & Libraries</h4>
            <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
              {toolsData.map((tool, index) => (
                <motion.li
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-md dark:hover:shadow-white/30"
                  key={index}
                >
                  <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
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