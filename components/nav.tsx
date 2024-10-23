"use client";

import { useActiveLink } from "@/hooks/useActiveLink";
import { cn } from "@/utils/styles";
import Link from "next/link";
import type { LinkProps } from "next/link";
import type { ComponentPropsWithoutRef, FC } from "react";

type NavLinkProps = ComponentPropsWithoutRef<"a"> & LinkProps;

const styles = {
  link: "fixed z-50 font-bold text-2xl leading-[normal] uppercase",
  line: "before:absolute before:h-[2px] before:w-0 before:bg-white before:opacity-0 before:transition-all before:duration-300 before:ease-in-out",
  hover: "hover:before:w-full hover:before:opacity-100",
  position:
    "before:bottom-[0%] before:left-1/2 before:transform before:-translate-x-1/2",
  active: "before:w-full before:opacity-100",
};

const NavLink: FC<NavLinkProps> = (props) => {
  const { className, href, ...rest } = props;
  const isActive = useActiveLink(href);
  return (
    <Link
      className={cn(
        styles.link,
        styles.line,
        styles.hover,
        styles.position,
        isActive && styles.active,
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
    <nav className="fixed">
      <NavLink href="/" className="top-6 left-6">
        Home
      </NavLink>
      <NavLink href="/projects" className="top-6 right-6">
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
