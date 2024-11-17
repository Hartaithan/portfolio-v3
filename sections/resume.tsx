"use client";

import Resume from "@/components/resume";
import { resume } from "@/constants/resume";
import IconAlphabetCyrillic from "@/icons/alphabet-cyrillic";
import IconAlphabetLatin from "@/icons/alphabet-latin";
import IconDownload from "@/icons/download";
import IconPrint from "@/icons/print";
import type { Language } from "@/models/language";
import { cn } from "@/utils/styles";
import type { ComponentPropsWithoutRef } from "react";
import { useCallback, useMemo, useState, type FC } from "react";

const Button: FC<ComponentPropsWithoutRef<"button">> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <button
      className={cn(
        "flex min-w-0 flex-1 items-center gap-x-2 rounded-md px-2.5 py-2 md:min-w-28 md:flex-none",
        "bg-neutral-800/80 text-sm font-medium text-white hover:bg-neutral-800",
        "transition-all duration-300 ease-in-out",
        className,
      )}
      {...rest}>
      {children}
    </button>
  );
};

const ResumeSection: FC = () => {
  const [language, setLanguage] = useState<Language>("ru");

  const filename = useMemo(
    () => `cv-frontend-stepanov-vladimir-${language}.pdf`,
    [language],
  );

  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = filename;
    link.download = filename;
    link.click();
    link.remove();
  }, [filename]);

  const handlePrint = useCallback(() => {
    const prev = document.title;
    document.title = filename;
    window.print();
    document.title = prev;
  }, [filename]);

  const handleEnglish = useCallback(() => setLanguage("en"), []);

  const handleRussian = useCallback(() => setLanguage("ru"), []);

  return (
    <main
      id="resume"
      className="size-full overflow-auto bg-gray-100 p-2 pb-28 font-sans md:p-4 md:pb-20 print:bg-transparent print:p-0">
      <Resume data={resume[language]} />
      <div className="fixed bottom-4 left-2/4 grid w-11/12 -translate-x-2/4 grid-cols-2 gap-x-2 gap-y-2 sm:w-max md:grid-cols-4 print:hidden">
        <Button onClick={handleDownload}>
          <IconDownload className="size-5 min-w-5" />
          Download
        </Button>
        <Button onClick={handlePrint}>
          <IconPrint className="size-5 min-w-5" />
          Print
        </Button>
        <Button onClick={handleEnglish}>
          <IconAlphabetLatin className="size-5 min-w-5" />
          English
        </Button>
        <Button onClick={handleRussian}>
          <IconAlphabetCyrillic className="size-5 min-w-5" />
          Русский
        </Button>
      </div>
    </main>
  );
};

export default ResumeSection;
