import { experience } from "@/constants/experience";
import {
  formatExperienceDate,
  getExperienceDuration,
} from "@/utils/experience";
import type { FC } from "react";

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
        <h1 className="text-sm font-semibold sm:text-base">{title}</h1>
        <p className="text-xs leading-[normal] text-neutral-200 sm:text-sm">
          {location}
        </p>
      </div>
      <div className="mt-1 flex items-center gap-x-2">
        <p className="text-xs sm:text-sm">
          {formatExperienceDate(from)} - {formatExperienceDate(to)}
        </p>
        <p className="text-xs leading-[normal]">{duration}</p>
      </div>
      <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
        {tags.map((tag) => (
          <p
            key={tag}
            className="rounded bg-neutral-800 px-2 py-0.5 text-xs font-medium hover:bg-neutral-700 sm:text-sm">
            {tag}
          </p>
        ))}
      </div>
    </>
  );
};

export default ExperienceSlide;
