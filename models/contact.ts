import type { Icon } from "@/models/icon";
import type { ComponentPropsWithoutRef } from "react";

export interface ContactItem extends ComponentPropsWithoutRef<"a"> {
  icon: Icon;
}
