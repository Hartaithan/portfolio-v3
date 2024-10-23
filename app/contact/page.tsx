import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = { title: "Contact" };

const Contact: FC = () => {
  return (
    <div className="flex size-full items-center justify-center">
      <h1 className="font-bold">Contact</h1>
    </div>
  );
};

export default Contact;
