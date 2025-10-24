import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="
        relative w-full
        min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh]
        flex flex-col items-center justify-center text-center
        px-6 py-16
        bg-cover bg-no-repeat
        bg-[position:50%_42%]   
        text-gray-50
      "
      style={{ backgroundImage: "url('/images/inside.jpg')" }}
      role="region"
    >
      {/* overlay to keep text readable on any photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"
      />

      <div className="relative z-10 max-w-3xl">
        {/* Hero Title */}
        <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
          Welcome to GioB Beauty
        </h1>

        <p className="mt-3 text-base sm:text-lg md:text-xl font-light text-white/90">
          Where beauty meets elegance. Book your appointment today and let us pamper you.
        </p>

        {/* Call to Action */}
        <div className="mt-6 flex justify-center flex-wrap gap-3 sm:gap-4">
          <Link
            to="/services"
            className="
              inline-flex items-center justify-center
              rounded-full px-6 py-2.5
              bg-rose-200 text-gray-800 hover:text-[#407088]
              shadow-md transition
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#407088]
            "
          >
            View Our Services
          </Link>

          <a
            href="https://www.joinblvd.com/b/giobbeauty/widget#/cart/menu/Head%20Spa%20Services"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              rounded-full px-6 py-2.5
              bg-rose-200 text-gray-800 hover:text-[#407088]
              shadow-md transition
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#407088]
            "
            aria-label="Book Now (opens in a new tab)"
          >
            Book Now
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;





