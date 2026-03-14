"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function MineralFragments() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.05;
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
  });

  const fragments = [
    { pos: [3, 1, -2] as [number, number, number], scale: 0.8, speed: 0.3 },
    { pos: [-4, -1, -3] as [number, number, number], scale: 0.6, speed: 0.5 },
    { pos: [2, -2, -1] as [number, number, number], scale: 0.5, speed: 0.4 },
    { pos: [-2, 2, -4] as [number, number, number], scale: 0.7, speed: 0.2 },
    { pos: [5, 0.5, -5] as [number, number, number], scale: 0.4, speed: 0.6 },
  ];

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5] as [number, number, number]} intensity={1} color="#ffffff" />
      <pointLight position={[-3, 2, 4] as [number, number, number]} intensity={0.8} color="#B87333" />

      {fragments.map((frag, i) => (
        <FloatingCrystal key={i} position={frag.pos} scale={frag.scale} speed={frag.speed} index={i} />
      ))}
    </group>
  );
}

function FloatingCrystal({
  position,
  scale,
  speed,
  index,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
  index: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(t * speed + index) * 0.3;
    meshRef.current.rotation.x = t * speed * 0.5;
    meshRef.current.rotation.z = t * speed * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0] as [number, number]} />
      <meshStandardMaterial
        color="#1C2333"
        roughness={0.3}
        metalness={0.9}
        emissive="#B87333"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}
