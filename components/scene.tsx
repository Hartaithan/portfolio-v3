/* eslint-disable react/no-unknown-property */

"use client";

import { getFigure } from "@/components/figures";
import { useWindowSize } from "@/hooks/use-window-size";
import { numberToVector } from "@/utils/threejs";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import type { FC, MutableRefObject } from "react";
import { memo, useEffect, useRef } from "react";
import type { PerspectiveCamera as Camera, Clock, Mesh } from "three";

interface Props {
  onAfterRender: () => void;
}

interface FigureProps extends Props {
  camera: MutableRefObject<Camera | null>;
}

interface Zoom {
  value: number;
  changing: boolean;
}

interface RotateParams {
  clock: Clock;
  mesh: MutableRefObject<Mesh | null>;
}

interface CameraParams {
  zoom: MutableRefObject<Zoom>;
  camera: MutableRefObject<Camera | null>;
  width: number | null;
}

type SetupParams = Pick<CameraParams, "zoom" | "width">;

const { Component, scale, zoom: figureZoom, children, rotation } = getFigure();

const getZoom = (width: number | null) =>
  width && width < 1000 ? figureZoom : 1;

const rotateFigure = (params: RotateParams) => {
  const { clock, mesh } = params;
  if (!mesh.current) return;
  const elapsed = clock.getElapsedTime();
  mesh.current.rotation.y += rotation;
  mesh.current.position.y = Math.sin(elapsed) * 0.1;
};

const controlCamera = (params: CameraParams) => {
  const { zoom, camera, width } = params;
  if (!zoom.current.changing || !camera.current) return;
  const changedZoom = getZoom(width);
  camera.current.zoom += (changedZoom - camera.current.zoom) * 0.1;
  camera.current.updateProjectionMatrix();
  if (Math.abs(camera.current.zoom - zoom.current.value) < 0.01) {
    zoom.current.changing = false;
  }
};

const setupZoom = (params: SetupParams) => {
  const { zoom, width } = params;
  if (!width) return;
  const value = getZoom(width);
  zoom.current = { value, changing: true };
};

const Figure: FC<FigureProps> = (props) => {
  const { camera, onAfterRender } = props;
  const { width } = useWindowSize();
  const mesh = useRef<Mesh | null>(null);
  const zoom = useRef<Zoom>({ value: 1, changing: true });

  useFrame(({ clock }) => {
    rotateFigure({ clock, mesh });
    controlCamera({ zoom, camera, width });
  });

  useEffect(() => {
    setupZoom({ zoom, width });
  }, [width]);

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
  const camera = useRef<Camera | null>(null);
  return (
    <Canvas dpr={window.devicePixelRatio}>
      <PerspectiveCamera ref={camera} makeDefault position={[0, 0, 6]} />
      <ambientLight intensity={10} />
      <Figure camera={camera} onAfterRender={onAfterRender} />
    </Canvas>
  );
});

export default Scene;
