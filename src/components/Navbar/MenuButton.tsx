export function MenuButton({ toggleMenu }: { toggleMenu: () => void }) {
  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden fixed top-4 right-2 z-20 p-2 rounded bg-white shadow-md"
      aria-label="Toggle menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  );
}
