import { ChampionRotation } from "@/types/ChampionRotation";

export async function GET() {
  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": process.env.RIOT_API_KEY || "",
      },
      next: {
        revalidate: 1000 * 60 * 24,
        tags: ["championRotation"],
      },
    }
  );
  // [1,2,4,70,22]
  const data: ChampionRotation = await res.json();
  return Response.json(data.freeChampionIds);
}
