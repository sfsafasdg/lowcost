"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { StoreCategory, StoreProduct } from "@/lib/store-data";
import { designSystem as ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionShell } from "@/components/layout/motion-shell";
import { Button } from "@/components/ui/button";
import { SectionIntro } from "@/components/ui/section-intro";
import { ProductVisual } from "@/components/product/product-visual";
import { ProductCard } from "@/components/product/product-card";

export function CategoryPage({ category, products }: { category: StoreCategory; products: StoreProduct[] }) {
  const heroProduct = products.find((product) => product.id === category.heroProductId) ?? products[0];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <SiteHeader />
      <MotionShell>
        <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_42%,rgba(139,92,255,0.14),transparent_34rem),radial-gradient(circle_at_38%_18%,rgba(57,255,20,0.08),transparent_28rem)]" />
          <div className={cn(ds.spacing.container, "relative grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]")}>
            <div>
              <p className="mb-5 text-sm font-medium text-zinc-400">{category.eyebrow}</p>
              <h1 className={cn(ds.typography.hero, "max-w-4xl font-semibold text-white")}>{category.title}</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">{category.description}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href={`/product/${heroProduct.id}`}>Купити {heroProduct.name}</Button>
                <Button href="/catalog" variant="secondary">
                  Весь каталог
                </Button>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.94, y: 28 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, ease: ds.motion.ease }}>
              <ProductVisual shape={category.shape} accent={category.accent} size="hero" />
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/[0.08] bg-white/[0.018] px-5 py-8">
          <div className={cn(ds.spacing.container, "grid gap-3 md:grid-cols-3")}>
            {category.models.map((model) => (
              <Link key={model.name} href={`/product/${model.productId}`} className="rounded-2xl border border-white/8 bg-white/[0.025] p-5 transition hover:border-white/18 hover:bg-white/[0.045]">
                <p className="text-lg font-semibold text-white">{model.name}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{model.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={ds.spacing.section}>
          <div className={ds.spacing.container}>
            <SectionIntro eyebrow="Моделі" title={`${category.name}: актуальні позиції`} text="Виберіть модель або відкрийте продуктову сторінку для кольорів, пам'яті, ціни та характеристик." />
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {products.map((product, index) => (
                <ProductCard key={product.id} {...product} price={product.priceLabel} large={index === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className={cn(ds.spacing.section, "bg-[#080809]")}>
          <div className={cn(ds.spacing.container, "grid gap-12 lg:grid-cols-[0.75fr_1.25fr]")}>
            <SectionIntro eyebrow="Technical information" title="Важливі деталі перед покупкою." text="Коротко про характеристики, умови та те, що варто уточнити перед замовленням." />
            <div className="grid gap-4 sm:grid-cols-2">
              {category.technical.map(([title, value]) => (
                <div key={title} className="rounded-[1.35rem] border border-white/10 bg-white/[0.025] p-6">
                  <p className="text-sm text-zinc-500">{title}</p>
                  <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </MotionShell>
    </main>
  );
}
