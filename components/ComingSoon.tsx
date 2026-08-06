import Image from "next/image";

export default function ComingSoon() {
  return (
<main className="min-h-screen bg-gradient-to-b from-[#F8F6F2] via-[#F1EEE8] to-[#EAE6DE] flex items-center justify-center px-6">      <div className="max-w-xl text-center">

        <Image
          src="/images/logo/logo.svg"
          alt="Dayant's"
          width={260}
          height={260}
          className="mx-auto mb-0"
          priority
        />

        <h2 className="text-5xl font-bold text-[#C29A4B] mb-10">
          Launching Soon
        </h2>

        <p className="text-lg text-gray-600 leading-2">
          A luxury grooming experience is on its way.
        </p>

        <p className="text-lg text-gray-600 mt-6">
          We're getting everything ready to welcome you.
        </p>

            
        <a
  href="https://instagram.com/dayantsluxurygrooming"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-10 rounded-full border border-[#B68D40] px-6 py-3 text-[#B68D40] hover:bg-[#B68D40] hover:text-white transition-all duration-300"
>
  Follow us on Instagram
</a>
 <p className="mt-6 font-semibold">
          Serving San Diego County
        </p>

<p className="mt-3 text-gray-500">
          info@dayantsluxurygrooming.com
        </p>
      </div>
    </main>
  );
}