import nextLogo from "../../assets/next.svg"

export function GNavbar() {
  return (
    <nav className="top-0 left-0 w-full px-6 py-4 bg-gray-800/20 backdrop-blur-md border-b border-white/10 z-50 mb-5">
      <img
        className="dark:invert"
        src={nextLogo}
        alt="Next.js logo"
        width={80}
        height={38}
      />
    </nav>
  );
}
