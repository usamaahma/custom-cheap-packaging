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
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-center font-bold text-2xl text-gray-800 mb-10">
          ----- Our Clients -----
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="w-28 h-20 flex items-center justify-center bg-white rounded-md shadow-sm hover:shadow-md transition-all p-3"
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
