import IconGithub from "@/icons/github";
import IconGooglePlay from "@/icons/google-play";
import IconHH from "@/icons/hh";
import IconLink from "@/icons/link";
import IconLinkedIn from "@/icons/linked-in";
import IconMail from "@/icons/mail";
import IconTelegram from "@/icons/telegram";
import type { Icon, IconProps } from "@/models/icon";
import type { FC } from "react";

export const icons: Record<Icon, FC<IconProps>> = {
  hh: IconHH,
  mail: IconMail,
  github: IconGithub,
  telegram: IconTelegram,
  external: IconLink,
  "linked-in": IconLinkedIn,
  "google-play": IconGooglePlay,
};
