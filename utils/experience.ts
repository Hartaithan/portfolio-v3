import { pluralize } from "@/utils/pluralize";

const getMonths = (from: string) => {
  const [month, year] = from.split(".").map(Number);
  return year * 12 + month;
};

export const getExperienceDuration = (from: string, to: string): string => {
  if (to === "present") return "";

  const duration = getMonths(to) - getMonths(from);
  const years = Math.floor(duration / 12);
  const months = duration % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(pluralize(years, "year"));
  if (months > 0) parts.push(pluralize(years, "month"));

  return parts.join(", ") || "";
};
