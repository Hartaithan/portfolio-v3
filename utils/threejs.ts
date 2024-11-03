import type { Mesh } from "three";
import { Vector3 } from "three";

export const numberToVector = (value: number) =>
  new Vector3(value, value, value);

export const centerText: Mesh["onBeforeRender"] = (...args) => {
  const geometry = args[3];
  geometry.center();
};
