import { cn } from "../../lib/cn";
import NavigateButton from "../ui/NavigateButton";
import SectionTitle from "../ui/SectionTitle";
import Blog from "./Blog";

const Explore = () => {
  return (
    <section>
      <SectionTitle
        subtitle="A Knowledge Treasure Trove"
        title="Explore FutureTech's In-Depth Blog Posts"
        element={
          <NavigateButton className="bg-background justify-center max-[600px]:w-full">
            View All Blogs
          </NavigateButton>
        }
      />
      {/* Top */}
      <div
        style={{
          scrollbarWidth: "none",
        }}
        className="border-border-color flex w-full justify-center overflow-x-auto border-b py-5 md:py-7"
      >
        <div className="common-max-width common-x-padding mx-auto inline-grid w-full grid-flow-col gap-5 scroll-smooth">
          {[
            "All",
            "Quantum Computing",
            "AI Ethics",
            "Space Exploration",
            "Biotechnology",
            "Renewable Energy",
          ].map((category, i) => (
            <div
              className={cn(
                "border-border-color min-w-[210px] rounded-[8px] border py-5 text-center",
                i === 0 && "bg-primary",
              )}
              key={i}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div>
        <Blog name="John Techson" subject="Quantum Computing" />
        <Blog name="John Techson" subject="Quantum Computing" />
        <Blog name="John Techson" subject="Quantum Computing" />
      </div>
    </section>
  );
};

export default Explore;
