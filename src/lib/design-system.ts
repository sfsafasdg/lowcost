export const designSystem = {
  colors: {
    black: "#050505",
    surface: "#0B0B0D",
    elevated: "#111114",
    line: "rgba(255,255,255,0.1)",
    text: "#F7F7F7",
    muted: "#A1A1AA",
    green: "#39FF14",
    purple: "#8B5CFF",
  },
  typography: {
    hero: "text-5xl sm:text-6xl lg:text-7xl xl:text-[5.9rem] leading-[0.96] tracking-[-0.065em]",
    display: "text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.055em]",
    title: "text-2xl lg:text-3xl leading-tight tracking-[-0.035em]",
    body: "text-base lg:text-lg leading-8 text-zinc-400",
    label: "text-xs font-semibold uppercase tracking-[0.24em]",
  },
  spacing: {
    section: "px-5 py-20 sm:py-24 lg:py-32",
    container: "mx-auto max-w-[1440px]",
    narrow: "mx-auto max-w-6xl",
  },
  motion: {
    ease: [0.22, 1, 0.36, 1] as const,
    duration: 0.75,
    slow: 1.2,
  },
} as const;
