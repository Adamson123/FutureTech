import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import ArrowSvg from "./ArrowSvg";

const NavigateButton = (
  props: HTMLAttributes<HTMLButtonElement> & { icon?: ReactNode },
) => {
  const { className, children, icon, ...others } = props;
  return (
    <button
      {...others}
      className={cn(
        "text-secondary-text-color-2 border-border-color hover:bg-secondary hover:[&>svg]:[&>path]:fill-background hover:text-background flex cursor-pointer items-center gap-[13px] rounded-xl border px-5 py-[14px] transition-colors duration-400 xl:px-6",
        className,
      )}
    >
      {children} {icon || <ArrowSvg className="transition-all duration-400" />}
    </button>
  );
};

export default NavigateButton;
