import Link from "next/link";
import Media from "./Media";
import styles from "./ProductCard.module.css";

export type Product = {
  slot: string;
  tone?: "bone" | "bw" | "warm" | "plum" | "midnight";
  collection: string;
  name: string;
  price: string;
  href?: string;
};

export default function ProductCard({
  slot,
  tone = "bone",
  collection,
  name,
  price,
  href = "/collections",
}: Product) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.image}>
        <Media slot={slot} tone={tone} alt={`${name} — ${collection}`} />
      </div>
      <div className={styles.info}>
        <span className={`mm-eyebrow ${styles.collection}`}>{collection}</span>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </Link>
  );
}
