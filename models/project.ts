import type { Icon } from "@/models/icon";

export interface ProjectLink {
  icon: Icon;
  href: string;
}

export interface ProjectItem {
  id: string;
  label: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  links: ProjectLink[];
}
