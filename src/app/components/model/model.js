"use client";

import React, { useRef, useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PackagingBox({ scrollContainer }) {
  const flaps = {
    front: useRef(),
    back: useRef(),
    left: useRef(),
    right: useRef(),
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainer.current,
          start: "top top",
          end: "+=1200",
          scrub: 1,
          pin: true,
        },
      });

      // Animate all 4 flaps open
      tl.to(flaps.front.current.rotation, { x: -Math.PI / 2, duration: 2 }, 0);
      tl.to(flaps.back.current.rotation, { x: Math.PI / 2, duration: 2 }, 0);
      tl.to(flaps.left.current.rotation, { z: Math.PI / 2, duration: 2 }, 0);
      tl.to(flaps.right.current.rotation, { z: -Math.PI / 2, duration: 2 }, 0);

      // Optional: close again when scrolling back
      tl.to(
        [
          flaps.front.current.rotation,
          flaps.back.current.rotation,
          flaps.left.current.rotation,
          flaps.right.current.rotation,
        ],
        { x: 0, z: 0, duration: 2, ease: "power2.inOut" },
        "+=0.5"
      );
    });

    return () => ctx.revert();
  }, [scrollContainer]);

  return (
    <group position={[0, -0.5, 0]}>
      {/* Box body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1, 2]} />
        <meshStandardMaterial color="#d0a060" />
      </mesh>

      {/* FRONT Flap */}
      <mesh ref={flaps.front} position={[0, 0.55, 1]} rotation={[0, 0, 0]}>
        <boxGeometry args={[2, 0.1, 1]} />
        <meshStandardMaterial color="#c99754" />
      </mesh>

      {/* BACK Flap */}
      <mesh ref={flaps.back} position={[0, 0.55, -1]} rotation={[0, 0, 0]}>
        <boxGeometry args={[2, 0.1, 1]} />
        <meshStandardMaterial color="#c99754" />
      </mesh>

      {/* LEFT Flap */}
      <mesh ref={flaps.left} position={[-1, 0.55, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1, 0.1, 2]} />
        <meshStandardMaterial color="#c99754" />
      </mesh>

      {/* RIGHT Flap */}
      <mesh ref={flaps.right} position={[1, 0.55, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1, 0.1, 2]} />
        <meshStandardMaterial color="#c99754" />
      </mesh>
    </group>
  );
}

export default function BoxScroll3D() {
  const sectionRef = useRef();

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] w-full flex justify-center items-center bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden"
    >
      <Canvas
        camera={{ position: [0, 1.2, 5], fov: 45 }}
        style={{ height: "100%", width: "100%" }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 4, 5]} intensity={2} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <PackagingBox scrollContainer={sectionRef} />
      </Canvas>

      {/* <div className="absolute bottom-10 text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Scroll to open the box 📦
        </h2>
      </div> */}
    </section>
  );
}
