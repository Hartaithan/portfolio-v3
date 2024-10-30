"use client";

import type { FC } from "react";
import type { BoundingBox, Transition, Variants } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import ProjectSlide from "@/components/project-slide";
import { projects } from "@/constants/projects";
import { useCarousel } from "@/hooks/useCarousel";

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    transition: { duration: 0.2 },
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
    transition: { duration: 0.2 },
  }),
};

const transition: Transition = {
  x: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.5 },
};

const dragConstraints: Partial<BoundingBox> = { left: 0, right: 0 };

const ProjectsSection: FC = () => {
  const { page, direction, index, handleDragEnd } = useCarousel({
    data: projects,
  });
  return (
    <div className="flex size-full items-center justify-center overflow-hidden">
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div
          id="slide"
          key={page}
          className="relative flex h-full w-7/12 flex-col items-center justify-center"
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
          <ProjectSlide index={index} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectsSection;
