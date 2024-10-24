import type { ComponentPropsWithoutRef, FC } from "react";
import type { IconProps } from "@/models/icon";

export interface ContactItem extends ComponentPropsWithoutRef<"a"> {
  Icon: FC<IconProps>;
}
