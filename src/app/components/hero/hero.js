"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroScroll() {
  const containerRef = useRef(null);
  const slideRefs = useRef([]);

  const slides = [
    {
      img: "/flip.webp",
      title: "Premium Custom Packaging",
      text: "Design packaging that perfectly represents your brand identity.",
    },
    {
      img: "/flip1.jpg",
      title: "Sustainable Materials",
      text: "Eco-friendly boxes built to impress and protect your products.",
    },
    {
      img: "/flip2.jpg",
      title: "Vibrant Printing Quality",
      text: "Your design deserves colors that pop and last long.",
    },
    {
      img: "/flip3.jpg",
      title: "Delivered On Time",
      text: "We ensure your packaging arrives ready — when you need it most.",
    },
  ];

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const elements = slideRefs.current;

      if (!containerRef.current || elements.length === 0) return;

      // Pin the whole section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${elements.length * window.innerHeight}`,
        pin: true,
        scrub: 1,
      });

      // Initial state
      gsap.set(elements, { opacity: 0 });
      gsap.set(elements[0], { opacity: 1 });

      // Animate each slide
      elements.forEach((slide, i) => {
        const fadeInStart = i * window.innerHeight;
        const fadeInEnd = fadeInStart + window.innerHeight / 2;

        // Fade in
        gsap.to(slide, {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: fadeInStart,
            end: fadeInEnd,
            scrub: true,
          },
        });

        // Fade out (except last)
        if (i < elements.length - 1) {
          const fadeOutStart = fadeInEnd;
          const fadeOutEnd = fadeInStart + window.innerHeight;

          gsap.to(slide, {
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: fadeOutStart,
              end: fadeOutEnd,
              scrub: true,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          ref={(el) => (slideRefs.current[i] = el)}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ zIndex: slides.length - i }}
        >
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            className="object-contain md:object-cover brightness-90"
            priority={i === 0}
            unoptimized
            sizes="100vw"
          />

          <div className="relative z-10 text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl leading-relaxed opacity-90 drop-shadow-lg">
              {slide.text}
            </p>
          </div>
        </div>
      ))}

      <div className="fixed bottom-4 left-4 bg-white text-black px-3 py-1 rounded text-sm z-50">
        Scroll ↓
      </div>
    </section>
  );
}
