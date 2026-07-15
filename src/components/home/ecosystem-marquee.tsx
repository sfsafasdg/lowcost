"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { categories } from "@/lib/store-data";
import { ProductVisual } from "@/components/product/product-visual";

export function EcosystemMarquee() {
  const items = [...categories, ...categories];
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 55, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 55, damping: 22 });
  const trackX = useTransform(smoothX, [-0.5, 0.5], [-22, 22]);
  const trackY = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [1.8, -1.8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-2.4, 2.4]);

  return (
    <section
      className="overflow-hidden border-y border-white/[0.08] bg-white/[0.018] py-10"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <div className="mx-auto mb-8 flex max-w-[1440px] items-end justify-between gap-6 px-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#39FF14]/75">Екосистема</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white">Вся технологічна екосистема Lowcost.</h2>
        </div>
        <Link href="/catalog" className="hidden text-sm font-semibold text-zinc-300 transition hover:text-white md:block">
          Відкрити каталог
        </Link>
      </div>
      <div className="group relative" style={{ perspective: "1200px" }}>
        <motion.div style={{ x: trackX, y: trackY, rotateX, rotateY }} className="will-change-transform">
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
        </motion.div>
      </div>
    </section>
  );
}
