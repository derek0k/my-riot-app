import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/champions", label: "Champion List" },
  { href: "/items", label: "Item List" },
  { href: "/rotation", label: "Champion Rotation" },
];

export default function Header() {
  return (
    <header className="relative flex h-[60px] justify-center items-center">
      {navLinks.map(({ href, label }) => (
        <Link href={href} key={label}>
          <button className="bg-gray-800 text-white px-3 py-2 rounded-md">
            {label}
          </button>
        </Link>
      ))}
    </header>
  );
}
