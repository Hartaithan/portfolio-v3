import type { ComponentPropsWithoutRef } from "react";
import type { Icon } from "@/models/icon";

export interface ContactItem extends ComponentPropsWithoutRef<"a"> {
  icon: Icon;
}
