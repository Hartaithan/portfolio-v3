import Button from "@/components/button";
import Heading from "@/components/heading";
import type { Metadata } from "next";
import Link from "next/link";
import type { FC } from "react";

export const metadata: Metadata = { title: "Home" };

const Home: FC = () => {
  return (
    <div className="flex size-full w-10/12 flex-col justify-center overflow-hidden 2xl:w-9/12">
      <Heading transition={{ delay: 0.4 }}>Hello,</Heading>
      <Heading transition={{ delay: 0.2 }}>I&apos;m Hartaithan.</Heading>
      <Heading transition={{ delay: 0 }}>Frontend Developer</Heading>
      <div className="mt-3 flex gap-x-5 md:mt-5">
        <Button as={Link} href="/projects" transition={{ delay: 0.6 }}>
          My Projects
        </Button>
        <Button
          as={Link}
          href="/resume"
          target="_blank"
          transition={{ delay: 0.8 }}>
          Open Resume
        </Button>
      </div>
    </div>
  );
};

export default Home;
