import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <nav aria-label="Legal" className="mb-2">
          <ul className="flex justify-center gap-6 text-sm">
            <li>
              <Link
                to="/privacy"
                className="underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#407088]"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#407088]"
              >
                Terms
              </Link>
            </li>
          </ul>
        </nav>

        <p className="text-xs text-white/80">
          © {new Date().getFullYear()} GioBBeauty
        </p>
      </div>
    </footer>
  );
}

export default Footer;
