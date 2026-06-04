# Media Slots — Mars & Moon

Drop real assets here, named **exactly** by slot, then flip `hasAsset` on the
matching `<Media />` (see `components/Media.tsx`). Until then each slot renders a
bone-toned placeholder labelled with its name.

| Slot | Location | Ratio | Notes |
|------|----------|-------|-------|
| `HERO_IMAGE` / `HERO_VIDEO` | Home hero | 16:9 display | Primary brand moment |
| `EDITORIAL_SPREAD_IMAGE` | Home §2 | 2:3 | Portrait, window light |
| `EDITORIAL_FILM_IMAGE` | Home §3 | 16:9 | Landscape, atmospheric |
| `DUET_LEFT` | Home §4 | 2:3 | B&W detail |
| `DUET_RIGHT` | Home §4 | 2:3 | Colour portrait |
| `PRODUCT_CARD_01`–`06` | Home §6 | 2:3 | Product-forward |
| `SUBSCRIBE_BG_IMAGE` | Home §7 | 16:9 | Dark, moody |
| `JOURNAL_CARD_01`–`03` | Home §8 | 16:9 / 2:3 | Editorial |
| `SUBSCRIBE_PORTRAIT` | Subscribe | 2:3 | Tallest, most cinematic |
| `COLLECTION_HERO` | Collections | 16:9 | Wide, atmospheric |
| `COLLECTION_DETAIL_01`–`08` | Collection detail | 2:3 / 16:9 | Editorial pieces |
| `ABOUT_HERO`, `ABOUT_MID_01`–`02` | About | 16:9 | Brand statement |

**File naming:** `<SLOT_NAME>.jpg` (or pass `ext="webp"`).
Video sources live in `../video/<SLOT_NAME>.mp4` + `.webm`.
