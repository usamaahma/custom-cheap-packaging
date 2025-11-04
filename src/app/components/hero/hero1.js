"use client";

import React, { useRef } from "react";

function Hero1() {
  const newCardsRef = useRef([]);

  const newCardData = [
    {
      img: "/mainlogo.png",
      title: "24/7 Support",
      desc: "Round the clock customer service to assist you anytime.",
      color: "from-[#470065] to-[#8A00C3]",
      icon: "🛟",
    },
    {
      img: "/mainlogo.png",
      title: "Global Shipping",
      desc: "Worldwide delivery with real-time tracking updates.",
      color: "from-[#470065] to-[#8A00C3]",
      icon: "🌎",
    },
    {
      img: "/mainlogo.png",
      title: "Quality Assurance",
      desc: "Rigorous quality checks ensuring premium packaging.",
      color: "from-[#470065] to-[#8A00C3]",
      icon: "✅",
    },
    {
      img: "/mainlogo.png",
      title: "Bulk Discounts",
      desc: "Special pricing for large volume orders and businesses.",
      color: "from-[#470065] to-[#8A00C3]",
      icon: "💰",
    },
  ];

  const addToNewCardsRef = (el, index) => {
    if (el && !newCardsRef.current.includes(el)) {
      newCardsRef.current[index] = el;
    }
  };

  return (
    <section className="new-cards-section bg-white py-24 px-6 md:px-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#470065] mb-6">
            Premium Services
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            Experience unmatched quality with our exclusive range of premium
            packaging services.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newCardData.map((card, i) => (
            <div
              key={i}
              ref={(el) => addToNewCardsRef(el, i)}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 flex flex-col items-center text-center h-full border border-gray-100 overflow-hidden"
            >
              {/* Hover Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <div className="relative z-10 w-24 h-24 mb-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#470065]/10 to-[#8A00C3]/10 rounded-2xl transform group-hover:scale-110 transition-transform duration-500"></div>
                <span className="relative z-10 text-4xl text-[#8A00C3] transform group-hover:scale-125 transition-transform duration-500">
                  {card.icon}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#470065] mb-4 group-hover:text-[#8A00C3] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow text-lg">
                  {card.desc}
                </p>

                {/* Button */}
                <div className="mt-6 pt-6 border-t border-gray-200 group-hover:border-[#8A00C3]/50 transition-colors duration-300">
                  <button className="bg-[#8A00C3] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#470065] transform group-hover:scale-105 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero1;
