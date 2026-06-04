import Link from "next/link";
import { Reveal, RevealItem } from "./RevealWrapper";
import styles from "./TheHouse.module.css";

type TheHouseProps = {
  eyebrow?: string;
  title?: React.ReactNode;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function TheHouse({
  eyebrow = "A House, Not a Retailer",
  title = (
    <>
      Romantic,
      <br />
      With an Edge.
    </>
  ),
  body = "Mars & Moon sits at the intersection of celestial reverence and subversive intimacy. Every collection is finite. Every delivery is an arrival, not a shipment.",
  ctaLabel = "The House Story →",
  ctaHref = "/about",
}: TheHouseProps) {
  return (
    <section className={styles.house} aria-label="The house">
      <Reveal stagger className={styles.inner} as="div">
        <RevealItem as="span" className="mm-eyebrow">
          {eyebrow}
        </RevealItem>
        <RevealItem as="h2" className={`mm-h2 ${styles.title}`}>
          {title}
        </RevealItem>
        <RevealItem as="p" className={`mm-body ${styles.body}`}>
          {body}
        </RevealItem>
        {ctaLabel ? (
          <RevealItem as="div">
            <Link href={ctaHref} className={`mm-cta ${styles.cta}`}>
              {ctaLabel}
            </Link>
          </RevealItem>
        ) : null}
      </Reveal>
    </section>
  );
}
