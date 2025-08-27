import BottomSection from "./BottomSection";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Hero = () => {
  return (
    <section className="grid overflow-hidden pt-[124px] md:pt-[134px] xl:pt-[147px]">
      {/* First */}
      <div className="border-border-color relative">
        <div className="flex flex-col md:flex-row">
          {/* Left */}
          <LeftSection />
          {/* Right */}
          <RightSection />
          {/* <hr className="border-border-color absolute right-0 bottom-0 left-0" /> */}
        </div>
      </div>
      {/* Second */}
      <BottomSection />
    </section>
  );
};

export default Hero;
