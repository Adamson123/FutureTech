import NavigateButton from "./ui/NavigateButton";
import glow from "/assets/hero/glow.svg";
import profile1 from "/assets/hero/profile_1.png";

/*

   {/* <WaveSvg />,[mask-image:linear-gradient(to_right,black,transparent_80%),linear-gradient(to_bottom,black,transparent_80%)] */

const Stat = () => {
  return (
    <div className="flex border py-[50px]">
      <h2 className="text-xl_40-lg_35-md_30-sm_24">
        300<span className="text-secondary">+</span>
      </h2>
      <p>Resources available</p>
    </div>
  );
};
/*

  <div className="flex">
  <Stat />
  <Stat />
  <Stat />
</div>

*/

const Hero = () => {
  return (
    <section className="grid">
      {/* First */}
      <div className="border-border-color border-b">
        <div className="common-x-padding common-max-width mx-auto flex">
          {/* Left */}
          <div className="border-border-color w-[60%] border-r pr-8 md:pr-[20px] lg:pr-[50px]">
            {/* First of left */}
            <div className="flex max-w-[893px] flex-col gap-[20px] py-[100px]">
              <h4 className="text-secondary-text-color text-xl">
                Your Journey to Tomorrow Begins Here
              </h4>
              <h1 className="text-xl_55-lg_45-md_40-sm_30">
                Explore the Frontiers of Artificial Intelligence
              </h1>
              <p className="text-secondary-text-color">
                Welcome to the epicenter of AI innovation. FutureTech AI News is
                your passport to a world where machines think, learn, and
                reshape the future. Join us on this visionary expedition into
                the heart of AI.
              </p>
            </div>
          </div>
          {/* Right */}
          <div className="relative flex w-[40%] flex-col items-start justify-end gap-3.5 overflow-hidden py-[80px] pl-[50px] xl:pl-[80px]">
            <img
              src={glow}
              alt="Glowing star"
              className="glowMaskImage absolute top-0 left-0 -z-10 max-w-[400px]"
            />
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
            <NavigateButton>Explore Resources</NavigateButton>
          </div>
        </div>
      </div>

      {/* Second */}
      <div className="md:row-span-2"></div>
    </section>
  );
};

export default Hero;
