"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FiMessageSquare, FiSend } from "react-icons/fi";

const Contact = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending your message...");
    const formData = new FormData(event.target);

    // Using your existing Web3Forms access key
    formData.append("access_key", "37f47fd5-96e3-4668-8d3e-e838654d4736");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! I'll get back to you soon.");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again or use WhatsApp.");
    }
  };

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <motion.h4 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with me
      </motion.h4>
      
      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo dark:text-white"
      >
        Get in touch
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mb-12 max-w-2xl mx-auto mt-5 text-center font-Ovo text-gray-700 dark:text-gray-300"
      >
        Ready to scale your digital presence? Whether it's a <strong className="font-semibold">Full-stack ERP</strong> or a <strong className="font-semibold">Premium Business Website</strong>, let's discuss your goals.
      </motion.p>

      <div className="max-w-2xl mx-auto">
        {/* --- WHATSAPP QUICK ACTION --- */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center mb-12 p-8 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-500/20 rounded-[2rem] text-center"
        >
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 text-white text-2xl shadow-lg">
            <FiMessageSquare />
          </div>
          <h3 className="text-xl font-bold mb-2 dark:text-white">Quick Chat on WhatsApp</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Prefer instant messaging? Get a direct response from me right now.
          </p>
          <a
            href="https://wa.me/919072239599?text=Hi%20Irshad,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-all shadow-md active:scale-95"
          >
            Start Chat
          </a>
        </motion.div>

        <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] flex-1 bg-gray-200 dark:bg-white/10"></div>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Or send an email</span>
            <div className="h-[1px] flex-1 bg-gray-200 dark:bg-white/10"></div>
        </div>

        {/* --- EMAIL FORM --- */}
        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.input
              whileFocus={{ scale: 1.01 }}
              className="p-4 outline-none border border-gray-300 rounded-2xl bg-white dark:bg-darkHover/30 dark:border-white/10 dark:text-white focus:border-rose-500 dark:focus:border-rose-500 transition-all"
              type="text"
              placeholder="Your Name"
              required
              name="name"
            />

            <motion.input
              whileFocus={{ scale: 1.01 }}
              className="p-4 outline-none border border-gray-300 rounded-2xl bg-white dark:bg-darkHover/30 dark:border-white/10 dark:text-white focus:border-rose-500 dark:focus:border-rose-500 transition-all"
              type="email"
              placeholder="Email Address"
              required
              name="email"
            />
          </div>
          
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            className="w-full p-4 outline-none border border-gray-300 rounded-2xl bg-white dark:bg-darkHover/30 dark:border-white/10 dark:text-white focus:border-rose-500 dark:focus:border-rose-500 transition-all"
            rows={6}
            placeholder="Tell me about your project needs..."
            required
            name="message"
          />

          <button
            className="w-full py-4 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-rose-600 dark:hover:bg-rose-500 dark:hover:text-white transition-all shadow-xl active:scale-95"
            type="submit"
          >
            Send Message <FiSend />
          </button>
          
          {result && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className={`mt-4 text-center text-sm font-bold ${result.includes('success') ? 'text-green-600' : 'text-rose-600'}`}
            >
              {result}
            </motion.p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;