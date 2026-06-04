import Media from "./Media";
import { Reveal } from "./RevealWrapper";
import styles from "./DuetGrid.module.css";

export default function DuetGrid() {
  return (
    <section className={styles.duet} aria-label="Editorial duet">
      <div className={styles.panel}>
        <Media
          slot="DUET_LEFT"
          tone="bw"
          alt="Black and white detail of lace and hands in the atelier"
        />
      </div>
      <div className={styles.panel}>
        <Media
          slot="DUET_RIGHT"
          tone="warm"
          alt="Colour editorial portrait by soft window light"
        />
      </div>
      <Reveal className={styles.quoteWrap} amount={0.4}>
        <p className={styles.quote}>
          Worn close.
          <br />
          Held longer.
        </p>
      </Reveal>
    </section>
  );
}
