"use client";

import { cn } from "@/utils/styles";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import {
  useMemo,
  type ComponentPropsWithoutRef,
  type ElementType,
} from "react";

interface Base<T extends ElementType = "button"> {
  as?: T;
}

type Props<T extends ElementType = "button"> = Base<T> &
  ComponentPropsWithoutRef<T> &
  HTMLMotionProps<"button">;

const animation: HTMLMotionProps<"button"> = {
  initial: { x: 400, y: 0, opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const Button = <T extends ElementType = "button">(props: Props<T>) => {
  const { as = "button", className, children, transition, ...rest } = props;
  const Component = useMemo(() => motion.create(as as string), [as]);
  return (
    <Component
      className={cn(
        "border-2 border-white bg-transparent px-3 py-2 text-xs font-semibold uppercase transition-colors duration-300 ease-in-out hover:bg-white hover:text-black md:px-3.5 md:py-2.5 md:text-sm xl:px-4 xl:py-3 xl:text-base",
        className,
      )}
      {...animation}
      transition={{ ...animation.transition, ...transition }}
      {...rest}>
      {children}
    </Component>
  );
};

export default Button;
