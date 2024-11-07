"use client";

import ExperienceSlide from "@/components/experience-slide";
import { experience } from "@/constants/experience";
import { useCarousel } from "@/hooks/use-carousel";
import { cn } from "@/utils/styles";
import type { BoundingBox, Transition, Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import type { ComponentPropsWithoutRef, FC } from "react";

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

const ExperienceSection: FC = () => {
  const { page, direction, index, paginate, handleDragEnd } = useCarousel({
    data: experience,
  });
  return (
    <div className="relative flex min-h-0 flex-col overflow-hidden rounded-lg bg-neutral-900 px-5 py-4 md:px-6 md:py-5 lg:min-h-40">
      <div className="mb-3 flex justify-between">
        <h1 className="text-base font-semibold md:text-xl">Experience</h1>
        <div className="flex gap-x-3">
          <Arrow className="rotate-180" onClick={() => paginate(-1)} />
          <Arrow onClick={() => paginate(1)} />
        </div>
      </div>
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
    </div>
  );
};

export default ExperienceSection;
