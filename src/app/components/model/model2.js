// model2.js
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'; 
import React from 'react';

function Model() {
  // GLB file load karne ke liye
  const { scene } = useGLTF('/models/box.glb'); 
  return <primitive object={scene} />;
}

export default function ModelViewer() {
  return (
    <Canvas style={{ height: '100vh' }}>
      {/* Lighting add kar rahe hain */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Model />
    </Canvas>
  );
}
