import { cn } from "@/utils/styles";
import Link from "next/link";
import type { LinkProps } from "next/link";
import type { ComponentPropsWithoutRef, FC } from "react";

type NavLinkProps = ComponentPropsWithoutRef<"a"> & LinkProps;

const NavLink: FC<NavLinkProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <Link
      className={cn("fixed z-50 font-bold text-2xl uppercase", className)}
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
