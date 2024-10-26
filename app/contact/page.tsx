import type { Metadata } from "next";
import type { FC } from "react";
import { contacts } from "@/constants/contact";
import Contact from "@/components/contact";

export const metadata: Metadata = { title: "Contact" };

const ContactPage: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-x-12 gap-y-10">
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </div>
  );
};

export default ContactPage;
