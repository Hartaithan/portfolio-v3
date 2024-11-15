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
      className={cn(
        "mt-3 text-base font-semibold leading-[normal] sm:text-lg sm:leading-[normal]",
        className,
      )}>
      {children}
    </h1>
  );
};

const Contacts: FC<ContactsProps> = (props) => {
  const { data } = props;
  return (
    <div className="mt-2 flex flex-col self-start text-left text-sm font-medium xs:mt-0 xs:self-auto xs:text-right">
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
      {title ? (
        <h1 className="text-sm font-medium underline">{title + ":"}</h1>
      ) : (
        <h1 className="hidden text-sm font-medium underline sm:block">‎</h1>
      )}
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
    <div className="flex flex-col sm:flex-row">
      <div className="flex min-w-48 max-w-48 flex-col text-xs text-neutral-600 sm:text-sm">
        <p>{date}</p>
        {duration.length > 0 && <p>({duration})</p>}
      </div>
      <div className="mt-2 flex flex-col text-sm sm:mt-0">
        <p className="font-semibold">{title}</p>
        <div className="flex flex-col items-start text-neutral-600 sm:flex-row sm:items-center">
          <p className="underline">{position}</p>
          <p className="ml-0 text-xs leading-[normal] sm:ml-1">
            ({tags.join(", ")})
          </p>
        </div>
        <p className="mt-1 text-xs leading-[normal] text-neutral-600 sm:mt-0.5 sm:text-sm sm:leading-[normal]">
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
    <div className="flex flex-col sm:flex-row">
      <div className="flex min-w-48 max-w-48 flex-col text-sm text-neutral-600">
        <p>{date}</p>
      </div>
      <div className="mt-1 flex flex-col text-sm sm:mt-0">
        <p className="font-semibold">{title}</p>
        <p className="mt-1 text-xs leading-[normal] text-neutral-600 sm:mt-0.5 sm:text-sm sm:leading-[normal]">
          {specialty}
        </p>
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
    <div className="mx-auto max-w-3xl bg-white px-4 py-5 shadow-lg md:px-8 md:py-8 print:p-0 print:shadow-none">
      <div className="flex flex-col items-start justify-between xs:flex-row xs:items-center">
        <div>
          <h1 className="text-lg font-medium leading-[normal] sm:text-xl">
            {firstName}
          </h1>
          <h1 className="text-xl font-bold leading-[normal] sm:text-2xl">
            {lastName}
          </h1>
        </div>
        <Contacts data={contacts} />
      </div>
      <Heading>{about.title}</Heading>
      <div className="mt-3 flex flex-col gap-y-2 sm:mt-2">
        {about.content.map((line, idx) => (
          <p
            key={idx}
            className="indent-2 text-sm leading-[normal] sm:indent-4">
            {line}
          </p>
        ))}
      </div>
      <Heading>{skills.title}</Heading>
      <div className="mt-3 grid grid-flow-dense grid-rows-2 gap-x-3 gap-y-3 sm:mt-2 sm:grid-flow-col sm:gap-y-0">
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
      <div className="mt-3 flex flex-col gap-y-4 sm:mt-2 sm:gap-y-3">
        {experience.content.map((data, idx) => (
          <Experience key={idx} data={data} />
        ))}
      </div>
      <Heading>{education.title}</Heading>
      <div className="mt-3 flex flex-col gap-y-4 sm:mt-2 sm:gap-y-3">
        {education.content.map((data, idx) => (
          <Education key={idx} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Resume;
