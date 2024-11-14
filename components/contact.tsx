import Icon from "@/components/icon";
import type { ContactItem } from "@/models/contact";
import { cn } from "@/utils/styles";
import type { FC } from "react";

const Contact: FC<ContactItem> = (props) => {
  const { id, href, icon, ...rest } = props;
  return (
    <a
      key={id}
      className={cn(
        "group flex size-28 items-center justify-center rounded-full bg-neutral-900 md:size-36 xs:size-32",
        "before:absolute before:-z-10 before:size-24 before:opacity-75 md:before:size-32 xs:before:size-28",
        "before:rounded-full before:border-2 before:border-white",
        "before:transition-all before:duration-500 before:ease-out",
        "hover:bg-white hover:before:scale-150 hover:before:opacity-0",
      )}
      href={href}
      target="_blank"
      {...rest}>
      <Icon
        icon={icon}
        className="size-14 fill-white transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:fill-black md:size-20 xs:size-16"
      />
    </a>
  );
};

export default Contact;
