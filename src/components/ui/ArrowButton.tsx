import type { HTMLAttributes } from "react";
import ArrowSvg from "./ArrowSvg";
import { cn } from "../../lib/cn";

const ArrowButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  const { className, ...others } = props;
  return (
    <button
      className={cn(
        "bg-secondary flex max-h-9 min-h-9 min-w-9 cursor-pointer items-center justify-center rounded-full",
        className,
      )}
      {...others}
    >
      <ArrowSvg className={"[&>path]:fill-background"} />
    </button>
  );
};

export default ArrowButton;
