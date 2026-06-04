import type { Product } from "../components/ProductCard";

export const HOME_PRODUCTS: Product[] = [
  {
    slot: "PRODUCT_CARD_01",
    tone: "bw",
    collection: "Velvet Hour",
    name: "Bias-cut Bodice",
    price: "€ 320",
  },
  {
    slot: "PRODUCT_CARD_02",
    tone: "warm",
    collection: "Foundations",
    name: "Charmeuse Robe",
    price: "€ 480",
  },
  {
    slot: "PRODUCT_CARD_03",
    tone: "plum",
    collection: "Velvet Hour",
    name: "Lace Teddy",
    price: "€ 390",
  },
  {
    slot: "PRODUCT_CARD_04",
    tone: "warm",
    collection: "Foundations",
    name: "Silk Bralette",
    price: "€ 220",
  },
  {
    slot: "PRODUCT_CARD_05",
    tone: "bw",
    collection: "Velvet Hour",
    name: "French Brief",
    price: "€ 180",
  },
  {
    slot: "PRODUCT_CARD_06",
    tone: "plum",
    collection: "Foundations",
    name: "Satin Slip",
    price: "€ 340",
  },
];

export type Collection = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  body: string;
};

export const COLLECTIONS: Collection[] = [
  {
    slug: "velvet-hour",
    name: "The Velvet Hour",
    eyebrow: "The Twelfth · MMXXVI",
    tagline: "Worn close. Held longer.",
    body: "The twelfth arrival. Velvet, charmeuse and a low, ceremonial light. Each piece is French-seamed and finite — worn close, held longer than the season demands.",
  },
  {
    slug: "foundations",
    name: "Foundations",
    eyebrow: "The First Chapter",
    tagline: "Considered, French-seamed, finite.",
    body: "A private atelier of slow-fashion lingerie, delivered in limited drops. Foundations is the first chapter — the quiet architecture beneath everything that follows.",
  },
];
