import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = { title: "About" };

const About: FC = () => {
  return <h1 className="font-bold">About</h1>;
};

export default About;
