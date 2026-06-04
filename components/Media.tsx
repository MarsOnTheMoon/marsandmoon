/**
 * Media — renders a brand image slot.
 *
 * Drop a real file at /assets/images/<SLOT>.jpg and pass `hasAsset`
 * to swap the placeholder for a real <img>. Until then it renders a
 * bone-toned placeholder labelled with the slot name.
 *
 * Slot index lives in mars-and-moon-site-spec.md §5.2.
 */

type Tone = "bone" | "bw" | "warm" | "plum" | "midnight";

type MediaProps = {
  slot: string;
  alt: string;
  tone?: Tone;
  /** Defaults true: real asset at /assets/images/<slot>.jpg. Pass false to
   *  fall back to the labelled placeholder for slots without a file yet. */
  hasAsset?: boolean;
  ext?: "jpg" | "png" | "webp";
  priority?: boolean;
  className?: string;
};

export default function Media({
  slot,
  alt,
  tone = "bone",
  hasAsset = true,
  ext = "jpg",
  priority = false,
  className,
}: MediaProps) {
  if (hasAsset) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/assets/images/${slot}.${ext}`}
        alt={alt}
        data-slot={slot}
        className={`mm-media${className ? ` ${className}` : ""}`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    );
  }

  const toneClass = tone === "bone" ? "" : ` mm-slot--${tone}`;
  return (
    <div
      className={`mm-slot${toneClass}${className ? ` ${className}` : ""}`}
      data-slot={slot}
      role="img"
      aria-label={alt}
    />
  );
}
