"use client";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Left Images Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="w-full h-[250px] relative rounded-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Crafty Print Office"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full h-[250px] relative rounded-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Printing Setup"
              fill
              className="object-cover"
            />
          </div>
          <div className="col-span-2 w-full h-[250px] relative rounded-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Printery Building"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <h4 className="text-[#e85d75] text-xl font-semibold mb-2">
            Who We Are
          </h4>
          <h2 className="text-[#0a3b79] text-3xl lg:text-4xl font-bold mb-6 leading-snug">
            Crafty Print & Production House
          </h2>

          <div className="flex items-center mb-6">
            <div className="text-lg text-gray-800 font-medium mr-3">
              We Have
            </div>
            <div className="text-[#e85d75] text-6xl font-bold">20+</div>
            <div className="ml-3 text-gray-800 text-lg font-medium leading-tight">
              Years Of Experience in
              <br />
              <span className="font-semibold">Printing Services</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Dubai’s premier print production house, crafting bespoke printing
            and packaging solutions since 2014. Trusted by top brands and
            individuals alike, our commitment to quality makes us the ultimate
            destination for all your printing needs. Harnessing advanced
            technology and creative expertise, we bring your visions to life
            with precision and flair. Experience excellence at Printery, where
            Dubai’s design standards are elevated.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#0a3b79] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0d4d9c] transition-all">
              Know More
            </button>
            <button className="bg-[#9e4359] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#b54d65] transition-all">
              Talk To Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
