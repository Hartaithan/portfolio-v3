import type { ResumeContact, Resume as ResumeData } from "@/models/resume";
import type { ComponentPropsWithoutRef, FC } from "react";

interface Props {
  data: ResumeData;
}

interface ContactsProps {
  data: ResumeContact[];
}

interface SkillsProps extends ComponentPropsWithoutRef<"div"> {
  title?: string;
  data: string[];
}

const Contacts: FC<ContactsProps> = (props) => {
  const { data } = props;
  return (
    <div className="flex flex-col text-right text-sm font-medium">
      {data.map((contact, index) => {
        const { type, value } = contact;
        const key = `${type}-${index}`;
        if (type === "mail") {
          return (
            <a key={key} className="underline" href={`mailto:${value}`}>
              {value}
            </a>
          );
        }
        if (type === "link") {
          return (
            <a key={key} className="underline" href={value}>
              {value}
            </a>
          );
        }
        return <p key={key}>{value}</p>;
      })}
    </div>
  );
};

const Skills: FC<SkillsProps> = (props) => {
  const { className, title, data, ...rest } = props;
  return (
    <div className={className} {...rest}>
      <h1 className="font-medium underline text-sm">
        {title ? title + ":" : "‎"}
      </h1>
      {data.map((skill, idx) => (
        <div key={idx} className="flex items-center">
          <div className="size-1 bg-black mr-2 relative top-2 self-start print:bg-black" />
          <p className="text-sm">{skill}</p>
        </div>
      ))}
    </div>
  );
};

const Resume: FC<Props> = (props) => {
  const { data } = props;
  const { firstName, lastName, contacts, about, skills } = data;
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 shadow-lg print:p-0 print:shadow-none">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-medium">{firstName}</h1>
          <h1 className="text-2xl font-bold">{lastName}</h1>
        </div>
        <Contacts data={contacts} />
      </div>
      <h1 className="text-xl font-semibold mt-3">{about.title}</h1>
      <div className="flex flex-col gap-y-2 mt-2">
        {about.content.map((line, idx) => (
          <p key={idx} className="text-sm indent-4 leading-[normal]">
            {line}
          </p>
        ))}
      </div>
      <h1 className="text-xl font-semibold mt-3">{skills.title}</h1>
      <div className="grid grid-rows-3 grid-flow-col mt-2 gap-3">
        <Skills
          className="row-span-3"
          title="Frontend"
          data={skills.frontend}
        />
        <Skills className="row-span-3" data={skills.moreFrontend} />
        <Skills className="col-span-2" title="Mobile" data={skills.mobile} />
        <Skills
          className="row-span-2 col-span-2"
          title="Backend"
          data={skills.backend}
        />
      </div>
    </div>
  );
};

export default Resume;
