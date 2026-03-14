"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useCallback, useState, useMemo } from "react"
import * as THREE from "three"

const ReactGlobe = dynamic(() => import("react-globe.gl"), { ssr: false })

// Supply chain hub locations with arcs to Geneva HQ
const locations = [
  { name: "India", lat: 20.5937, lng: 78.9629, minerals: "Bauxite, Kaolin, Talc" },
  { name: "South Africa", lat: -30.5595, lng: 22.9375, minerals: "Chrome Ore, Manganese" },
  { name: "Australia", lat: -25.2744, lng: 133.7751, minerals: "Bauxite, Silica Sand, Zircon" },
  { name: "China", lat: 35.8617, lng: 104.1954, minerals: "Magnesite, Kaolin" },
  { name: "Turkey", lat: 38.9637, lng: 35.2433, minerals: "Chrome Ore, Feldspar" },
  { name: "Brazil", lat: -14.235, lng: -51.9253, minerals: "Kaolin, Quartz, Manganese" },
];

const HQ = { lat: 46.2044, lng: 6.1432 }; // Geneva

// Points data: hubs + HQ
const pointsData = [
  { lat: HQ.lat, lng: HQ.lng, size: 0.6, color: "#ffffff", name: "Geneva HQ" },
  ...locations.map((loc) => ({
    lat: loc.lat,
    lng: loc.lng,
    size: 0.4,
    color: "#B87333",
    name: loc.name,
  })),
];

// Arcs from each hub to Geneva HQ
const arcsData = locations.map((loc) => ({
  startLat: loc.lat,
  startLng: loc.lng,
  endLat: HQ.lat,
  endLng: HQ.lng,
  color: ["rgba(184,115,51,0.6)", "rgba(184,115,51,0.15)"],
  name: loc.name,
}));

// Labels for each point
const labelsData = [
  { lat: HQ.lat, lng: HQ.lng, text: "Geneva HQ", size: 0.8, color: "#ffffff" },
  ...locations.map((loc) => ({
    lat: loc.lat,
    lng: loc.lng,
    text: loc.name,
    size: 0.6,
    color: "#D59A4A",
  })),
];

export default function EarthGlobe() {
  const globeRef = useRef<any>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Custom globe material: emissive so the texture is visible even on the "dark side"
  const globeMaterial = useMemo(() => {
    const material = new THREE.MeshBasicMaterial();
    return material;
  }, []);

  // Track container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const handleGlobeReady = useCallback(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.4;
      controls.enableZoom = false;
      controls.minPolarAngle = Math.PI / 4;
      controls.maxPolarAngle = Math.PI / 1.5;

      // Adjust directional light position for better illumination
      const directionalLight = globeRef.current.lights().find(
        (obj3d: any) => obj3d.type === "DirectionalLight"
      );
      if (directionalLight) {
        directionalLight.intensity = 1.5;
        directionalLight.position.set(1, 1, 1);
      }

      // Add ambient light for global illumination — prevents the "dark side" entirely
      const ambientLight = globeRef.current.lights().find(
        (obj3d: any) => obj3d.type === "AmbientLight"
      );
      if (ambientLight) {
        ambientLight.intensity = 1.2;
      } else {
        const scene = globeRef.current.scene();
        scene.add(new THREE.AmbientLight(0xffffff, 1.2));
      }

      // Set initial point of view to show Europe/Africa area
      globeRef.current.pointOfView({ lat: 25, lng: 30, altitude: 2.2 }, 0);
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full" style={{ minHeight: 400 }}>
      {dimensions.width > 0 && (
        <ReactGlobe
          ref={globeRef}
          globeImageUrl="https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"
          globeMaterial={globeMaterial}
          showAtmosphere={true}
          atmosphereColor="lightskyblue"
          atmosphereAltitude={0.25}
          width={dimensions.width}
          height={dimensions.height}
          // Supply chain points
          pointsData={pointsData}
          pointAltitude={(d: any) => d.size * 0.04}
          pointRadius={(d: any) => d.size * 0.4}
          pointColor={(d: any) => d.color}
          pointsMerge={false}
          // Arcs from hubs to Geneva
          arcsData={arcsData}
          arcColor="color"
          arcDashLength={0.4}
          arcDashGap={0.2}
          arcDashAnimateTime={1500}
          arcStroke={0.5}
          // Labels
          labelsData={labelsData}
          labelText="text"
          labelSize={(d: any) => d.size}
          labelColor={(d: any) => d.color}
          labelDotRadius={0.4}
          labelAltitude={0.01}
          labelResolution={2}
          onGlobeReady={handleGlobeReady}
        />
      )}
    </div>
  )
}
