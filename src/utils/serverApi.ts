"use server";

import { BASE_URL } from "@/constants/api";
import { ChampionDetail, ChampionList } from "@/types/Champion";
import { ItemList } from "@/types/Item";

async function getLatestVersion() {
  const res = await fetch(`${BASE_URL}/api/versions.json`, {
    cache: "no-store",
  });

  // if (!res.ok) {
  //   return {
  //     message: "Please enter a valid API KEY",
  //   };
  // }

  const data: string[] = await res.json();
  return data[0];
}

export async function getChampionList() {
  const latestVersion = await getLatestVersion();

  const res = await fetch(
    `${BASE_URL}/cdn/${latestVersion}/data/ko_KR/champion.json`,
    {
      cache: "no-store",
    }
  );

  const data: ChampionList = await res.json();
  return data;
}

export async function getChampionDetail(id: string) {
  const latestVersion = await getLatestVersion();

  const res = await fetch(
    `${BASE_URL}/cdn/${latestVersion}/data/ko_KR/champion/${id}.json`,
    {
      cache: "no-store",
    }
  );

  const data: { [key: string]: ChampionDetail } = await res.json();
  return data;
}

export async function getItemList() {
  const latestVersion = await getLatestVersion();

  const res = await fetch(
    `${BASE_URL}/cdn/${latestVersion}/data/ko_KR/item.json`,
    {
      cache: "no-store",
    }
  );

  const data: ItemList = await res.json();
  return data;
}
