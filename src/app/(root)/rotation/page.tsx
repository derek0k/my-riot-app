"use client";

import { Champion } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotApi";
import { getLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
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
      <h1>챔피언 로테이션</h1>
      {freeChampions.map((champion) => (
        <Link href={`/champions/${champion.id}`} key={champion.id}>
          <Image
            priority
            src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.id}.png`}
            alt={champion.name}
            width={80}
            height={80}
          />
          <h2>{champion.name}</h2>
          <p>{champion.title}</p>
        </Link>
      ))}
    </>
  );
}
