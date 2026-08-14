import Image from "next/image";

export default function Inspired() {
  return (
    <section
      id="inspired"
      className="bg-[#ece6dd] py-8 lg:py-12"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-center">

          {/* Photo */}
          <div className="relative w-full h-[400px] lg:h-[520px] rounded-3xl overflow-hidden">
            <Image
              src="/images/hero/dayant.jpeg"
              alt="Dayant, our inspiration"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="text-center lg:text-left">

            <p className="text-sm tracking-[0.3em] uppercase text-[#D4AA00] font-medium mb-5">
              Inspired by Dayant
            </p>

            <h2 className="text-4xl lg:text-6xl font-bold leading-[1.05] text-black">
              Grooming with a
              <br />
              <span className="italic text-[#D4AA00]">
                personal touch.
              </span>
            </h2>

            <p className="mt-8 text-lg lg:text-xl text-[#40546d] leading-relaxed">
              It all started with Dayant, our beloved Bichon Frise, who has
              been part of our family since November 10, 2021. His gentle
              spirit and love for being pampered showed us how special grooming
              can be when it’s built around trust, patience, and love. That’s
              why at Dayant’s, every pup receives the same care and attention
              we would want for our own.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}