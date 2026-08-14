"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-8 py-8 flex justify-end items-center">

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 text-md uppercase tracking-widest">

          <a
            href="#inspired"
            className="hover:text-[#D4AA00] font-semibold transition"
          >
            About
          </a>

          <a
            href="#gallery"
            className="hover:text-[#D4AA00] font-semibold transition"
          >
            Gallery
          </a>

          <a
            href="#faq"
            className="hover:text-[#D4AA00] font-semibold transition"
          >
            FAQ
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-transparent border-0 p-0"
          aria-label="Open menu"
        >
          <span className="block w-7 h-[2px] bg-black mb-1.5"></span>
          <span className="block w-7 h-[2px] bg-black mb-1.5"></span>
          <span className="block w-7 h-[2px] bg-black"></span>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-20 right-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg px-6 py-5 flex flex-col gap-5 text-sm uppercase tracking-widest">

            <a
              href="#inspired"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#D4AA00] font-semibold transition"
            >
              About
            </a>

            <a
              href="#gallery"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#D4AA00] font-semibold transition"
            >
              Gallery
            </a>

            <a
              href="#faq"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#D4AA00] font-semibold transition"
            >
              FAQ
            </a>

          </div>
        )}

      </nav>
    </header>
  );
}