import { truncateDescription } from "@/utils/championUtils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  imageSrc: string;
  title: string;
  desc: string;
};

export default function ItemCard({ href, imageSrc, title, desc }: Props) {
  const displayDesc = truncateDescription(desc, 24);

  return (
    <div className="border border-gray-500 rounded-sm min-h-48 p-1">
      <Link href={href} className="flex flex-col items-center gap-2 p-2">
        <Image
          loading="lazy"
          src={imageSrc}
          alt={title}
          width={80}
          height={80}
        />
        <h2 className="text-lg font-bold text-red-400">{title}</h2>
        <p className="text-gray-300">{displayDesc}</p>
      </Link>
    </div>
  );
}
