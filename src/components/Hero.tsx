import { cn } from "../lib/cn";
import NavigateButton from "./ui/NavigateButton";
import glow from "/assets/hero/glow.svg";
import profile1 from "/assets/hero/profile_1.png";

const Stat = ({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "border-border-color flex w-full flex-col gap-2.5 border-r px-5 py-5 lg:py-[50px]",
        className,
      )}
    >
      <h2 className="text-xl_40-lg_35-md_30-sm_24">
        {value}
        <span className="text-secondary">+</span>
      </h2>
      <p className="text-secondary-text-color-2">{label}</p>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="grid overflow-hidden pt-[124px] md:pt-[134px] xl:pt-[147px]">
      {/* First */}
      <div className="border-border-color relative">
        <div className="flex flex-col justify-center md:flex-row">
          {/* Left */}
          <div className="border-border-color flex flex-col border-r">
            {/* Top */} {/* */} {/* md:pr-[20px] lg:pr-[50px] */}
            <div className="common-x-padding flex max-w-[calc(0.6*var(--xl-max-element-width))] flex-col gap-[20px] py-[30px] md:py-[100px]">
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
            {/* Bottom */}
            <div className="border-border-color relative flex w-full justify-end border-b">
              <hr className="border-border-color absolute right-0 w-screen" />
              <div className="flex w-full max-w-[calc(0.6*var(--xl-max-element-width))]">
                <Stat value="300" label="Resources available" />
                <Stat value="12k" label="Total Downloads" />
                <Stat
                  value="10k"
                  label="Active Users"
                  className="border-none"
                />
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="border-border-color relative z-10 flex flex-col justify-end border-b">
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
              <h3 className="text-xl_24-md_20-sm_18">
                Explore 1000+ resources
              </h3>
              <h4 className="text-secondary-text-color-2">
                Over 1,000 articles on emerging tech trends and breakthroughs.
              </h4>
              <NavigateButton className="w-full justify-center md:w-auto">
                Explore Resources
              </NavigateButton>
            </div>
          </div>
          <hr className="border-border-color absolute right-0 bottom-0 left-0" />
        </div>
      </div>
      {/* Second */} <div className="md:row-span-2"></div>
    </section>
  );
};

export default Hero;
