import { ActiveLink } from "./ActiveLink";

function MenuItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <ActiveLink
      className="p-4 decoration-accent decoration-4 underline-offset-4 hover:underline hover:decoration-accent/25"
      activeClassName="underline hover:decoration-accent"
      href={href}
    >
      {children}
    </ActiveLink>
  );
}

export function NavigationMenu() {
  return (
    <>
      <div className="h-32 xl:hidden" />
      <div className="fixed flex z-10 items-center left-0 px-2 xl:px-8 top-10 uppercase font-bold backdrop-brightness-150 text-black bg-white/50">
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/about">About</MenuItem>
        <MenuItem href="/gallery">Gallery</MenuItem>
        <MenuItem href="/contact">Contact</MenuItem>
      </div>
    </>
  );
}
