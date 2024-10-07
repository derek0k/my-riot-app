import { getChampionStats } from "@/utils/championUtils";
import { getChampionDetail, getLatestVersion } from "@/utils/serverApi";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const championDetail = await getChampionDetail(params.id);

  return {
    title: `${championDetail.name} - My Riot App`,
    description: championDetail.lore,
  };
}

export default async function ChampionsDetailPage({ params }: Props) {
  const championDetail = await getChampionDetail(params.id);
  const latestVersion = await getLatestVersion();

  const { name, title, lore, id, info } = championDetail;
  const stats = getChampionStats(info);

  return (
    <>
      <section className="flex flex-col gap-4 mt-8 text-red-400">
        <h1 className="text-5xl text-red-700">{name}</h1>
        <h2 className="text-2xl text-gray-500">{title}</h2>
        <Image
          priority
          src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${id}.png`}
          alt={name}
          width={200}
          height={160}
          className="mx-auto"
        />
        <p>{lore}</p>
        <div>
          <h3>스탯</h3>
          <ul>
            {stats.map((stat) => (
              <li key={stat.key}>
                <strong>{stat.key}:</strong> <span>{stat.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
