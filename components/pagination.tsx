"use client";

import GradientOverlay from "@/components/gradient-overlay";
import type { PageHandler } from "@/hooks/use-carousel";
import { cn } from "@/utils/styles";
import type { Transition } from "framer-motion";
import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";
import { memo, useMemo, type FC } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {
  length: number;
  page: number;
  handlePage: PageHandler;
}

interface PageProps extends Omit<Props, "length"> {
  index: number;
}

const transition: Transition = { duration: 0.3, ease: "easeInOut" };

const width = 144;
const pageSize = 14;
const pageSpacing = 4;
const pageWidth = pageSize + pageSpacing * 2;

const pageStyles = {
  maxHeight: pageSize,
  maxWidth: pageSize,
  minWidth: pageSize,
  minHeight: pageSize,
  marginLeft: pageSpacing,
  marginRight: pageSpacing,
};

const listStyle = { width, height: pageWidth };

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

const Page: FC<PageProps> = memo((props) => {
  const { index, page, handlePage } = props;
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
      style={pageStyles}
      transition={transition}
    />
  );
});

const Pagination: FC<Props> = memo((props) => {
  const { length, page, handlePage, className, ...rest } = props;
  const offset = getOffset(page);
  const pages = useMemo(() => Array.from({ length }), [length]);
  return (
    <div
      className={cn(
        "z-20 flex scale-75 items-center justify-center overflow-hidden md:scale-100",
        className,
      )}
      style={listStyle}
      {...rest}>
      <motion.div
        className="flex w-full"
        initial={{ x: offset }}
        animate={{ x: offset }}
        transition={transition}>
        {pages.map((_, index) => (
          <Page key={index} index={index} page={page} handlePage={handlePage} />
        ))}
      </motion.div>
      <GradientOverlay className="w-full before:from-black after:from-black" />
    </div>
  );
});

export default Pagination;
