export interface ResumeContact {
  value: string;
  type: "mail" | "link" | "text";
}

export interface ResumeAbout {
  title: string;
  content: string[];
}

export interface ResumeSkills {
  title: string;
  frontend: string[];
  moreFrontend: string[];
  mobile: string[];
  backend: string[];
}

export interface ResumeExperienceItem {
  title: string;
  description: string;
  location: string;
  position: string;
  tags: string[];
  date: string;
  duration: string;
}

export interface ResumeExperience {
  title: string;
  content: ResumeExperienceItem[];
}

export interface Resume {
  firstName: string;
  lastName: string;
  contacts: ResumeContact[];
  about: ResumeAbout;
  skills: ResumeSkills;
  experience: ResumeExperience;
}
