"use client";

import { useMemo, type FC } from "react";
import type { TargetAndTransition } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/styles";
import { groupSkills } from "@/utils/skills";

interface SliderProps {
  items: string[];
}

const skills = [
  // web
  "HTML",
  "CSS",
  "SCSS",
  "JS ES6+",
  "TS 4+",
  // styles
  "CSS Animations",
  "Resp. Design",
  "Bootstrap",
  "Mantine",
  "Tailwind",
  "Styled Components",
  // frameworks
  "React",
  "React Router",
  "Next.JS",
  "SSR, ISR, PPR",
  "Vue",
  "Nuxt.js",
  "Angular",
  "Rx.js",
  // state management
  "React Context API",
  "Redux / Redux Toolkit",
  "Mobx",
  "Vuex",
  "NGRX",
  // api
  "REST API",
  "GraphQL",
  "Apollo Client",
  // web api
  "Canvas API",
  "Intersection Observer API",
  "Notifications API",
  "Service Workers",
  "PWA",
  // tools
  "Webpack",
  "Vite",
  "Eslint",
  "Prettier",
  "Git",
  // mobile
  "Android",
  "Android SDK",
  "Kotlin",
  "Volley",
  "React Native",
  "React Navigation",
  "Reanimated",
  // tests
  "Jest",
  "React Testing Library",
  // optimization
  "Pagination",
  "Infinite Scroll",
  "Lazy loading",
  "Virtualization",
  // other libs
  "React Hook Form",
  "Formik",
  "Three.JS",
  "React Three Fiber",
];

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

const Overlay: FC = () => (
  <div
    className={cn(
      "pointer-events-none absolute inset-0 z-10",
      "before:blur-3 before:absolute before:left-0 before:top-0 before:h-full before:w-4/12",
      "before:bg-gradient-to-r before:from-neutral-900 before:to-transparent before:filter",
      "after:blur-3 after:absolute after:right-0 after:top-0 after:h-full after:w-4/12",
      "after:bg-gradient-to-l after:from-neutral-900 after:to-transparent after:filter",
    )}
  />
);

const Slider: FC<SliderProps> = (props) => {
  const { items } = props;
  const duplicated = useMemo(() => [...items, ...items], [items]);
  return (
    <div className="relative mx-auto w-full overflow-hidden">
      <Overlay />
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
    <div className="flex h-44 flex-col overflow-hidden rounded-lg bg-neutral-900 py-5">
      <h1 className="mb-3 px-6 text-xl font-semibold">Skills</h1>
      <div className="flex flex-1 flex-col items-center justify-between">
        <Slider items={grouped.one} />
        <Slider items={grouped.two} />
        <Slider items={grouped.three} />
      </div>
    </div>
  );
};

export default SkillsSection;
