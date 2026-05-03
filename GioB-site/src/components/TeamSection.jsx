function TeamSection() {
  const links = {
    gigi: "https://www.joinblvd.com/b/giobbeauty/widget#/cart/menu/Head%20Spa%20Services",
    sandra: "https://book.squareup.com/appointments/ryd1zuokxr7b9j/location/9FWGK607070PH/services",
    maddy: "https://www.joinblvd.com/b/giobbeauty/widget#/cart/menu/Hair%20Services",
    alicia: "https://www.instagram.com/licializet",
    ariana: "https://www.instagram.com/acrylixsbyari",
    kiara: "https://haus-of-kie.square.site/",
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
      name: "Alicia",
      role: "Master Hairstylist",
      img: "/images/alicia.webp",
      link: links.alicia,
      cta: "Book with Alicia",
    },
    {
      name: "Maddy",
      role: "Junior Hairstylist",
      img: "/images/maddy.jpg",
      link: links.maddy,
      cta: "Book with Maddy",
    },
    {
      name: "Ariana",
      role: "Nail Tech",
      img: "/images/ariana.webp",
      link: links.ariana,
      cta: "Book with Ariana",
    },
    {
      name: "Kiara",
      role: "Esthetician",
      img: "/images/kiara.webp",
      link: links.kiara,
      cta: "Book with Kiara",
    },
  ];

  return (
    <section
      id="team"
      tabIndex="-1"
      className="scroll-mt-24 md:scroll-mt-28 bg-white text-gray-800 px-6 py-20 text-center"
      aria-labelledby="team-heading"
    >
      <h2
        id="team-heading"
        className="text-3xl md:text-4xl font-bold mb-6 text-[#407088]"
      >
        Meet Our Team
      </h2>

      <p className="max-w-2xl mx-auto mb-14 text-base md:text-lg leading-relaxed text-gray-600">
        At GioB Beauty, our talented professionals bring expertise and passion
        to every service from scalp care and hairstyling to nails and beauty
        treatments.
      </p>

      <ul
        role="list"
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {people.map((p) => (
          <li
            key={p.name}
            className="bg-[#fff5f8] p-7 rounded-2xl shadow-sm border border-pink-100 w-full min-h-[360px] flex flex-col items-center transition hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={p.img}
              alt={`${p.name} — ${p.role}`}
              className="w-40 h-40 rounded-full mx-auto mb-5 object-cover object-center ring-4 ring-white shadow-md"
              width={160}
              height={160}
              loading="lazy"
              decoding="async"
            />

            <div className="text-center">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{p.role}</p>
            </div>

            {p.link && (
              <div className="mt-auto pt-5">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 min-w-[190px] px-5 rounded-full bg-[#f8c8d0] text-gray-800 hover:bg-[#407088] hover:text-white shadow-sm transition text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#407088]"
                  aria-label={`${p.cta} opens in a new tab`}
                >
                  {p.cta}
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="max-w-3xl mx-auto mt-16 bg-[#fff5f8] rounded-2xl p-8 shadow-sm border border-pink-100">
        <h3 className="text-2xl md:text-3xl font-bold text-[#407088]">
          WE ARE HIRING
        </h3>

        <p className="mt-3 text-base md:text-lg text-gray-600">
          Rooms &amp; Stations available
        </p>

        <p className="mt-4 text-gray-600">
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








