import type { ContactItem } from "@/models/contact";
import { cn } from "@/utils/styles";
import type { FC } from "react";

const Contact: FC<ContactItem> = (props) => {
  const { id, href, Icon, ...rest } = props;
  return (
    <a
      key={id}
      className={cn(
        "group flex size-36 items-center justify-center rounded-full bg-neutral-900",
        "before:absolute before:-z-10 before:size-32 before:opacity-75",
        "before:rounded-full before:border-2 before:border-white",
        "before:transition-all before:duration-500 before:ease-out",
        "hover:bg-white hover:before:scale-150 hover:before:opacity-0",
      )}
      href={href}
      target="_blank"
      {...rest}>
      <Icon className="size-20 fill-white transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:fill-black" />
    </a>
  );
};

export default Contact;
