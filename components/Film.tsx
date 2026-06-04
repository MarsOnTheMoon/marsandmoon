import Media from "./Media";
import styles from "./Film.module.css";

type FilmProps = {
  slot?: string;
  tone?: "bone" | "bw" | "warm" | "plum" | "midnight";
  alt: string;
  caption?: string;
  height?: string;
};

export default function Film({
  slot = "EDITORIAL_FILM_IMAGE",
  tone = "bw",
  alt,
  caption = "Paris Atelier, MMXXVI",
  height = "80vh",
}: FilmProps) {
  return (
    <div className={styles.film} style={{ height }}>
      <Media slot={slot} tone={tone} alt={alt} />
      {caption ? <span className={styles.caption}>{caption}</span> : null}
    </div>
  );
}
