export const firstAttributes = [
  {
    title: "Quantity",
    description:
      "Over 1,000 articles on emerging tech trends and breakthroughs.",
  },
  {
    title: "Variety",
    description:
      "Articles cover fields like AI, robotics, biotechnology, and more.",
  },
  {
    title: "Frequency",
    description: "Fresh content added daily to keep you up to date.",
  },
  {
    title: "Authoritative",
    description:
      "Written by our team of tech experts and industry professionals.",
  },
];

export const secondAttributes = [
  {
    title: "Depth",
    description: "500+ research articles for in-depth understanding.",
  },
  {
    title: "Graphics",
    description: "Visual aids and infographics to enhance comprehension.",
  },
  {
    title: "Trends",
    description: "Explore emerging trends in future technology research.",
  },
  {
    title: "Contributors",
    description: "Contributions from tech researchers and academics.",
  },
];

const AttrComponent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-primary border-border-color h-full rounded-[10px] border p-[30px] md:max-lg:p-[15px]">
      <h5 className="text-xl_20-md_18-sm_16 mb-4">{title}</h5>
      <p className="text-secondary-text-color-2">{description}</p>
    </div>
  );
};

const Item = ({
  title,
  description,
  icon,
  attributes,
}: {
  title: string;
  description: string;
  icon: string;
  attributes: typeof firstAttributes;
}) => {
  return (
    <div className="border-border-color border-b">
      <div className="common-max-width common-x-padding mx-auto flex flex-col md:flex-row">
        {/* right */}
        <div className="border-border-color w-full border-b py-[50px] pr-[30px] md:w-[43%] md:border-r md:border-b-0 md:py-[100px] lg:pr-[50px] xl:py-[130px]">
          <img src={icon} className="mb-[30px] size-12" />

          <h3 className="text-xl_30-md_25-sm_18 mb-2">{title}</h3>
          <p className="text-secondary-text-color-2">{description}</p>
        </div>
        {/* Left */}
        <div className="grid w-full gap-5 max-md:py-5 md:w-[57%] md:grid-cols-2 md:py-[30px] md:pl-[30px] lg:py-[50px] lg:pl-[50px]">
          {attributes.map((attr, i) => (
            <AttrComponent
              key={i}
              title={attr.title}
              description={attr.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Item;
