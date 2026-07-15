"use client";

import Link from "next/link";
import { categories } from "@/lib/store-data";
import { ProductVisual } from "@/components/product/product-visual";

export function EcosystemMarquee() {
  const items = [...categories, ...categories];

  return (
    <section className="overflow-hidden border-y border-white/[0.08] bg-white/[0.018] py-10">
      <div className="mx-auto mb-8 flex max-w-[1440px] items-end justify-between gap-6 px-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#39FF14]/75">Екосистема</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white">Вся технологічна екосистема Lowcost.</h2>
        </div>
        <Link href="/catalog" className="hidden text-sm font-semibold text-zinc-300 transition hover:text-white md:block">
          Відкрити каталог
        </Link>
      </div>
      <div className="group relative">
        <div className="ecosystem-track flex w-max gap-4 px-5">
          {items.map((category, index) => (
            <Link
              key={`${category.slug}-${index}`}
              href={category.href}
              className="group/item w-[280px] rounded-[1.5rem] border border-white/10 bg-[#101012] p-5 transition hover:border-white/20 hover:bg-white/[0.05] sm:w-[340px]"
            >
              <ProductVisual shape={category.shape} accent={category.accent} size="sm" className="transition duration-500 group-hover/item:scale-[1.04]" />
              <p className="mt-5 text-xl font-semibold tracking-[-0.035em] text-white">{category.name}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
