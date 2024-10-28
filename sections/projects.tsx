"use client";

import type { FC } from "react";
import { useCallback, useState } from "react";
import type { CarouselProps, PaginateHandler } from "@/models/carousel";
import { swipeConfidenceThreshold, swipePower } from "@/utils/carousel";
import type {
  BoundingBox,
  DragHandlers,
  Transition,
  Variants,
} from "framer-motion";
import { motion, AnimatePresence, wrap } from "framer-motion";

const projects = [1, 2, 3, 4, 5, 6];

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const transition: Transition = {
  x: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.5 },
};

const dragConstraints: Partial<BoundingBox> = { left: 0, right: 0 };

const Carousel: FC<CarouselProps> = (props) => {
  const { page, direction, paginate } = props;
  const index = wrap(0, projects.length, page);

  const handleDragEnd: NonNullable<DragHandlers["onDragEnd"]> = useCallback(
    (_, { offset, velocity }) => {
      const swipe = swipePower(offset.x, velocity.x);
      if (swipe < -swipeConfidenceThreshold) paginate(1);
      else if (swipe > swipeConfidenceThreshold) paginate(-1);
    },
    [paginate],
  );

  return (
    <AnimatePresence initial={false} mode="popLayout" custom={direction}>
      <motion.div
        id="slide"
        key={page}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        drag="x"
        transition={transition}
        dragConstraints={dragConstraints}
        dragElastic={1}
        onDragEnd={handleDragEnd}>
        <pre>hello world {index}</pre>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectsSection: FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate: PaginateHandler = useCallback(
    (dir) => setPage([page + dir, dir]),
    [page],
  );

  return (
    <div className="flex size-full items-center justify-center overflow-hidden">
      <Carousel page={page} direction={direction} paginate={paginate} />
    </div>
  );
};

export default ProjectsSection;
