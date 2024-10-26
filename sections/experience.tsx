"use client";

import type { ComponentPropsWithoutRef, FC } from "react";
import { useCallback } from "react";
import { useState } from "react";
import type {
  BoundingBox,
  DragHandlers,
  Transition,
  Variants,
} from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/styles";
import { swipeConfidenceThreshold, swipePower, wrap } from "@/utils/carousel";
import { experience } from "@/constants/experience";
import type { CarouselProps, PaginateHandler } from "@/models/carousel";
import ExperienceSlide from "@/components/experience-slide";

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
  opacity: { duration: 0.2 },
};

const dragConstraints: Partial<BoundingBox> = { left: 0, right: 0 };

const Arrow: FC<ComponentPropsWithoutRef<"button">> = (props) => {
  const { className, ...rest } = props;
  return (
    <button
      className={cn(
        "flex aspect-square size-6 items-center justify-center rounded-full bg-neutral-800",
        className,
      )}
      {...rest}>
      ‣
    </button>
  );
};

const Carousel: FC<CarouselProps> = (props) => {
  const { page, direction, paginate } = props;
  const index = wrap(0, experience.length, page);

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
        key={page}
        className="flex h-1 flex-1 flex-col justify-center"
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
        <ExperienceSlide index={index} />
      </motion.div>
    </AnimatePresence>
  );
};

const ExperienceSection: FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate: PaginateHandler = useCallback(
    (dir) => setPage([page + dir, dir]),
    [page],
  );

  return (
    <div className="relative flex min-h-40 flex-col overflow-hidden rounded-lg bg-neutral-900 px-6 py-5">
      <div className="mb-3 flex justify-between">
        <h1 className="text-xl font-semibold">Experience</h1>
        <div className="flex gap-x-3">
          <Arrow className="rotate-180" onClick={() => paginate(-1)} />
          <Arrow onClick={() => paginate(1)} />
        </div>
      </div>
      <Carousel page={page} direction={direction} paginate={paginate} />
    </div>
  );
};

export default ExperienceSection;
