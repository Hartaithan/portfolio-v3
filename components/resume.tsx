import type { ResumeContact, Resume as ResumeData } from "@/models/resume";
import type { FC } from "react";

interface Props {
  data: ResumeData;
}

interface ContactsProps {
  data: ResumeContact[];
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

const Resume: FC<Props> = (props) => {
  const { data } = props;
  return (
    <div className="mx-auto max-w-3xl bg-white p-8 shadow-lg print:p-0 print:shadow-none">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-medium">{data.firstName}</h1>
          <h1 className="text-2xl font-bold">{data.lastName}</h1>
        </div>
        <Contacts data={data.contacts} />
      </div>
    </div>
  );
};

export default Resume;
