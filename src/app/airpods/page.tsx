import { CategoryPage } from "@/components/category/category-page";
import { getCategory, getCategoryProducts } from "@/lib/store-data";

export const metadata = {
  title: "AirPods | Lowcost",
};

export default function AirPodsPage() {
  return <CategoryPage category={getCategory("airpods")!} products={getCategoryProducts("airpods")} />;
}
