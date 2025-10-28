"use client";
import React from "react";

function ProductsSection() {
  const products = [
    {
      title: "Drawer Rigid Boxes",
      desc: "Drawer rigid boxes feature smooth sliding mechanisms that create premium unboxing experiences.",
      img: "/about-section.jpg",
    },
    {
      title: "Flap Rigid Boxes",
      desc: "Get premium flap rigid boxes with secure magnetic closures for your luxury product packaging.",
      img: "/about-section.jpg",
    },
    {
      title: "Two Piece Rigid Boxes",
      desc: "Two piece rigid boxes feature separate lid and base construction for premium product presentation.",
      img: "/about-section.jpg",
    },
    {
      title: "Magnetic Rigid Boxes",
      desc: "Magnetic rigid boxes deliver premium packaging with secure magnetic closures.",
      img: "/about-section.jpg",
    },
    {
      title: "Collapsible Boxes",
      desc: "Shop premium collapsible boxes that save storage space while delivering a luxurious unboxing.",
      img: "/about-section.jpg",
    },
    {
      title: "Foldable Rigid Boxes",
      desc: "Shop space-saving foldable rigid boxes that combine luxury packaging with practicality.",
      img: "/about-section.jpg",
    },
    {
      title: "Gift Boxes",
      desc: "Bring your brand to the limelight with our premium custom gift boxes designed to impress.",
      img: "/about-section.jpg",
    },
    {
      title: "E-Commerce Mailer Boxes",
      desc: "Get premium mailer boxes designed for online sellers, crafted with durability and precision.",
      img: "/about-section.jpg",
    },
    {
      title: "Corrugated Boxes",
      desc: "We offer durable corrugated boxes for all your shipping and packaging needs.",
      img: "/about-section.jpg",
    },
    {
      title: "Foldable Gift Boxes",
      desc: "We make and supply foldable gift boxes that deliver elegance and strength.",
      img: "/about-section.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h4 className="text-green-700 text-3xl font-semibold mb-2">
            Products
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Bestselling custom bags
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            See your ideas come to life with our{" "}
            <span className="font-semibold text-green-700">
              custom packaging
            </span>{" "}
            solutions.
          </p>
          <button className="mt-4 text-green-700 text-sm font-medium hover:underline">
            SEE ALL SHOP →
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-4 flex flex-col items-center text-center"
            >
              <div className="w-full h-40 flex items-center justify-center mb-3">
                <img
                  src={product.img}
                  alt={product.title}
                  className="max-h-36 object-contain"
                />
              </div>
              <h3 className="text-black font-semibold text-sm mb-1">
                {product.title}
              </h3>
              <p className="text-gray-500 text-xs leading-snug line-clamp-3">
                {product.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
