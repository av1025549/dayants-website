import Image from "next/image";

export default function Hero() {
  return (
   <section className="relative overflow-hidden min-h-0 lg:min-h-screen">

      {/* =====================================================
          DESKTOP VERSION
          NO CAMBIAMOS TU DISEÑO
          ===================================================== */}

      <div className="hidden lg:block relative min-h-screen">

        {/* Desktop Background */}
        <Image
          src="/images/hero/vaaan.png"
          alt="Dayant's Luxury Mobile Grooming Van"
          fill
          priority
          className="object-cover object-[65%_center]"
        />

        {/* Desktop Overlay */}


        {/* Desktop Content */}
        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">

          {/* Logo */}
          <div className="pt-8 lg:pt-10">
            <Image
              src="/images/logo/logo.svg"
              alt="Dayant's Luxury Mobile Grooming"
              width={320}
              height={320}
              priority
              className="w-[300px] h-auto translate-x-38"
            />
         

          {/* Hero Content */}
          <h1
className="
  text-7xl
  font-bold
  leading-[1.05]
  text-black
  text-center
  max-w-xl
  lg:whitespace-nowrap
  drop-shadow-[0_2px_3px_rgba(255,255,255,0.45)]
"
>
  Luxury Grooming,
  <br />

  <span className="italic text-[#D4AA00] drop-shadow-[0_2px_2px_rgba(255,255,255,0.5)]">
    Delivered to You.
  </span>
</h1>

            {/* Description */}
            <p
  className="
    mt-4
    text-lg
    lg:text-xl
    text-black
    font-medium
    leading-relaxed
    max-w-xl
    text-center
    drop-shadow-[0_1px_1px_rgba(255,255,255,100)]
  "
>
  Professional mobile grooming brought directly to your doorstep
  throughout San Diego.
</p>

            {/* Buttons */}
            <div className="mt-30 flex flex-row gap-12 justify-start lg:-translate-y-8">

              <a
  href="https://booking.moego.pet/ol/Dayantsluxurydoggrooming/book"
  target="_blank"
rel="noopener noreferrer"
                className="bg-[#D4AA00] text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-[#c49c00] transition"
              >
                Book Appointment
              </a>

              <a
               href="#contact"
                className="border border-black bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-center hover:bg-black hover:text-white transition"
              >
                Contact Us
              </a>
              

            </div>
          </div>
        </div>
      </div>


      {/* =====================================================
          MOBILE VERSION
          SOLO APARECE EN MOBILE
          ===================================================== */}

      <div className="lg:hidden">

        {/* =================================================
            MOBILE TOP — VEEEN.PNG
            COVER + CONTENT ON TOP
            ================================================= */}

        <div className="relative min-h-[650px] overflow-hidden">

          {/* Mobile Background */}
          <Image
            src="/images/hero/veeen.png"
            alt="Dayant's Luxury Mobile Grooming"
            fill
            priority
            className="object-cover object-[0%_center]"
          />

          {/* Mobile Overlay */}
          <div className="absolute inset-0 bg-[#ece6dd]/45" />

          {/* Mobile Content */}
          <div className="relative z-10 px-6 text-center">

            {/* Logo */}
            <div className="pt-6 flex justify-center">
              <Image
                src="/images/logo/logo.svg"
                alt="Dayant's Luxury Mobile Grooming"
                width={320}
                height={320}
                priority
                className="w-[220px] h-auto"
              />
            </div>

            {/* Hero Content */}
            <div className="mt-6">

              {/* Heading */}
              <h1 className="text-4xl font-bold leading-[1.05] text-black">
                Luxury Grooming,
                <br />

                <span className="italic text-[#D4AA00]">
                  Delivered to You.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-5 text-base font-semibold text-black leading-relaxed max-w-sm mx-auto">
                Professional mobile grooming brought directly to your doorstep
                throughout San Diego.
              </p>

              {/* Buttons */}
              <div className="mt-52 flex flex-row justify-between items-center w-full px-2 lg:mt-10 lg:gap-12">

                <a
                  href="https://booking.moego.pet/ol/Dayantsluxurydoggrooming/book"
target="_blank"
rel="noopener noreferrer"
                  className="bg-[#D4AA00] text-white px-3 py-2 rounded-full font-semibold text-center text-xs "
                >
                  Book Appointment
                </a>

                <a
                href="#contact"
                className="border border-black bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full font-semibold text-center text-xs"
                >
                  Contact Us
                </a>

              </div>

            </div>
          </div>
        </div>



      </div>

    </section>
  );
}