"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { assets } from "@/assets/assets";
import {
  FiCheckCircle,
  FiSend,
  FiZap,
  FiLayout,
  FiDatabase,
  FiSmartphone,
  FiArrowRight,
} from "react-icons/fi";

export default function BusinessPage() {
 


  return (
    <div >
      <Navbar/>

      <main className="pt-20 dark:bg-darkTheme transition-colors duration-500 font-Ovo">
        {/* --- HERO SECTION --- */}
        <section className="px-6 lg:px-[10%] py-20 text-center bg-white dark:bg-darkTheme">
          <h4 className="text-rose-600 font-bold mb-4 tracking-widest uppercase animate-pulse text-sm">
            Available for New Projects
          </h4>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 dark:text-white leading-tight">
            High-End Web Solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">
              Tailored for Success.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            I bridge the gap between complex engineering and beautiful design.
            From startups to established firms in Kerala & beyond, I build digital products that
            deliver real business results.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-5">
            <a
              href="https://wa.me/9072239599"
              className="px-12 py-4 bg-black text-white rounded-full dark:bg-white dark:text-black font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              <FiSend /> Start a Conversation
            </a>
            <a
              href="#portfolio"
              className="px-12 py-4 border border-gray-300 dark:border-white/20 rounded-full dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
            >
              View Case Studies
            </a>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section className="px-6 lg:px-[10%] py-20 border-t border-gray-100 dark:border-white/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
              Expertise & Solutions
            </h2>
            <p className="text-gray-500 mt-4">Whatever your business needs, I have the stack to build it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group p-10 bg-gray-50 dark:bg-darkHover rounded-[2rem] border border-transparent hover:border-rose-500/30 transition-all">
              <FiLayout className="text-5xl text-rose-500 mb-6" />
              <h3 className="text-2xl font-bold mb-3 dark:text-white">Premium UI/UX</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                "Pixel-perfect" designs that represent your brand with elegance. 
                Optimized for all devices and user behaviors in the modern web.
              </p>
            </div>

            <div className="group p-10 bg-gray-50 dark:bg-darkHover rounded-[2rem] border border-transparent hover:border-blue-500/30 transition-all">
              <FiDatabase className="text-5xl text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-3 dark:text-white">Fullstack Systems</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Robust backends using Node.js & PostgreSQL. Perfect for booking 
                systems, CRM, and complex logic applications.
              </p>
            </div>

            <div className="group p-10 bg-gray-50 dark:bg-darkHover rounded-[2rem] border border-transparent hover:border-orange-500/30 transition-all">
              <FiSmartphone className="text-5xl text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold mb-3 dark:text-white">Ad-Ready Sites</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Strategic landing pages designed for Snapchat/Instagram ads with 
                integrated tracking and instant WhatsApp lead capture.
              </p>
            </div>
          </div>
        </section>

        {/* --- CASE STUDY: BLOOMSPACE --- */}
        <section id="portfolio" className="px-6 lg:px-[10%] py-24 bg-white dark:bg-darkTheme transition-all border-t border-gray-100 dark:border-white/10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            <div className="lg:w-[45%] order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full text-xs font-bold tracking-widest uppercase mb-8">
                Success Story: Abu Dhabi, UAE
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 dark:text-white leading-[1.1]">Bloomspace Design</h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                <p>
                  As a lead developer, I engineered a high-performance digital showroom for this premier <strong>Abu Dhabi interior design firm</strong>. The objective was to bridge the gap between their social media ads and customer inquiries.
                </p>
                <p>
                  Integrated <strong>Snapchat Pixel</strong> for traffic tracking and built an <strong>automated lead generation system</strong> for instant email inquiries.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <li className="flex items-center gap-3 text-sm font-medium dark:text-gray-200"><FiCheckCircle className="text-green-500 text-lg" /> Ad Tracking Integrated</li>
                <li className="flex items-center gap-3 text-sm font-medium dark:text-gray-200"><FiCheckCircle className="text-green-500 text-lg" /> Email Lead System</li>
                <li className="flex items-center gap-3 text-sm font-medium dark:text-gray-200"><FiCheckCircle className="text-green-500 text-lg" /> 4K Project Gallery</li>
                <li className="flex items-center gap-3 text-sm font-medium dark:text-gray-200"><FiCheckCircle className="text-green-500 text-lg" /> Interactive Maps</li>
              </ul>

              <div className="mb-12">
                <a href="https://bloomspacedesign.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-bold hover:scale-105 transition-all shadow-xl dark:shadow-none">
                  Visit Project <FiZap className="text-rose-500" />
                </a>
              </div>

              <div className="p-8 bg-gray-50 dark:bg-[#111] rounded-[2rem] border border-gray-100 dark:border-white/5 relative shadow-sm">
                <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed mb-6 italic">
                  "Irshad delivered exactly what we needed for customer canvassing. The attention to detail in the UI and site speed has transformed our inquiries."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-rose-600 flex items-center justify-center text-white font-bold text-xl">B</div>
                  <div>
                    <p className="font-bold dark:text-white text-lg">Bloomspace Management</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Abu Dhabi • UAE</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[55%] order-1 lg:order-2 w-full">
              <div className="relative aspect-[4/3] md:aspect-video lg:aspect-[4/3] xl:aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-gray-100 dark:border-[#1a1a1a]">
                <Image src="/clients/bloomspace-client.png" alt="Interior Design Website UAE" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" priority />
              </div>
            </div>
          </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section className="px-6 lg:px-[10%] py-24 bg-gray-50 dark:bg-darkHover/20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold dark:text-white">The Workflow</h2>
            <p className="text-gray-500 mt-4">Turning your vision into a high-performing digital reality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your audience in Malappuram or globally." },
              { step: "02", title: "Strategy", desc: "Planning UI/UX and SEO keywords for growth." },
              { step: "03", title: "Development", desc: "Building with Next.js, Node, and Prisma." },
              { step: "04", title: "Launch", desc: "Optimizing for Google and going live." }
            ].map((item, index) => (
              <div key={index} className="p-8 bg-white dark:bg-darkHover rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:border-rose-500/50 transition-all">
                <span className="text-5xl font-bold text-rose-500/10 block mb-4">{item.step}</span>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- PRICING SECTION --- */}
        <section className="px-6 lg:px-[10%] py-24 bg-white dark:bg-darkTheme">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold dark:text-white">Investment Tiers</h2>
            <p className="text-gray-500 mt-4">Premium engineering at transparent rates.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <div className="p-10 rounded-[3rem] border border-gray-100 dark:border-white/10 flex flex-col hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-2 dark:text-white">Starter</h3>
              <p className="text-gray-500 text-sm mb-6">For single-product or ad campaigns.</p>
              <div className="text-4xl font-bold mb-8 dark:text-white">₹5,000+</div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-center gap-2"><FiCheckCircle className="text-rose-500" /> Single Page (Next.js)</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-rose-500" /> WhatsApp Integration</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-rose-500" /> 1 Year Support</li>
              </ul>
              <a href="https://wa.me/9072239599" className="w-full py-4 text-center border border-black dark:border-white rounded-full font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">Get Quote</a>
            </div>
            {/* Pro */}
            <div className="p-10 rounded-[3rem] bg-black dark:bg-white text-white dark:text-black shadow-2xl relative lg:scale-105 flex flex-col">
              <div className="absolute top-6 right-8 bg-rose-600 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">Recommended</div>
              <h3 className="text-2xl font-bold mb-2">Business Pro</h3>
              <p className="text-gray-400 dark:text-gray-600 text-sm mb-6">Complete presence for firms.</p>
              <div className="text-4xl font-bold mb-8 font-Ovo">₹15,000+</div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-200 dark:text-gray-700 text-sm">
                <li className="flex items-center gap-2"><FiCheckCircle className="text-rose-600" /> Multi-Page Architecture</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-rose-600" /> Advanced SEO Setup</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-rose-600" /> Ad Tracker Integration</li>
              </ul>
              <a href="https://wa.me/9072239599" className="w-full py-4 text-center bg-rose-600 text-white rounded-full font-bold shadow-lg block">Choose Pro</a>
            </div>
            {/* Enterprise */}
            <div className="p-10 rounded-[3rem] border border-gray-100 dark:border-white/10 flex flex-col hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-2 dark:text-white">Fullstack</h3>
              <p className="text-gray-500 text-sm mb-6">Complex web applications.</p>
              <div className="text-4xl font-bold mb-8 dark:text-white">Custom</div>
              <ul className="space-y-4 mb-10 flex-grow text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-center gap-2"><FiCheckCircle className="text-rose-500" /> Auth & Databases</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-rose-500" /> Custom API Logic</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-rose-500" /> Ongoing Maintenance</li>
              </ul>
              <a href="https://wa.me/9072239599" className="w-full py-4 text-center border border-black dark:border-white rounded-full font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">Contact</a>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <section className="px-6 lg:px-[10%] py-24 text-center">
          <div className="bg-gradient-to-b from-gray-900 to-black dark:from-white dark:to-gray-100 py-16 px-8 rounded-[4rem] text-white dark:text-black shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to build something iconic?</h2>
            <p className="mb-10 text-gray-400 dark:text-gray-600 text-lg">Let's discuss your project today.</p>
            <a href="https://wa.me/9072239599" className="bg-rose-600 text-white px-12 py-4 rounded-full font-bold hover:bg-rose-700 transition-all text-lg shadow-xl inline-block">Get a Free Quote</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}