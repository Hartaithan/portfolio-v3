/* eslint-disable react/no-unknown-property */

"use client";

import type { FC } from "react";
import { forwardRef, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type {
  BufferGeometry,
  Material,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
} from "three";
import { PerspectiveCamera } from "@react-three/drei";
import { getRandomNumber } from "@/utils/number";

type MeshType = Mesh<
  BufferGeometry<NormalBufferAttributes>,
  Material | Material[],
  Object3DEventMap
>;

const DefaultMaterial: FC = () => (
  <meshStandardMaterial color="white" wireframe transparent opacity={0.3} />
);

const Box = forwardRef<MeshType>((_props, ref) => {
  return (
    <mesh ref={ref} scale={2}>
      <boxGeometry args={[1, 1, 1]} />
      <DefaultMaterial />
    </mesh>
  );
});

const Icosahedron = forwardRef<MeshType>((_props, ref) => {
  return (
    <mesh ref={ref} scale={1.5}>
      <icosahedronGeometry args={[1, 1]} />
      <DefaultMaterial />
    </mesh>
  );
});

const Octahedron = forwardRef<MeshType>((_props, ref) => {
  return (
    <mesh ref={ref} scale={1.5}>
      <octahedronGeometry args={[1, 0]} />
      <DefaultMaterial />
    </mesh>
  );
});

const TorusKnot = forwardRef<MeshType>((_props, ref) => {
  return (
    <mesh ref={ref} scale={1}>
      <torusKnotGeometry args={[1, 0.1, 160, 10, 3, 5]} />
      <DefaultMaterial />
    </mesh>
  );
});

const Sphere = forwardRef<MeshType>((_props, ref) => {
  return (
    <mesh ref={ref} scale={1.5}>
      <sphereGeometry args={[1, 8, 8]} />
      <DefaultMaterial />
    </mesh>
  );
});

const Tetrahedron = forwardRef<MeshType>((_props, ref) => {
  return (
    <mesh ref={ref} scale={1.8}>
      <tetrahedronGeometry args={[1, 0]} />
      <DefaultMaterial />
    </mesh>
  );
});

const Torus = forwardRef<MeshType>((_props, ref) => {
  return (
    <mesh ref={ref} scale={0.05}>
      <torusGeometry args={[25, 8, 4, 4]} />
      <DefaultMaterial />
    </mesh>
  );
});

const figures = [
  { Component: Box, rotation: 0.003 },
  { Component: Icosahedron, rotation: 0.002 },
  { Component: Octahedron, rotation: 0.006 },
  { Component: TorusKnot, rotation: 0.005 },
  { Component: Sphere, rotation: 0.0025 },
  { Component: Tetrahedron, rotation: 0.005 },
  { Component: Torus, rotation: 0.005 },
];

const index = getRandomNumber(0, figures.length - 1);
const { Component, rotation } = figures[index];

const Figure: FC = () => {
  const mesh = useRef<MeshType>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const elapsed = clock.getElapsedTime();
    mesh.current.rotation.y += rotation;
    mesh.current.position.y = Math.sin(elapsed) * 0.1;
  });

  return <Component ref={mesh} />;
};

const Scene: FC = () => {
  return (
    <Canvas dpr={window.devicePixelRatio}>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <ambientLight intensity={10} />
      <Figure />
    </Canvas>
  );
};

export default Scene;
