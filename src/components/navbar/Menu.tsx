import type { Dispatch, SetStateAction } from "react";
import { cn } from "../../lib/cn";
import Button from "../ui/Button";
import Attribution from "../ui/Attribution";

const Menu = ({
  isMenuOpen,
  setIsMenuOpened,
}: {
  isMenuOpen: boolean;
  setIsMenuOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setIsMenuOpened(false)}
      className={cn(
        "fixed inset-0 bg-black/40 transition-all duration-300 ease-in-out md:hidden",
        !isMenuOpen && "pointer-events-none opacity-0",
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "bg-background ml-auto flex h-screen w-[350px] flex-col py-5 transition-all duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-100",
        )}
      >
        {/* Top */}
        <div className="flex items-center justify-between px-5">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpened(false)}
            className="text-2xl font-light"
          >
            &times;
          </button>
          <span className="text-secondary-text-color-2">Menu</span>
        </div>

        {/* Links */}
        <ul className="mt-20">
          {["Home", "News", "Podcasts", "Resources"].map((link) => (
            <li
              key={link}
              className="border-border-color border-b px-5 py-4 text-lg last:border-b-0"
            >
              <a href="#" className="hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
        {/* Bottom */}
        <div className="mt-7 px-5">
          <Button className="w-full">Contact Us</Button>
        </div>

        <Attribution className="mt-auto pb-0" />
      </div>
    </div>
  );
};

export default Menu;
