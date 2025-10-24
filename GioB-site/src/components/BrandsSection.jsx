function BrandsSection() {
  return (
    <section
      className="bg-pink-50 py-16 px-6 text-center"
      aria-labelledby="brands-heading"
    >
      <h2
        id="brands-heading"
        className="text-3xl md:text-4xl font-bold text-[#407088] mb-6"
      >
        Brands We Trust
      </h2>
      <p className="text-lg mb-8 text-gray-700 max-w-xl mx-auto">
        Experience our exclusive treatments used in the Head Spa to nourish the scalp and promote overall wellness.</p>
      <div className="flex flex-wrap justify-center gap-10 items-center mt-8">
        <img
          src="/images/maroccanoil.webp"
          alt="Moroccanoil image"
  className="h-64  w-[500px] object-contain"
        />
        <img
          src="/images/milbon.jpg"
          alt="Milbon image"
  className="h-64 w-[500px] object-contain"
        />
      </div>
    </section>
  );
}

export default BrandsSection;
