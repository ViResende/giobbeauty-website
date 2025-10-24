import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

function ContactSection() {
  return (
    <section
      id="contact"
      tabIndex="-1"
      className="scroll-mt-24 md:scroll-mt-28 bg-[#F4FAFA] text-gray-800 py-12 px-6"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 text-sm md:text-base text-center md:text-left">

        {/* Visit Us */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#407088]">Visit Us</h3>
          <p>995 Oliver Rd #11</p>
          <p>Fairfield, CA 94534</p>
          <p className="mt-1">Phone: (707) 989-9135</p>
          <p className="mt-1">Email: giobbeauty@hotmail.com</p> 
        </div>

        {/* Follow GioBBeauty */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#407088]">
            Follow GioBBeauty
          </h3>
          <div className="flex justify-center md:justify-start items-center gap-4">
            <a
              href="https://www.instagram.com/giobbeauty"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Instagram (GioBBeauty)"
              className="p-2 rounded-full hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#407088]"
              title="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>

            <a
              href="https://www.facebook.com/people/GioBBeauty/61555194206877/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Facebook (GioBBeauty)"
              className="p-2 rounded-full hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#407088]"
              title="Facebook"
            >
              <FaFacebook className="text-2xl" />
            </a>

            <a
              href="https://www.tiktok.com/@giobbeauty"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open TikTok (GioBBeauty)"
              className="p-2 rounded-full hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#407088]"
              title="TikTok"
            >
              <FaTiktok className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="flex-1">
          <h3
            id="contact-heading"
            className="text-lg md:text-xl font-semibold mb-3 text-[#407088]"
          >
            Hours
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            General service hours may vary.
            Hours may differ among our stylists please check with your preferred stylist for their current availability.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;








