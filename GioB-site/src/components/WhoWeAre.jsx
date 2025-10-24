// src/components/WhoWeAre.jsx
import { HiBadgeCheck } from "react-icons/hi";

function WhoWeAre() {
  return (
    <section
      id="about"
      tabIndex="-1"
      className="scroll-mt-24 md:scroll-mt-28 bg-white px-6 py-16 text-gray-800"
    >
      <div className="grid md:grid-cols-[1.25fr_1fr] gap-8 items-center max-w-7xl mx-auto">
        {/* Text (wider) */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#407088] text-center md:text-left">
            Who We Are
          </h2>

          <p className="text-base md:text-lg mb-4 leading-relaxed">
            <span className="inline-flex items-center gap-2 font-semibold">
              <HiBadgeCheck className="text-[#407088] text-2xl" />
              First Head Spa in Solano County
            </span>{" "}
            GioBBeauty is a full-service hair salon and head spa a true one-stop
            beauty destination. Our main attraction is our luxurious head spa
            experience, designed to relax, restore, and rejuvenate your scalp
            and hair. We can accommodate up to two guests at a time, making it a
            perfect self-care retreat for friends or couples.
          </p>

          <p className="text-base md:text-lg mb-4 leading-relaxed">
            In addition to our signature head spa, we offer a variety of beauty
            services including hair care, nail treatments, body waxing, and
            eyebrow services. We are also proud to host intimate events and
            self-care gatherings in our welcoming space.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            GioBBeauty was born from the heart of a Brazilian dreamer who made
            California her home, inspired by the desire to create a place where
            beauty, care, and relaxation come together all in one spot.
          </p>
        </div>

        {/* Gigi photo (narrower, capped height) */}
        <figure className="rounded-xl shadow-md overflow-hidden">
          <img
            src="/images/teamwithgi.jpg"
            alt="Owner Giovanna B."
            loading="lazy"
            className="w-full h-[360px] md:h-[520px] object-cover object-[50%_30%]"
          />
        </figure>
      </div>
    </section>
  );
}

export default WhoWeAre;


