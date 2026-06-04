import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import JournalPreview from "../../components/JournalPreview";
import SubscribeCTA from "../../components/SubscribeCTA";

export const metadata: Metadata = {
  title: "Journal — Mars & Moon",
  description:
    "Editorial and brand storytelling from the Paris atelier. Notes on the house, the shoot, and why finite.",
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        slot="EDITORIAL_FILM_IMAGE"
        tone="bw"
        alt="Editorial film still from the Paris atelier"
        eyebrow="From the Atelier"
        title="The Journal."
        sub="Notes on the house, the shoot, and the slow craft of finite things."
        height="60vh"
      />
      <JournalPreview />
      <SubscribeCTA
        eyebrow="A Letter from the Atelier"
        ctaLabel="Begin the Subscription →"
      />
    </>
  );
}
