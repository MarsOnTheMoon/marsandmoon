import Media from "./Media";
import { Reveal, RevealItem } from "./RevealWrapper";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  slot: string;
  tone?: "bone" | "bw" | "warm" | "plum" | "midnight";
  alt: string;
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  height?: string;
  align?: "left" | "center";
};

export default function PageHero({
  slot,
  tone = "midnight",
  alt,
  eyebrow,
  title,
  sub,
  height = "65vh",
  align = "left",
}: PageHeroProps) {
  return (
    <section
      className={`${styles.hero} ${align === "center" ? styles.center : ""}`}
      style={{ height }}
      aria-label={typeof title === "string" ? title : eyebrow}
    >
      <div className={styles.media}>
        <Media slot={slot} tone={tone} alt={alt} priority />
      </div>
      <div className={styles.overlay} />
      <Reveal stagger className={styles.content} as="div">
        <RevealItem as="span" className="mm-eyebrow">
          {eyebrow}
        </RevealItem>
        <RevealItem as="h1" className={`mm-display ${styles.title}`}>
          {title}
        </RevealItem>
        {sub ? (
          <RevealItem as="p" className={styles.sub}>
            {sub}
          </RevealItem>
        ) : null}
      </Reveal>
    </section>
  );
}
