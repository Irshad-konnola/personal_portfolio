"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { serviceData } from "@/assets/assets";

const Services = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      id="services"
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
        What I offer
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My Services
      </motion.h2>

      <motion.p
        className="mb-12 max-w-2xl mx-auto mt-5 text-center font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        As a <strong className="font-semibold text-black dark:text-white">MERN Stack Engineer</strong> with 3+ years of experience, I architect high-performance solutions for complex business needs. From <strong className="font-semibold text-black dark:text-white">Multi-tenant SaaS platforms</strong> to real-time <strong className="font-semibold text-black dark:text-white">ERP systems</strong>, I deliver scalable engineering across web, mobile, and desktop.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {serviceData.map(({ icon: Icon, title, description, link }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-400 rounded-xl px-8 py-10 cursor-pointer hover:bg-lightHover hover:-translate-y-2 duration-500 transition-all dark:hover:bg-darkHover dark:hover:shadow-white/20 dark:border-gray-700 group shadow-sm bg-white/50 dark:bg-transparent"
          >
            <Icon className="w-12 h-12 mb-6 text-rose-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold my-4 text-gray-800 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed dark:text-white/80 text-sm">
              {description}
            </p>
            
            {/* Action link for Business/Services page */}
            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-6 font-bold text-rose-600 dark:text-rose-400 group-hover:gap-4 transition-all"
            >
              Learn more
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;