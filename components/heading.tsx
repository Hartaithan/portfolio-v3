"use client";

import type { ComponentPropsWithoutRef, FC } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/styles";

type Props = ComponentPropsWithoutRef<"h1"> & HTMLMotionProps<"h1">;

const animation: HTMLMotionProps<"h1"> = {
  initial: { x: 0, y: -400, opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const Heading: FC<Props> = (props) => {
  const { className, children, transition, ...rest } = props;
  return (
    <motion.h1
      className={cn("text-9xl font-semibold leading-[1.1]", className)}
      {...animation}
      transition={{ ...animation.transition, ...transition }}
      {...rest}>
      {children}
    </motion.h1>
  );
};

export default Heading;
