"use client";

import { useContext, useRef } from "react";
import type { FC, PropsWithChildren } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const FrozenRouter: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context);
  return (
    <LayoutRouterContext.Provider value={frozen.current}>
      {children}
    </LayoutRouterContext.Provider>
  );
};

export default FrozenRouter;
