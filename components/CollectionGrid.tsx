import Link from "next/link";
import ProductCard, { type Product } from "./ProductCard";
import { Reveal, RevealItem } from "./RevealWrapper";
import styles from "./CollectionGrid.module.css";

type CollectionGridProps = {
  title?: string;
  eyebrow?: string;
  ctaLabel?: string;
  ctaHref?: string;
  products: Product[];
  columns?: 3 | 4;
};

export default function CollectionGrid({
  title = "The Collection.",
  eyebrow,
  ctaLabel = "View All →",
  ctaHref = "/collections",
  products,
  columns = 3,
}: CollectionGridProps) {
  return (
    <section className={styles.section} aria-label={title}>
      <div className={styles.header}>
        <div>
          <span className="mm-hairline" />
          {eyebrow ? (
            <span className={`mm-eyebrow ${styles.eyebrow}`}>{eyebrow}</span>
          ) : null}
          <h2 className={`mm-h2 ${styles.title}`}>{title}</h2>
        </div>
        {ctaLabel ? (
          <Link href={ctaHref} className="mm-cta">
            {ctaLabel}
          </Link>
        ) : null}
      </div>

      <Reveal
        stagger
        as="ul"
        className={`${styles.grid} ${columns === 4 ? styles.cols4 : styles.cols3}`}
        amount={0.1}
      >
        {products.map((p) => (
          <RevealItem key={p.slot} as="li" className={styles.cell}>
            <ProductCard {...p} />
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
