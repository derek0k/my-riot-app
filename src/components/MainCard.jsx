import Image from "next/image";
import Link from "next/link";

export default function MainCard({ label, href, imageSrc }) {
  return (
    <Link href={href}>
      <Image
        src={imageSrc}
        alt={label}
        style={{ width: "100%", height: "auto" }}
      />
      <div>{label}</div>
    </Link>
  );
}
