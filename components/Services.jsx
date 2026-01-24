import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo"> What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="mb-12 max-w-2xl mx-auto mt-5 text-center font-Ovo">
        As a Full-Stack & Mobile Developer with 3+ years of experience, I provide end-to-end 
        development solutions across web, mobile, and desktop platforms. I specialize in building 
        scalable applications using modern technologies like React, Next.js, React Native, and Node.js.
      </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {serviceData.map(({ icon: Icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-xl px-8 py-10 hover:shadow-xl cursor-pointer hover:bg-lightHover hover:-translate-y-2 duration-500 transition-all dark:hover:bg-darkHover dark:hover:shadow-white/20 dark:border-gray-700"
          >
            <Icon className="w-12 h-12 mb-6 text-gray-700 dark:text-white" />
            <h3 className="text-xl font-semibold my-4 text-gray-800 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 leading-6 dark:text-white/80">
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-6 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              Learn more
              <span className="w-4">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;