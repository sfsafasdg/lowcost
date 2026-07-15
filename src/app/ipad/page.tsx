import { CategoryPage } from "@/components/category/category-page";
import { getCategory, getCategoryProducts } from "@/lib/store-data";

export const metadata = {
  title: "iPad | Lowcost",
};

export default function IPadPage() {
  return <CategoryPage category={getCategory("ipad")!} products={getCategoryProducts("ipad")} />;
}
