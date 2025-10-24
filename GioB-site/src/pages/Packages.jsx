// src/pages/Packages.jsx
import { Link } from "react-router-dom";

export default function Packages() {
  return (
    <main className="bg-[#f8fafc] text-gray-800">
      {/* HERO */}
<section
  className="
    relative text-center text-white
    py-24 px-6
    bg-cover bg-no-repeat
    bg-[position:50%_55%]   /* move image down (Y=80%) */
    md:bg-[position:50%_65%]/* tweak for desktop */
  "
  style={{ backgroundImage: "url('/images/drink.jpg')" }}
  aria-label="Packages hero section"
>
  <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
  <div className="relative z-10 max-w-3xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Spa & Party Packages</h1>
    <p className="text-lg md:text-xl text-white/90">Discover the perfect self-care experience for yourself or a loved one ✨</p>
  </div>
</section>

      {/* HEAD SPA FOR 2 */}
<section className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-10">
  <div className="lg:w-1/2">
    <video
      src="/videos/headspa1.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-[520px] md:h-[640px] rounded-2xl shadow-md object-cover object-[50%_35%]"
    />
  </div>



        <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
          <h2
            id="headspa2-heading"
            className="text-3xl font-semibold text-[#407088]"
          >
            Head Spa for 2 – Together
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Enjoy a relaxing and rejuvenating experience side-by-side with a friend or
            partner in our tranquil spa suite.
          </p>

          <ul className="space-y-1 text-gray-800">
            <li>Gold Head Spa – <strong>$370</strong></li>
            <li>Silver Head Spa – <strong>$330</strong></li>
            <li>Bronze Head Spa – <strong>$280</strong></li>
          </ul>

          <a
            href="https://www.joinblvd.com/b/giobbeauty/widget#/cart/menu/Head%20Spa%20Services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center rounded-full px-8 py-3 bg-rose-200 text-gray-800 hover:text-[#407088] shadow-md transition"
          >
            Book This Experience
          </a>
        </div>
      </section>

      {/* MULTI-SESSION PACKAGES */}
      <section
        aria-labelledby="multi-heading"
        className="bg-white py-16 px-6 text-center"
      >
        <h2
          id="multi-heading"
          className="text-3xl font-semibold text-[#407088] mb-10"
        >
          Multi-Session Head Spa Packages
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 justify-center">
          {[
            {
              title: "3-Session Head Spa",
              gold: "$540",
              silver: "$480",
              bronze: "$395",
            },
            {
              title: "5-Session Head Spa",
              gold: "$875",
              silver: "$775",
              bronze: "$640",
            },
          ].map((pkg) => (
            <article
              key={pkg.title}
              className="bg-[#f9f9f9] rounded-2xl shadow-md hover:shadow-lg transition-all p-8 text-left"
              aria-label={pkg.title}
            >
              <h3 className="text-xl font-semibold text-[#407088] mb-2">
                {pkg.title}
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>Gold Head Spa – {pkg.gold}</li>
                <li>Silver Head Spa – {pkg.silver}</li>
                <li>Bronze Head Spa – {pkg.bronze}</li>
              </ul>
              <a
                href="https://www.joinblvd.com/b/giobbeauty/widget#/cart/menu/Head%20Spa%20Services"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex justify-center rounded-full px-6 py-2.5 bg-rose-200 text-gray-800 hover:text-[#407088] shadow-sm transition"
              >
                Book Package
              </a>
            </article>
          ))}
        </div>

        <p className="max-w-3xl mx-auto mt-10 text-gray-600 text-sm leading-relaxed">
          Please read all details before booking. For any questions, text us at{" "}
          <a
            href="sms:7079899135"
            className="underline text-[#407088] hover:text-pink-600"
          >
            (707) 989-9135
          </a>{" "}
           our team will gladly assist you
        </p>
      </section>

      {/* PARTY PACKAGES */}
      <section
        aria-labelledby="party-heading"
        className="max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-10"
      >
        <div className="lg:w-1/2 order-2 lg:order-1 space-y-4 text-center lg:text-left">
          <h2
            id="party-heading"
            className="text-3xl font-semibold text-[#407088]"
          >
            Head Spa Party Packages
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Celebrate your special occasion with an unforgettable spa day! Perfect for
            birthdays, bridal showers, or self-care gatherings.
          </p>

          <ul className="space-y-1 text-gray-800">
            <li>Party for 4 – <strong>$780</strong></li>
            <li>Party for 6 – <strong>$1,150</strong></li>
            <li>Party for 8 – <strong>$1,500</strong></li>
          </ul>

    <p className="text-sm text-gray-600 mt-4">
  All packages include food, champagne, and a private room 🥂✨ Party for 10+ or Custom Event. 
  Hosting a larger group or private event? Text{" "}
  <a
    href="sms:7073669133"
    className="underline text-[#407088] hover:text-pink-600"
  >
    (707) 366-9133
  </a>{" "}
  to contact Gigi and customize your Head Spa Party experience.
</p>

        </div>

        <div className="lg:w-1/2 order-1 lg:order-2">
          <img
            src="/images/snacks.jpg"
            alt="Head Spa Party celebration"
            className="rounded-2xl shadow-md object-cover w-full h-[400px]"
          />
        </div>
      </section>
    </main>
  );
}
