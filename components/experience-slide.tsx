"use client";

import type { FC } from "react";
import { experience } from "@/constants/experience";
import {
  formatExperienceDate,
  getExperienceDuration,
} from "@/utils/experience";

interface Props {
  index: number;
}

const ExperienceSlide: FC<Props> = (props) => {
  const { index } = props;
  const slide = experience[index];
  const { title, location, from, to, tags } = slide;
  const duration = getExperienceDuration(from, to);
  return (
    <>
      <div className="flex items-center gap-x-2">
        <h1 className="font-semibold">{title}</h1>
        <p className="text-sm leading-[normal] text-neutral-200">{location}</p>
      </div>
      <div className="mt-1 flex items-center gap-x-2">
        <p className="text-sm">
          {formatExperienceDate(from)} - {formatExperienceDate(to)}
        </p>
        <p className="text-xs leading-[normal]">{duration}</p>
      </div>
      <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
        {tags.map((tag) => (
          <p
            key={tag}
            className="rounded bg-neutral-800 px-2 py-0.5 text-sm font-medium hover:bg-neutral-700">
            {tag}
          </p>
        ))}
      </div>
    </>
  );
};

export default ExperienceSlide;
