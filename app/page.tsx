import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = { title: "Home | Hartaithan." };

const Home: FC = () => {
  return (
    <div className="size-full flex justify-center items-center">
      <h1 className="font-bold">Home</h1>
    </div>
  );
};

export default Home;
