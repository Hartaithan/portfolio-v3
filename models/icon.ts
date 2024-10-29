import type { ComponentPropsWithoutRef } from "react";

export type Icon =
  | "hh"
  | "mail"
  | "github"
  | "telegram"
  | "external"
  | "linked-in"
  | "google-play";

export type IconProps = ComponentPropsWithoutRef<"svg">;
