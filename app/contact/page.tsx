import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = { title: "Contact" };

const Contact: FC = () => {
  return <h1 className="font-bold">Contact</h1>;
};

export default Contact;
