import ProjectsSection from "@/sections/projects";
import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = { title: "Projects" };

const Projects: FC = () => <ProjectsSection />;

export default Projects;
