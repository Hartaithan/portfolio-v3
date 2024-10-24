"use client";

import type { FC, PropsWithChildren } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";

const animation: HTMLMotionProps<"main"> = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, ease: "easeInOut" },
};

const Template: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <motion.main
      className="flex size-full flex-col items-center justify-center"
      {...animation}>
      {children}
    </motion.main>
  );
};

export default Template;
