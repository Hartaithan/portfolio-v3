/* eslint-disable react/no-unknown-property */

"use client";

import { getRandomNumber } from "@/utils/number";
import { centerText } from "@/utils/threejs";
import { Text3D } from "@react-three/drei";
import type { MeshProps } from "@react-three/fiber";
import type { FC } from "react";
import { forwardRef } from "react";
import type { Mesh } from "three";

const Material: FC = () => (
  <meshStandardMaterial color="white" wireframe transparent opacity={0.3} />
);

const Box = forwardRef<Mesh, MeshProps>((props, ref) => (
  <mesh ref={ref} {...props}>
    <boxGeometry args={[1, 1, 1]} />
    <Material />
  </mesh>
));

const Icosahedron = forwardRef<Mesh, MeshProps>((props, ref) => (
  <mesh ref={ref} {...props}>
    <icosahedronGeometry args={[1, 1]} />
    <Material />
  </mesh>
));

const Octahedron = forwardRef<Mesh, MeshProps>((props, ref) => (
  <mesh ref={ref} {...props}>
    <octahedronGeometry args={[1, 0]} />
    <Material />
  </mesh>
));

const TorusKnot = forwardRef<Mesh, MeshProps>((props, ref) => (
  <mesh ref={ref} {...props}>
    <torusKnotGeometry args={[1, 0.1, 160, 10, 3, 5]} />
    <Material />
  </mesh>
));

const Sphere = forwardRef<Mesh, MeshProps>((props, ref) => (
  <mesh ref={ref} {...props}>
    <sphereGeometry args={[1, 8, 8]} />
    <Material />
  </mesh>
));

const Tetrahedron = forwardRef<Mesh, MeshProps>((props, ref) => (
  <mesh ref={ref} {...props}>
    <tetrahedronGeometry args={[1, 0]} />
    <Material />
  </mesh>
));

const Torus = forwardRef<Mesh, MeshProps>((props, ref) => (
  <mesh ref={ref} {...props}>
    <torusGeometry args={[25, 8, 4, 4]} />
    <Material />
  </mesh>
));

const Text = forwardRef<Mesh, MeshProps>(({ children, ...rest }, ref) => (
  <mesh ref={ref} {...rest}>
    <Text3D
      size={2}
      height={0.3}
      curveSegments={2}
      font="/fonts/arial.json"
      onBeforeRender={centerText}>
      {children}
      <Material />
    </Text3D>
  </mesh>
));

export const figures = [
  { Component: Box, scale: 2, rotation: 0.003 },
  { Component: Icosahedron, scale: 1.5, rotation: 0.002 },
  { Component: Octahedron, scale: 1.5, rotation: 0.006 },
  { Component: TorusKnot, scale: 1, rotation: 0.005 },
  { Component: Sphere, scale: 1.5, rotation: 0.0025 },
  { Component: Tetrahedron, scale: 2, rotation: 0.005 },
  { Component: Torus, scale: 0.047, rotation: 0.005 },
  { Component: Text, scale: 1.3, children: ":D", rotation: 0.005 },
  { Component: Text, scale: 0.8, children: "(•_•)", rotation: 0.005 },
  { Component: Text, scale: 1.4, children: "H", rotation: 0.005 },
  { Component: Text, scale: 1.4, children: "D:", rotation: 0.005 },
  { Component: Text, scale: 0.6, children: "( ͡° ͜ʖ ͡°)", rotation: 0.005 },
  { Component: Text, scale: 1.4, children: "if", rotation: 0.005 },
  { Component: Text, scale: 0.8, children: "else", rotation: 0.005 },
  { Component: Text, scale: 0.7, children: "ʕ•ᴥ•ʔ", rotation: 0.005 },
  { Component: Text, scale: 0.5, children: "( ͠° ͟ل ͡°)", rotation: 0.005 },
  { Component: Text, scale: 1, children: "┼", rotation: 0.005 },
  { Component: Text, scale: 1.7, children: "☺", rotation: 0.005 },
  { Component: Text, scale: 1.3, children: "☼", rotation: 0.005 },
  { Component: Text, scale: 1, children: "░", rotation: 0.005 },
  { Component: Text, scale: 1.4, children: "ʘ", rotation: 0.005 },
  { Component: Text, scale: 1.4, children: "Ξ", rotation: 0.005 },
  { Component: Text, scale: 1.2, children: "҉", rotation: 0.005 },
  { Component: Text, scale: 1.3, children: "҈", rotation: 0.005 },
  { Component: Text, scale: 2.2, children: "◌", rotation: 0.005 },
];

export const getFigure = () => {
  const index = getRandomNumber(0, figures.length - 1);
  return figures[index];
};
