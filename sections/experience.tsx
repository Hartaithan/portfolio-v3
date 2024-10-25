"use client";

import type { ComponentPropsWithoutRef, FC } from "react";
import React, { useCallback } from "react";
import { useState } from "react";
import type { PanInfo, Transition, Variants } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/styles";
import { swipeConfidenceThreshold, swipePower, wrap } from "@/utils/carousel";

type PaginateHandler = (dir: number) => void;

interface SlideProps {
  page: number;
  direction: number;
  paginate: PaginateHandler;
}

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
  opacity: { duration: 0.8 },
};

const experience = [
  {
    title: "Dvigus",
    location: "Russia, Moscow",
    position: "Frontend Developer",
    tags: ["React", "Tracking Scripts"],
    from: "10.2023",
    to: "present",
  },
  {
    title: "Qwantum",
    location: "Russia, Yakutsk",
    position: "Frontend Developer",
    tags: ["React", "Next.JS", "React Native"],
    from: "06.2022",
    to: "08.2023",
  },
  {
    title: "AEB IT",
    location: "Russia, Yakutsk",
    position: "Frontend Developer",
    tags: ["React", "Next.JS"],
    from: "05.2021",
    to: "05.2022",
  },
];

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

const Slide: FC<SlideProps> = (props) => {
  const { page, direction, paginate } = props;
  const index = wrap(0, experience.length, page);
  const slide = experience[index];

  const handleDragEnd = useCallback(
    (
      e: MouseEvent | TouchEvent | PointerEvent,
      { offset, velocity }: PanInfo,
    ) => {
      const swipe = swipePower(offset.x, velocity.x);
      if (swipe < -swipeConfidenceThreshold) paginate(1);
      else if (swipe > swipeConfidenceThreshold) paginate(-1);
    },
    [paginate],
  );

  return (
    <motion.div
      key={page}
      className="mt-3 flex h-1 flex-1 flex-col justify-center"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      drag="x"
      transition={transition}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={handleDragEnd}>
      <div className="flex items-center gap-x-2">
        <h1 className="font-semibold">{slide.title}</h1>
        <p className="text-sm leading-[normal] text-neutral-200">
          {slide.location}
        </p>
      </div>
      <p className="mt-1 text-sm">
        {slide.from} - {slide.to}
      </p>
      <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
        {slide.tags.map((tag) => (
          <p
            key={tag}
            className="rounded bg-neutral-800 px-2 py-0.5 text-sm font-medium hover:bg-neutral-700">
            {tag}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const ExperienceSection: FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = useCallback(
    (dir: number) => setPage([page + dir, dir]),
    [page],
  );

  return (
    <AnimatePresence initial={false} mode="wait" custom={direction}>
      <div className="relative flex min-h-40 flex-col overflow-hidden rounded-lg bg-neutral-900 px-6 py-5">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold">Experience</h1>
          <div className="flex gap-x-3">
            <Arrow className="rotate-180" onClick={() => paginate(-1)} />
            <Arrow onClick={() => paginate(1)} />
          </div>
        </div>
        <Slide page={page} direction={direction} paginate={paginate} />
      </div>
    </AnimatePresence>
  );
};

export default ExperienceSection;
