import { navLinks } from "@/constants/navLinks";
import MainCard from "@/components/MainCard";

export default async function HomePage() {
  return (
    <>
      <div className="text-center">
        <h1>리그 오브 레전드 정보 앱</h1>
        <p>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>
      </div>
      {navLinks
        .filter((link) => link.label !== "Home")
        .map(({ href, imageSrc, label }) => (
          <MainCard key={label} label={label} href={href} imageSrc={imageSrc} />
        ))}
    </>
  );
}
