export const swipeConfidenceThreshold = 10000;

export const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

export const wrap = (min: number, max: number, v: number) => {
  const size = max - min;
  return ((((v - min) % size) + size) % size) + min;
};
