import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface ActiveLink {
  isActive: boolean;
  path: string;
  handleClick: () => void;
}

// path will not change until the next page is fully loaded
// which causes the animation of the active link to start with a delay

export const useActiveLink = (href: string): ActiveLink => {
  const path = usePathname();
  const [clicked, setClicked] = useState(false);

  // to solve this you need to change the clicked state immediately after clicking on the link
  const handleClick = useCallback(() => setClicked(true), []);

  // and reset the state back after the page change
  useEffect(() => setClicked(false), [path]);

  return { isActive: clicked || path === href, path, handleClick };
};
