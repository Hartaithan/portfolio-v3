import type { FC } from "react";
import type { IconProps } from "@/models/icon";

const IconArrow: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
  </svg>
);

export default IconArrow;
