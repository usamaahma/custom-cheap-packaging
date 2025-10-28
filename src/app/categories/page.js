"use client";
import React from "react";
import Image from "next/image";

export default function Categories() {
  // Main categories with their subcategories
  const categories = [
    {
      title: "Apparel & Fashion Packaging",
      description:
        "Premium packaging solutions for clothing, accessories, and fashion brands",
      subcategories: [
        {
          title: "Custom Printed Hosiery Boxes",
          desc: "High-quality, printed packaging for hosiery products with vibrant graphics and durable construction.",
          img: "/flip1.jpg",
          features: [
            "Custom Printing",
            "Multiple Sizes",
            "Eco-friendly Options",
          ],
        },
        {
          title: "Custom-Made Leggings Boxes",
          desc: "Tailored boxes specifically designed for leggings and athletic wear with perfect fit.",
          img: "/flip1.jpg",
          features: ["Perfect Fit", "Window Options", "Handle Cutouts"],
        },
        {
          title: "Custom Luxury Watch Case Boxes with Insert",
          desc: "Elegant packaging designed for luxury watches with protective inserts and premium finishes.",
          img: "/flip1.jpg",
          features: ["Velvet Inserts", "Magnetic Closure", "Gold Foiling"],
        },
        {
          title: "Custom Branded Pop-Up Apparel Boxes",
          desc: "Unique pop-up packaging that creates memorable unboxing experiences for apparel brands.",
          img: "/flip1.jpg",
          features: ["Pop-up Design", "Easy Assembly", "Branded Elements"],
        },
        // Additional items to show we have more than 3
        {
          title: "Custom T-Shirt Boxes",
          desc: "Perfectly sized boxes for t-shirts with custom branding and window display options.",
          img: "/flip1.jpg",
          features: ["Standard Sizes", "Window Panels", "Hang Tab Options"],
        },
        {
          title: "Custom Jewelry Boxes",
          desc: "Luxury packaging for jewelry items with plush inserts and elegant presentation.",
          img: "/flip1.jpg",
          features: ["Plush Inserts", "Ring Holders", "Luxury Finishes"],
        },
      ],
    },
    {
      title: "Beauty & Cosmetics Packaging",
      description:
        "Elegant packaging solutions for beauty products and cosmetic brands",
      subcategories: [
        {
          title: "Custom Lipstick Boxes",
          desc: "Secure and stylish packaging for lipstick products with custom branding.",
          img: "/flip1.jpg",
          features: ["Secure Holding", "Elegant Design", "Sample Options"],
        },
        {
          title: "Custom Makeup Boxes",
          desc: "Multi-compartment boxes for makeup sets and cosmetic collections.",
          img: "/flip1.jpg",
          features: [
            "Multi-compartment",
            "Mirror Options",
            "Organizer Inserts",
          ],
        },
        {
          title: "Custom Skincare Boxes",
          desc: "Elegant packaging for skincare products with premium finishes.",
          img: "/flip1.jpg",
          features: ["Premium Finish", "UV Protection", "Luxury Feel"],
        },
        {
          title: "Custom Perfume Boxes",
          desc: "Sophisticated packaging for fragrance products with secure closures.",
          img: "/flip1.jpg",
          features: ["Secure Closure", "Elegant Design", "Sample Slots"],
        },
      ],
    },
    {
      title: "Food & Beverage Packaging",
      description:
        "Sustainable and compliant packaging for food and beverage products",
      subcategories: [
        {
          title: "Custom Bakery Boxes",
          desc: "Windowed boxes for bakery items that showcase your products beautifully.",
          img: "/flip1.jpg",
          features: ["Window Panels", "Grease-resistant", "Ventilation"],
        },
        {
          title: "Custom Coffee Boxes",
          desc: "Aroma-proof packaging for coffee beans and ground coffee products.",
          img: "/flip1.jpg",
          features: ["Aroma-proof", "Resealable", "Valve Options"],
        },
        {
          title: "Custom Tea Packaging",
          desc: "Elegant packaging for tea products with freshness preservation.",
          img: "/flip1.jpg",
          features: ["Freshness Seal", "Elegant Design", "Moisture Proof"],
        },
        {
          title: "Custom Snack Boxes",
          desc: "Durable packaging for snack foods with attractive display options.",
          img: "/flip1.jpg",
          features: ["Durable Material", "Window Display", "Easy Open"],
        },
      ],
    },
  ];

  const stats = [
    { number: "10,000+", label: "Packaging Projects" },
    { number: "500+", label: "Happy Clients" },
    { number: "24/7", label: "Customer Support" },
    { number: "5-7 Days", label: "Average Turnaround" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-black text-white py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Custom Packaging
              <span className="block text-green-400">For Every Industry</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl">
              From concept to delivery, we create packaging solutions that
              elevate your brand and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-left">
              <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Free Quote
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 text-left">
              Explore Our Packaging Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl text-left">
              Discover our comprehensive range of custom packaging solutions
              tailored for your industry
            </p>
          </div>

          {/* Subcategories Grid */}
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-left mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Show first 3 items + View All card */}
                {category.subcategories
                  .slice(0, 3)
                  .map((subcategory, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 group"
                    >
                      {/* Image Container - Full Width & Height */}
                      <div className="relative h-56 w-full bg-gray-100">
                        <Image
                          src={subcategory.img}
                          alt={subcategory.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          onError={(e) => {
                            e.currentTarget.src = "/images/placeholder-box.jpg"; // fallback image
                            e.currentTarget.srcset = "";
                          }}
                        />
                        {/* Optional Overlay on Hover */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                        {/* Featured Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="bg-green-600 text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                            Featured
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-black mb-2 group-hover:text-green-700 transition-colors line-clamp-2">
                          {subcategory.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                          {subcategory.desc}
                        </p>

                        {/* Features */}
                        <div className="mb-4">
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            Key Features
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {subcategory.features.map((feature, i) => (
                              <span
                                key={i}
                                className="bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full font-medium border border-green-200"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                          <button className="text-green-700 hover:text-green-600 font-medium text-sm flex items-center gap-1.5 transition-colors group/btn">
                            Learn More
                            <svg
                              className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                          <button className="bg-green-600 hover:bg-green-500 text-white px-3 py-1.5 rounded-md text-xs font-semibold transition-all hover:scale-105">
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                {/* View All Card - Always the 4th card */}
                <div className="bg-gradient-to-br from-green-900 to-green-800 text-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-700 group cursor-pointer">
                  <div className="relative h-56 w-full bg-green-700 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">View All</h3>
                      <p className="text-green-100 text-sm opacity-90">
                        Explore all {category.subcategories.length}+{" "}
                        {category.title.toLowerCase()}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-green-800 bg-opacity-50">
                    <div className="text-center">
                      <div className="flex justify-center items-center gap-2 mb-3">
                        <span className="text-green-200 text-sm">
                          {category.subcategories.length}+ Products Available
                        </span>
                      </div>
                      <button className="w-full bg-white text-green-900 hover:bg-green-100 font-semibold py-2.5 rounded-lg transition-all duration-300 transform group-hover:scale-105">
                        Browse All
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Our Packaging Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See examples of our custom packaging solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-green-900 font-medium text-sm">
                    Sample {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Categories Quick Links */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              More Packaging Solutions
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Electronics Packaging",
              "Subscription Boxes",
              "CBD Packaging",
              "Retail Packaging",
              "Luxury Packaging",
              "Eco-Friendly Packaging",
              "Shipping Boxes",
              "Display Boxes",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-lg p-4 text-center cursor-pointer transition-all duration-300 group hover:shadow-lg"
              >
                <div className="text-green-900 font-semibold group-hover:text-green-700 transition-colors duration-300">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Our Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting your custom packaging has never been easier
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Request Quote",
                desc: "Share your packaging needs and get a free quote within hours",
                icon: "📝",
              },
              {
                step: "02",
                title: "Design & Proof",
                desc: "Our team creates custom designs for your approval",
                icon: "🎨",
              },
              {
                step: "03",
                title: "Production",
                desc: "We manufacture your packaging with premium materials",
                icon: "🏭",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Receive your custom packaging ready for business",
                icon: "🚚",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300 shadow-lg">
                  <span className="text-2xl">{process.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-green-700 transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-black text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Elevate Your Brand with Custom Packaging?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust us with their packaging
              needs. Get started with a free quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Free Quote
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg">
                Call Us Now
              </button>
            </div>
            <p className="text-gray-300 mt-6">
              Have questions?{" "}
              <span className="text-green-400 font-semibold">
                (888) 123-4567
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
