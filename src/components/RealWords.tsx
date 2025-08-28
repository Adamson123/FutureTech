/**
 * RealWords Section
 *
 * Responsiveness & Layout Explanation:
 * -------------------------------------
 * - The grid is made responsive using Tailwind’s responsive grid utilities:
 *    • `max-md:grid-cols-1` → On small screens, each comment spans full width (1 column).
 *    • `md:max-lg:grid-cols-2` → On medium screens, comments are arranged in 2 columns.
 *    • `lg:grid-cols-3` → On large screens, comments display in 3 columns.
 *    • `2xl:grid-cols-[auto_calc(var(--xl-max-element-width)/3)_auto]`
 *       → At very large screens, the grid locks into a layout where each column
 *         is calculated relative to `--xl-max-element-width`. This ensures the
 *         content stays centered and doesn’t stretch awkwardly.
 *
 * - The child divs (`Comment` components) use `[&>div]:w-full` to enforce
 *   consistent width inside the grid, while utilities like
 *   `justify-center / justify-end` adjust alignment to keep balance
 *   between columns.
 *
 * - To keep everything contained, `max-w-[calc(var(--xl-max-element-width)/3)]`
 *   is used on the inner wrapper of each comment. This makes sure that even on
 *   ultra-wide screens, no single card grows beyond one-third of the defined
 *   max element width.
 *
 * In short: we’re combining Tailwind’s responsive grid utilities with CSS vars
 * and calculated widths to ensure that:
 *   1. The section adapts gracefully to small, medium, and large screens.
 *   2. Content stays visually balanced.
 *   3. Cards never exceed the global max-width for readability.
 */

import NavigateButton from "./ui/NavigateButton";
import SectionTitle from "./ui/SectionTitle";
import raj from "/assets/realwords/raj.png";
import star from "/assets/realwords/star.svg";

const Comment = () => {
  return (
    <div className="border-border-color bg-gren-500 bg-green- flex border-r border-b">
      <div className="bg-red- flex w-full max-w-[calc(var(--xl-max-element-width)/3)] flex-col items-center px-8 py-24">
        {/* Profile */}
        <div className="flex gap-2.5">
          <img
            src={raj}
            alt="image"
            className="size-12 rounded-full object-cover"
          />
          <div>
            <p>Sarah Thompson</p>
            <p className="text-xl_16-md_14-sm_12 text-secondary-text-color-3 mt-0.5">
              San Francisco, USA
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {/* Stars */}
          <div className="border-border-color bg-background flex translate-y-5 items-center gap-3 rounded-full border px-4 py-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <img className="size-5" src={star} key={i} />
            ))}
          </div>
          <p className="bg-primary border-border-color rounded-[10px] border px-8 pt-10 pb-5 text-center text-sm">
            The ebooks on AI in education have been a game-changer for my
            research. They provide in-depth insights and case studies that are
            invaluable for staying updated.
          </p>
        </div>
      </div>
    </div>
  );
};

const RealWords = () => {
  return (
    <section>
      <SectionTitle
        subtitle="What Our Readers Say"
        title="Real Words from Real Readers"
        element={
          <NavigateButton className="bg-background">
            View All Testimonials
          </NavigateButton>
        }
      />
      <div className="bg-background grid max-md:grid-cols-1 md:max-lg:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-[auto_calc(var(--xl-max-element-width)/3)_auto] [&>div]:w-full max-md:[&>div]:justify-center md:[&>div:nth-child(3n+1)]:justify-end md:[&>div:nth-child(3n+2)]:justify-center">
        {Array.from({ length: 6 }).map((_, i) => (
          <Comment key={i} />
        ))}
      </div>
    </section>
  );
};

//[&>div:nth-child(1)]:pr-[calc((100vw/3-1500px/3)/2)]

export default RealWords;
