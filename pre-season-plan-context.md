# Pre-Season Plan — Project Context

A scroll-snap slide deck for the Synergy FC U11 Boys pre-season parent meeting.
Live path: `/SynergyFC-15-16-site/pre-season-plan.html`

## Files

| File | Role |
|------|------|
| `pre-season-plan.html` | HTML entry point |
| `src/pre-season-plan-main.tsx` | React bootstrap (MantineProvider + theme) |
| `src/data/preSeasonPlan.ts` | All slide data + local custom types |
| `src/pages/PreSeasonPlan.tsx` | Render component — all slide renderers |
| `vite.config.ts` | Entry: `preSeasonPlan: './pre-season-plan.html'` |

## Type System

`PreSeasonSlide = BaseSlide | CoachesSlide | StorySlide | DevSplitSlide | PlayingRosterSlide | ContinuumSlide | ZpdGoalsSlide | ScheduleStatsSlide | CostsTableSlide`

`BaseSlide` is imported from `src/data/seasonPlan.ts` and covers: `title`, `divider`, `text`, `tools`, `grid`, `features`, `interstitial`, `two-column`, `problem-solution`, `quote-collage`, `image`, `dual-image`, `principles-table`, `hero-question`, `journey-reflection`.

**Custom local types** (defined in `preSeasonPlan.ts`, rendered only in `PreSeasonPlan.tsx`):

- `CoachesSlide` — 3-column coach cards. Each coach has `name`, `role`, `sections: CoachSection[]`, optional `placeholder`. Each `CoachSection` has `label`, `text`, `icon?: IconComponent`. Renders gold-top-border cards with MONO section labels + icons.
- `StorySlide` — Two-column layout: left has visually-flair'd bullet blocks (gold left border, serif heading, body text) + optional quote; right has 2 stacked images. Fields: `bullets: StoryBullet[]`, `quote?`, `images: string[]`.
- `DevSplitSlide` — Two-panel layout: left has pie chart (75%/25% game vs. technical) + KNVB quote; right has coaching philosophy bullet blocks.
- `PlayingRosterSlide` — Two-column layout with `left` and `right` typed as `PlayingRosterColumn` (heading, icon, items, optional note).
- `ContinuumSlide` — Full-width coaching continuum spectrum with 6 style cards.
- `ZpdGoalsSlide` — Two-column ZPD diagram (SVG) + philosophy bullets + win target callout.
- `ScheduleStatsSlide` — Big-number stat grid (4 stats: number, label, detail) + optional note box. Type: `schedule-stats`.
- `CostsTableSlide` — Table layout with columns Item / Cost / Notes. Optional `total` row. Type: `costs-table`.

**Extended BaseSlide fields** (added to `seasonPlan.ts`):
- `GridItem.icon?: IconComponent` — renders a colored icon box above the card title
- `GridItem.iconColor?: string` — color passed to the icon (defaults to gold)
- `GridItem.star?: boolean` — renders a ★ Priority badge in the top-right corner
- `LeagueItem.star?: boolean` — renders ★★ stars next to the item name in image slide sidebars
- `FeaturesSlide.imageQuote?: { text, attribution, image, href? }` — renders an image + quote block (e.g. Arteta duck) at the bottom of a features slide

## Current Slides (27 total)

| # | id | type | Notes |
|---|-----|------|-------|
| 1 | `title` | `title` | Welcome to Synergy FC |
| 2 | `coaches` | `coaches` | Jeff, Ashley, Brent (placeholder) |
| 3 | `why-we-coach` | `story` | 2 coach photos on right side |
| 4 | `section-dev` | `divider` | |
| 5 | `how-we-develop` | `dev-split` | 75/25 pie chart + coaching philosophy |
| 6 | `coaching-continuum` | `continuum` | 6-style spectrum |
| 7 | `dev-tools` | `tools` | IDP, Trace, Sports Lab 360, Anytime Soccer |
| 8 | `playing-roster` | `playing-roster` | Playing time + positions, 2-column |
| 9 | `section-culture` | `divider` | Success & Culture |
| 10 | `team-goals` | `zpd-goals` | ZPD diagram + win target |
| 11 | `dev-curriculum-1` | `dual-image` | Tactical + Technical by age |
| 12 | `dev-curriculum-2` | `dual-image` | Psychological + Physical by age |
| 13 | `pop-players` | `principles-table` | 10 player principles of play |
| 14 | `pop-team` | `principles-table` | 10 team principles of play |
| 15 | `section-family` | `divider` | "Your Role in the Team" |
| 16 | `parent-expectations` | `grid` | 6 cards, cols=3. Team Culture first (★ Priority badge + gold heart icon). All cards have colored icons. |
| 17 | `home-support` | `features` | 5 cards, cols=3. Arteta duck imageQuote at bottom. |
| 18 | `schedule` | `schedule-stats` | 4 big-number stats: practices, games, tournaments, free weekends |
| 19 | `costs` | `costs-table` | 5 line items + estimated total row |
| 20 | `section-beyond` | `divider` | "Beyond U11" |
| 21 | `beyond-intro` | `interstitial` | Context: new team, not today's focus, ask us anything |
| 22 | `advanced-leagues` | `hero-question` | "Does playing for Synergy limit my future options?" |
| 23 | `soccer-pyramid` | `image` | Pyramid image + sidebar. Stars (★★) on MLS Academy, MLS Next, ECNL. |
| 24 | `league-outcomes` | `image` | Outcomes image + sidebar callout: ~35% ECNL → D1. |
| 25 | `personal-take` | `journey-reflection` | 3 tiers + stories + promise |
| 26 | `faq` | `grid` | 6 Q&As, cols=2 |
| 27 | `love-of-game` | `interstitial` | Closing 3-line statement |

## Design Constants (in PreSeasonPlan.tsx)

```ts
const SERIF = "'Cormorant Garamond', Georgia, serif"
const MONO  = "'JetBrains Mono', 'Courier New', monospace"
const GOLD  = 'rgba(212,175,80,'   // usage: `${GOLD}0.75)` etc.
```

Shared CSS classes from `src/styles.css`: `.slide-container`, `.slide`, `.slide-badge`, `.scroll-indicator`, `.slide-tool-card`, `.slide-tool-img`, `.slide-tool-content`, `.slide-card`, `.slide-card-title`, `.slide-card-tags`, `.slide-card-tag`.

Body text uses `fontWeight: 500` and `clamp(15px, 1.5vw, 18px)` throughout. Grid card bodies use inline `Text` (not `.slide-card-body` class) to override the shared CSS size.

## Parent Expectations Cards — Icon Color Map

| Card | Icon | Color |
|------|------|-------|
| Team Culture ★ | `IconHeart` | gold `rgba(212,175,80,0.9)` |
| GameChanger App | `IconBell` | green `rgba(60,185,110,0.85)` |
| 24-Hour Rule | `IconClock` | blue `rgba(80,140,255,0.85)` |
| No Sideline Coaching | `IconVolume` | amber `rgba(230,120,50,0.85)` |
| Kids Advocate First | `IconMessageCircle` | purple `rgba(160,90,240,0.85)` |
| Referee Respect | `IconShield` | teal `rgba(50,185,180,0.85)` |

## Roster Context

- 5 returning players from last year's U11 team
- 5 players from the club's B team (club experience, lower level)
- 5 players brand new to club soccer
- Total: 15 players

## Pending / Known Next Steps

- Coach Brent card is a placeholder — fill in sections when details are available

## Dev

```bash
npm run dev   # localhost:5173/SynergyFC-15-16-site/pre-season-plan.html
npm run build # verify TypeScript + emit dist/pre-season-plan.html
```
