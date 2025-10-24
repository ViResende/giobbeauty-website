// src/components/GiftCardSection.jsx
export default function GiftCardSection() {
  return (
    <section
      id="giftcard"
      tabIndex="-1"
      className="scroll-mt-24 md:scroll-mt-28 bg-[#f7fafa] text-gray-800 px-6 py-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#407088] mb-4 text-center md:text-left">
            Gift a GioBBeauty Experience
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
            Share the joy of self-care. Our digital gift cards are the perfect way to treat someone special to a rejuvenating head spa or beauty service.
          </p>

          <ul className="space-y-2 text-gray-700 mb-6">
            <li>• Customizable amount</li>
            <li>• Add a personal message</li>
            <li>• Instant email delivery</li>
          </ul>

          <a
            href="https://www.joinblvd.com/b/giobbeauty/widget#/cart/menu/Gift%20Cards/GIFT_CARD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center rounded-full px-6 py-3 bg-rose-200 text-gray-800 hover:text-[#407088] shadow-md transition-all duration-300
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#407088]"
            aria-label="Buy a GioBBeauty gift card (opens in a new tab)"
          >
            Buy Gift Card
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/gigiftcard.png" 
            alt="Gift card from GioBBeauty"
            className="w-full md:w-[480px] h-[300px] object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
