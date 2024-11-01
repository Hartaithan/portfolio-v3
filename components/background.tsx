"use client";

import type { FC } from "react";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/scene"), { ssr: false });

const Background: FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50">
      <Scene />
    </div>
  );
};

export default Background;
