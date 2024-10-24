import type { ContactItem } from "@/models/contact";
import type { FC } from "react";

const Contact: FC<ContactItem> = (props) => {
  const { id, href, Icon, ...rest } = props;
  return (
    <a
      key={id}
      className="flex size-36 items-center justify-center rounded-full bg-neutral-900"
      href={href}
      target="_blank"
      {...rest}>
      <Icon className="size-20" />
    </a>
  );
};

export default Contact;
