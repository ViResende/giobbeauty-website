function TeamSection() {
  const links = {
    gigi: "https://www.joinblvd.com/b/giobbeauty/widget#/cart/menu/Head%20Spa%20Services",
    sandra:
      "https://book.squareup.com/appointments/ryd1zuokxr7b9j/location/9FWGK607070PH/services",
    maddy:
      "https://www.joinblvd.com/b/giobbeauty/widget#/cart/menu/Hair%20Services",
  };

  const people = [
    {
      name: "Gigi",
      role: "Owner • Hairstylist & Scalp Specialist",
      img: "/images/gigi.jpg",
      link: links.gigi,
      cta: "Explore Head Spa",
    },
    {
      name: "Sandra",
      role: "Master Hairstylist",
      img: "/images/sandrahair.jpg",
      link: links.sandra,
      cta: "Book with Sandra",
    },
    {
      name: "Maddy",
      role: "Junior Hairstylist",
      img: "/images/maddy.jpg",
      link: links.maddy,
      cta: "Book with Maddy",
    },
  ];

  return (
    <section
      id="team"
      tabIndex="-1"
      className="scroll-mt-24 md:scroll-mt-28 bg-white text-gray-800 px-6 py-16 text-center"
      aria-labelledby="team-heading"
    >
      <h2
        id="team-heading"
        className="text-3xl md:text-4xl font-bold mb-6 text-[#407088]"
      >
        Meet Our Team
      </h2>

      <p className="max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
        At GioB Beauty, our talented professionals bring expertise and passion
        to every service from scalp care and hairstyling to nails and beauty
        treatments.
      </p>

      {/* Spread 3 cards evenly (left / center / right) */}
      <ul
        role="list"
        className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-items-stretch"
      >
        {people.map((p) => (
          <li
            key={p.name}
            className="bg-pink-50 p-6 rounded-lg shadow-md w-full h-full flex flex-col items-center"
          >
            <img
              src={p.img}
              alt={`${p.name} — ${p.role}`}
              className="w-44 h-44 rounded-full mx-auto mb-4 object-cover"
            />

            <div className="text-center">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.role}</p>
            </div>

            {p.link && (
              <div className="mt-auto pt-4">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 min-w-[190px] px-5 rounded-full
                             bg-rose-200 text-gray-800 hover:text-[#407088] shadow-sm transition text-sm font-medium
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#407088]"
                  aria-label={`${p.cta} (opens in a new tab)`}
                >
                  {p.cta}
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* WE ARE HIRING */}
      <div className="max-w-3xl mx-auto mt-14 bg-pink-50 rounded-xl p-8 shadow-sm">
        <h3 className="text-2xl md:text-3xl font-bold text-[#407088]">
          WE ARE HIRING
        </h3>

        <p className="mt-3 text-base md:text-lg text-gray-700">
          Rooms &amp; Stations available
        </p>

        <p className="mt-4 text-gray-700">
          Contact Gigi at{" "}
          <a
            href="tel:+17073669133"
            className="font-semibold underline underline-offset-4 hover:text-[#407088]"
          >
            (707) 366-9133
          </a>{" "}
          for more info.
        </p>
      </div>
    </section>
  );
}

export default TeamSection;








