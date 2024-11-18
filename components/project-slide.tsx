import Icon from "@/components/icon";
import { projects } from "@/constants/projects";
import { cn } from "@/utils/styles";
import Image from "next/image";
import type { FC } from "react";

interface Props {
  index: number;
}

const ProjectSlide: FC<Props> = (props) => {
  const { index } = props;

  const slide = projects[index];
  const { label, category, description, tags, links, image } = slide;
  const id = index + 1;

  const isEven = index % 2 === 0;

  return (
    <>
      <div
        className={cn(
          "pointer-events-none relative -z-10 flex h-auto w-full items-center justify-center md:h-2/5 lg:absolute lg:h-3/6 lg:w-9/12",
          isEven ? "self-end" : "self-start",
        )}>
        <div className="relative h-full w-11/12 sm:w-9/12 lg:w-full xl:w-auto">
          <Image
            fill
            unoptimized
            alt={`${label} project preview`}
            className="!relative aspect-video size-full object-contain"
            src={image}
          />
        </div>
      </div>
      <div
        className={cn(
          "relative mt-3 flex w-full flex-col items-center self-auto lg:absolute lg:mt-0 lg:w-8/12",
          isEven ? "lg:items-start lg:self-start" : "lg:items-end lg:self-end",
        )}>
        <h1 className="text-shadow text-xl font-semibold drop-shadow md:text-2xl lg:text-3xl">
          {id}. {label}
        </h1>
        <p className="text-shadow text-sm font-semibold drop-shadow md:text-base lg:text-lg">
          {category}
        </p>
        <p className="mt-2 rounded-lg bg-neutral-900/90 px-4 py-3 text-xs leading-snug md:text-base lg:px-5 lg:py-4 2xl:text-lg">
          {description}
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-x-2 gap-y-1 lg:justify-start">
          {tags.map((tag) => (
            <p
              key={tag}
              className="rounded-md bg-neutral-900/90 px-1.5 py-0.5 text-[0.6rem] font-medium sm:text-xs md:px-2 md:py-1 md:text-sm">
              {tag}
            </p>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
          {links.map((link) => (
            <a key={link.icon} href={link.href} target="_blank">
              <Icon icon={link.icon} className="size-5 fill-white" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectSlide;
