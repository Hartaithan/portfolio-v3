import { months } from "@/constants/dates";
import { pluralize } from "@/utils/pluralize";

const getMonths = (value: string) => {
  let year: number;
  let month: number;
  if (value === "present") {
    const now = new Date();
    [month, year] = [now.getMonth() + 1, now.getFullYear()];
  } else {
    [month, year] = value.split(".").map(Number);
  }
  return year * 12 + month;
};

export const getExperienceDuration = (from: string, to: string): string => {
  const duration = getMonths(to) - getMonths(from);
  const years = Math.floor(duration / 12);
  const months = duration % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(pluralize(years, "year"));
  if (months > 0) parts.push(pluralize(years, "month"));

  return parts.join(", ") || "";
};

export const formatExperienceDate = (value: string) => {
  if (value === "present") return value;
  const [month, year] = value.split(".").map(Number);
  return `${months[month]} ${year}`;
};
