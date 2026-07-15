import { CategoryPage } from "@/components/category/category-page";
import { getCategory, getCategoryProducts } from "@/lib/store-data";

export const metadata = {
  title: "JBL | Lowcost",
};

export default function JBLPage() {
  return <CategoryPage category={getCategory("jbl")!} products={getCategoryProducts("jbl")} />;
}
