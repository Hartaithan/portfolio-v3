export type ProjectIcon = "google-play" | "external" | "github";

export interface ProjectLink {
  icon: ProjectIcon;
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
