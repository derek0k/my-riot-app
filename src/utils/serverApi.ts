"use server";

import { BASE_URL } from "@/constants/api";
import { Champion, ChampionDetail } from "@/types/Champion";
import { Item } from "@/types/Item";

async function getLatestVersion(): Promise<string> {
  const res = await fetch(`${BASE_URL}/api/versions.json`);
  const versionData: string[] = await res.json();
  return versionData[0];
}

export async function getChampionList(): Promise<Champion[]> {
  const latestVersion = await getLatestVersion();
  const res = await fetch(
    `${BASE_URL}/cdn/${latestVersion}/data/ko_KR/champion.json`
  );
  const { data: championData } = await res.json();
  return Object.values(championData);
}
//
export async function getChampionDetail(
  championId: string
): Promise<ChampionDetail> {
  const latestVersion = await getLatestVersion();

  const res = await fetch(
    `${BASE_URL}/cdn/${latestVersion}/data/ko_KR/champion/${championId}.json`
  );
  const { data: ChampionDetailData } = await res.json();
  return ChampionDetailData[championId];
}

export async function getItemList(): Promise<Item[]> {
  const latestVersion = await getLatestVersion();
  const res = await fetch(
    `${BASE_URL}/cdn/${latestVersion}/data/ko_KR/item.json`
  );
  const { data: itemData } = await res.json();
  return Object.values(itemData);
}
