"use client";

import type { ComponentPropsWithoutRef, FC } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/styles";

type Props = ComponentPropsWithoutRef<"button"> & HTMLMotionProps<"button">;

const animation: HTMLMotionProps<"button"> = {
  initial: { x: 400, y: 0, opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const Button: FC<Props> = (props) => {
  const { className, children, transition, ...rest } = props;
  return (
    <motion.button
      className={cn(
        "border-2 border-white bg-transparent px-4 py-3 text-base font-semibold uppercase transition-colors duration-300 ease-in-out hover:bg-white hover:text-black",
        className,
      )}
      {...animation}
      transition={{ ...animation.transition, ...transition }}
      {...rest}>
      {children}
    </motion.button>
  );
};

export default Button;
