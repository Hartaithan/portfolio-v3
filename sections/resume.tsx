"use client";

import Resume from "@/components/resume";
import { resume } from "@/constants/resume";
import type { Language } from "@/models/language";
import { useCallback, useState, type FC } from "react";

const ResumeSection: FC = () => {
  const [language, setLanguage] = useState<Language>("ru");

  const handleDownload = useCallback(() => window.print(), []);

  const handleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "ru" : "en"));
  }, []);

  return (
    <main
      id="resume"
      className="size-full overflow-auto bg-gray-100 p-2 font-sans md:p-4 print:bg-transparent print:p-0">
      <Resume data={resume[language]} />
      <div className="fixed bottom-8 right-8 flex gap-x-2 print:hidden">
        <button
          className="rounded bg-neutral-800 px-2 py-1 text-sm text-white"
          onClick={handleDownload}>
          Download
        </button>
        <button
          className="rounded bg-neutral-800 px-2 py-1 text-sm text-white"
          onClick={handleLanguage}>
          Language
        </button>
      </div>
    </main>
  );
};

export default ResumeSection;
