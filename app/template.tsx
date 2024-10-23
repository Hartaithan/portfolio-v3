"use client";

import type { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { template } from "@/constants/animation";

const Template: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <motion.main className="size-full" {...template}>
      {children}
    </motion.main>
  );
};

export default Template;
