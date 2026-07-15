import { CategoryPage } from "@/components/category/category-page";
import { getCategory, getCategoryProducts } from "@/lib/store-data";

export const metadata = {
  title: "Аксесуари | Lowcost",
};

export default function AccessoriesPage() {
  return <CategoryPage category={getCategory("accessories")!} products={getCategoryProducts("accessories")} />;
}
