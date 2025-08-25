import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import ArrowSvg from "./ArrowSvg";

const NavigateButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  const { className, children, ...others } = props;
  return (
    <button
      {...others}
      className={cn(
        "text-secondary-text-color-2 border-border-color flex items-center gap-[13px] rounded-xl border px-5 py-[14px] xl:px-6 xl:py-[18px]",
        className,
      )}
    >
      {children} <ArrowSvg />
    </button>
  );
};

export default NavigateButton;
