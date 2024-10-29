import type { Icon, IconProps } from "@/models/icon";
import type { FC } from "react";
import IconHH from "@/icons/hh";
import IconMail from "@/icons/mail";
import IconLink from "@/icons/link";
import IconGithub from "@/icons/github";
import IconTelegram from "@/icons/telegram";
import IconLinkedIn from "@/icons/linked-in";
import IconGooglePlay from "@/icons/google-play";

export const icons: Record<Icon, FC<IconProps>> = {
  hh: IconHH,
  mail: IconMail,
  github: IconGithub,
  telegram: IconTelegram,
  external: IconLink,
  "linked-in": IconLinkedIn,
  "google-play": IconGooglePlay,
};
