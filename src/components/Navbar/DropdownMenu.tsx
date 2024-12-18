import { MenuItem } from "./MenuItem";

export function DropdownMenu({
  isDropdownOpen,
  toggleMenu,
}: {
  isDropdownOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <div
      className={`absolute left-0 mt-2 bg-white/70 backdrop-brightness-150 shadow-lg rounded-lg w-[200px] overflow-hidden transition-all duration-300 ease-in-out ${
        isDropdownOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="flex flex-col space-y-2 pl-4">
        <MenuItem href="/work/family" onClick={toggleMenu}>
          Familjefoto
        </MenuItem>
        <MenuItem href="/work/portrait" onClick={toggleMenu}>
          Porträtt
        </MenuItem>
        <MenuItem href="/work/wedding" onClick={toggleMenu}>
          Bröllop
        </MenuItem>
      </div>
    </div>
  );
}
