function TeamSection() {
  const links = {
    gigi: "https://www.joinblvd.com/b/giobbeauty/widget#/cart/menu/Head%20Spa%20Services",
    madeline: "https://nailsbymadeline1.glossgenius.com/",
    sandra:
      "https://book.squareup.com/appointments/ryd1zuokxr7b9j/location/9FWGK607070PH/services",
    maddy:
      "https://www.joinblvd.com/b/giobbeauty/widget#/cart/menu/Hair%20Services",
    gaby:
      "https://gabyvillasenor.glossgenius.com/",
  };

  // Keeping CTAs short to avoid wrapping; all buttons are fixed-size
  const people = [
    { name: "Gigi",     role: "Owner • Hairstylist & Scalp Specialist", img: "/images/gigi.jpg",      link: links.gigi,     cta: "Explore Head Spa" },
    { name: "Madeline", role: "Nail Technician",                         img: "/images/madeline.jpg", link: links.madeline, cta: "Book Nails" },
    { name: "Sandra",   role: "Master Hairstylist",                      img: "/images/sandrahair.jpg",link: links.sandra,   cta: "Book with Sandra" },
    { name: "Maddy",    role: "Junior Hairstylist",                      img: "/images/maddy.jpg",    link: links.maddy,    cta: "Book with Maddy" },
    { name: "Gaby",     role: "Master Hairstylist",                      img: "/images/gaby.jpg",     link: links.gaby,     cta: "Book with Gaby" },
  ];

  // One class to guarantee uniform size
  const buttonClass =
    "inline-flex items-center justify-center h-11 min-w-[190px] px-5 rounded-full " +
    "bg-rose-200 text-gray-800 hover:text-[#407088] shadow-sm transition " +
    "text-sm font-medium focus-visible:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-offset-2 focus-visible:ring-[#407088]";

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

      <ul role="list" className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto">
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

  {/* name + role */}
  <div className="text-center">
    <h3 className="text-xl font-semibold">{p.name}</h3>
    <p className="text-sm text-gray-600">{p.role}</p>
  </div>

  {/* button pinned to bottom across all cards */}
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
    </section>
  );
}

export default TeamSection;






