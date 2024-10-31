"use client";

import { useMemo, type ComponentPropsWithoutRef, type FC } from "react";
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

const Pagination: FC<Props> = (props) => {
  const { length, page, handlePage, className, ...rest } = props;

  const pages = useMemo(() => Array.from({ length }), [length]);

  return (
    <div className={cn("z-20 flex justify-center", className)} {...rest}>
      {pages.map((_, index) => {
        const isActive = index === page;
        return (
          <motion.button
            key={index}
            className="mx-1 size-4 rounded-full"
            disabled={isActive}
            onClick={() => handlePage(index)}
            animate={{
              scale: isActive ? 1.2 : 1,
              background: isActive ? "#ffffff" : "#1b1b1b",
            }}
            transition={transition}
          />
        );
      })}
    </div>
  );
};

export default Pagination;
