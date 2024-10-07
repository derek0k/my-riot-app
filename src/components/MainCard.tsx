import Image from "next/image";
import Link from "next/link";

type Props = {
  label: string;
  href: string;
  imageSrc: string;
};

export default function MainCard({ label, href, imageSrc }: Props) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-2 font-semibold text-xl text-amber-400 hover:text-amber-600"
    >
      <Image priority src={imageSrc} alt={label} width={450} height={450} />
      <div>{label}</div>
    </Link>
  );
}
