import LoveSvg from "../ui/LoveSvg";
import NavigateButton from "../ui/NavigateButton";
import john from "/assets/explore/john.png";
import comment from "/assets/explore/comment.svg";
import share from "/assets/explore/share.svg";

const Blog = ({ name, subject }: { name: string; subject: string }) => {
  return (
    <div className="border-border-color border-b py-14">
      <div className="common-max-width common-x-padding mx-auto flex gap-36 max-lg:flex-col max-lg:gap-12 lg:max-xl:gap-16">
        {/* Left */}
        <div className="flex items-center gap-3.5">
          <img
            className="bg-border-color size-13 rounded-full object-cover"
            src={john}
            alt={name + " image"}
          />
          <div>
            <p className="mb-[2px]">{name}</p>
            <p className="text-secondary-text-color-2 text-xl_16-md_14-sm_12">
              {subject}
            </p>
          </div>
          <NavigateButton className="ml-auto text-nowrap lg:hidden">
            View Blog
          </NavigateButton>
        </div>
        {/* Right */}
        <div>
          {/* date */}
          <p className="text-secondary-text-color-2 mb-5">October 15, 2023</p>

          {/* Title, text, and navigate button */}
          <div className="flex gap-20">
            <div>
              <h5 className="mb-2">The Quantum Leap in Computing</h5>
              <p className="text-secondary-text-color-2">
                Explore the revolution in quantum computing, its applications,
                and its potential impact on various industries.
              </p>
              <div className="[&>button]:bg-primary text-secondary-text-color-2 [&>button]:border-border-color mt-3 flex gap-3 text-xs [&>button]:flex [&>button]:items-center [&>button]:gap-1 [&>button]:rounded-full [&>button]:border [&>button]:p-1.5 [&>button]:px-2">
                {/* Likes */}
                <button>
                  <LoveSvg className="h-3 w-3" />
                  32k
                </button>
                {/* Comments */}
                <button>
                  <img src={comment} className="h-3 w-3" />
                  72
                </button>
                {/* Share */}
                <button>
                  <img src={share} className="h-3 w-3" />
                  30
                </button>
              </div>
            </div>
            <NavigateButton className="max-h-14 text-nowrap max-lg:hidden">
              View Blog
            </NavigateButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
