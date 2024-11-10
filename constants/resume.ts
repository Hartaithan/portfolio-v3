import type { Language } from "@/models/language";
import type { Resume } from "@/models/resume";

export const ru: Resume = {
  firstName: "Владимир",
  lastName: "Степанов",
  contacts: [
    { value: "stepanov.vladimir.in.re@gmail.com", type: "mail" },
    { value: "https://hartaithan.github.io", type: "link" },
    { value: "https://t.me/hartaithan", type: "link" },
    { value: "г. Якутск", type: "text" },
  ],
};

export const en: Resume = {
  firstName: "Vladimir",
  lastName: "Stepanov",
  contacts: [
    { value: "stepanov.vladimir.in.re@gmail.com", type: "mail" },
    { value: "https://hartaithan.github.io", type: "link" },
    { value: "https://t.me/hartaithan", type: "link" },
    { value: "Russia, Yakutsk", type: "text" },
  ],
};

export const resume: Record<Language, Resume> = { ru, en };
