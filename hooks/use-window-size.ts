"use client";

import { useWindowEvent } from "@/hooks/use-window-event";
import { debounce } from "@/utils/debounce";
import { useCallback, useEffect, useState } from "react";

const eventListerOptions = { passive: true };

const setSize = debounce((setValue) => {
  const width = window.innerWidth || null;
  const height = window.innerHeight || null;
  setValue({ width, height });
}, 500);

export const useWindowSize = (defaultValue: number | null = null) => {
  const [windowSize, setWindowSize] = useState({
    width: defaultValue,
    height: defaultValue,
  });

  const handleResize = useCallback(() => setSize(setWindowSize), []);

  useWindowEvent("resize", handleResize, eventListerOptions);
  useWindowEvent("orientationchange", handleResize, eventListerOptions);

  useEffect(handleResize, []); // eslint-disable-line react-hooks/exhaustive-deps

  return windowSize;
};
