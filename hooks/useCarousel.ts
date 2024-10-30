import type { DragHandlers } from "framer-motion";
import { wrap } from "framer-motion";
import { useCallback, useState } from "react";

interface CarouselParams<T> {
  data: T[];
}

type PaginateHandler = (dir: number) => void;

const swipeConfidenceThreshold = 10000;

const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

export const useCarousel = <T>(params: CarouselParams<T>) => {
  const { data } = params;
  const [[page, direction], setPage] = useState([0, 0]);
  const index = wrap(0, data.length, page);

  const paginate: PaginateHandler = useCallback(
    (dir) => setPage([page + dir, dir]),
    [page],
  );

  const handleDragEnd: NonNullable<DragHandlers["onDragEnd"]> = useCallback(
    (_, { offset, velocity }) => {
      const swipe = swipePower(offset.x, velocity.x);
      if (swipe < -swipeConfidenceThreshold) paginate(1);
      else if (swipe > swipeConfidenceThreshold) paginate(-1);
    },
    [paginate],
  );

  return { page, direction, index, paginate, handleDragEnd };
};
