// src/components/GallerySection.jsx
import { useEffect, useState } from "react";

const galleryImages = [
  "/images/lasthair.jpg",
  "/images/curlhair.jpg",
  "/images/brunnete.jpg",
  "/images/stylehair.jpg",
  "/images/redhair.jpg",
  "/images/naturalhair.jpeg",
  "/images/shorthair.jpg",
  "/images/fronthair.jpeg",
];

function GallerySection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="gallery"
      tabIndex="-1"
      aria-labelledby="gallery-heading"
      className="scroll-mt-24 md:scroll-mt-28 bg-[#f7fafa] py-16 px-6"
    >
      <h2
        id="gallery-heading"
        className="text-3xl md:text-4xl font-bold text-[#407088] mb-6 text-center"
      >
        Photo Gallery
      </h2>

      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
        A glimpse into the artistry, care, and creativity that define GioBBeauty.
        Each look is crafted with passion from relaxing spa moments to
        flawless hair transformations.
      </p>

      {/* Responsive Masonry Grid */}
      <div
        className={`columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5 max-w-7xl mx-auto transition-all duration-700 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
        role="list"
      >
        {galleryImages.map((src, index) => (
          <figure
            key={index}
            className="relative overflow-hidden rounded-xl shadow-md group break-inside-avoid"
            role="listitem"
          >
            <img
              src={src}
              alt={`GioBBeauty hairstyle example ${index + 1}`}
              className="w-full mb-4 rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle overlay on hover */}
            <figcaption className="absolute inset-0 bg-[#407088]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;

