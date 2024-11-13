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

export interface Resume {
  firstName: string;
  lastName: string;
  contacts: ResumeContact[];
  about: ResumeAbout;
  skills: ResumeSkills;
}
