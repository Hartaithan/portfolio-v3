import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = { title: "Projects" };

const Projects: FC = () => {
  return (
    <div className="size-full flex justify-center items-center">
      <h1 className="font-bold">Projects</h1>
    </div>
  );
};

export default Projects;
