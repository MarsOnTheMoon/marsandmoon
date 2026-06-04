import Link from "next/link";
import Media from "./Media";
import { Reveal, RevealItem } from "./RevealWrapper";
import styles from "./SubscribeCTA.module.css";

type SubscribeCTAProps = {
  eyebrow?: string;
  title?: React.ReactNode;
  subhead?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function SubscribeCTA({
  eyebrow = "Your December Arrives Thursday.",
  title = (
    <>
      Begin the
      <br />
      Subscription.
    </>
  ),
  subhead = "Limited drops. Delivered to your door. A ceremony, not a shipment.",
  ctaLabel = "Open the Envelope →",
  ctaHref = "/subscribe",
}: SubscribeCTAProps) {
  return (
    <section className={styles.section} aria-label="Begin the subscription">
      <div className={styles.bg}>
        <Media
          slot="SUBSCRIBE_BG_IMAGE"
          tone="plum"
          alt="A dark, moody atelier interior in plum and midnight tones"
        />
      </div>
      <div className={styles.overlay} />
      <Reveal stagger className={styles.content} as="div">
        <RevealItem as="span" className="mm-eyebrow">
          {eyebrow}
        </RevealItem>
        <RevealItem as="h2" className={`mm-h1 ${styles.title}`}>
          {title}
        </RevealItem>
        <RevealItem as="p" className={styles.subhead}>
          {subhead}
        </RevealItem>
        <RevealItem as="div">
          <Link href={ctaHref} className="mm-button">
            {ctaLabel}
          </Link>
        </RevealItem>
      </Reveal>
    </section>
  );
}
