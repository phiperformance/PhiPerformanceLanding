"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export function PhiSymbol() {
  const groupRef = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.15;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ring — represents the Φ circle */}
      <Torus
        ref={torusRef}
        args={[1.2, 0.04, 16, 64]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#DDD78D"
          metalness={0.9}
          roughness={0.1}
          emissive="#DDD78D"
          emissiveIntensity={0.15}
        />
      </Torus>

      {/* Inner distorted sphere */}
      <Sphere ref={sphereRef} args={[0.7, 32, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#151515"
          metalness={0.6}
          roughness={0.3}
          distort={0.3}
          speed={1}
          wireframe={false}
        />
      </Sphere>

      {/* Outer wireframe sphere for depth */}
      <Sphere args={[1.5, 12, 12]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#DDD78D"
          wireframe
          transparent
          opacity={0.06}
        />
      </Sphere>

      <ambientLight intensity={0.3} />
      <pointLight position={[3, 3, 3]} intensity={2} color="#DDD78D" />
      <pointLight position={[-3, -1, -2]} intensity={0.5} color="#0E34A0" />
    </group>
  );
}
