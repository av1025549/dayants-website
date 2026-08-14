export default function Footer() {
  return (
    <footer className="bg-[#40546d] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="text-center">

          {/* Brand */}
          <h2 className="text-2xl font-serif tracking-widest text-[#D4AA00] font-semibold">
            DAYANT'S
          </h2>

          <p className="mt-1 text-sm tracking-widest uppercase">
            Luxury Mobile Grooming
          </p>

          <p className="mt-3 text-sm text-white/80">
            Professional grooming, delivered to your door.
          </p>

          {/* Navigation */}
          <div className="mt-8 flex justify-center gap-8 text-sm uppercase tracking-widest">
            <a
              href="#inspired"
              className="hover:text-[#D4AA00] transition"
            >
              About
            </a>

            <a
              href="#gallery"
              className="hover:text-[#D4AA00] transition"
            >
              Gallery
            </a>

            <a
              href="#faq"
              className="hover:text-[#D4AA00] transition"
            >
              FAQ
            </a>
          </div>

          {/* Contact */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">

            <a
              href="tel:6197774492"
              className="hover:text-[#D4AA00] transition"
            >
              619-777-4492
            </a>

            <span className="hidden sm:block text-white/40">•</span>

            <a
              href="mailto:info@dayantsluxurygrooming.com"
              className="hover:text-[#D4AA00] transition"
            >
              info@dayantsluxurygrooming.com
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/20 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Dayant's Luxury Mobile Grooming. All rights reserved.
        </div>

      </div>
    </footer>
  );
}