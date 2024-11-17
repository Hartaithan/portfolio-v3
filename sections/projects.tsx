"use client";

import Pagination from "@/components/pagination";
import ProjectSlide from "@/components/project-slide";
import { projects } from "@/constants/projects";
import { useCarousel } from "@/hooks/use-carousel";
import IconArrow from "@/icons/arrow";
import { cn } from "@/utils/styles";
import type { BoundingBox, Transition, Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import type { ComponentPropsWithoutRef, FC } from "react";

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
        "absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center md:size-14 lg:size-16",
        className,
      )}
      {...rest}>
      <IconArrow className="size-7 fill-white md:size-8 lg:size-10" />
    </button>
  );
};

const ProjectsSection: FC = () => {
  const { page, direction, index, paginate, handlePage, handleDragEnd } =
    useCarousel({ data: projects });
  return (
    <div className="flex size-full items-center justify-center overflow-hidden">
      <Arrow
        className="left-0 rotate-180 sm:left-1 md:left-4"
        onClick={() => paginate(-1)}
      />
      <Arrow
        className="right-0 sm:right-1 md:right-4"
        onClick={() => paginate(1)}
      />
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div
          id="slide"
          key={page}
          className="relative flex h-full w-10/12 flex-col items-center justify-center md:w-9/12 2xl:w-8/12"
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
      <Pagination
        className="absolute bottom-4 sm:bottom-5 md:bottom-6"
        length={projects.length}
        page={index}
        handlePage={handlePage}
      />
    </div>
  );
};

export default ProjectsSection;
