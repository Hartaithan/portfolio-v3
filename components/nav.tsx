import NavLink from "@/components/nav-link";
import type { FC } from "react";

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
