"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const LEFT_LINKS = [
  { label: "Collections", href: "/collections" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
];

function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`${styles.wordmark}${className ? ` ${className}` : ""}`}>
      <span className={styles.wordmarkText}>Mars</span>
      <span className={styles.wordmarkAmp}>&amp;</span>
      <span className={styles.wordmarkText}>Moon</span>
    </span>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header>
      <nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        aria-label="Primary"
      >
        <ul className={styles.cluster}>
          {LEFT_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={styles.link}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/" className={styles.wordmarkLink} aria-label="Mars & Moon, home">
          <Wordmark />
        </Link>

        <ul className={`${styles.cluster} ${styles.right}`}>
          <li>
            <Link href="/subscribe" className={styles.subscribe}>
              Subscribe
            </Link>
          </li>
          <li>
            <Link href="/collections" className={styles.link}>
              Search
            </Link>
          </li>
          <li>
            <Link href="/subscribe" className={styles.link}>
              Bag · 0
            </Link>
          </li>
        </ul>

        <button
          className={styles.burger}
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        aria-hidden={!open}
      >
        <button
          className={styles.close}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <span />
          <span />
        </button>
        <ul className={styles.overlayLinks}>
          {LEFT_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/subscribe" onClick={() => setOpen(false)}>
              Subscribe
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
