import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = { title: "Contact" };

const Contact: FC = () => {
  return (
    <div className="size-full flex justify-center items-center">
      <h1 className="font-bold">Contact</h1>
    </div>
  );
};

export default Contact;
