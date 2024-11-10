import Background from "@/components/background";
import LayoutTransition from "@/components/layout-transition";
import Navigation from "@/components/nav";
import type { FC, PropsWithChildren } from "react";

const NavigationLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <>
      <Navigation />
      <LayoutTransition>{children}</LayoutTransition>
      <Background />
    </>
  );
};

export default NavigationLayout;
