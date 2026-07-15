import { CategoryPage } from "@/components/category/category-page";
import { getCategory, getCategoryProducts } from "@/lib/store-data";

export const metadata = {
  title: "iPhone | Lowcost",
};

export default function IPhonePage() {
  return <CategoryPage category={getCategory("iphone")!} products={getCategoryProducts("iphone")} />;
}
