import Link from "next/link";
import Media from "./Media";
import { Reveal, RevealItem } from "./RevealWrapper";
import styles from "./EditorialSpread.module.css";

type EditorialSpreadProps = {
  slot: string;
  tone?: "bone" | "bw" | "warm" | "plum" | "midnight";
  alt: string;
  eyebrow: string;
  title: string;
  quote: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  /** image-right reverses the column order on desktop */
  reverse?: boolean;
};

export default function EditorialSpread({
  slot,
  tone = "bw",
  alt,
  eyebrow,
  title,
  quote,
  body,
  ctaLabel,
  ctaHref,
  reverse = false,
}: EditorialSpreadProps) {
  return (
    <section className={`${styles.spread} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.image}>
        <Media slot={slot} tone={tone} alt={alt} />
      </div>
      <Reveal stagger className={styles.content} as="div">
        <RevealItem as="span" className="mm-eyebrow">
          {eyebrow}
        </RevealItem>
        <RevealItem as="h2" className={`mm-h2 ${styles.title}`}>
          {title}
        </RevealItem>
        <RevealItem as="p" className={`mm-quote ${styles.quote}`}>
          {quote}
        </RevealItem>
        <RevealItem as="p" className={`mm-body ${styles.body}`}>
          {body}
        </RevealItem>
        <RevealItem as="div">
          <Link href={ctaHref} className="mm-cta">
            {ctaLabel}
          </Link>
        </RevealItem>
        <RevealItem as="span" className={`mm-ornament ${styles.ornament}`}>
          ✦
        </RevealItem>
      </Reveal>
    </section>
  );
}
