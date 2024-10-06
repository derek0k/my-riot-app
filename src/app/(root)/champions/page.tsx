import { getChampionList, getLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 1000 * 60 * 60 * 24;

export default async function ChampionsPage() {
  const championList = await getChampionList();
  const latestVersion = await getLatestVersion();

  return (
    <>
      <h1>챔피언 목록</h1>
      {championList.map((champion) => (
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
