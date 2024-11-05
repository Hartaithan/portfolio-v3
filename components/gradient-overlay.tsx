import { cn } from "@/utils/styles";
import type { ComponentPropsWithoutRef, FC } from "react";

type Props = ComponentPropsWithoutRef<"div">;

const GradientOverlay: FC<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-10",
        "before:blur-3 before:absolute before:left-0 before:top-0 before:h-full before:w-4/12",
        "before:bg-gradient-to-r before:from-neutral-900 before:to-transparent before:filter",
        "after:blur-3 after:absolute after:right-0 after:top-0 after:h-full after:w-4/12",
        "after:bg-gradient-to-l after:from-neutral-900 after:to-transparent after:filter",
        className,
      )}
      {...rest}
    />
  );
};

export default GradientOverlay;
