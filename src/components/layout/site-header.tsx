"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { categories, CategorySlug } from "@/lib/store-data";
import { cn } from "@/lib/utils";
import { MegaMenu } from "@/components/layout/mega-menu";
import { SearchOverlay } from "@/components/search/search-overlay";

export function SiteHeader() {
  const [activeSlug, setActiveSlug] = useState<CategorySlug | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const activeCategory = categories.find((category) => category.slug === activeSlug);

  useEffect(() => {
    const updateHeader = () => setCompact(window.scrollY > 24);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition-all duration-500 lg:bg-[#050505]/72",
          compact ? "bg-[#050505]/58" : "bg-[#050505]/72"
        )}
      >
        <div className={cn("mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-all duration-500 lg:h-16", compact ? "h-12" : "h-16")}>
          <Link href="/" className="flex items-center gap-3" aria-label="Головна Lowcost" onMouseEnter={() => setActiveSlug(null)}>
            <span className="relative h-9 w-9 overflow-hidden rounded-xl border border-[#39FF14]/28 bg-black shadow-[0_0_30px_rgba(57,255,20,0.16)]">
              <Image src="/lowcost-logo.png" alt="Lowcost logo" fill sizes="36px" className="object-cover" priority />
            </span>
            <span className="text-sm font-semibold tracking-[-0.02em] text-white">Lowcost</span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-zinc-400 lg:flex">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={category.href}
                onMouseEnter={() => setActiveSlug(category.slug)}
                onFocus={() => setActiveSlug(category.slug)}
                className={cn("transition hover:text-white", activeSlug === category.slug && "text-white")}
              >
                {category.navLabel}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Відкрити пошук"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.025] text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              <span className="relative h-4 w-4 rounded-full border border-current after:absolute after:-bottom-1 after:-right-1 after:h-2 after:w-px after:rotate-[-45deg] after:bg-current" />
            </button>
            <Link href="/catalog" onMouseEnter={() => setActiveSlug(null)} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200">
              Каталог
            </Link>
          </div>
        </div>
        <div className={cn("no-scrollbar flex gap-5 overflow-x-auto border-t border-white/[0.06] px-5 text-sm text-zinc-500 transition-all duration-500 lg:hidden", compact ? "py-2" : "py-3")}>
          {categories.map((category) => (
            <Link key={category.slug} href={category.href} className="shrink-0 transition hover:text-white">
              {category.navLabel}
            </Link>
          ))}
        </div>
        <AnimatePresence>{activeCategory ? <MegaMenu key={activeCategory.slug} category={activeCategory} onClose={() => setActiveSlug(null)} /> : null}</AnimatePresence>
      </header>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
