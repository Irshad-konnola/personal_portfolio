import  { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  metadataBase: new URL("https://irshadkonnola.vercel.app"),
  title: {
    default: "Irshad Konnola | Premium Web Developer in Malappuram",
    template: "%s | Irshad Konnola"
  },
  category: 'technology',
  classification: 'Professional Portfolio',
  verification: {
    google: 'GT6APACuMdf-3r5NOIeMcbvUikRwHuHtxPzGQj9rhLU',
  },
  description: "High-performance Fullstack Web Developer specializing in Next.js, React, and Node.js. Building 'Pixel-Perfect' solutions for businesses in Kerala and globally.",
  keywords: ["Web Developer Malappuram", "Next.js Expert Kerala", "Freelance Web Developer India", "Fullstack Developer Kerala", "Mobile Application Developer"],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Irshad Konnola" }],
  icons: {
    icon: "/favicon.ico", 
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Irshad Konnola | Premium Web Developer",
    description: "Building iconic digital products for modern businesses.",
    url: "https://irshadkonnola.vercel.app/", 
    siteName: "Irshad Konnola Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Irshad Konnola Portfolio Preview" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Irshad Konnola | Premium Web Developer",
    description: "Building iconic digital products for modern businesses.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}