"use client";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-14 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-3xl font-semibold text-black mb-4 leading-snug">
            Partner with Us to Create Something Exceptional
          </h2>
          <p className="text-gray-700 mb-6 text-sm">Connect with us!</p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              className="bg-lime-500 text-white p-2.5 rounded-full hover:bg-lime-600 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="bg-lime-500 text-white p-2.5 rounded-full hover:bg-lime-600 transition"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="#"
              className="bg-lime-500 text-white p-2.5 rounded-full hover:bg-lime-600 transition"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="bg-lime-500 text-white p-2.5 rounded-full hover:bg-lime-600 transition"
            >
              <FaYoutube size={16} />
            </a>
            <a
              href="#"
              className="bg-lime-500 text-white p-2.5 rounded-full hover:bg-lime-600 transition"
            >
              <FaPinterestP size={16} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-teal-900 text-white p-6 rounded-xl w-full md:w-[440px] shadow-md">
          <p className="font-semibold text-base mb-4">
            Sign up for exclusive offers and updates!
          </p>

          {/* Input Row */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
            }}
            className="flex items-center bg-white rounded-full overflow-hidden shadow-sm mb-5"
          >
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-3 text-gray-800 w-1/2 bg-white focus:outline-none placeholder-gray-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 text-gray-800 w-1/2 bg-white focus:outline-none border-l border-gray-200 placeholder-gray-500"
              required
            />
            <button
              type="submit"
              className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 flex items-center justify-center transition"
            >
              →
            </button>
          </form>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-lime-500 hover:bg-lime-600 text-white px-5 py-2.5 rounded-md font-medium transition">
              Request a Quote
            </button>
            <button className="border border-gray-200 text-white-800 hover:bg-gray-100 hover:text-gray-800  px-5 py-2.5 rounded-md font-medium transition">
              Schedule A Call
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
