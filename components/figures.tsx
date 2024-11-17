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
      font="/portfolio-v3/fonts/arial.json"
      onBeforeRender={centerText}>
      {children}
      <Material />
    </Text3D>
  </mesh>
));

export const figures = [
  {
    Component: Box,
    scale: 2,
    zoom: 0.7,
    rotation: 0.003,
  },
  {
    Component: Icosahedron,
    scale: 1.5,
    zoom: 0.7,
    rotation: 0.002,
  },
  {
    Component: Octahedron,
    scale: 1.5,
    zoom: 0.7,
    rotation: 0.006,
  },
  {
    Component: TorusKnot,
    scale: 1,
    zoom: 0.65,
    rotation: 0.005,
  },
  {
    Component: Sphere,
    scale: 1.5,
    zoom: 0.7,
    rotation: 0.0025,
  },
  {
    Component: Tetrahedron,
    scale: 2,
    zoom: 0.6,
    rotation: 0.005,
  },
  {
    Component: Torus,
    scale: 0.047,
    zoom: 0.65,
    rotation: 0.005,
  },
  {
    Component: Text,
    scale: 1.3,
    zoom: 0.6,
    rotation: 0.005,
    children: ":D",
  },
  {
    Component: Text,
    scale: 0.8,
    zoom: 0.5,
    rotation: 0.005,
    children: "(•_•)",
  },
  {
    Component: Text,
    scale: 1.4,
    zoom: 0.7,
    rotation: 0.005,
    children: "H",
  },
  {
    Component: Text,
    scale: 1.4,
    zoom: 0.6,
    rotation: 0.005,
    children: "D:",
  },
  {
    Component: Text,
    scale: 0.6,
    zoom: 0.45,
    rotation: 0.005,
    children: "( ͡° ͜ʖ ͡°)",
  },
  {
    Component: Text,
    scale: 1.4,
    zoom: 0.7,
    rotation: 0.005,
    children: "if",
  },
  {
    Component: Text,
    scale: 0.8,
    zoom: 0.5,
    rotation: 0.005,
    children: "else",
  },
  {
    Component: Text,
    scale: 0.7,
    zoom: 0.45,
    rotation: 0.005,
    children: "ʕ•ᴥ•ʔ",
  },
  {
    Component: Text,
    scale: 0.5,
    zoom: 0.5,
    rotation: 0.005,
    children: "( ͠° ͟ل ͡°)",
  },
  {
    Component: Text,
    scale: 1,
    zoom: 0.9,
    rotation: 0.005,
    children: "┼",
  },
  {
    Component: Text,
    scale: 1.7,
    zoom: 0.7,
    rotation: 0.005,
    children: "☺",
  },
  {
    Component: Text,
    scale: 1.3,
    zoom: 0.6,
    rotation: 0.005,
    children: "☼",
  },
  {
    Component: Text,
    scale: 1,
    zoom: 0.9,
    rotation: 0.005,
    children: "░",
  },
  {
    Component: Text,
    scale: 1.4,
    zoom: 0.7,
    rotation: 0.005,
    children: "ʘ",
  },
  {
    Component: Text,
    scale: 1.4,
    zoom: 0.8,
    rotation: 0.005,
    children: "Ξ",
  },
  {
    Component: Text,
    scale: 1.2,
    zoom: 0.65,
    rotation: 0.005,
    children: "҉",
  },
  {
    Component: Text,
    scale: 1.3,
    zoom: 0.6,
    rotation: 0.005,
    children: "҈",
  },
  {
    Component: Text,
    scale: 2.2,
    zoom: 0.65,
    rotation: 0.005,
    children: "◌",
  },
];

export const getFigure = () => {
  const index = getRandomNumber(0, figures.length - 1);
  return figures[index];
};
