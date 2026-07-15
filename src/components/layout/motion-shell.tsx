"use client";

import { motion } from "framer-motion";
import { designSystem as ds } from "@/lib/design-system";

export function MotionShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: ds.motion.ease }} className={className}>
      {children}
    </motion.div>
  );
}
