import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import EditorialSpread from "../../components/EditorialSpread";
import Film from "../../components/Film";
import TheHouse from "../../components/TheHouse";
import SubscribeCTA from "../../components/SubscribeCTA";

export const metadata: Metadata = {
  title: "About — Mars & Moon",
  description:
    "A house, not a retailer. Romantic, with an edge. The story of a private atelier of slow-fashion lingerie.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        slot="ABOUT_HERO"
        tone="midnight"
        alt="Brand statement image for Mars & Moon"
        eyebrow="A House, Not a Retailer"
        title={
          <>
            Romantic,
            <br />
            With an Edge.
          </>
        }
        sub="Worn close. Held longer."
        height="100vh"
        align="center"
      />

      <EditorialSpread
        slot="ABOUT_MID_01"
        tone="bw"
        alt="The founders' atelier, Paris"
        eyebrow="The Story"
        title="The House."
        quote="Mars & Moon sits at the intersection of celestial reverence and subversive intimacy."
        body="We began with a single conviction: that what is worn closest should be made most carefully. Every collection is finite. Every delivery is an arrival, not a shipment."
        ctaLabel="See the Collections →"
        ctaHref="/collections"
      />

      <Film
        slot="ABOUT_MID_02"
        tone="warm"
        alt="Photography philosophy — soft window light, negative space"
        caption="Paris Atelier, MMXXVI"
      />

      <TheHouse
        eyebrow="The Subscription Model"
        title={
          <>
            An Arrival,
            <br />
            Not a Shipment.
          </>
        }
        body="Each month, a finite drop is curated by the atelier and delivered to your door. No restocks. No seasons in the conventional sense. When a drop closes, it closes — yours once, held longer than the season demands."
        ctaLabel="Begin the Subscription →"
        ctaHref="/subscribe"
      />

      <SubscribeCTA />
    </>
  );
}
