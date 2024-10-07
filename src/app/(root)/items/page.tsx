import { getItemList, getLatestVersion } from "@/utils/serverApi";
import Image from "next/image";

export default async function ItemsPage() {
  const latestVersion = await getLatestVersion();
  const itemList = await getItemList();

  return (
    <>
      <h1>아이템 목록</h1>
      {itemList.map((item, i) => (
        <div key={`item.name ${i}`}>
          <Image
            priority
            src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/item/${item.image.full}`}
            alt={item.name}
            width={80}
            height={80}
          />
          <h2>{item.name}</h2>
          <p>{item.plaintext}</p>
        </div>
      ))}
    </>
  );
}
