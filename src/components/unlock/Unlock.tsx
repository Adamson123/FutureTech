import SectionTitle from "../ui/SectionTitle";
import variety from "/assets/unlock/variety.png";
import topics from "/assets/unlock/topics.png";
import Item from "./UnlockItem";
import ebooks from "/assets/unlock/ebooks.svg";
import whitepaper from "/assets/unlock/whitepaper.svg";

const Unlock = () => {
  return (
    <section>
      <SectionTitle
        subtitle="Your Gateway to In-Depth Information"
        title="Unlock Valuable Knowledge with FutureTech's Resources"
      />
      <div className="">
        <Item
          leftContainerData={{
            icon: ebooks,
            title: "Ebooks",
            description:
              "Explore our collection of ebooks covering a wide spectrum of future technology topics.",
          }}
          rightSectionData={{
            title: "Variety of Topics",
            description:
              "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
            image: variety,
            type: "ebooks",
          }}
        />
        <Item
          leftContainerData={{
            icon: whitepaper,
            title: "Whitepapers",
            description:
              "Dive into comprehensive reports and analyses with our collection of whitepapers. ",
          }}
          rightSectionData={{
            title: "In-Depth Analysis",
            description:
              "Our whitepapers provide detailed insights, backed by research and expert opinions, to help you stay informed about the latest advancements.",
            image: topics,
            type: "whitepaper",
          }}
        />
      </div>
    </section>
  );
};

export default Unlock;
