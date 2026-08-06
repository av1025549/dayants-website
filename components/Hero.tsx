import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
<p className="uppercase tracking-[0.35em] text-sm font-semibold text-yellow-700 mb-4">            Luxury Mobile Dog Grooming
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
  Luxury Grooming,
  <br />
  <span className="text-yellow-600 italic">
    Delivered to You.
  </span>
</h1>

          <p className="text-lg text-gray-600 max-w-md mb-8">
            Professional luxury mobile grooming throughout San Diego.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold"
            >
              Book Appointment
            </a>

            <a
              href="#"
              className="border border-black px-8 py-4 rounded-full font-semibold"
            >
              Call or Text
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-end">
          <Image
  src="/images/hero/van.jpeg"
  alt="Dayant's Grooming Van"
  width={650}
  height={500}
  className="rounded-3xl"
  priority
/>
        </div>

      </div>
    </section>
  );
}