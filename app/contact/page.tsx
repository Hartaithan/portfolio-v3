import Contact from "@/components/contact";
import { contacts } from "@/constants/contact";
import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = { title: "Contact" };

const ContactPage: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:gap-x-12 md:gap-y-10 lg:grid-cols-3">
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </div>
  );
};

export default ContactPage;
