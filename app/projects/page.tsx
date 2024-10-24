import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = { title: "Projects" };

const Projects: FC = () => {
  return <h1 className="font-bold">Projects</h1>;
};

export default Projects;
