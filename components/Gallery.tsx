export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#F5F2EC] py-10 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Label */}
        <p className="text-sm tracking-[0.35em] uppercase text-[#D4AA00] font-medium">
          Our Gallery
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-5xl md:text-6xl font-bold leading-[1.05] text-black">
          A closer look at
          <br />
          <span className="italic text-[#D4AA00]">
            the Dayant's experience.
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto text-lg text-[#40546d] leading-relaxed">
          We’re getting everything ready for you. Soon, you’ll see our
          grooming work, happy pups, and a closer look at the Dayant experience.
        </p>

        {/* Coming Soon Gallery */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="h-80 rounded-3xl bg-[#EAE4DA] border border-[#D4AA00]/30 flex flex-col items-center justify-center">
            <div className="text-5xl">✂️</div>

            <h3 className="mt-5 text-2xl font-semibold text-black">
              Grooming Moments
            </h3>

            <p className="mt-2 text-sm tracking-[0.2em] uppercase text-[#D4AA00]">
              Coming Soon
            </p>
          </div>

          {/* Card 2 */}
          <div className="h-80 rounded-3xl bg-[#EAE4DA] border border-[#D4AA00]/30 flex flex-col items-center justify-center">
            <div className="text-5xl">🐶</div>

            <h3 className="mt-5 text-2xl font-semibold text-black">
              Happy Pups
            </h3>

            <p className="mt-2 text-sm tracking-[0.2em] uppercase text-[#D4AA00]">
              Coming Soon
            </p>
          </div>

          {/* Card 3 */}
          <div className="h-80 rounded-3xl bg-[#EAE4DA] border border-[#D4AA00]/30 flex flex-col items-center justify-center">
            <div className="text-5xl">✨</div>

            <h3 className="mt-5 text-2xl font-semibold text-black">
              The Dayant Experience
            </h3>

            <p className="mt-2 text-sm tracking-[0.2em] uppercase text-[#D4AA00]">
              Coming Soon
            </p>
          </div>
{/* Instagram */}
<div className="flex justify-center w-full"></div>
<a
  href="https://www.instagram.com/dayantsluxurygrooming"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex
    items-center
    justify-center
    gap-3
    mt-2
    bg-[#F5F2EC]
    text-[#D4AA00]
    border
    border-[#D4AA00]
    px-8
    py-4
    rounded-full
    font-semibold
    hover:bg-[#D4AA00]
    hover:text-white
    transition
  "
>
  {/* Instagram Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-7 h-7"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
    />
    <circle cx="12" cy="12" r="4" />
    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      fill="currentColor"
      stroke="none"
    />
  </svg>

  Follow Us on Instagram
</a>
        </div>

      </div>
    </section>
  );
}