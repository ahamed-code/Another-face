import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const skills = [
  { name: "After Effects", color: "#cf00cf", position: [2, 1, 0] },
  { name: "Premiere Pro", color: "#9999ff", position: [-2, 2, 0] },
  { name: "DaVinci", color: "#ff5555", position: [2, -2, 0] },
  { name: "Photoshop", color: "#31a8ff", position: [-1.5, -1.5, 1] },
  { name: "Illustrator", color: "#ff9a00", position: [0, 2.5, -1] },
  { name: "Blender", color: "#e87d0d", position: [1.5, 0, 1.5] },
  { name: "Cinema 4D", color: "#0038ff", position: [-2, 0, -1] },
];

function Skill({ name, color, position }: { name: string; color: string; position: number[] }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group position={new THREE.Vector3(...position)}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.2 : 1}
        >
          <icosahedronGeometry args={[0.6, 1]} />
          <MeshDistortMaterial
            color={hovered ? "#ffffff" : color}
            emissive={color}
            emissiveIntensity={hovered ? 2 : 0.5}
            distort={0.4}
            speed={2}
            toneMapped={false}
          />
        </mesh>
        <Text
          position={[0, -0.9, 0]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/rajdhani/v15/L10L2TCHOzaWzF79D4s.woff" // Fallback or direct link
        >
          {name}
        </Text>
      </Float>
    </group>
  );
}

export default function SkillSpheres() {
  return (
    <group rotation={[0, 0, 0]}>
      {skills.map((skill, i) => (
        <Skill key={i} {...skill} />
      ))}
    </group>
  );
}
