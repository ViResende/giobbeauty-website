// src/components/Header.jsx
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollLink = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gray-900 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          src="/images/newlogo.png"
          alt="GioB Beauty logo"
          aria-label="GioB Beauty logo"
          className="w-[120px] h-auto rounded-lg bg-gray-900 p-1"
        />

        {/* Hamburger button for mobile */}
        <button
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden inline-flex items-center justify-center p-2 rounded text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6" aria-label="Main navigation">
          <Link
            to="/"
            className="text-white hover:text-pink-600 transition"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setMenuOpen(false);
            }}
          >
            Home
          </Link>

          <Link to="/services" className="text-white hover:text-pink-600 transition">
            Services
          </Link>

          {/* NEW: Packages */}
          <Link to="/packages" className="text-white hover:text-pink-600 transition">
            Packages
          </Link>

          <a
            onClick={() => handleScrollLink("team")}
            className="cursor-pointer text-white hover:text-pink-600 transition"
          >
            Our Team
          </a>

          <a
            onClick={() => handleScrollLink("giftcard")}
            className="cursor-pointer text-white hover:text-pink-600 transition"
          >
            Gift Card
          </a>

          <a
            onClick={() => handleScrollLink("contact")}
            className="cursor-pointer text-white hover:text-pink-600 transition"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile dropdown menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transform transition-all duration-300 ease-in-out overflow-hidden border-t border-gray-800 fixed top-[70px] left-0 w-full ${
          menuOpen ? "max-h-96 opacity-100 bg-gray-900 text-white" : "max-h-0 opacity-0 bg-gray-900 text-white"
        } z-40`}
      >
        <nav aria-label="Mobile navigation">
          <ul className="px-6 py-4 space-y-3">
            <li>
              <Link
                to="/"
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  setMenuOpen(false);
                }}
                className="block text-white hover:text-pink-500 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                onClick={() => setMenuOpen(false)}
                className="block text-white hover:text-pink-500 transition"
              >
                Services
              </Link>
            </li>

            {/* NEW: Packages */}
            <li>
              <Link
                to="/packages"
                onClick={() => setMenuOpen(false)}
                className="block text-white hover:text-pink-500 transition"
              >
                Packages
              </Link>
            </li>

            <li>
              <button
                onClick={() => handleScrollLink("team")}
                className="block text-left text-white hover:text-pink-500 transition w-full"
              >
                Our Team
              </button>
            </li>

            <li>
              <button
                onClick={() => handleScrollLink("giftcard")}
                className="block text-left text-white hover:text-pink-500 transition w-full"
              >
                Gift Card
              </button>
            </li>

            <li>
              <button
                onClick={() => handleScrollLink("contact")}
                className="block text-left text-white hover:text-pink-500 transition w-full"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;



