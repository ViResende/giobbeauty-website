// src/pages/Services.jsx
import { Link } from "react-router-dom";

export default function Services() {
  const bookingUrl =
    "https://www.joinblvd.com/b/giobbeauty/widget#/cart/menu/Head%20Spa%20Services";

  const pkgs = [
    {
      name: "Bronze",
      price: "$149.99+",
      time: "1h 10m",
      desc: "A restorative scalp facial and hydration ritual for relaxation and balance.",
      items: [
        "40-min scalp facial and deep cleanse",
        "Hair treatment with steam",
        "Mini shoulder & neck massage",
        "Light blow-dry (damp finish)",
      ],
      img: "/images/promo.webp",
      imgPos: "center 20%", // move up slightly
    },
    {
      name: "Silver",
      price: "$179.99+",
      time: "1h 30m",
      desc: "A rejuvenating experience combining scalp and hair care for lasting shine.",
      items: [
        "50-min scalp facial and hydration",
        "Hair treatment with steam",
        "Mini shoulder & neck massage",
        "Blow-dry & styling (polished finish)",
      ],
      img: "/images/silver.jpg",
      imgPos: "center 70%", // move down slightly
    },
    {
      name: "Gold",
      price: "$199.99+",
      time: "1h 45m",
      desc: "Our most-loved service: scalp, hair, and facial harmony in one indulgent session.",
      items: [
        "55-min scalp facial and hydration",
        "Hair treatment with steam + mini facial",
        "Mini shoulder & neck massage",
        "Blow-dry & styling",
      ],
      badge: "Most Popular",
      img: "/images/headspa.jpg",
    },
    {
      name: "Platinum",
      price: "$249.99+",
      time: "2h 10m",
      desc: "A deep detox and renewal therapy for scalp buildup and ultimate relaxation.",
      items: [
        "65-min scalp facial, detox & exfoliation",
        "Customized steam treatment",
        "Mini shoulder & neck massage",
        "Blow-dry & styling",
      ],
      img: "/images/analyze.jpg",
    },
  ];

  return (
    <main
      id="main"
      aria-labelledby="services-heading"
      className="bg-[#f7fafa] text-gray-800 px-6 py-12 max-w-7xl mx-auto space-y-16"
    >
      {/* HEADER */}
      <header className="text-center max-w-3xl mx-auto mb-4">
        <h1
          id="services-heading"
          className="text-4xl md:text-5xl font-bold text-[#407088] mb-2"
        >
          Our Services
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Experience relaxation and rejuvenation with our signature head spa and full-service beauty treatments.
        </p>

        <p className="text-base text-gray-600 mt-3 italic">
          Note: Any Head Spa service can accommodate up to two people. Please check availability when booking.
          For questions about booking for two, feel free to text (707) 989-9135.
          Please allow up to 24 hours for a response.
        </p>
      </header>

      {/* HEAD SPA GRID */}
      <section aria-labelledby="headspa-heading">
        <h2
          id="headspa-heading"
          className="text-3xl font-semibold mb-6 text-[#407088] text-center"
        >
          Head Spa Experiences
        </h2>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-2">
          {pkgs.map((pkg) => (
            <article
              key={pkg.name}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              aria-label={`${pkg.name} head spa package`}
            >
              <img
                src={pkg.img}
                alt={`${pkg.name} Head Spa`}
                className="w-full h-64 object-cover"
                style={{ objectPosition: pkg.imgPos || "center" }}
              />
              <div className="p-6 md:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-[#407088]">{pkg.name}</h3>
                    <p className="text-xl font-semibold">{pkg.price}</p>
                  </div>

                  <p className="text-sm text-gray-500 mb-2">Duration: {pkg.time}</p>

                  {pkg.badge && (
                    <span className="inline-block mb-3 rounded-full bg-[#407088] text-white text-xs px-3 py-1">
                      {pkg.badge}
                    </span>
                  )}

                  <p className="text-base mb-3 text-gray-700 italic">{pkg.desc}</p>
                  <ul className="list-disc list-inside space-y-1 text-[15px] text-gray-700">
                    {pkg.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-full px-6 py-2.5 bg-rose-200 text-gray-800 hover:text-[#407088] shadow-sm transition-all duration-300
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#407088]"
                    aria-label={`Book ${pkg.name} Head Spa (opens in a new tab)`}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* main book button below all packages */}
        <div className="text-center mt-10">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center rounded-full px-8 py-3 bg-rose-200 text-gray-800 hover:text-[#407088] shadow-md transition-all duration-300
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#407088]"
            aria-label="Book Head Spa services (opens in a new tab)"
          >
            Book Head Spa Services
          </a>
        </div>
      </section>

      {/* HAIR SERVICES */}
      <section aria-labelledby="hair-services-heading" className="mt-8">
        <h2
          id="hair-services-heading"
          className="text-3xl font-semibold mb-10 text-[#407088] text-center"
        >
          Hair Services & Prices
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <img
            src="/images/cuttinghair.jpg"
            alt="Stylist performing a hair service"
            className="w-full h-[380px] md:h-[520px] object-cover rounded-2xl shadow-md"
          />

          <div className="bg-white rounded-2xl shadow-md px-8 py-10 flex flex-col justify-between">
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <h3 className="text-lg font-semibold text-[#407088] mb-2">Haircut</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between"><span>Women’s haircut</span><span>$80+</span></li>
                </ul>

                <h3 className="text-lg font-semibold text-[#407088] mt-6 mb-2">Style</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between"><span>Blowout</span><span>$50+</span></li>
                  <li className="flex justify-between"><span>Styling</span><span>$65+</span></li>
                  <li className="flex justify-between"><span>Updo / Detailed Styling</span><span>$100+</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#407088] mb-2">Color</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between"><span>Gloss / Toner</span><span>$95+</span></li>
                  <li className="flex justify-between"><span>Regrowth Application</span><span>$110+</span></li>
                  <li className="flex justify-between"><span>Full Color</span><span>$180+</span></li>
                </ul>

                <h3 className="text-lg font-semibold text-[#407088] mt-6 mb-2">Treatments</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between"><span>Custom Treatment</span><span>$95+</span></li>
                  <li className="flex justify-between"><span>Wash Only</span><span>$15+</span></li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full px-6 py-3 bg-rose-200 text-gray-800 hover:text-[#407088] shadow-sm transition-all duration-300
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#407088]"
                aria-label="Book hair services (opens in a new tab)"
              >
                Book Hair Services
              </a>

              <p className="text-sm text-gray-500 mt-3">
                Prices may vary by hair length, density, and stylist.
              </p>

              <p className="text-sm text-gray-600 mt-2">
                We also have additional hair services available with other stylists, and we offer nail,
                waxing, and eyebrow services as well. These appointments are booked directly with each
                professional under the{" "}
                <Link
                  to="/"
                  state={{ scrollTo: "team" }}
                  className="underline text-[#407088] hover:text-pink-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#407088] rounded"
                  aria-label="Go to the Our Team section on the home page"
                >
                  Our Team
                </Link>{" "}
                section.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}





