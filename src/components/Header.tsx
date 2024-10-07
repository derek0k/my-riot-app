import { navLinks } from "@/constants/navLinks";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 bg-section w-full py-6">
      <nav className="container mx-auto flex justify-around">
        {navLinks.map(({ href, label }) => (
          <Link href={href} key={label} className="hover:text-red-700">
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
