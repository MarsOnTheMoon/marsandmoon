"use client";

import { useState } from "react";
import { Reveal, RevealItem } from "./RevealWrapper";
import styles from "./SubscribeForm.module.css";

const PLANS = [
  { id: "monthly", label: "Monthly", note: "A drop each month" },
  { id: "quarterly", label: "Quarterly", note: "Four arrivals a year" },
  { id: "the-year", label: "The Year", note: "Twelve, with the archive" },
];

const SIZES = ["XS", "S", "M", "L", "XL", "Made to measure"];

export default function SubscribeForm() {
  const [plan, setPlan] = useState("monthly");
  const [sent, setSent] = useState(false);

  return (
    <Reveal stagger className={styles.panel} as="div">
      <RevealItem as="span" className="mm-eyebrow">
        A Letter from the Atelier
      </RevealItem>
      <RevealItem as="h1" className={`mm-h1 ${styles.title}`}>
        Begin the
        <br />
        Subscription.
      </RevealItem>
      <RevealItem as="p" className={`mm-body ${styles.intro}`}>
        Each drop is finite. Curated by the atelier. Yours, each month.
      </RevealItem>

      {sent ? (
        <RevealItem as="p" className={styles.confirm}>
          The envelope is on its way. We will write to you before the next drop.
        </RevealItem>
      ) : (
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <fieldset className={styles.plans}>
            <legend className={`mm-eyebrow ${styles.legend}`}>The Plan</legend>
            {PLANS.map((p) => (
              <label
                key={p.id}
                className={`${styles.plan} ${plan === p.id ? styles.planActive : ""}`}
              >
                <input
                  type="radio"
                  name="plan"
                  value={p.id}
                  checked={plan === p.id}
                  onChange={() => setPlan(p.id)}
                  className={styles.radio}
                />
                <span className={styles.planLabel}>{p.label}</span>
                <span className={styles.planNote}>{p.note}</span>
              </label>
            ))}
          </fieldset>

          <div className={styles.field}>
            <label htmlFor="name" className={`mm-eyebrow ${styles.label}`}>
              Name
            </label>
            <input id="name" name="name" type="text" className={styles.input} required />
          </div>

          <div className={styles.field}>
            <label htmlFor="email" className={`mm-eyebrow ${styles.label}`}>
              Email
            </label>
            <input id="email" name="email" type="email" className={styles.input} required />
          </div>

          <div className={styles.field}>
            <label htmlFor="size" className={`mm-eyebrow ${styles.label}`}>
              Size preference
            </label>
            <select id="size" name="size" className={styles.input} defaultValue="M">
              {SIZES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="address" className={`mm-eyebrow ${styles.label}`}>
              Delivery address
            </label>
            <input id="address" name="address" type="text" className={styles.input} required />
          </div>

          <button type="submit" className={`mm-button ${styles.submit}`}>
            Open the Envelope →
          </button>
        </form>
      )}
    </Reveal>
  );
}
