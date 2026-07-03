"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      }
    }
  });

  // Check once on mount for the Float and Material components
  const prefersReducedMotion = typeof window !== "undefined" 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  return (
    <Float 
      speed={prefersReducedMotion ? 0 : 2} 
      rotationIntensity={prefersReducedMotion ? 0 : 0.5} 
      floatIntensity={prefersReducedMotion ? 0 : 1}
    >
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.2}>
        <MeshDistortMaterial 
          color="#1ed760"
          attach="material"
          distort={prefersReducedMotion ? 0 : 0.4}
          speed={prefersReducedMotion ? 0 : 1.5}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
          transparent
          opacity={0.15}
        />
      </Sphere>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-60 mix-blend-screen">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AbstractShape />
      </Canvas>
    </div>
  );
}
