import Hero from "../components/Hero";
import EditorialSpread from "../components/EditorialSpread";
import Film from "../components/Film";
import DuetGrid from "../components/DuetGrid";
import TheHouse from "../components/TheHouse";
import CollectionGrid from "../components/CollectionGrid";
import SubscribeCTA from "../components/SubscribeCTA";
import JournalPreview from "../components/JournalPreview";
import { HOME_PRODUCTS } from "../lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      <EditorialSpread
        slot="EDITORIAL_SPREAD_IMAGE"
        tone="bw"
        alt="Portrait in the Foundations collection, lit by window light"
        eyebrow="The Collection"
        title="Foundations."
        quote="A private atelier of slow-fashion lingerie, delivered in limited drops."
        body="Each piece arrives once. Considered, French-seamed, finite. The Foundations collection is the first chapter — worn close, held longer than the season demands."
        ctaLabel="Shop the Collection →"
        ctaHref="/collections/foundations"
      />

      <Film alt="Atmospheric landscape film still from the Paris atelier" />

      <DuetGrid />

      <TheHouse />

      <CollectionGrid products={HOME_PRODUCTS} columns={3} />

      <SubscribeCTA />

      <JournalPreview />
    </>
  );
}
