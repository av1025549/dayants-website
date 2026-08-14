export default function WhyChoose() {
  const reasons = [
    {
      icon: "🚐",
      title: "Mobile Convenience",
      description:
        "We come directly to you, making grooming simple and stress-free.",
    },
    {
      icon: "🤍",
      title: "One-on-One Care",
      description:
        "Your pup receives personalized attention in a calm, private environment.",
    },
    {
      icon: "✨",
      title: "Luxury Experience",
      description:
        "Thoughtful grooming and premium care from start to finish.",
    },
    {
      icon: "🌿",
      title: "High-Quality Products",
      description:
        "We use carefully selected products that are gentle, safe, and effective.",
    },
    {
      icon: "🐶",
      title: "Stress-Free Visits",
      description:
        "A comfortable grooming experience designed around your pup's needs.",
    },
  ];

  return (
    <section
      id="why-choose"
      className="bg-[#f8f6f2] py-12 sm:py-12"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-sm tracking-[0.3em] uppercase text-[#D4AA00] font-medium">
            Why Choose Dayant's?
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black">
            More than grooming,
            <br />
            <span className="italic text-[#D4AA00]">
              it's personal care.
            </span>
          </h2>

          <p className="mt-6 text-lg text-[#40546d] leading-relaxed">
            Every detail is designed to make grooming easier for you
            and more comfortable for your pup.
          </p>

        </div>


        {/* Reasons */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">

          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`
                text-center px-6 py-8
                ${index !== 0 ? "lg:border-l border-gray-300" : ""}
                ${index > 1 ? "sm:border-l sm:border-gray-300 lg:border-l" : ""}
              `}
            >

              <div className="text-4xl mb-5">
                {reason.icon}
              </div>

              <h3 className="text-lg font-semibold text-black">
                {reason.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#40546d]">
                {reason.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}