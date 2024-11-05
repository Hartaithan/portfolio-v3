import Button from "@/components/button";
import Heading from "@/components/heading";
import Link from "next/link";
import type { FC } from "react";

const HomeSection: FC = () => {
  return (
    <div className="flex size-full w-9/12 flex-col justify-center">
      <Heading transition={{ delay: 0.4 }}>Hello</Heading>
      <Heading transition={{ delay: 0.2 }}>I&apos;m Hartaithan.</Heading>
      <Heading transition={{ delay: 0 }}>Frontend Developer</Heading>
      <div className="mt-5 flex gap-x-5">
        <Button as={Link} href="/projects" transition={{ delay: 0.6 }}>
          My Projects
        </Button>
        <Button transition={{ delay: 0.8 }}>Open Resume</Button>
      </div>
    </div>
  );
};

export default HomeSection;
