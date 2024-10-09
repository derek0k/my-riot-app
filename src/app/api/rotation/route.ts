import { ChampionRotation } from "@/types/ChampionRotation";

export async function GET() {
  const apiKey = process.env.RIOT_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: "RIOT API KEY가 없습니다" }), {
      status: 400,
    });
  }

  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": apiKey,
      },
      next: {
        revalidate: 1000 * 60 * 24,
        tags: ["championRotation"],
      },
    }
  );

  if (!res.ok) {
    return new Response(JSON.stringify({ error: "챔피언 로테이션을 " }), {
      status: res.status,
    });
  }

  // [1,2,4,70,22]
  const { freeChampionIds }: ChampionRotation = await res.json();
  return Response.json(freeChampionIds);
}
