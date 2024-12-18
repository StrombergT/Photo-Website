"use client";
import { useState, useRef, useEffect } from "react";
import { ActiveLink } from "./ActiveLink";

function MenuItem({
  href,
  children,
  onClick,
  className,
}: {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <ActiveLink
      className={`p-4 decoration-accent decoration-4 underline-offset-4 hover:underline hover:decoration-accent/25 ${className}`}
      activeClassName="underline hover:decoration-accent"
      href={href || "#"}
      onClick={onClick}
    >
      {children}
    </ActiveLink>
  );
}

export function MobileMenu({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-white z-10 transform ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 xl:hidden`}
    >
      <nav className="flex flex-col items-center justify-start space-y-4 uppercase font-bold py-8">
        <MenuItem href="/" onClick={toggleMenu}>
          Home
        </MenuItem>
        <MenuItem href="/about" onClick={toggleMenu}>
          About
        </MenuItem>
        <MenuItem href="/gallery" onClick={toggleMenu}>
          Gallery
        </MenuItem>
        <div className="w-full" ref={dropdownRef}>
          <div className="flex items-center justify-center">
            <MenuItem href="/work">Work</MenuItem>
            <button
              className="cursor-pointer"
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
          <div
            className={`overflow-hidden transition-[max-height] flex flex-col justify-center items-center text-xs duration-500 ease-in-out ${
              isDropdownOpen ? "max-h-[300px]" : "max-h-0"
            }`}
          >
            <div className="flex flex-col space-y-2 mt-2 pl-4">
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
        </div>
        <MenuItem href="/contact" onClick={toggleMenu}>
          Contact
        </MenuItem>
      </nav>
    </div>
  );
}
