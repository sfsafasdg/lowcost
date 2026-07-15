"use client";

import { useMemo, useState } from "react";
import { categories, CategorySlug, products } from "@/lib/store-data";
import { designSystem as ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionShell } from "@/components/layout/motion-shell";
import { SectionIntro } from "@/components/ui/section-intro";
import { ProductCard } from "@/components/product/product-card";

type SortMode = "featured" | "price-asc" | "price-desc";

export function CatalogClient() {
  const [activeCategory, setActiveCategory] = useState<CategorySlug | "all">("all");
  const [sort, setSort] = useState<SortMode>("featured");

  const filteredProducts = useMemo(() => {
    const base = activeCategory === "all" ? [...products] : products.filter((product) => product.category === activeCategory);

    if (sort === "price-asc") {
      return base.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-desc") {
      return base.sort((a, b) => b.price - a.price);
    }

    return base;
  }, [activeCategory, sort]);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <SiteHeader />
      <MotionShell>
        <section className="px-5 pb-16 pt-32 lg:pb-24 lg:pt-40">
          <div className={ds.spacing.container}>
            <SectionIntro eyebrow="Каталог" title="Каталог Lowcost." text="Фільтруйте техніку за категоріями, сортуйте за ціною і відкривайте детальні продуктові сторінки." />
          </div>
        </section>

        <section className="px-5 pb-24">
          <div className={cn(ds.spacing.container, "grid gap-8 lg:grid-cols-[18rem_1fr]")}>
            <aside className="h-fit rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 lg:sticky lg:top-24">
              <p className="text-sm font-semibold text-white">Фільтри</p>
              <div className="mt-5 space-y-2">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={cn("w-full rounded-xl px-4 py-3 text-left text-sm transition", activeCategory === "all" ? "bg-white text-black" : "text-zinc-400 hover:bg-white/[0.05] hover:text-white")}
                >
                  Усі товари
                </button>
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    onClick={() => setActiveCategory(category.slug)}
                    className={cn("w-full rounded-xl px-4 py-3 text-left text-sm transition", activeCategory === category.slug ? "bg-white text-black" : "text-zinc-400 hover:bg-white/[0.05] hover:text-white")}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold text-white">Сортування</p>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value as SortMode)}
                  className="mt-4 w-full rounded-xl border border-white/10 bg-[#101012] px-4 py-3 text-sm text-white outline-none"
                >
                  <option value="featured">Рекомендовано</option>
                  <option value="price-asc">Ціна: від нижчої</option>
                  <option value="price-desc">Ціна: від вищої</option>
                </select>
              </div>
            </aside>

            <div>
              <div className="mb-5 flex items-center justify-between text-sm text-zinc-500">
                <p>{filteredProducts.length} товарів</p>
                <p>Оновлено сьогодні</p>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} price={product.priceLabel} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </MotionShell>
    </main>
  );
}
