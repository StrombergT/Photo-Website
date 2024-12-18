import { DropdownMenu } from "./DropdownMenu";
import { MenuItem } from "./MenuItem";

export function DesktopMenu({
  isDropdownOpen,
  setIsDropdownOpen,
  dropdownRef,
  toggleMenu,
}: {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (value: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
  toggleMenu: () => void;
}) {
  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="fixed z-10 items-center left-0 px-2 xl:px-8 top-10 uppercase font-bold backdrop-brightness-150 text-black bg-white/50 lg:flex hidden">
      <MenuItem href="/">Home</MenuItem>
      <MenuItem href="/about">About</MenuItem>
      <MenuItem href="/gallery">Gallery</MenuItem>
      <div className="relative" ref={dropdownRef}>
        <div className="flex items-center justify-center">
          <MenuItem href="/work">Work</MenuItem>
          <button
            className="cursor-pointer ml-[-10px]"
            aria-label="Toggle dropdown"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <DropdownMenu isDropdownOpen={isDropdownOpen} toggleMenu={toggleMenu} />
      </div>
      <MenuItem href="/contact" onClick={toggleMenu}>
        Contact
      </MenuItem>
    </div>
  );
}
