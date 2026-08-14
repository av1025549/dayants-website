"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
       question: "Why mobile grooming instead of a traditional salon?",
      answer:
        "Mobile grooming eliminates the stressful trip to the salon and gives your pup a private, one-on-one experience right outside your home. Less waiting, less noise, and more personalized attention from start to finish.",
    },
    
    {
      question: "What's included with each grooming service?",
      answer:
        "Every service includes professional bathing, blow-drying, nail trimming, ear cleaning, and finishing touches. Depending on the service selected, additional grooming such as brushing or a customized haircut is included.",
    },
    {
      question: "How long does a grooming appointment take?",
      answer:
        "Grooming time varies depending on your pup's size, coat, condition, and selected service. We take the time needed to provide careful, personalized grooming rather than rushing through the appointment.",
    },
    {
      question: "Do you groom nervous dogs?",
      answer:
        "Yes. We believe grooming should be built around patience, trust, and comfort. For nervous or anxious pups, we'd love to speak with you before the appointment to learn more about their personality, triggers, and needs. This helps us personalize the experience and create the calmest, most comfortable grooming visit possible.",
    },
    {
      question: "Do you groom all breeds and coat types?",
      answer:
        "We welcome dogs of different breeds, sizes, and coat types. During booking, we'll collect information about your pup so we can recommend the service that best fits their needs.",
    },
    {
        question: "What areas do you serve?",
      answer:
        "We currently provide mobile grooming throughout San Diego. Our service comes directly to your home, so your pup can enjoy a comfortable grooming experience without the stress of traveling to a salon.",
    },
    {
      question: "Can I request a specific haircut or style?",
      answer:
        "Absolutely. For our Luxe service, we offer customized haircuts based on your pup's coat, lifestyle, and your preferred look. You can discuss the desired style with us before grooming begins.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can book directly through our appointment system. If you're unsure which service is right for your pup, you can also contact us and we'll be happy to help.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-[#ece6dd] py-10 sm:py-24 lg:py-12"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm tracking-[0.3em] uppercase text-[#D4AA00] font-medium">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-black">
            Everything you need
            <br />
            <span className="italic text-[#D4AA00]">
              to know.
            </span>
          </h2>

          <p className="mt-6 text-lg text-[#40546d] leading-relaxed max-w-2xl mx-auto">
            Have questions before booking? We've got you covered.
          </p>

        </div>


        {/* FAQ Accordion */}
        <div className="mt-8 lg:mt-8 space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border
                  border-black/5
                  transition
                "
              >

                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-6
                    text-left
                    px-6
                    py-6
                    lg:px-8
                    hover:text-[#D4AA00]
                    transition
                  "
                >

                  <span className="text-base sm:text-lg font-semibold text-black">
                    {faq.question}
                  </span>

                  <span
                    className={`
                      flex-shrink-0
                      text-2xl
                      font-light
                      text-[#D4AA00]
                      transition-transform
                      duration-300
                      ${isOpen ? "rotate-45" : ""}
                    `}
                  >
                    +
                  </span>

                </button>


                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >

                  <div className="overflow-hidden">

                    <p className="px-6 pb-6 lg:px-8 text-[#40546d] leading-relaxed">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>


        {/* Contact CTA */}
        <div className="mt-8 text-center">

          <p className="text-[#40546d]">
            Still have questions?
          </p>

          <a
            href="#contact"
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
            Contact Us
          </a>

        </div>

      </div>
    </section>
  );
}