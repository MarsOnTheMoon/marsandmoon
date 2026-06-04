import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "../../../components/PageHero";
import EditorialSpread from "../../../components/EditorialSpread";
import Film from "../../../components/Film";
import CollectionGrid from "../../../components/CollectionGrid";
import SubscribeCTA from "../../../components/SubscribeCTA";
import { COLLECTIONS, HOME_PRODUCTS } from "../../../lib/content";

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const collection = COLLECTIONS.find((c) => c.slug === params.slug);
  if (!collection) return { title: "Collections — Mars & Moon" };
  return {
    title: `${collection.name} — Mars & Moon`,
    description: collection.body,
  };
}

export default function CollectionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const collection = COLLECTIONS.find((c) => c.slug === params.slug);
  if (!collection) notFound();

  const pieces = HOME_PRODUCTS.filter((p) =>
    collection.slug === "velvet-hour"
      ? p.collection === "Velvet Hour"
      : p.collection === "Foundations"
  );

  return (
    <>
      <PageHero
        slot="COLLECTION_HERO"
        tone="midnight"
        alt={`${collection.name} — opening image`}
        eyebrow={collection.eyebrow}
        title={`${collection.name.replace(/^The /, "")}.`}
        sub={collection.tagline}
        height="100vh"
      />

      <EditorialSpread
        slot="COLLECTION_DETAIL_01"
        tone="bw"
        alt={`${collection.name} editorial detail`}
        eyebrow="The Drop"
        title="The Pieces."
        quote={collection.tagline}
        body={collection.body}
        ctaLabel="Begin the Subscription →"
        ctaHref="/subscribe"
      />

      <Film
        slot="COLLECTION_DETAIL_02"
        tone="plum"
        alt={`${collection.name} atmospheric film still`}
        caption="Paris Atelier, MMXXVI"
      />

      <EditorialSpread
        slot="COLLECTION_DETAIL_03"
        tone="warm"
        alt={`${collection.name} portrait`}
        eyebrow="The Making"
        title="French-Seamed."
        quote="Each piece arrives once. Considered, finite."
        body="No restocks. No seasons in the conventional sense. When a drop closes, it closes — held in the archive, never reissued."
        ctaLabel="The House Story →"
        ctaHref="/about"
        reverse
      />

      <CollectionGrid
        title="The Pieces."
        eyebrow={collection.name}
        products={pieces.length ? pieces : HOME_PRODUCTS.slice(0, 3)}
        columns={3}
        ctaLabel="View All →"
        ctaHref="/collections"
      />

      <SubscribeCTA />
    </>
  );
}
