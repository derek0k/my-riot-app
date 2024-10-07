import ItemCard from "@/components/ItemCard";
import { getItemList, getLatestVersion } from "@/utils/serverApi";

export default async function ItemsPage() {
  const latestVersion = await getLatestVersion();
  const itemList = await getItemList();

  return (
    <>
      <h1 className="text-3xl font-bold text-red-700">아이템 목록</h1>
      <section className="grid grid-cols-4 gap-4 py-6">
        {itemList.map((item, i) => (
          <ItemCard
            key={`item.name ${i}`}
            href={`/items/${item.name}`}
            imageSrc={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/item/${item.image.full}`}
            title={item.name}
            desc={item.plaintext}
          />
        ))}
      </section>
    </>
  );
}
