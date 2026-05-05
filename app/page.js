"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* --- SEO STRUCTURED DATA (JSON-LD) --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Irshad Konnola",
            "jobTitle": "MERN Stack & Mobile Engineer",
            "url": "https://irshadkonnola.vercel.app",
            "image": "https://irshadkonnola.vercel.app/og-image.png",
            "sameAs": [
              "https://linkedin.com/in/irshad-konnola-954516226",
              "https://github.com/Irshad-konnola",
              "https://www.instagram.com/irshad.konnola/"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Malappuram",
              "addressRegion": "Kerala",
              "addressCountry": "IN"
            },
            "description": "Expert Fullstack Developer and MERN Stack Engineer with 3+ years of experience specializing in Next.js, React Native, and Enterprise SaaS solutions."
          }),
        }}
      />

      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}