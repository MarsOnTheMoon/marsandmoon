"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * RevealWrapper — slow, inevitable scroll reveal.
 * 900ms, cubic-bezier(0.16, 1, 0.3, 1). Children stagger 120ms.
 *
 * Use `as` to render a section/article/etc. Use `index` only when you
 * need a manual stagger outside a stagger container.
 */

const reveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** When true, wraps children in a stagger container. */
  stagger?: boolean;
  /** Viewport visibility threshold (0–1). */
  amount?: number;
  as?: "div" | "section" | "article" | "header" | "footer" | "ul" | "li";
};

export function Reveal({
  children,
  className,
  stagger: useStagger = false,
  amount = 0.2,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={useStagger ? stagger : reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </MotionTag>
  );
}

/** A single staggered child. Place inside a <Reveal stagger>. */
export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "a" | "li";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={reveal}>
      {children}
    </MotionTag>
  );
}

export { reveal as revealVariant, stagger as staggerContainer };
