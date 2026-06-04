import Link from "next/link";
import Media from "./Media";
import styles from "./JournalCard.module.css";

export type Article = {
  slot: string;
  tone?: "bone" | "bw" | "warm" | "plum" | "midnight";
  category: string;
  title: React.ReactNode;
  date: string;
  href?: string;
  variant?: "large" | "small";
};

export default function JournalCard({
  slot,
  tone = "bone",
  category,
  title,
  date,
  href = "/journal",
  variant = "small",
}: Article) {
  return (
    <Link
      href={href}
      className={`${styles.card} ${variant === "large" ? styles.large : styles.small}`}
    >
      <div className={styles.image}>
        <Media slot={slot} tone={tone} alt={typeof title === "string" ? title : category} />
      </div>
      <div className={styles.info}>
        <span className={`mm-eyebrow ${styles.category}`}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>{date}</p>
      </div>
    </Link>
  );
}
