export default function Experience() {
  const services = [
    {
      name: "Deluxe Bath",
      icon: "🫧",
      description:
        "A complete bathing and maintenance service designed to keep your dog clean, fresh, and comfortable.",
      includes: [
        "Premium Bath",
        "Blow-Dry",
        "Brush-Out",
        "Nail Trim",
        "Ear Cleaning",
        "Finishing Touches",
      ],
    },
    {
      name: "Buzz",
      icon: "✂️",
      description:
        "A clean and polished grooming service designed for dogs who prefer a shorter, low-maintenance style.",
      includes: [
        "Bath",
        "Blow-Dry",
        "Haircut",
        "Nail Trim",
        "Ear Cleaning",
        "Finishing Touches",
      ],
    },
    {
      name: "Luxe",
      icon: "✨",
      description:
        "Our signature full-service grooming experience with a customized haircut and premium care from start to finish.",
      includes: [
        "Customized Haircut",
        "Premium Bath",
        "Blow-Dry",
        "Nail Trim",
        "Ear Cleaning",
        "Detailed Finishing Touches",
      ],
      featured: true,
    },
  ];

  return (
    <section
      id="experience"
      className="bg-white py-10 lg:py-10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-sm tracking-[0.3em] uppercase text-[#D4AA00] font-medium ">
            Our Grooming Experience
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-black">
            Thoughtful care,
            <br />
            <span className="italic text-[#D4AA00]">
              from start to finish.
            </span>
          </h2>

          <p className="mt-6 text-lg text-[#40546d] leading-relaxed">
            Choose the grooming experience that best fits your pup's style,
            needs, and personality.
          </p>

        </div>


        {/* Services */}
        <div className="mt-14 lg:mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {services.map((service) => (
            <div
              key={service.name}
              className={`
                relative
                rounded-3xl
                p-8
                lg:p-10
                bg-[#ece6dd]
                ${
                  service.featured
                    ? "border-2 border-[#D4AA00] shadow-lg"
                    : "border border-black/5"
                }
              `}
            >

              {/* Featured Label */}
              {service.featured && (
                <div className="absolute top-5 right-5 bg-[#D4AA00] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  Signature
                </div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-5">
                {service.icon}
              </div>

              {/* Service Name */}
              <h3 className="text-2xl lg:text-3xl font-bold text-black">
                {service.name}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[#40546d] leading-relaxed">
                {service.description}
              </p>

              {/* Includes */}
              <div className="mt-7">

                <p className="text-xs uppercase tracking-[0.2em] font-semibold text-black mb-4">
                  Includes
                </p>

                <ul className="space-y-3">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[#40546d]"
                    >
                      <span className="text-[#D4AA00] font-bold">
                        ✓
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>


        {/* CTA */}
        <div className="mt-8 lg:mt-8 text-center">

          <a
            href="https://booking.moego.pet/ol/Dayantsluxurydoggrooming/book"
            target="_blank"
rel="noopener noreferrer"
            className="
              inline-block
              bg-[#D4AA00]
              text-white
              px-8
              py-4
              rounded-full
              font-semibold
              hover:bg-[#c49c00]
              transition
            "
          >
            Book Appointment
          </a>

        </div>

      </div>
    </section>
  );
}