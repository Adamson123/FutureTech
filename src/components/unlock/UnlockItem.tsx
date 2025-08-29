import sarah from "/assets/unlock/sarah.png";
import NavigateButton from "../ui/NavigateButton";

import EyeSvg from "../ui/EyeSvg";
import profile1 from "/assets/hero/profile_1.png";
import raj from "/assets/realwords/raj.png";
import john from "/assets/explore/john.png";

type LeftContainerProps = {
  data: {
    icon: string;
    title: string;
    description: string;
  };
};

const LeftContainer = ({
  data: { icon, title, description },
}: LeftContainerProps) => {
  return (
    <div className="border-border-color flex w-full flex-col items-start border-b py-[50px] pr-[30px] md:w-[43%] md:border-r md:border-b-0 md:py-[100px] lg:pr-[50px] xl:py-[130px]">
      <img src={icon} className="mb-[30px] size-12" />

      <h3 className="text-xl_30-md_25-sm_18 mb-2">{title}</h3>
      <p className="text-secondary-text-color-2 mb-8 max-md:mb-5">
        {description}
      </p>
      <NavigateButton className="bg-primary mb-8 w-full max-w-[450px] justify-center max-md:mb-5">
        Download {title} Now
      </NavigateButton>
      <div className="bg-primary border-border-color flex items-center gap-9 rounded-xl border p-5 md:max-lg:flex-col md:max-lg:items-start md:max-lg:gap-5">
        {/* Left */}
        <div>
          <p className="text-secondary-text-color-2"> Downloaded By</p>
          <p className="text-xl_20-md_18-sm_16">10k + Users</p>
        </div>
        {/* Right */}
        <div className="bg-background items-cente flex -space-x-2 rounded-[9px] p-2">
          {[sarah, profile1, raj, john].map((image, i) => (
            <img
              className="bg-border-color size-9 rounded-full border border-[#666666] object-cover"
              src={image}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

type RightContainerProps = {
  data: {
    image: string;
    title: string;
    description: string;
    type: string;
  };
};

const RightContainer = ({
  data: { title, image, description, type },
}: RightContainerProps) => {
  return (
    <div className="flex w-full flex-col gap-5 max-md:py-5 md:w-[57%] md:py-[30px] md:pl-[30px] lg:py-[50px] lg:pl-[50px]">
      {/* First */}
      <div className="flex justify-between gap-6 max-lg:flex-col">
        <h5 className="text-xl_24-md_20-sm_18 min-w-[150px]">{title}</h5>
        <p className="text-secondary-text-color-2">{description}</p>
      </div>
      {/* Second */}
      <img
        className="h-[270px] rounded-xl object-cover max-lg:h-[200px]"
        src={image}
      />
      {/* Third */}
      <div className="flex w-full gap-5 max-lg:flex-col">
        {/* Right */}
        <div className="bg-primary border-border-color rounded-xl border p-6">
          <p className="text-secondary-text-color-2 mb-1.5">Total {type}</p>
          <p>Over 100 {type}</p>
        </div>
        {/* Left */}
        <div className="bg-primary border-border-color flex flex-1 justify-between gap-1 rounded-xl border p-6">
          <div>
            <p className="text-secondary-text-color-2 mb-1.5">Total {type}</p>
            <p>Over 100 {type}</p>
          </div>
          <NavigateButton
            className="bg-background max-h-[50px]"
            icon={<EyeSvg className="h-3.5 w-4" />}
          >
            Preview
          </NavigateButton>
        </div>
      </div>
      {/* Fourth */}
      <div className="bg-primary border-border-color flex flex-1 rounded-xl border p-6">
        <div>
          <p className="text-secondary-text-color-2 mb-1.5">
            Average Author Expertise
          </p>
          <p>
            {type} are authored by renowned experts with an average of 15 years
            of experience
          </p>
        </div>
      </div>
    </div>
  );
};

const Item = ({
  leftContainerData,
  rightSectionData,
}: {
  leftContainerData: LeftContainerProps["data"];
  rightSectionData: RightContainerProps["data"];
}) => {
  return (
    <div className="border-border-color border-b">
      <div className="common-max-width common-x-padding mx-auto flex flex-col md:flex-row">
        {/* left */}
        <LeftContainer data={leftContainerData} />
        {/* right */}
        <RightContainer data={rightSectionData} />
      </div>
    </div>
  );
};

export default Item;
