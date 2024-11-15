import type {
  ResumeContact,
  Resume as ResumeData,
  ResumeEducationItem,
  ResumeExperienceItem,
} from "@/models/resume";
import { cn } from "@/utils/styles";
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

interface ExperienceProps {
  data: ResumeExperienceItem;
}

interface EducationProps {
  data: ResumeEducationItem;
}

const Heading: FC<ComponentPropsWithoutRef<"h1">> = (props) => {
  const { className, children } = props;
  return (
    <h1
      className={cn("mt-3 text-lg font-semibold leading-[normal]", className)}>
      {children}
    </h1>
  );
};

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
      <h1 className="text-sm font-medium underline">
        {title ? title + ":" : "‎"}
      </h1>
      {data.map((skill, idx) => (
        <div key={idx} className="flex items-center">
          <div className="relative top-2 mr-2 size-1 self-start bg-black print:bg-black" />
          <p className="text-xs">{skill}</p>
        </div>
      ))}
    </div>
  );
};

const Experience: FC<ExperienceProps> = (props) => {
  const { data } = props;
  const { date, duration, title, description, position, tags } = data;
  return (
    <div className="flex">
      <div className="flex min-w-48 max-w-48 flex-col text-sm text-neutral-600">
        <p>{date}</p>
        {duration.length > 0 && <p>({duration})</p>}
      </div>
      <div className="flex flex-col text-sm">
        <p className="font-semibold">{title}</p>
        <div className="flex items-center text-neutral-600">
          <p className="underline">{position}</p>
          <p className="ml-1 text-xs leading-[normal]">({tags.join(", ")})</p>
        </div>
        <p className="mt-0.5 leading-[normal] text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  );
};

const Education: FC<EducationProps> = (props) => {
  const { data } = props;
  const { date, title, specialty } = data;
  return (
    <div className="flex">
      <div className="flex min-w-48 max-w-48 flex-col text-sm text-neutral-600">
        <p>{date}</p>
      </div>
      <div className="flex flex-col text-sm">
        <p className="font-semibold">{title}</p>
        <p className="mt-0.5 leading-[normal] text-neutral-600">{specialty}</p>
      </div>
    </div>
  );
};

const Resume: FC<Props> = (props) => {
  const { data } = props;
  const {
    firstName,
    lastName,
    contacts,
    about,
    skills,
    experience,
    education,
  } = data;
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 shadow-lg print:p-0 print:shadow-none">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-medium">{firstName}</h1>
          <h1 className="text-2xl font-bold">{lastName}</h1>
        </div>
        <Contacts data={contacts} />
      </div>
      <Heading>{about.title}</Heading>
      <div className="mt-2 flex flex-col gap-y-2">
        {about.content.map((line, idx) => (
          <p key={idx} className="indent-4 text-sm leading-[normal]">
            {line}
          </p>
        ))}
      </div>
      <Heading>{skills.title}</Heading>
      <div className="mt-2 grid grid-flow-col grid-rows-2 gap-x-3">
        <Skills
          className="row-span-3"
          title="Frontend"
          data={skills.frontend}
        />
        <Skills className="row-span-3" data={skills.moreFrontend} />
        <Skills title="Mobile" data={skills.mobile} />
        <Skills title="Backend" data={skills.backend} />
      </div>
      <Heading>{experience.title}</Heading>
      <div className="mt-2 flex flex-col gap-y-3">
        {experience.content.map((data, idx) => (
          <Experience key={idx} data={data} />
        ))}
      </div>
      <Heading>{education.title}</Heading>
      <div className="mt-2 flex flex-col gap-y-3">
        {education.content.map((data, idx) => (
          <Education key={idx} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Resume;
