"use client";

import ItemCard from "@/components/ItemCard";
import { Champion } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotApi";
import { getLatestVersion } from "@/utils/serverApi";
import { useEffect, useState } from "react";

export default function RotationPage() {
  const [freeChampions, setFreeChampions] = useState<Champion[]>([]);
  const [latestVersion, setLatestVersion] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const version = await getLatestVersion();
      setLatestVersion(version);

      const data = await getChampionRotation();
      setFreeChampions(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-red-700">챔피언 로테이션</h1>
      <section className="grid grid-cols-4 gap-4 py-6">
        {freeChampions.map((champion) => (
          <ItemCard
            key={champion.id}
            href={`/champions/${champion.id}`}
            imageSrc={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.id}.png`}
            title={champion.name}
            desc={champion.title}
          />
        ))}
      </section>
    </>
  );
}
