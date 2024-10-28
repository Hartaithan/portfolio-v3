import type { Metadata } from "next";
import type { FC } from "react";
import ProjectsSection from "@/sections/projects";

export const metadata: Metadata = { title: "Projects" };

const Projects: FC = () => <ProjectsSection />;

export default Projects;
