import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <span className={styles.wordmark}>
            <span className={styles.wordmarkText}>Mars</span>
            <span className={styles.wordmarkAmp}>&amp;</span>
            <span className={styles.wordmarkText}>Moon</span>
          </span>
          <p className={styles.tagline}>
            From Mars
            <br />
            and Moon,
            <br />
            with love.
          </p>
        </div>

        <nav className={styles.col} aria-label="Collections">
          <p className={styles.colTitle}>Collections</p>
          <ul className={styles.links}>
            <li>
              <Link href="/collections/velvet-hour">Velvet Hour</Link>
            </li>
            <li>
              <Link href="/collections/foundations">Foundations</Link>
            </li>
            <li>
              <Link href="/collections">Archive</Link>
            </li>
            <li>
              <Link href="/collections">Gift</Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.col} aria-label="The House">
          <p className={styles.colTitle}>The House</p>
          <ul className={styles.links}>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/journal">Journal</Link>
            </li>
            <li>
              <Link href="/journal">Press</Link>
            </li>
            <li>
              <Link href="/about">Stockists</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.col}>
          <p className={styles.colTitle}>The Subscription</p>
          <p className={styles.emailLabel}>
            Your address. Your arrival. Once a month, until you say otherwise.
          </p>
          <form
            className={styles.inputRow}
            action="/subscribe"
            method="get"
          >
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Your Address"
              aria-label="Email address"
            />
            <button className={styles.submit} type="submit">
              Begin →
            </button>
          </form>
        </div>
      </div>

      <div className={styles.base}>
        <p className={styles.baseText}>© MMXXVI Mars &amp; Moon. Paris.</p>
        <div className={styles.legal}>
          <Link href="/about">Privacy</Link>
          <Link href="/about">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
