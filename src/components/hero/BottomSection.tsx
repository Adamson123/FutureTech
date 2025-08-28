import { cn } from "../../lib/cn";
import updates from "/assets/hero/updates.svg";
import expert from "/assets/hero/experts.svg";
import global from "/assets/hero/global.svg";
import ArrowButton from "../ui/ArrowButton";

type ItemProps = {
  title: string;
  subtitle: string;
  description: string;
  iconSrc: string;
  className?: string;
};

const Item = ({
  title,
  subtitle,
  description,
  iconSrc,
  className = "",
}: ItemProps) => {
  return (
    <div className={cn(`border-border-color w-full`, className)}>
      {/* icon */}

      <img src={iconSrc} alt="" className="mb-6 size-10 object-contain" />

      {/* Text + Icon */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h4 className="text-xl_20-md_18-sm_16 mb-1">{title}</h4>
          <p className="text-secondary-text-color">{subtitle}</p>
        </div>
        <ArrowButton />
      </div>

      {/* Text */}

      <p className="text-secondary-text-color text-xl_20-md_18-sm_16">
        {description}
      </p>
    </div>
  );
};

const BottomSection = () => {
  return (
    <div className="border-border-color common-x-padding border-b md:px-0">
      <div className="common-max-width mx-auto grid md:grid-cols-2 lg:grid-cols-3">
        <Item
          iconSrc={updates}
          title="Latest News Updates"
          subtitle="Stay Current"
          description="Over 1,000 articles published monthly"
          className="lg:common-l-padding md:common-l-padding border-b py-[25px] md:border-r md:border-b-0 md:p-[22px] lg:p-[50px]"
        />
        <Item
          iconSrc={expert}
          title="Expert Contributors"
          subtitle="Trusted Insights"
          description="50+ renowned AI experts on our team"
          className="md:common-l-padding border-b py-[25px] md:border-r md:border-b-0 md:p-[22px] lg:p-[50px]"
        />
        <Item
          iconSrc={global}
          title="Global Readership"
          subtitle="Worldwide Impact"
          description="2 million monthly readers"
          className="md:common-l-padding py-[25px] md:col-span-2 md:border-t md:p-[22px] lg:col-span-1 lg:border-t-0 lg:p-[50px]"
        />
      </div>
    </div>
  );
};

export default BottomSection;
