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
  shape: ProductShape;
  accent?: ProductAccent;
  label?: string;
  large?: boolean;
  className?: string;
};

export function ProductCard({ id, name, description, price, shape, accent = "green", label, large, className }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.65, ease: ds.motion.ease }}
      whileHover={{ y: -8 }}
      className={cn(
        "group relative flex min-h-[520px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101012] p-6 transition duration-500 hover:border-white/18 hover:shadow-[0_30px_110px_rgba(0,0,0,0.42)]",
        large && "lg:col-span-2 lg:min-h-[580px]",
        className
      )}
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-10 h-52 w-52 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-500">{label ?? "В наявності"}</span>
          <span className="h-2 w-2 rounded-full bg-[#39FF14]" />
        </div>
        <motion.div className="transition duration-700 group-hover:scale-[1.035]" whileHover={{ x: 4, y: -4 }}>
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
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black opacity-100 transition hover:bg-zinc-200 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
          >
            Детальніше
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
