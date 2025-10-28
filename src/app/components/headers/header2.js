"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Header2() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🟢 Left side (image cards)
  const leftItems = [
    { title: "Cosmetics & Skincare", img: "/flip.webp" },
    { title: "Bakery", img: "/flip.webp" },
    { title: "Retail", img: "/flip.webp" },
    { title: "Soap", img: "/flip.webp" },
    { title: "Candles", img: "/flip.webp" },
  ];

  // 🟢 Right side (text-only links)
  const rightLinks = [
    "Gift Boxes",
    "Pharma Packaging",
    "Fragrance Packaging",
    "Candy & Sweets Packaging",
    "Jewelry Boxes",
    "Ecommerce Packaging",
    "Coffee and Tea Packaging",
  ];

  // 🟢 Main navbar categories
  const categories = [
    "Industries",
    "Product Packaging Styles",
    "Custom Boxes",
    "Client Success Stories",
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white relative z-50">
      {/* 🟩 Top Section */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4 sm:px-10 py-2 bg-gray-50 text-gray-700 text-sm">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <Image src="/mainlogo.png" alt="Logo" width={200} height={100} />

          {/* Search Bar */}
          <div className="hidden sm:flex flex-1 max-w-md items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-green-500">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
        </div>

        {/* Call Section */}
        <div className="text-center sm:text-right mt-3 sm:mt-0">
          <p>Call us toll free:</p>
          <p className="text-green-600 text-lg font-semibold">1-888-997-2202</p>
          <p className="text-xs text-gray-500">
            Speak to our experts in 1 min | 9:30am - 6:30pm EST
          </p>
        </div>
      </div>

      {/* 🟩 Navbar Section */}
      <div className="flex justify-between items-center px-6 sm:px-10 py-4 relative group">
        {/* Hamburger (Mobile) */}
        <button
          className="sm:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Navbar */}
        <div className="hidden sm:flex flex-1 justify-between items-center relative">
          {/* Navbar Links */}
          <nav className="flex gap-8 text-gray-800 font-medium">
            {categories.map((cat, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-green-600 transition-colors border-r last:border-none border-gray-300 pr-8"
              >
                {cat}
              </a>
            ))}
          </nav>

          {/* Quote Button */}
          <a
            href="#"
            className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
          >
            Request a Free Quote
          </a>

          {/* 🟢 One Shared Full-Width Dropdown */}
          <div className="absolute left-0 right-0 top-full mt-2 hidden group-hover:flex bg-white shadow-lg border border-gray-200 p-6 rounded-lg z-40">
            <div className="flex w-full justify-between gap-6">
              {/* Left Side (Image Cards) */}
              <div className="flex flex-wrap gap-5 w-[70%]">
                {leftItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-[170px] flex flex-col items-center hover:scale-105 transition-transform duration-200"
                  >
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={170}
                        height={120}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm font-semibold text-gray-800 mt-2 text-center">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Side (Text Links) */}
              <div className="flex flex-col justify-start w-[30%] border-l border-gray-200 pl-6">
                {rightLinks.map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-gray-700 hover:text-green-600 py-1 text-sm transition-colors"
                  >
                    {link}
                  </a>
                ))}
                <div className="mt-4">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 transition">
                    View All Industries
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🟩 Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-gray-50 border-t border-gray-200 py-3">
          <div className="px-4 pb-3">
            <div className="flex items-center bg-white border border-gray-300 rounded-full px-3 py-2 shadow-sm">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>
          </div>

          <nav className="flex flex-col items-center gap-3">
            {categories.map((cat, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-800 hover:text-green-600 transition-colors"
              >
                {cat}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
            >
              Request a Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
