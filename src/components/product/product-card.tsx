"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { designSystem as ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";
import { ProductAccent, ProductShape, ProductVisual } from "@/components/product/product-visual";

type ProductCardProps = {
  id: string;
  name: string;
  description: string;
  price: string;
  category?: string;
  shape: ProductShape;
  accent?: ProductAccent;
  label?: string;
  large?: boolean;
  className?: string;
};

export function ProductCard({ id, name, description, price, category, shape, accent = "green", label, large, className }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.65, ease: ds.motion.ease }}
      whileHover={{ y: -8 }}
      className={cn(
        "product-card-premium group relative flex min-h-[520px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,#141416_0%,#0C0C0E_100%)] p-6 transition duration-500 hover:border-white/20 hover:shadow-[0_34px_120px_rgba(0,0,0,0.55)]",
        large && "lg:col-span-2 lg:min-h-[580px]",
        className
      )}
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-10 h-60 w-60 -translate-x-1/2 rounded-full bg-white/7 blur-3xl" />
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" />
      </div>
      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-zinc-500">{label ?? "В наявності"}</span>
            {category ? <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-700">{category}</p> : null}
          </div>
          <span className="h-2 w-2 rounded-full bg-[#39FF14]" />
        </div>
        <motion.div className="relative transition duration-700 group-hover:scale-[1.055]" whileHover={{ x: 4, y: -6 }}>
          <ProductVisual shape={shape} size={large ? "lg" : "md"} accent={accent} />
        </motion.div>
      </div>
      <div className="relative">
        <h3 className={cn(ds.typography.title, "text-white")}>{name}</h3>
        <p className="mt-3 min-h-16 text-sm leading-6 text-zinc-400">{description}</p>
        <div className="mt-7 flex items-center justify-between gap-4">
          <p className="text-lg font-semibold text-white">{price}</p>
          <Link
            href={`/product/${id}`}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black opacity-100 shadow-[0_14px_36px_rgba(255,255,255,0.12)] transition hover:bg-zinc-200 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
          >
            Детальніше
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
