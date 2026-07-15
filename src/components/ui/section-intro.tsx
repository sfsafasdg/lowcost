"use client";

import { motion } from "framer-motion";
import { designSystem as ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function SectionIntro({
  eyebrow,
  title,
  text,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={fadeUp}
      transition={{ duration: ds.motion.duration, ease: ds.motion.ease }}
      className={cn("max-w-4xl", align === "center" && "mx-auto text-center", className)}
    >
      <p className={cn(ds.typography.label, "mb-5 text-[#39FF14]/80")}>{eyebrow}</p>
      <h2 className={cn(ds.typography.display, "text-white")}>{title}</h2>
      {text ? <p className={cn(ds.typography.body, "mt-6 max-w-2xl", align === "center" && "mx-auto")}>{text}</p> : null}
    </motion.div>
  );
}
