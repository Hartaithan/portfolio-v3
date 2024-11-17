import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { FC, PropsWithChildren } from "react";

const font = Inter({ subsets: ["latin"], fallback: ["Arial"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Hartaithan.",
    default: "Hartaithan.",
  },
  description: "Hartaithan. Portfolio",
  applicationName: "Hartaithan. Portfolio",
  twitter: { card: "summary_large_image" },
  keywords: ["portfolio", "frontend", "frontend developer"],
  robots: "all",
};

const RootLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
