import { notFound } from "next/navigation";
import { getProduct, getRelatedProducts, products } from "@/lib/store-data";
import { ProductDetail } from "@/components/product/product-detail";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);

  return {
    title: product ? `${product.name} | Lowcost` : "Товар | Lowcost",
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} related={getRelatedProducts(product)} />;
}
