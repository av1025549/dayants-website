export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F5F2EC] py-10 sm:py-24 lg:py-12"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Small Label */}
        <p className="text-sm tracking-[0.3em] uppercase text-[#D4AA00] font-medium">
          Get in Touch
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-black">
          Let's talk about
          <br />
          <span className="italic text-[#D4AA00]">
            your pup.
          </span>
        </h2>
<p className="mt-6 text-lg text-[#40546d] leading-relaxed max-w-2xl mx-auto">
  Have a question or need help choosing the right grooming experience?
  <br />
   We're here to help.
</p>


        {/* Contact Options */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">

          {/* Phone */}
          <a
            href="tel:6197774492"
            className="
              bg-white
              rounded-2xl
              px-6
              py-8
              border
              border-black/5
              hover:border-[#D4AA00]
              transition
            "
          >
            <div className="text-3xl mb-3">
              📞
            </div>

            <h3 className="text-lg font-semibold text-black">
              Call or Text
            </h3>

            <p className="mt-2 text-[#40546d]">
              619-777-4492
            </p>
          </a>


          {/* Email */}
          <a
            href="mailto:info@dayantsluxurygrooming.com"
            className="
              bg-white
              rounded-2xl
              px-6
              py-8
              border
              border-black/5
              hover:border-[#D4AA00]
              transition
            "
          >
            <div className="text-3xl mb-3">
              ✉️
            </div>

            <h3 className="text-lg font-semibold text-black">
              Email Us
            </h3>

            <p className="mt-2 text-[#40546d] break-words">
              info@dayantsluxurygrooming.com
            </p>
          </a>

        </div>


        {/* Booking CTA */}
        <div className="mt-6">

          <p className="text-[#40546d]">
            Ready to pamper your pup?
          </p>

          <a
            href="https://booking.moego.pet/ol/Dayantsluxurydoggrooming/book"
            target="_blank"
rel="noopener noreferrer"
            className="
              inline-block
              mt-4
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
            Book an Appointment
          </a>

        </div>

      </div>
    </section>
  );
}