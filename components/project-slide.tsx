import { projects } from "@/constants/projects";
import IconGithub from "@/icons/github";
import IconGooglePlay from "@/icons/google-play";
import IconLink from "@/icons/link";
import type { IconProps } from "@/models/icon";
import type { ProjectIcon } from "@/models/project";
import { cn } from "@/utils/styles";
import Image from "next/image";
import type { FC } from "react";

interface Props {
  index: number;
}

export const icons: Record<ProjectIcon, FC<IconProps>> = {
  "google-play": IconGooglePlay,
  external: IconLink,
  github: IconGithub,
};

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
          "absolute flex w-8/12 flex-col",
          isEven ? "items-start self-start" : "items-end self-end",
        )}>
        <h1 className="text-3xl font-semibold">
          {id}. {label}
        </h1>
        <p className="text-lg font-semibold">{category}</p>
        <p className="mt-2 rounded-lg bg-neutral-900/90 px-5 py-4 text-lg leading-snug">
          {description}
        </p>
        <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
          {tags.map((tag) => (
            <p
              key={tag}
              className="rounded-md bg-neutral-900/90 px-2 py-1 text-sm font-medium">
              {tag}
            </p>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
          {links.map((link) => {
            const Icon = icons[link.icon];
            return (
              <a key={link.icon} href={link.href} target="_blank">
                <Icon className="size-5 fill-white" />
              </a>
            );
          })}
        </div>
      </div>
      <div
        className={cn(
          "pointer-events-none absolute -z-10 flex h-3/6 items-center",
          isEven ? "self-end" : "self-start",
        )}>
        <div className="relative h-full">
          <Image
            fill
            unoptimized
            alt={`${label} project preview`}
            className="!relative size-full object-contain"
            src={image}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectSlide;
