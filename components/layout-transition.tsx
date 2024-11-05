"use client";

import FrozenRouter from "@/components/frozen-router";
import type { HTMLMotionProps } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { FC, PropsWithChildren } from "react";

const animation: HTMLMotionProps<"main"> = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const LayoutTransition: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const path = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={path}
        className="flex size-full flex-col items-center justify-center"
        {...animation}>
        <FrozenRouter>{children}</FrozenRouter>
      </motion.main>
    </AnimatePresence>
  );
};

export default LayoutTransition;
