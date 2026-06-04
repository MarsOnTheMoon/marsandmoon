"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Media from "./Media";
import styles from "./Hero.module.css";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const [offset, setOffset] = useState(0);
  const [indicatorVisible, setIndicatorVisible] = useState(true);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setOffset(y * 0.3);
      setIndicatorVisible(y < 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.hero} aria-label="The Velvet Hour">
      <div
        ref={mediaRef}
        className={styles.media}
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Media
          slot="HERO_IMAGE"
          alt="A figure in slow-fashion lingerie, lit by soft window light in the Paris atelier"
          tone="midnight"
          priority
        />
      </div>
      <div className={styles.overlay} />

      <motion.div
        className={styles.content}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={item} className="mm-eyebrow">
          A New Arrival · The Twelfth
        </motion.span>
        <motion.h1 variants={item} className={`mm-display ${styles.title}`}>
          The Velvet
          <br />
          Hour.
        </motion.h1>
        <motion.p variants={item} className={styles.sub}>
          Worn close. Held longer.
        </motion.p>
        <motion.span variants={item}>
          <Link href="/subscribe" className={`mm-cta ${styles.cta}`}>
            Begin the Subscription →
          </Link>
        </motion.span>
      </motion.div>

      <div
        className={`${styles.scroll} ${indicatorVisible ? "" : styles.scrollHidden}`}
        aria-hidden="true"
      />
    </section>
  );
}
