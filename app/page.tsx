import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = { title: "Home" };

const Home: FC = () => {
  return (
    <div className="size-full flex justify-center items-center">
      <h1 className="font-bold">Hello World!</h1>
    </div>
  );
};

export default Home;
