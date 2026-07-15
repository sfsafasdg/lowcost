import { CategoryPage } from "@/components/category/category-page";
import { getCategory, getCategoryProducts } from "@/lib/store-data";

export const metadata = {
  title: "MacBook | Lowcost",
};

export default function MacBookPage() {
  return <CategoryPage category={getCategory("macbook")!} products={getCategoryProducts("macbook")} />;
}
