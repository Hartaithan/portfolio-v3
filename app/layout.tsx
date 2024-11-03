import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { FC, PropsWithChildren } from "react";
import Navigation from "@/components/nav";
import Background from "@/components/background";
import LayoutTransition from "@/components/layout-transition";

const font = Inter({ subsets: ["latin"], fallback: ["Arial"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Hartaithan.",
    default: "Hartaithan.",
  },
  description: "Hartaithan. Portfolio",
};

const RootLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <html lang="en">
      <body className={font.className}>
        <Navigation />
        <LayoutTransition>{children}</LayoutTransition>
        <Background />
      </body>
    </html>
  );
};

export default RootLayout;
