import type { HTMLMotionProps } from "framer-motion";

export const template: HTMLMotionProps<"main"> = {
  variants: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  },
  initial: "hidden",
  animate: "visible",
  exit: "exit",
};
