import type { Metadata } from "next";
import Media from "../../components/Media";
import SubscribeForm from "../../components/SubscribeForm";
import styles from "./subscribe.module.css";

export const metadata: Metadata = {
  title: "Subscribe — Mars & Moon",
  description:
    "Begin the subscription. Limited drops, delivered to your door. A ceremony, not a shipment.",
};

export default function SubscribePage() {
  return (
    <section className={styles.split} aria-label="Begin the subscription">
      <div className={styles.image}>
        <Media
          slot="SUBSCRIBE_PORTRAIT"
          tone="plum"
          alt="The most cinematic portrait from the Mars & Moon shoot"
          priority
        />
      </div>
      <SubscribeForm />
    </section>
  );
}
