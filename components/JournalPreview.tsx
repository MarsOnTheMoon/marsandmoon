import JournalCard, { type Article } from "./JournalCard";
import { Reveal, RevealItem } from "./RevealWrapper";
import styles from "./JournalPreview.module.css";

const ARTICLES: Article[] = [
  {
    slot: "JOURNAL_CARD_01",
    tone: "bw",
    category: "The Atelier",
    title: (
      <>
        Worn Close.
        <br />
        Notes on the Velvet Hour.
      </>
    ),
    date: "May MMXXVI",
    variant: "large",
    href: "/journal",
  },
  {
    slot: "JOURNAL_CARD_02",
    tone: "warm",
    category: "Photography",
    title: (
      <>
        The Shoot.
        <br />
        Paris, February.
      </>
    ),
    date: "February MMXXVI",
    variant: "small",
    href: "/journal",
  },
  {
    slot: "JOURNAL_CARD_03",
    tone: "plum",
    category: "The House",
    title: "Why Finite.",
    date: "January MMXXVI",
    variant: "small",
    href: "/journal",
  },
];

export default function JournalPreview() {
  const [large, ...small] = ARTICLES;
  return (
    <section className={styles.section} aria-label="The journal">
      <div className={styles.intro}>
        <span className="mm-hairline" />
        <span className={`mm-eyebrow ${styles.introEyebrow}`}>
          From the Atelier
        </span>
      </div>
      <h2 className={`mm-h2 ${styles.title}`}>The Journal.</h2>

      <Reveal stagger className={styles.grid} amount={0.1}>
        <RevealItem className={styles.large}>
          <JournalCard {...large} />
        </RevealItem>
        <div className={styles.smallColumn}>
          {small.map((a) => (
            <RevealItem key={a.slot}>
              <JournalCard {...a} />
            </RevealItem>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
