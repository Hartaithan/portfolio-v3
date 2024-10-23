import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = { title: "About" };

const About: FC = () => {
  return (
    <div className="size-full flex justify-center items-center">
      <h1 className="font-bold">About</h1>
    </div>
  );
};

export default About;
