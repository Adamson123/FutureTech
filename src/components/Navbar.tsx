import { cn } from "../lib/cn";
import ArrowSvg from "./ui/ArrowSvg";
import Button from "./ui/Button";
import fullLogo from "/assets/full-logo.svg";

const links = [
  { name: "Home", href: "#" },
  { name: "News", href: "#" },
  { name: "Podcasts", href: "#" },
  { name: "Resources", href: "#" },
];

const Navbar = () => {
  return (
    <nav>
      {/* Subscribe */}
      <div className="bg-opa flex items-center justify-center bg-[url('/assets/navbar/wave.svg')] bg-cover bg-center bg-no-repeat py-5">
        <div className="flex items-center gap-[13px] text-[#98989A]">
          Subscribe to our Newsletter For New & latest Blogs and Resources
          <ArrowSvg className="size-[13.75]" />
        </div>
      </div>
      {/* Navigations */}
      <div className="bg-primary">
        {/*  */}
        <div className="common-x-padding common-max-width mx-auto flex items-center justify-between py-5">
          {/* Logo */}
          <img
            src={fullLogo}
            alt="logo"
            className="h-[35px] w-[125.23px] md:h-10 md:w-[143.125px] 2xl:h-[50px] 2xl:w-[178.90px]"
          />
          {/* Links */}
          <ul className="hidden md:flex md:gap-x-4 xl:gap-x-6">
            {links.map((link) => (
              <li
                key={link.name}
                className={cn(
                  "text text-secondary-text-color-2 py-2.5 md:px-4 xl:px-5",
                  link.name === "Home" &&
                    "bg-background rounded-[10px] border border-[#333333] text-white",
                )}
              >
                <a href={link.href} className="hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Button */}
          <Button>Contact Us</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
