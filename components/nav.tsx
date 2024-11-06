import NavLink from "@/components/nav-link";
import type { FC } from "react";

const Navigation: FC = () => {
  return (
    <nav>
      <NavLink
        href="/"
        className="left-4 top-4 sm:left-5 sm:top-5 md:left-6 md:top-6">
        Home
      </NavLink>
      <NavLink
        href="/projects"
        className="right-4 top-4 sm:right-5 sm:top-5 md:right-6 md:top-6">
        Projects
      </NavLink>
      <NavLink
        href="/about"
        className="bottom-4 left-4 sm:bottom-5 sm:left-5 md:bottom-6 md:left-6">
        About Me
      </NavLink>
      <NavLink
        href="/contact"
        className="bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;
