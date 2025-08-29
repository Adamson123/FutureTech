import ArrowButton from "./ui/ArrowButton";
import SectionTitle from "./ui/SectionTitle";

const Item = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="border-border-color bg-primary rounded-[10px] border p-9">
      <div className="mb-5 flex justify-between max-lg:mb-2">
        <h4 className="text-xl_20-md_18-sm_16">{title}</h4>
        <ArrowButton />
      </div>
      <p className="text-secondary-text-color-2">{description}</p>
    </div>
  );
};

const BePart = () => {
  return (
    <section className="bg-primary pb-11 md:pb-16 xl:pb-[90px]">
      <SectionTitle
        title="Be Part of the Future Tech Revolution"
        subtitle="Learn, Connect, and Innovate"
        description="Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers."
        sectionTitleClassName="border-b-0"
      />
      <div className="common-max-width common-x-padding mx-auto">
        <div className="bg-background mx-auto grid grid-cols-3 gap-5 rounded-[10px] p-5 max-md:grid-cols-1 md:max-lg:grid-cols-2 [&>div:nth-child(3)]:md:max-lg:col-span-2">
          <Item
            title="Resource Access"
            description="Visitors can access a wide range of resources, including ebooks, whitepapers, reports."
          />
          <Item
            title="Community Forum"
            description="Join our active community forum to discuss industry trends and collaborate with peers."
          />
          <Item
            title="Tech Events"
            description="Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge."
          />
        </div>
      </div>
    </section>
  );
};

export default BePart;
