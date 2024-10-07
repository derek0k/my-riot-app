import ItemCard from "@/components/ItemCard";
import { getChampionList, getLatestVersion } from "@/utils/serverApi";
import { Suspense } from "react";

export const revalidate = 1000 * 60 * 60 * 24;

export default async function ChampionsPage() {
  const championList = await getChampionList();
  const latestVersion = await getLatestVersion();

  return (
    <>
      <h1 className="text-3xl font-bold text-red-700">챔피언 목록</h1>
      <Suspense fallback={<>Loading...</>}>
        <section className="grid grid-cols-4 gap-4 py-6">
          {championList.map((champion) => (
            <ItemCard
              key={champion.id}
              href={`/champions/${champion.id}`}
              imageSrc={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.id}.png`}
              title={champion.name}
              desc={champion.title}
            />
          ))}
        </section>
      </Suspense>
    </>
  );
}
