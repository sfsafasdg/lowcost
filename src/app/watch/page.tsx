import { CategoryPage } from "@/components/category/category-page";
import { getCategory, getCategoryProducts } from "@/lib/store-data";

export const metadata = {
  title: "Apple Watch | Lowcost",
};

export default function WatchPage() {
  return <CategoryPage category={getCategory("watch")!} products={getCategoryProducts("watch")} />;
}
