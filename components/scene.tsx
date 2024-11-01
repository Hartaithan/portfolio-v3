/* eslint-disable react/no-unknown-property */

"use client";

import type { FC } from "react";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type {
  BufferGeometry,
  Material,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
} from "three";
import { PerspectiveCamera } from "@react-three/drei";

type MeshType = Mesh<
  BufferGeometry<NormalBufferAttributes>,
  Material | Material[],
  Object3DEventMap
>;

const Figure: FC = () => {
  const meshRef = useRef<MeshType>(null);

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={meshRef} scale={2}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="white" wireframe transparent opacity={0.3} />
    </mesh>
  );
};

const Wrapper: FC = () => {
  return (
    <Canvas dpr={window.devicePixelRatio}>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <ambientLight intensity={10} />
      <Figure />
    </Canvas>
  );
};

export default Wrapper;
