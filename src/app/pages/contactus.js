"use client";
import React from "react";

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Contact Us</h2>
          <p className="text-gray-600">
            Have questions or need help? Fill out the form below — we’d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Send us a message
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-600 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in touch
            </h3>
            <p className="text-gray-600 mb-6">
              You can also reach us directly through the details below.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800">Email</h4>
                <p className="text-gray-600">support@example.com</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Phone</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Address</h4>
                <p className="text-gray-600">
                  123 Main Street, Springfield, VA, USA
                </p>
              </div>
            </div>

            <div className="mt-8">
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!..."
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
