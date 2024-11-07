"use client";

import { useActiveLink } from "@/hooks/use-active-link";
import { cn } from "@/utils/styles";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { ComponentPropsWithoutRef, FC } from "react";

type Props = ComponentPropsWithoutRef<"a"> & LinkProps;

const NavLink: FC<Props> = (props) => {
  const { className, href, ...rest } = props;
  const { isActive, handleClick } = useActiveLink(href);

  return (
    <Link
      className={cn(
        "fixed z-50 text-lg font-bold uppercase leading-[normal] md:text-xl xl:text-2xl",
        "before:absolute before:h-[2px] before:w-0 before:bg-white before:opacity-0",
        "before:transition-all before:duration-300 before:ease-in-out",
        "before:bottom-[0%] before:left-1/2 before:-translate-x-1/2 before:transform",
        "hover:before:w-full hover:before:opacity-100",
        isActive && "before:w-full before:opacity-100",
        className,
      )}
      href={href}
      {...rest}
      onClick={handleClick}
    />
  );
};

export default NavLink;
