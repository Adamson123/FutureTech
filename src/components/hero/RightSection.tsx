import NavigateButton from "../ui/NavigateButton";
import glow from "/assets/hero/glow.svg";
import profile1 from "/assets/hero/profile_1.png";

const RightSection = () => {
  return (
    <div className="border-border-color relative z-10 flex flex-1 flex-col justify-end border-b">
      <img
        src={glow}
        alt="Glowing star"
        className="glowMaskImage absolute top-0 left-0 -z-10 max-w-[400px]"
      />
      <div className="flex flex-col items-start justify-end gap-3.5 overflow-hidden pt-[120px] pr-[50px] pb-[50px] pl-[50px] md:max-w-[calc(0.4*var(--xl-max-element-width))] md:pr-2 xl:pl-[80px]">
        {/* Profiles */}
        <div className="border-border-color bg-background flex -space-x-4 rounded-full border p-2.5">
          {[profile1, profile1, profile1, profile1].map((image, i) => (
            <img
              className="bg-border-color size-[40px] rounded-full border-2 border-[#666666] object-cover md:size-[45px] xl:size-[60px]"
              key={i}
              src={image}
            />
          ))}
        </div>
        <h3 className="text-xl_24-md_20-sm_18">Explore 1000+ resources</h3>
        <h4 className="text-secondary-text-color-2">
          Over 1,000 articles on emerging tech trends and breakthroughs.
        </h4>
        <NavigateButton className="w-full justify-center md:w-auto">
          Explore Resources
        </NavigateButton>
      </div>
    </div>
  );
};

export default RightSection;
