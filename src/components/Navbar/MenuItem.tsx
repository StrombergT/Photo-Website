"use client";
import { ActiveLink } from "../ActiveLink";

export function MenuItem({
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
