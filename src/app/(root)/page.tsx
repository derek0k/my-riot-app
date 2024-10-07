import { navLinks } from "@/constants/navLinks";
import MainCard from "@/components/MainCard";

export default async function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-4 text-center my-4">
        <h1 className="text-4xl font-bold text-red-700">
          리그 오브 레전드 정보 앱
        </h1>
        <p className="text-gray-500">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </p>
      </div>
      <section className="flex flex-col gap-4 my-16">
        {navLinks
          .filter((link) => link.label !== "홈")
          .map(({ href, imageSrc, label }) => (
            <MainCard
              key={label}
              label={label}
              href={href}
              imageSrc={imageSrc}
            />
          ))}
      </section>
    </>
  );
}
