import type { ContactItem } from "@/models/contact";
import IconGithub from "@/icons/github";
import IconGooglePlay from "@/icons/google-play";
import IconHH from "@/icons/hh";
import IconLinkedIn from "@/icons/linked-in";
import IconMail from "@/icons/mail";
import IconTelegram from "@/icons/telegram";

export const contacts: ContactItem[] = [
  {
    id: "mail",
    Icon: IconMail,
    href: "mailto:hartaithan@gmail.com",
  },
  {
    id: "github",
    Icon: IconGithub,
    href: "https://github.com/Hartaithan",
  },
  {
    id: "linked-in",
    Icon: IconLinkedIn,
    href: "https://www.linkedin.com/in/vladimir-stepanov-605b93222/",
  },
  {
    id: "telegram",
    Icon: IconTelegram,
    href: "https://t.me/hartaithan",
  },
  {
    id: "hh",
    Icon: IconHH,
    href: "https://hh.ru/resume/c2d8f9a5ff0959ecb30039ed1f6f7933457473",
  },
  {
    id: "google-play",
    Icon: IconGooglePlay,
    href: "https://play.google.com/store/apps/dev?id=4716065440707220964",
  },
];
