import { cn } from "@/lib/utils";

export type ProductShape = "phone" | "laptop" | "tablet" | "watch" | "buds" | "speaker" | "charger" | "case";
export type ProductAccent = "green" | "purple" | "neutral";

export function ProductVisual({
  shape,
  size = "md",
  accent = "green",
  className,
}: {
  shape: ProductShape;
  size?: "xs" | "sm" | "md" | "lg" | "hero";
  accent?: ProductAccent;
  className?: string;
}) {
  const glow =
    accent === "green"
      ? "rgba(57,255,20,0.18)"
      : accent === "purple"
        ? "rgba(139,92,255,0.22)"
        : "rgba(255,255,255,0.1)";

  const sizeClass = {
    xs: "h-24 w-full",
    sm: "h-36 w-full",
    md: "h-64 w-full",
    lg: "h-[360px] w-full",
    hero: "h-[520px] w-full",
  }[size];

  return (
    <div className={cn("product-visual relative mx-auto flex items-center justify-center", sizeClass, className)} style={{ "--product-glow": glow } as React.CSSProperties}>
      <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--product-glow)] blur-3xl" />
      <div className="absolute bottom-[7%] left-1/2 h-[10%] w-[58%] -translate-x-1/2 rounded-full bg-black/60 blur-2xl" />
      {shape === "phone" ? (
        <div className="relative h-[82%] w-[34%] min-w-20 overflow-hidden rounded-[2rem] border border-white/20 bg-[linear-gradient(145deg,#3a3a3f,#050505_46%,#17171a)] p-2 shadow-[0_42px_130px_rgba(0,0,0,0.72)]">
          <div className="absolute inset-y-8 left-4 w-px bg-white/28 blur-[1px]" />
          <div className="absolute -right-12 -top-16 h-40 w-20 rotate-12 bg-white/20 blur-2xl" />
          <div className="h-full rounded-[1.5rem] border border-white/8 bg-[radial-gradient(circle_at_52%_18%,rgba(255,255,255,0.22),transparent_26%),linear-gradient(160deg,#111114,#050505)]" />
          <div className="absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
        </div>
      ) : null}
      {shape === "laptop" ? (
        <div className="relative w-[78%]">
          <div className="mx-auto aspect-[16/10] w-[82%] overflow-hidden rounded-t-2xl border border-white/16 bg-[linear-gradient(145deg,#2d2d33,#070707)] p-3 shadow-[0_42px_130px_rgba(0,0,0,0.7)]">
            <div className="relative h-full overflow-hidden rounded-xl bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,255,0.22),transparent_30%),#050505]">
              <div className="absolute -left-16 top-0 h-full w-24 rotate-12 bg-white/10 blur-xl" />
              <div className="absolute inset-x-10 top-8 h-px bg-white/20" />
            </div>
          </div>
          <div className="h-5 rounded-b-[2rem] bg-[linear-gradient(90deg,#27272a,#d4d4d8_50%,#27272a)] shadow-[0_20px_60px_rgba(0,0,0,0.45)]" />
        </div>
      ) : null}
      {shape === "tablet" ? (
        <div className="relative h-[72%] w-[54%] overflow-hidden rounded-[2rem] border border-white/16 bg-[linear-gradient(145deg,#303036,#080808)] p-3 shadow-[0_42px_120px_rgba(0,0,0,0.68)]">
          <div className="absolute -right-10 top-8 h-56 w-20 rotate-12 bg-white/12 blur-2xl" />
          <div className="h-full rounded-[1.45rem] bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.18),transparent_28%),#050505]" />
        </div>
      ) : null}
      {shape === "watch" ? (
        <div className="relative h-[60%] w-[34%]">
          <div className="absolute left-1/2 top-0 h-full w-[42%] -translate-x-1/2 rounded-full bg-zinc-800" />
          <div className="absolute inset-x-0 top-1/2 aspect-square -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/18 bg-[linear-gradient(145deg,#36363a,#070707)] p-3 shadow-[0_38px_110px_rgba(0,0,0,0.66)]">
            <div className="h-full rounded-[1.4rem] bg-[radial-gradient(circle_at_50%_30%,rgba(57,255,20,0.22),transparent_34%),#050505]" />
            <div className="absolute -right-5 top-4 h-28 w-10 rotate-12 bg-white/16 blur-xl" />
          </div>
        </div>
      ) : null}
      {shape === "buds" ? (
        <div className="relative h-[66%] w-[58%]">
          <div className="absolute bottom-0 left-1/2 h-[54%] w-[70%] -translate-x-1/2 rounded-[2rem] border border-white/16 bg-[linear-gradient(145deg,#f5f5f5,#a1a1aa)] shadow-[0_34px_100px_rgba(0,0,0,0.58)]" />
          <div className="absolute left-[26%] top-[8%] h-[54%] w-[18%] rounded-full bg-zinc-100" />
          <div className="absolute right-[26%] top-[8%] h-[54%] w-[18%] rounded-full bg-zinc-100" />
        </div>
      ) : null}
      {shape === "speaker" ? (
        <div className="relative h-[48%] w-[76%] rounded-[2.5rem] border border-white/16 bg-[linear-gradient(145deg,#222226,#060606)] shadow-[0_34px_100px_rgba(0,0,0,0.62)]">
          <div className="absolute left-7 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full border border-white/20 bg-[#8B5CFF]/18" />
          <div className="absolute right-7 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full border border-white/20 bg-white/6" />
          <div className="absolute inset-y-8 left-1/2 w-px bg-white/10" />
        </div>
      ) : null}
      {shape === "charger" ? (
        <div className="relative h-[58%] w-[42%] rounded-[1.6rem] border border-white/16 bg-[linear-gradient(145deg,#ededed,#8b8b92)] shadow-[0_34px_100px_rgba(0,0,0,0.55)]">
          <div className="absolute left-1/2 top-6 h-2 w-16 -translate-x-1/2 rounded-full bg-black/30" />
          <div className="absolute bottom-7 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full border border-black/20" />
        </div>
      ) : null}
      {shape === "case" ? (
        <div className="relative h-[72%] w-[36%] rounded-[2rem] border border-white/18 bg-[linear-gradient(145deg,#1d1d20,#050505)] shadow-[0_34px_100px_rgba(0,0,0,0.58)]">
          <div className="absolute left-5 top-5 h-16 w-16 rounded-2xl border border-white/14" />
          <div className="absolute inset-4 rounded-[1.5rem] border border-white/8" />
        </div>
      ) : null}
    </div>
  );
}
