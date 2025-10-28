"use client";
import Image from "next/image";

export default function Welcome() {
  return (
    <section className="w-full bg-[#f9fafb] py-20 overflow-hidden">
      {/* Top Four Boxes */}
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {[
          {
            title: "Our Vision",
            text: "To dispense the finest printing using the latest technology.",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v18m0 0l-3-3m3 3l3-3M3 12h18m0 0l-3 3m3-3l-3-3"
                />
              </svg>
            ),
          },
          {
            title: "Our Mission",
            text: "To supply first-rate prints that represent your entire brand.",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="none"
                className="w-8 h-8"
              >
                <path d="M12 2a10 10 0 00-3 19.47V22h6v-.53A10 10 0 0012 2zM10 6h4v6h-4V6zm0 8h4v2h-4v-2z" />
              </svg>
            ),
          },
          {
            title: "Quality Policy",
            text: "To lay out shipshape products that define our standards of quality.",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="none"
                className="w-8 h-8"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
              </svg>
            ),
          },
          {
            title: "Our Values",
            text: "To build long-term relationships based on trust and excellence.",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="none"
                className="w-8 h-8"
              >
                <path d="M12 2a10 10 0 0110 10c0 3.72-2.03 6.94-5.06 8.65L12 22l-4.94-1.35A9.97 9.97 0 012 12a10 10 0 0110-10z" />
              </svg>
            ),
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#0a3b79] text-white rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-none w-[330px] h-[250px] shadow-lg hover:shadow-xl transition-all duration-300 text-center border-4 border-white"
          >
            <div className="flex flex-col items-center justify-center h-full px-5">
              <div className="bg-[#ec008c] w-[75px] h-[75px] flex items-center justify-center rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image + Content Section (50/50 layout) */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/about-section.jpg" // replace with your actual image
            alt="Modern Printing Press"
            width={800}
            height={600}
            className="rounded-xl object-cover w-full h-[400px]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 bg-white rounded-xl p-8 shadow-md">
          <h4 className="text-[#d2007b] text-lg font-medium mb-1">
            Welcome to Modern Printing Press
          </h4>
          <h2 className="text-[#0a3b79] text-2xl lg:text-3xl font-bold mb-4 leading-snug">
            Solutions and Innovations in Printing Since 1966
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Modern Printing Press (MPP) which was earlier Al Saheel Printing
            Press has been a family owned enterprise since 1959, and has been
            successfully acquired by Hassan Mohammad Bin Al Shaikh (Chairman)
            and renamed as Modern Printing Press & Stationery in 1966, it is the
            oldest standing and running printing house in Dubai under Hassan Bin
            Al Shaikh Group of Industries (HBAS).
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            MPP, as one of the oldest and most experienced print houses, has
            produced for its clients many quality jobs like Office Stationeries,
            Point of Sale Materials (POSM) such as Brochures, Catalogues,
            Magazines, Folders, Manuals, Binders, Press Kits, Posters, Counter
            Displays, Dispensers, Floor Stands, Danglers, Wobblers, Shelf
            Talkers / Stoppers, Buntings, Coffers, GWP/VAO Packings, Hi-End
            Digital Outputs, Flyers, Calendars, Certificates, Stickers and
            allied materials specializing in high quality and security printing.
          </p>
          <button className="bg-[#0a3b79] text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-[#0c4a9b] transition-all">
            Read More →
          </button>
        </div>
      </div>
    </section>
  );
}
