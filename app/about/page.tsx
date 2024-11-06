import ExperienceSection from "@/sections/experience";
import SkillsSection from "@/sections/skills";
import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = { title: "About" };

const About: FC = () => {
  return (
    <div className="grid w-11/12 grid-cols-1 gap-4 sm:w-10/12 md:w-9/12 lg:grid-cols-2 2xl:w-7/12">
      <div className="col-span-1 rounded-lg bg-neutral-900 px-5 py-4 md:px-6 md:py-5 lg:col-span-2">
        <h1 className="text-base font-semibold md:text-xl">About Me</h1>
        <p className="mt-2 text-sm md:text-base 2xl:text-lg">
          As a frontend developer, I am constantly striving to improve my skills
          and create high-quality, user-friendly products. Since 2020, I have
          been honing my abilities in crafting responsive and engaging user
          interfaces.
        </p>
        <p className="mt-2 text-sm md:text-base 2xl:text-lg">
          My primary specialization is React, but I also have experience with
          React Native, Vue, and Angular, allowing me to adapt to various
          projects and challenges. I have worked on numerous projects, including
          building corporate websites, user tracking scripts, admin panels, and
          mobile applications.
        </p>
      </div>
      <ExperienceSection />
      <SkillsSection />
    </div>
  );
};

export default About;
