import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

const EyeSvg = (props: HTMLAttributes<SVGSVGElement>) => {
  const { className, ...others } = props;
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...others}
    >
      <path
        d="M18.0023 6.52277C18.2153 6.79073 18.3332 7.13887 18.3332 7.49985C18.3332 7.86083 18.2153 8.20897 18.0023 8.47694C16.6536 10.1249 13.5836 13.3332 9.99984 13.3332C6.4161 13.3332 3.34616 10.1249 1.99744 8.47694C1.78442 8.20897 1.6665 7.86083 1.6665 7.49985C1.6665 7.13887 1.78442 6.79073 1.99744 6.52277C3.34616 4.87484 6.4161 1.6665 9.99984 1.6665C13.5836 1.6665 16.6536 4.87484 18.0023 6.52277Z"
        stroke="#FFD11A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0003 10.0923C11.4191 10.0923 12.5693 8.93156 12.5693 7.49973C12.5693 6.0679 11.4191 4.90717 10.0003 4.90717C8.58145 4.90717 7.43127 6.0679 7.43127 7.49973C7.43127 8.93156 8.58145 10.0923 10.0003 10.0923Z"
        stroke="#FFD11A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeSvg;
