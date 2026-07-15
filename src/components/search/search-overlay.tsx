"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { categories, popularSearches, products } from "@/lib/store-data";
import { designSystem as ds } from "@/lib/design-system";
import { ProductVisual } from "@/components/product/product-visual";

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  const suggestions = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) {
      return products.slice(0, 5);
    }

    return products
      .filter((product) => {
        const haystack = [product.name, product.model, product.category, product.description, ...product.searchTerms].join(" ").toLowerCase();
        return haystack.includes(value);
      })
      .slice(0, 6);
  }, [query]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.32, ease: ds.motion.ease }}
          className="fixed inset-0 z-[80] bg-[#050505]/96 px-5 pt-24 backdrop-blur-2xl"
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-zinc-500">Пошук Lowcost</p>
              <button onClick={onClose} className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/[0.06] hover:text-white">
                Закрити
              </button>
            </div>
            <motion.input
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.08, duration: 0.45, ease: ds.motion.ease }}
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Пошук iPhone, MacBook, JBL..."
              className="mt-10 w-full border-b border-white/12 bg-transparent pb-6 text-4xl font-semibold tracking-[-0.055em] text-white outline-none placeholder:text-zinc-700 sm:text-6xl"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.34fr_1fr]">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#39FF14]/75">Популярне</p>
                <div className="flex flex-wrap gap-2 lg:block lg:space-y-2">
                  {popularSearches.map((item) => (
                    <button
                      key={item}
                      onClick={() => setQuery(item)}
                      className="rounded-full border border-white/10 px-4 py-2 text-left text-sm text-zinc-400 transition hover:border-white/20 hover:text-white lg:block lg:w-full lg:rounded-none lg:border-0 lg:px-0"
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="mt-8 hidden lg:block">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-600">Категорії</p>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link key={category.slug} href={category.href} onClick={onClose} className="block text-sm text-zinc-500 transition hover:text-white">
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                {suggestions.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    onClick={onClose}
                    className="group grid grid-cols-[7rem_1fr_auto] items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-3 transition hover:border-white/18 hover:bg-white/[0.045]"
                  >
                    <ProductVisual shape={product.shape} accent={product.accent} size="xs" />
                    <div>
                      <p className="font-semibold text-white">{product.name}</p>
                      <p className="mt-1 text-sm text-zinc-500">{product.model}</p>
                    </div>
                    <p className="hidden text-sm font-semibold text-zinc-300 sm:block">{product.priceLabel}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
