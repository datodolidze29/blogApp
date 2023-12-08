import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Box: React.FC = () => {
  const meshRef = useRef<Mesh>(null); // Specify null as the initial value

  useFrame(() => {
    // Rotate the mesh in the animation frame
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry attach="geometry" args={[3.5, 3.5, 3.5]} />
      <meshBasicMaterial attach="material" color="royalblue" />
    </mesh>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
};

export default ThreeScene;


