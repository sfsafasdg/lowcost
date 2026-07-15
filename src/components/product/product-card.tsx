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
  listing?: boolean;
  className?: string;
};

export function ProductCard({ id, name, description, price, category, shape, accent = "green", label, large, listing, className }: ProductCardProps) {
  const visualSize = large ? "lg" : listing ? "sm" : "md";

  return (
    <motion.article
      initial={{ opacity: 0, y: listing ? 16 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: listing ? "-40px" : "-90px" }}
      transition={{ duration: listing ? 0.45 : 0.65, ease: ds.motion.ease }}
      whileHover={listing ? undefined : { y: -8 }}
      whileTap={listing ? { scale: 0.98 } : undefined}
      className={cn(
        "product-card-premium group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-[linear-gradient(180deg,#141416_0%,#0C0C0E_100%)] transition duration-500 will-change-transform",
        listing
          ? "min-h-0 rounded-2xl p-3.5 shadow-[0_10px_36px_rgba(0,0,0,0.32)] active:border-white/16 max-lg:gap-2 lg:min-h-[520px] lg:rounded-[1.75rem] lg:p-6 lg:shadow-none hover:border-white/20 hover:shadow-[0_34px_120px_rgba(0,0,0,0.55)]"
          : "min-h-[520px] rounded-[1.75rem] p-6 hover:border-white/20 hover:shadow-[0_34px_120px_rgba(0,0,0,0.55)]",
        large && "lg:col-span-2 lg:min-h-[580px]",
        className
      )}
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 max-lg:group-active:opacity-100">
        <div className={cn("absolute left-1/2 -translate-x-1/2 rounded-full bg-white/7 blur-3xl", listing ? "top-6 h-28 w-28 lg:top-10 lg:h-60 lg:w-60" : "top-10 h-60 w-60")} />
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" />
      </div>
      <div className="relative">
        <div className={cn("flex items-center justify-between", listing && "max-lg:mb-1")}>
          <div>
            <span className={cn("text-zinc-500", listing ? "text-[10px] lg:text-sm" : "text-sm")}>{label ?? "В наявності"}</span>
            {category ? <p className={cn("mt-1 uppercase tracking-[0.18em] text-zinc-700 max-lg:hidden", listing ? "text-xs" : "text-xs")}>{category}</p> : null}
          </div>
          <span className="h-1.5 w-1.5 rounded-full bg-[#39FF14] lg:h-2 lg:w-2" />
        </div>
        <motion.div
          className={cn("relative transition duration-500 will-change-transform", listing ? "max-lg:-mx-1 group-active:scale-[1.03] lg:group-hover:scale-[1.055]" : "group-hover:scale-[1.055]")}
          whileHover={listing ? undefined : { x: 4, y: -6 }}
        >
          <ProductVisual shape={shape} size={visualSize} accent={accent} className={listing ? "max-lg:h-28 lg:h-64" : undefined} />
        </motion.div>
      </div>
      <div className="relative">
        <h3 className={cn(listing ? "text-sm font-semibold leading-5 tracking-[-0.03em] text-white lg:text-2xl lg:leading-tight" : ds.typography.title, "text-white")}>{name}</h3>
        <p className={cn("text-zinc-400", listing ? "mt-1.5 line-clamp-2 text-[11px] leading-4 lg:mt-3 lg:min-h-16 lg:text-sm lg:leading-6" : "mt-3 min-h-16 text-sm leading-6")}>{description}</p>
        <div className={cn("flex items-center justify-between gap-2", listing ? "mt-3 lg:mt-7 lg:gap-4" : "mt-7 gap-4")}>
          <p className={cn("font-semibold text-white", listing ? "text-sm lg:text-lg" : "text-lg")}>{price}</p>
          <Link
            href={`/product/${id}`}
            className={cn(
              "rounded-full bg-white font-semibold text-black shadow-[0_10px_28px_rgba(255,255,255,0.1)] transition duration-300 hover:bg-zinc-200",
              listing
                ? "px-3 py-1.5 text-[11px] lg:translate-y-3 lg:px-5 lg:py-2.5 lg:text-sm lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:hover:shadow-[0_18px_44px_rgba(255,255,255,0.16)]"
                : "px-5 py-2.5 text-sm opacity-100 shadow-[0_14px_36px_rgba(255,255,255,0.12)] hover:shadow-[0_18px_44px_rgba(255,255,255,0.16)] lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
            )}
          >
            Детальніше
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
