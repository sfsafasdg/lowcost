"use client";

import { useState } from "react";
import { StoreProduct } from "@/lib/store-data";
import { designSystem as ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionShell } from "@/components/layout/motion-shell";
import { Button } from "@/components/ui/button";
import { SectionIntro } from "@/components/ui/section-intro";
import { ProductVisual } from "@/components/product/product-visual";
import { ProductCard } from "@/components/product/product-card";

export function ProductDetail({ product, related }: { product: StoreProduct; related: StoreProduct[] }) {
  const [color, setColor] = useState(product.colors[0]);
  const [storage, setStorage] = useState(product.storage?.[0]);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <SiteHeader />
      <MotionShell>
        <section className="grid min-h-screen gap-8 px-5 pt-24 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex min-h-[620px] items-center justify-center rounded-[2rem] border border-white/10 bg-[#0B0B0D]">
            <ProductVisual shape={product.shape} accent={product.accent} size="hero" />
          </div>
          <div className="flex items-center">
            <div className="w-full max-w-xl py-12 lg:pl-8">
              <p className="text-sm text-[#39FF14]/80">{product.label}</p>
              <h1 className={cn(ds.typography.hero, "mt-4 font-semibold text-white")}>{product.name}</h1>
              <p className="mt-5 text-lg leading-8 text-zinc-400">{product.description}</p>
              <p className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-white">{product.priceLabel}</p>

              <div className="mt-9">
                <p className="text-sm font-semibold text-white">Колір: <span className="text-zinc-400">{color}</span></p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.colors.map((item) => (
                    <button
                      key={item}
                      onClick={() => setColor(item)}
                      className={cn("rounded-full border px-4 py-2 text-sm transition", color === item ? "border-white bg-white text-black" : "border-white/10 text-zinc-400 hover:border-white/20 hover:text-white")}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {product.storage ? (
                <div className="mt-7">
                  <p className="text-sm font-semibold text-white">Пам&apos;ять: <span className="text-zinc-400">{storage}</span></p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.storage.map((item) => (
                      <button
                        key={item}
                        onClick={() => setStorage(item)}
                        className={cn("rounded-full border px-4 py-2 text-sm transition", storage === item ? "border-white bg-white text-black" : "border-white/10 text-zinc-400 hover:border-white/20 hover:text-white")}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button>Купити</Button>
                <Button href="/catalog" variant="secondary">
                  Назад до каталогу
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className={cn(ds.spacing.section, "bg-[#080809]")}>
          <div className={cn(ds.spacing.container, "grid gap-12 lg:grid-cols-[0.8fr_1.2fr]")}>
            <SectionIntro eyebrow="Характеристики" title="Технічна інформація." text="Ключові характеристики і умови, які варто знати перед покупкою." />
            <div className="grid gap-4 sm:grid-cols-2">
              {product.specs.map(([title, value]) => (
                <div key={title} className="rounded-[1.35rem] border border-white/10 bg-white/[0.025] p-6">
                  <p className="text-sm text-zinc-500">{title}</p>
                  <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {related.length ? (
          <section className={ds.spacing.section}>
            <div className={ds.spacing.container}>
              <SectionIntro eyebrow="Схожі товари" title="Схожі товари." text="Ще кілька позицій, які можуть підійти до вашого сценарію." />
              <div className="mt-14 grid gap-5 lg:grid-cols-3">
                {related.map((item) => (
                  <ProductCard key={item.id} {...item} price={item.priceLabel} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </MotionShell>
    </main>
  );
}
