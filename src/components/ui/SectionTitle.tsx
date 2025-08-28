import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

const SectionTitle = ({
  subtitle,
  title,
  element,
  description,
  sectionTitleClassName,
}: {
  subtitle: string;
  title: string;
  description?: string;
  element?: ReactNode;
  sectionTitleClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-primary border-border-color border-b py-11 md:py-16 xl:py-[90px]",
        sectionTitleClassName,
      )}
    >
      <div className="common-max-width common-x-padding mx-auto flex flex-col items-start justify-between gap-6 min-[1100px]:flex-row min-[1100px]:items-center">
        <div className="flex flex-col items-start gap-2.5">
          <h5 className="text-xl_20-md_18-sm_16 rounded-sm bg-[#333333] px-2 py-1">
            {subtitle}
          </h5>
          <h2 className="text-xl_45-lg_40-md_35-sm_24">{title}</h2>
          {description && (
            <p className="text-secondary-text-color">{description}</p>
          )}
        </div>
        {element}
      </div>
    </div>
  );
};

export default SectionTitle;
