"use client";

import { useActiveLink } from "@/hooks/useActiveLink";
import { cn } from "@/utils/styles";
import Link from "next/link";
import type { LinkProps } from "next/link";
import type { ComponentPropsWithoutRef, FC } from "react";

type NavLinkProps = ComponentPropsWithoutRef<"a"> & LinkProps;

const NavLink: FC<NavLinkProps> = (props) => {
  const { className, href, ...rest } = props;
  const isActive = useActiveLink(href);
  return (
    <Link
      className={cn(
        "fixed z-50 text-2xl font-bold uppercase leading-[normal]",
        "before:absolute before:h-[2px] before:w-0 before:bg-white before:opacity-0",
        "before:transition-all before:duration-300 before:ease-in-out",
        "before:bottom-[0%] before:left-1/2 before:-translate-x-1/2 before:transform",
        "hover:before:w-full hover:before:opacity-100",
        isActive && "before:w-full before:opacity-100",
        className,
      )}
      href={href}
      {...rest}
      prefetch={false}
    />
  );
};

const Navigation: FC = () => {
  return (
    <nav>
      <NavLink href="/" className="left-6 top-6">
        Home
      </NavLink>
      <NavLink href="/projects" className="right-6 top-6">
        Projects
      </NavLink>
      <NavLink href="/about" className="bottom-6 left-6">
        About Me
      </NavLink>
      <NavLink href="/contact" className="bottom-6 right-6">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;
