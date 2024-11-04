"use client";

import type { ComponentPropsWithoutRef } from "react";
import { memo, useMemo, type FC } from "react";
import type { Transition } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/styles";
import type { PageHandler } from "@/hooks/useCarousel";

interface Props extends ComponentPropsWithoutRef<"div"> {
  length: number;
  page: number;
  handlePage: PageHandler;
}

const transition: Transition = { duration: 0.3, ease: "easeInOut" };

const width = 144;
const pageSize = 14;
const pageSpacing = 4;
const pageWidth = pageSize + pageSpacing * 2;

const getOffset = (index: number) => {
  const page = index + 1;
  const totalWidth = page * pageWidth;
  const offset = width / 2 + pageWidth / 2;
  return -(totalWidth - offset);
};

const getScale = (index: number, page: number): number => {
  if (index === page) return 1.2;
  else if (Math.abs(index - page) === 1) return 1;
  else if (Math.abs(index - page) === 2) return 0.8;
  else return 0;
};

const Overlay: FC = () => (
  <div
    className={cn(
      "pointer-events-none absolute inset-0 z-10 w-full",
      "before:blur-3 before:absolute before:left-0 before:top-0 before:h-full before:w-3/12",
      "before:bg-gradient-to-r before:from-black before:to-transparent before:filter",
      "after:blur-3 after:absolute after:right-0 after:top-0 after:h-full after:w-3/12",
      "after:bg-gradient-to-l after:from-black after:to-transparent after:filter",
    )}
  />
);

const Pagination: FC<Props> = memo((props) => {
  const { length, page, handlePage, className, ...rest } = props;

  const pages = useMemo(() => Array.from({ length }), [length]);

  return (
    <div
      className={cn(
        "z-20 flex items-center justify-center overflow-hidden",
        className,
      )}
      style={{ width, height: pageWidth }}
      {...rest}>
      <motion.div
        className="flex w-full"
        initial={{ x: getOffset(page) }}
        animate={{ x: getOffset(page) }}
        transition={transition}>
        {pages.map((_, index) => {
          const isActive = index === page;
          return (
            <motion.button
              key={index}
              className="rounded-full"
              disabled={isActive}
              onClick={() => handlePage(index)}
              animate={{
                scale: getScale(index, page),
                background: isActive ? "#ffffff" : "#1b1b1b",
              }}
              style={{
                maxHeight: pageSize,
                maxWidth: pageSize,
                minWidth: pageSize,
                minHeight: pageSize,
                marginLeft: pageSpacing,
                marginRight: pageSpacing,
              }}
              transition={transition}
            />
          );
        })}
      </motion.div>
      <Overlay />
    </div>
  );
});

export default Pagination;
