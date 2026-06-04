import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import CollectionGrid from "../../components/CollectionGrid";
import SubscribeCTA from "../../components/SubscribeCTA";
import { HOME_PRODUCTS, COLLECTIONS } from "../../lib/content";
import styles from "./collections.module.css";

export const metadata: Metadata = {
  title: "Collections — Mars & Moon",
  description: "Finite drops from a private Paris atelier. Worn close. Held longer.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        slot="COLLECTION_HERO"
        tone="midnight"
        alt="Wide, atmospheric image of the Mars & Moon atelier"
        eyebrow="The Atelier · MMXXVI"
        title="Collections."
        sub="Each drop is finite. Considered, French-seamed, yours once."
        height="65vh"
      />

      <nav className={styles.filterBar} aria-label="Filter collections">
        <span className={`${styles.filter} ${styles.active}`}>All</span>
        {COLLECTIONS.map((c) => (
          <Link
            key={c.slug}
            href={`/collections/${c.slug}`}
            className={styles.filter}
          >
            {c.name.replace(/^The /, "")}
          </Link>
        ))}
        <span className={styles.filter}>Archive</span>
      </nav>

      <CollectionGrid
        title="The Collection."
        eyebrow="Now Arriving"
        products={HOME_PRODUCTS}
        columns={4}
        ctaLabel=""
      />

      <SubscribeCTA />
    </>
  );
}
