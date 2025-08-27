import SectionTitle from "../ui/SectionTitle";
import Item, { firstAttributes, secondAttributes } from "./Item";
import future from "/assets/futuretech/future.svg";
import research from "/assets/futuretech/research.svg";

const FutureTech = () => {
  return (
    <section>
      <SectionTitle
        subtitle="Unlock the Power of"
        title="FutureTech Features"
      />
      <div className="">
        <Item
          attributes={firstAttributes}
          icon={future}
          title="Future Technology Blog"
          description=" Stay informed with our blog section dedicated to future technology."
        />
        <Item
          attributes={secondAttributes}
          icon={research}
          title="Research Insights Blogs"
          description="Dive deep into future technology concepts with our research section."
        />
      </div>
    </section>
  );
};

export default FutureTech;
