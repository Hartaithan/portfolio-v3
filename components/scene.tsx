/* eslint-disable react/no-unknown-property */

"use client";

import type { FC } from "react";
import { memo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";
import { PerspectiveCamera } from "@react-three/drei";
import { numberToVector } from "@/utils/threejs";
import { getFigure } from "@/components/figures";

interface Props {
  onAfterRender: () => void;
}

const { Component, scale, children, rotation } = getFigure();

const Figure: FC<Props> = (props) => {
  const { onAfterRender } = props;
  const mesh = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const elapsed = clock.getElapsedTime();
    mesh.current.rotation.y += rotation;
    mesh.current.position.y = Math.sin(elapsed) * 0.1;
  });

  return (
    <Component
      ref={mesh}
      scale={numberToVector(scale)}
      onAfterRender={onAfterRender}>
      {children}
    </Component>
  );
};

const Scene: FC<Props> = memo((props) => {
  const { onAfterRender } = props;
  return (
    <Canvas dpr={window.devicePixelRatio}>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <ambientLight intensity={10} />
      <Figure onAfterRender={onAfterRender} />
    </Canvas>
  );
});

export default Scene;
