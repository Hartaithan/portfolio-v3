"use client";

import type { Transition, Variants } from "framer-motion";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useCallback, useState, type FC } from "react";

const Scene = dynamic(() => import("@/components/scene"), { ssr: false });

const variants: Variants = {
  hide: { opacity: 0 },
  show: { opacity: 1 },
};

const transition: Transition = {
  duration: 1,
  ease: "easeInOut",
};

const Background: FC = () => {
  const [ready, setReady] = useState(false);

  const onAfterRender = useCallback(() => setReady(true), []);

  return (
    <motion.div
      variants={variants}
      initial="hide"
      animate={ready ? "show" : "hide"}
      exit="hide"
      transition={transition}
      className="pointer-events-none fixed inset-0 -z-50">
      <Scene onAfterRender={onAfterRender} />
    </motion.div>
  );
};

export default Background;
