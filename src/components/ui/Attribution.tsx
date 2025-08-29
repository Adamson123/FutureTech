import { cn } from "../../lib/cn";

const Attribution = ({ className }: { className?: string }) => {
  return (
    <p
      className={cn(
        "text-secondary-text-color-3 pb-5 text-center text-sm",
        className,
      )}
    >
      Design by{" "}
      <a
        href="https://www.figma.com/@praha"
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary underline"
      >
        Praha
      </a>{" "}
      • Coded by{" "}
      <a
        href="https://damsfolio.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        me
      </a>
    </p>
  );
};

export default Attribution;
