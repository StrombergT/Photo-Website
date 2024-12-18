"use client";
import { useState, useRef, useEffect } from "react";
import { MenuButton } from "./MenuButton";
import { MobileMenu } from "../MobileMenu";
import { DesktopMenu } from "./DesktopMenu";

export function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <MenuButton toggleMenu={toggleMenu} />
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <DesktopMenu
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        dropdownRef={dropdownRef}
        toggleMenu={toggleMenu}
      />
    </div>
  );
}
