"use client";
import React from "react";

function Clients() {
  const clientLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/02/Google_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h3 className="text-center font-bold text-3xl text-[#470065] mb-12 relative inline-block w-full">
          <span className="relative z-10 px-4 bg-white">Our Clients</span>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 w-40 h-[2px] bg-[#8A00C3] -z-0"></div>
        </h3>

        {/* Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="w-28 h-20 flex items-center justify-center bg-white rounded-xl border border-[#8A00C3]/20 shadow-sm hover:shadow-lg hover:scale-105 transition-all p-4"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
