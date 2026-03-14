"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Line, Html } from "@react-three/drei";
import * as THREE from "three";

const locations = [
  { name: "India", lat: 20.5937, lng: 78.9629, minerals: "Bauxite, Kaolin, Talc, Calcium Carbonate" },
  { name: "South Africa", lat: -30.5595, lng: 22.9375, minerals: "Chrome Ore, Manganese Ore, Fluorspar" },
  { name: "Australia", lat: -25.2744, lng: 133.7751, minerals: "Bauxite, Silica Sand, Zircon, Rutile" },
  { name: "China", lat: 35.8617, lng: 104.1954, minerals: "Magnesite, Kaolin, Calcium Carbonate" },
  { name: "Turkey", lat: 38.9637, lng: 35.2433, minerals: "Chrome Ore, Feldspar, Dolomite, Bentonite" },
  { name: "Brazil", lat: -14.235, lng: -51.9253, minerals: "Kaolin, Quartz, Manganese Ore" },
];

const HQ = { lat: 46.2044, lng: 6.1432 }; // Geneva

const getPosFromLatLng = (lat: number, lng: number, radius = 2) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

export default function Globe() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  const hqPos = useMemo(() => getPosFromLatLng(HQ.lat, HQ.lng), []);

  return (
    <group ref={groupRef} rotation={[0.2, -1.5, 0]}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 3, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, -3, -5]} intensity={0.5} color="#B87333" />

      {/* Main Sphere */}
      <Sphere args={[2, 64, 64]}>
        <meshPhongMaterial
          color="#0B0F19"
          emissive="#0B0F19"
          specular="#1C2333"
          shininess={15}
          wireframe
          transparent
          opacity={0.2}
        />
      </Sphere>
      <Sphere args={[1.98, 64, 64]}>
        <meshStandardMaterial color="#060910" roughness={0.8} />
      </Sphere>

      {/* HQ Node */}
      <group>
        <mesh position={hqPos}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#FFFFFF" />
        </mesh>
        <mesh position={hqPos}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.2} />
        </mesh>
      </group>

      {/* Extraction Nodes & Arcs */}
      {locations.map((loc) => {
        const pos = getPosFromLatLng(loc.lat, loc.lng);

        const midPoint = pos.clone().lerp(hqPos, 0.5);
        midPoint.normalize().multiplyScalar(2.5);
        const curve = new THREE.QuadraticBezierCurve3(pos, midPoint, hqPos);

        return (
          <group key={loc.name}>
            {/* Pulsing Node */}
            <mesh
              position={pos}
              onPointerEnter={() => setHovered(loc.name)}
              onPointerLeave={() => setHovered(null)}
            >
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshBasicMaterial color="#B87333" />
            </mesh>
            <mesh position={pos}>
              <sphereGeometry args={[0.09, 16, 16]} />
              <meshBasicMaterial color="#B87333" transparent opacity={0.15} />
            </mesh>

            {/* Tooltip */}
            {hovered === loc.name && (
              <Html position={pos} center distanceFactor={5}>
                <div className="bg-primary-dark/90 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-white min-w-[180px] pointer-events-none shadow-xl">
                  <p className="font-bold text-sm mb-1">{loc.name}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{loc.minerals}</p>
                </div>
              </Html>
            )}

            {/* Arc */}
            <Line
              points={curve.getPoints(50)}
              color="#B87333"
              lineWidth={1.5}
              transparent
              opacity={hovered === loc.name ? 0.8 : 0.2}
            />
          </group>
        );
      })}
    </group>
  );
}
