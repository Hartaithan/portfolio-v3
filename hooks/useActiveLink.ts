import { usePathname } from "next/navigation";

type ActiveLink = (href: string) => boolean;

export const useActiveLink: ActiveLink = (href) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return isActive;
};
