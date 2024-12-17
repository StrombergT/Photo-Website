"use client";
import Link from "next/link";

type DesktopMenuProps = {
  menuItems: { name: string; href: string }[];
  pathname: string;
  isScrolled: boolean;
};

export default function DesktopMenu({
  menuItems,
  pathname,
  isScrolled,
}: DesktopMenuProps) {
  return (
    <div className="hidden lg:flex items-center lg:space-x-2 text-lg">
      {menuItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <div
            className={`py-2 px-4 xs:text-lg rounded-lg transition duration-300 ease-in-out xs:py-3 ${
              pathname === item.href
                ? "underline decoration-primary decoration-2 font-bold underline-offset-8"
                : "font-medium "
            } ${
              isScrolled
                ? "text-black hover:text-accent"
                : "text-white hover:text-accent"
            }`}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
