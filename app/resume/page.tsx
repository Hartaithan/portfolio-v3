import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = { title: "Resume" };

const ResumePage: FC = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <pre>ResumePage</pre>
    </div>
  );
};

export default ResumePage;
