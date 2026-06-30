"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src={
              scrolled
                ? "/files/liofi-wordmark-v3-red.svg"
                : "/files/liofi-wordmark-v3-white.svg"
            }
            alt="LIOFI"
            width={150}
            height={32}
            priority
          />
        </a>

        {/* Links */}
        <div className="flex gap-8 text-sm font-medium">

          <a
            href="https://www.instagram.com/lio.fi"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors hover:opacity-70 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Instagram
          </a>

          <a
            href="https://wa.me/5275020464?text=Hola%20quiero%20probar%20el%20mango%20liofilizado"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors hover:opacity-70 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            WhatsApp
          </a>

        </div>

      </div>
    </nav>
  );
}