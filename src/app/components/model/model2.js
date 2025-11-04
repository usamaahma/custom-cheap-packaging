"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/models/box.glb");
  return (
    <primitive
      object={scene}
      scale={1.5}
      position={[0, -0.5, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

export default function ModelViewer() {
  return (
    <div className="w-full h-[100vh] bg-[#f5f5f5]">
      <Canvas
        camera={{ position: [2, 2, 4], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Lights */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        {/* Model */}
        <Suspense fallback={null}>
          <Model />
        </Suspense>

        {/* Controls for interaction */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
