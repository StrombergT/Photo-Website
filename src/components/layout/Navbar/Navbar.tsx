"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import DesktopMenu from "./desktopMenu/DesktopMenu";
import { menuItems } from "./menuItem/MenuItem";

type NavbarProps = {};

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out  
        ${
          isScrolled
            ? "bg-white/50 backdrop-blur-md shadow-md"
            : "bg-transparent backdrop-blur-none"
        }`}
    >
      <div className="container mx-auto py-2 flex items-center justify-between">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/img/logo.png"
            alt="Ida Levin Photography Logo"
            width={1980}
            height={1980}
            className="h-10 w-full md:h-14 xl:h-14 rounded-full"
          />
        </Link>
        <DesktopMenu
          menuItems={menuItems}
          pathname={pathname}
          isScrolled={isScrolled}
        />
        <button
          className="lg:hidden p-4"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          {/*    <RiMenu2Line
            className={`text-2xl ${
              isScrolled ? "text-[#0e000f]" : "text-[#b7c2b9]"
            }`}
          /> */}
        </button>
      </div>
      {/*   <MobileMenu
        menuItems={menuItems}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        pathname={pathname}
      /> */}
    </nav>
  );
}
