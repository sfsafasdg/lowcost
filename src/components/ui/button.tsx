"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const styles = {
  primary: "bg-white text-black hover:bg-zinc-200",
  secondary: "border border-white/14 bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.07]",
  ghost: "text-zinc-300 hover:text-white",
};

export function Button({ children, href, variant = "primary", className, onClick, type = "button" }: ButtonProps) {
  const classes = cn(
    "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition md:h-13 md:px-7",
    styles[variant],
    className
  );

  if (href) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={classes}>
      {children}
    </motion.button>
  );
}
