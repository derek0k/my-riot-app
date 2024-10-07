import { Champion } from "@/types/Champion";
import { getChampionList } from "./serverApi";

export async function getChampionRotation(): Promise<Champion[]> {
  const res = await fetch("/api/rotation");

  if (!res.ok) {
    throw new Error(`Error fetching /api/rotation: ${res.statusText}`);
  }
  const rotationData = await res.json();
  const championList = await getChampionList();

  const rotationKeys = new Set(rotationData);
  const filteredChampinons = championList.filter((champion) =>
    rotationKeys.has(Number(champion.key))
  );

  return filteredChampinons;
}
