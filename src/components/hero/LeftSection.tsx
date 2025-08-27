const Stat = ({
  value,
  label,
  // className,
}: {
  value: string;
  label: string;
  //  className?: string;
}) => {
  return (
    <div className="border-border-color flex w-full flex-col gap-2.5 px-5 py-5 lg:py-[50px]">
      <h2 className="text-xl_45-lg_40-md_35-sm_24">
        {value}
        <span className="text-secondary">+</span>
      </h2>
      <p className="text-secondary-text-color-2">{label}</p>
    </div>
  );
};

const LeftSection = () => {
  {
    /*
    Responsive width explanation:

    lg:w-[calc((100vw - var(--xl-max-element-width)) / 2 + 0.6 * var(--xl-max-element-width))]
    → At ≥ lg:
        width = side gutter + 60% of max content width.

    Breakdown of calc():
      - (100vw - var(--xl-max-element-width)) = leftover space outside centered container
      - ÷ 2 = one gutter (left or right)
      - + 0.6 * var(--xl-max-element-width) = 60% of the content column

    Effect:
      Ensures this block spans from the viewport edge
      into the content column, keeping layout balanced.

    md:w-[... - 60px]
    → Same math, but minus 60px for tighter fit at medium screens.
*/
  }

  return (
    <div className="border-border-color flex flex-col items-end border-r md:w-[calc(((100vw-var(--xl-max-element-width))/2+0.6*var(--xl-max-element-width))-60px)] lg:w-[calc((100vw-var(--xl-max-element-width))/2+0.6*var(--xl-max-element-width))]">
      {/* Top */} {/* */} {/* md:pr-[20px] lg:pr-[50px] */}
      <div className="common-x-padding flex max-w-[calc(0.6*var(--xl-max-element-width))] flex-col gap-[20px] py-[30px] md:py-[50px] lg:py-[100px]">
        <h4 className="text-secondary-text-color text-xl">
          Your Journey to Tomorrow Begins Here
        </h4>
        <h1 className="text-xl_55-lg_45-md_40-sm_30">
          Explore the Frontiers of Artificial Intelligence
        </h1>
        <p className="text-secondary-text-color">
          Welcome to the epicenter of AI innovation. FutureTech AI News is your
          passport to a world where machines think, learn, and reshape the
          future. Join us on this visionary expedition into the heart of AI.
        </p>
      </div>
      {/* Bottom */}
      <div className="border-border-color relative flex w-full justify-end border-t border-b">
        {/* <hr className="border-border-color absolute right-0 w-screen" /> */}
        <div className="[&>div:nth-child(1)]:common-l-padding flex w-full max-w-[calc(0.6*var(--xl-max-element-width))] [&>div:nth-child(1)]:border-r [&>div:nth-child(2)]:border-r">
          <Stat value="300" label="Resources available" />
          <Stat value="12k" label="Total Downloads" />
          <Stat value="10k" label="Active Users" />
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
