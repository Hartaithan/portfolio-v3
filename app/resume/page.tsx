import ResumeSection from "@/sections/resume";
import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = { title: "Resume" };

const ResumePage: FC = () => <ResumeSection />;

export default ResumePage;
