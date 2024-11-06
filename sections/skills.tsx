"use client";

import GradientOverlay from "@/components/gradient-overlay";
import { skills } from "@/constants/skills";
import { groupSkills } from "@/utils/skills";
import type { TargetAndTransition } from "framer-motion";
import { motion } from "framer-motion";
import { useMemo, type FC } from "react";

interface SliderProps {
  items: string[];
}

const grouped = groupSkills(skills);

const speed = 15;
const duration = speed * (skills.length / 10);

const animate: TargetAndTransition = {
  x: ["0%", "-50%"],
  transition: {
    ease: "linear",
    duration,
    repeat: Infinity,
  },
};

const Slider: FC<SliderProps> = (props) => {
  const { items } = props;
  const duplicated = useMemo(() => [...items, ...items], [items]);
  return (
    <div className="relative mx-auto w-[calc(100%-2px)] overflow-hidden">
      <motion.div className="flex w-max" animate={animate}>
        {duplicated.map((skill, index) => (
          <p
            key={index}
            className="mr-3 flex select-none items-center justify-center text-nowrap rounded bg-neutral-800 px-2 py-0.5 text-sm font-medium hover:bg-neutral-700">
            {skill}
          </p>
        ))}
      </motion.div>
    </div>
  );
};

const SkillsSection: FC = () => {
  return (
    <div className="flex h-40 flex-col overflow-hidden rounded-lg bg-neutral-900 py-4 md:h-44 md:py-5">
      <h1 className="mb-3 px-5 text-base font-semibold md:px-6 md:text-xl">
        Skills
      </h1>
      <div className="relative flex flex-1 flex-col items-center justify-between">
        <GradientOverlay />
        <Slider items={grouped.one} />
        <Slider items={grouped.two} />
        <Slider items={grouped.three} />
      </div>
    </div>
  );
};

export default SkillsSection;
