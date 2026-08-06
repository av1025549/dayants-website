"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">

        {/* Logo */}
        <a href="#" className="flex items-center">
  <Image
    src="/images/logo/logo.svg"
    alt="Dayant's Logo"
    width={180}
    height={70}
    priority
  />
</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest">
          <a href="#inspired" className="hover:text-yellow-600 transition">
            About
          </a>

          <a href="#gallery" className="hover:text-yellow-600 transition">
            Gallery
          </a>

          <a href="#faq" className="hover:text-yellow-600 transition">
            FAQ
          </a>
        </div>

        {/* Button */}
        <a
          href="#"
          className="bg-black text-white px-7 py-4 rounded-full font-semibold hover:bg-neutral-800 transition"
        >
          Book Appointment
        </a>

      </nav>
    </header>
  );
}