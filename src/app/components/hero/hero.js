"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const images = imagesRef.current.filter(Boolean);

      gsap.to(images, {
        opacity: 0,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress * (images.length - 1);
            const index = Math.floor(progress);
            const nextIndex = Math.min(index + 1, images.length - 1);
            const partial = progress - index;

            // Crossfade between current and next image
            images.forEach((img, i) => {
              if (i === index) {
                gsap.set(img, { opacity: 1 - partial, scale: 1 });
              } else if (i === nextIndex) {
                gsap.set(img, { opacity: partial, scale: 1 });
              } else {
                gsap.set(img, { opacity: 0, scale: 1.05 });
              }
            });
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el, i) => {
    if (el) imagesRef.current[i] = el;
  };

  const images = ["/flip.webp", "/flip1.jpg", "/flip2.jpg", "/flip3.jpg"];

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 h-full py-12 px-6 md:px-8">
        {/* LEFT SIDE IMAGE CROSSFADE */}
        <div className="relative w-full md:w-1/2 h-[400px] overflow-hidden rounded-2xl shadow-lg">
          {images.map((src, i) => (
            <div
              key={i}
              ref={(el) => addToRefs(el, i)}
              className="absolute top-0 left-0 w-full h-full"
              style={{
                opacity: i === 0 ? 1 : 0,
                zIndex: images.length - i,
                transition: "opacity 0.3s ease",
              }}
            >
              <Image
                src={src}
                alt={`panel-${i}`}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Build the Perfect <br />
            <span className="text-green-600">Custom Packaging</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Make your brand unforgettable with fully customizable packaging that
            reflects your identity and quality.
          </p>
          <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
            Start Your Design
          </button>
        </div>
      </div>
    </section>
  );
}
