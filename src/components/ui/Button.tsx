import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

const Button = (props: HTMLAttributes<HTMLButtonElement>) => {
  const { className, ...others } = props;
  return (
    <button
      {...others}
      className={cn(
        "bg-secondary text-background hover:bg-secondary/65 rounded-[10px] px-4 py-2.5 transition-colors duration-300 md:px-4",
        className,
      )}
    />
  );
};

export default Button;
