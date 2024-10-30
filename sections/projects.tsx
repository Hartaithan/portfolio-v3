"use client";

import type { ComponentPropsWithoutRef, FC } from "react";
import type { BoundingBox, Transition, Variants } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import ProjectSlide from "@/components/project-slide";
import { projects } from "@/constants/projects";
import { useCarousel } from "@/hooks/useCarousel";
import { cn } from "@/utils/styles";
import IconArrow from "@/icons/arrow";

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

const Arrow: FC<ComponentPropsWithoutRef<"button">> = (props) => {
  const { className, ...rest } = props;
  return (
    <button
      className={cn(
        "absolute top-1/2 z-10 size-16 -translate-y-1/2 p-3",
        className,
      )}
      {...rest}>
      <IconArrow className="size-full fill-white" />
    </button>
  );
};

const ProjectsSection: FC = () => {
  const { page, direction, index, paginate, handleDragEnd } = useCarousel({
    data: projects,
  });
  return (
    <div className="flex size-full items-center justify-center overflow-hidden">
      <Arrow className="left-4 rotate-180" onClick={() => paginate(-1)} />
      <Arrow className="right-4" onClick={() => paginate(1)} />
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
