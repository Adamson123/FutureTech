import { cn } from "../lib/cn";
import NavigateButton from "./ui/NavigateButton";
import firstIcon from "/assets/footer/icon.svg";
import twitter from "/assets/footer/twitter.svg";
import linkedin from "/assets/footer/linkedin.svg";
import footerLinks from "../data/footerLinks";

const LinkwithTag = ({ text }: { text: string }) => {
  return (
    <p className="flex items-center gap-3">
      {text}{" "}
      <button className="bg-primary gradient-border rounded-[6px] px-3 py-1.5 text-white">
        New
      </button>
    </p>
  );
};

const NavLink = ({ link }: { link: any }) => {
  if (link.tag) {
    return <LinkwithTag text={link.name} />;
  } else if (link.external) {
    return <NavigateButton>{link.name}</NavigateButton>;
  } else {
    return link.name;
  }
};

const Footer = () => {
  return (
    <footer className="border-border-color border-t pt-20">
      <div className="common-x-padding common-max-width mx-auto grid grid-cols-5 gap-10 pb-20 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
        {footerLinks.map((links, i) => (
          <div
            className={cn(
              "flex flex-col gap-7",
              links.title === "Resources" && "max-xl:col-span-2",
            )}
            key={i}
          >
            <h5 className="text-xl_20-md_18-sm_16">{links.title}</h5>
            <ul
              className={cn(
                "flex gap-5",
                links.title === "Resources" ? "flex-wrap" : "flex-col",
              )}
            >
              {links.items.map((link, j) => (
                <li className="text-secondary-text-color-3" key={j}>
                  <a href="#">
                    {" "}
                    <NavLink link={link} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="common-x-padding common-max-width mx-auto">
        <div className="text-secondary-text-color-3 border-border-color mx-auto flex justify-between gap-4 border-t py-10 max-md:flex-col max-md:items-center">
          {/* Socials */}
          <div className="flex gap-4 md:hidden">
            {[twitter, firstIcon, linkedin].map((image, i) => (
              <a key={i} href="#">
                <img className="size-5" src={image} />
              </a>
            ))}
          </div>
          {/* Left */}
          <div>
            <a href="#" className="border-border-color border-r pr-3">
              Terms & Conditions
            </a>
            <a href="#" className="border-border-color pl-3">
              Privacy Policy
            </a>
          </div>
          {/* Center */}
          <div className="hidden gap-4 md:flex">
            {[twitter, firstIcon, linkedin].map((image, i) => (
              <a key={i} href="#">
                <img className="size-5" src={image} />
              </a>
            ))}
          </div>
          {/* Right */}
          <p>&copy; 2024 FutureTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
