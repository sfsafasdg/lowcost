"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { StoreCategory } from "@/lib/store-data";
import { designSystem as ds } from "@/lib/design-system";
import { ProductVisual } from "@/components/product/product-visual";

export function MegaMenu({ category, onClose }: { category: StoreCategory; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.28, ease: ds.motion.ease }}
      className="absolute inset-x-0 top-16 border-b border-white/10 bg-[#050505]/96 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
      onMouseLeave={onClose}
    >
      <div className="mx-auto grid max-w-[1100px] gap-8 px-5 py-9 lg:grid-cols-[0.42fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#39FF14]/75">{category.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-white">{category.name}</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">{category.description}</p>
          <Link href={category.href} onClick={onClose} className="mt-6 inline-flex text-sm font-semibold text-white transition hover:text-[#39FF14]">
            Переглянути категорію
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {category.menuItems.map((item) => (
            <Link
              key={item.name}
              href={`/product/${item.productId}`}
              onClick={onClose}
              className="group rounded-2xl border border-white/8 bg-white/[0.025] p-4 transition hover:border-white/18 hover:bg-white/[0.045]"
            >
              <ProductVisual shape={item.shape} accent={item.accent} size="xs" />
              <p className="mt-4 text-sm font-semibold text-white">{item.name}</p>
              <p className="mt-1 text-xs text-zinc-500">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
