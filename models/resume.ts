export interface ResumeContact {
  value: string;
  type: "mail" | "link" | "text";
}

export interface Resume {
  firstName: string;
  lastName: string;
  contacts: ResumeContact[];
}
