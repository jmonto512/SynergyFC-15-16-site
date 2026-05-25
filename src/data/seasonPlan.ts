// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IconComponent = React.ComponentType<any>

export type BulletItem = string | { label: string; subitems: string[] } | { heading: string; body: string }

export interface Column {
  heading: string
  items: BulletItem[]
  quote?: string
  icon?: IconComponent
}

export interface GridItem {
  title: string
  body: string | string[]
  iconImage?: string
  tags?: string[]
  icon?: IconComponent
  iconColor?: string
  star?: boolean
}

export interface ToolItem {
  name: string
  description: string
  image: string
  imageFit?: 'contain' | 'cover'
  link?: string
}

import {
  IconClipboard, IconUsers, IconTrophy, IconHistory, IconRocket,
  IconBallFootball, IconCheck, IconArrowNarrowDown, IconTarget,
  IconHandStop, IconEye, IconShield, IconArrowsExchange, IconBolt,
  IconHash, IconArrowsLeftRight, IconTriangle, IconArrowsMove,
  IconCrosshair, IconRefresh, IconCompass, IconBulb,
  IconBrain, IconAffiliate, IconStar, IconMap, IconPuzzle,
} from '@tabler/icons-react'

export type PrinciplesTableRow = { icon: IconComponent; name: string; description: string }

export type DividerSlide = { type: 'divider'; title: string; subtitle?: string }
export type TitleSlide = { type: 'title'; title: string; subtitle: string }
export type TwoColumnSlide = { type: 'two-column'; title: string; columns: Column[]; kicker?: string; kickerHref?: string; kickerImage?: string; kickerAttribution?: string }
export type GridSlide = { type: 'grid'; title: string; subtitle?: string; cols: 2 | 3; items: GridItem[] }
export type TextSlide = { type: 'text'; title: string; bullets: BulletItem[]; quote?: string; image?: string; note?: { label: string; text: string } }
export type ProblemSolutionSlide = { type: 'problem-solution'; title: string; problem: Column; solution: Column }
export type ToolsSlide = { type: 'tools'; title: string; items: ToolItem[] }
export type QuoteCollageSlide = { type: 'quote-collage'; title: string; eyebrow?: string; intro?: string | string[]; quotes: string[] }
export type LeagueItem = { name: string; tag?: string; description: string; link?: string; star?: boolean }
export type ImageSlide = {
  type: 'image'
  title: string
  image: string
  caption?: string
  fade?: boolean
  sidebar?: {
    items: LeagueItem[]
    callout?: { label: string; heading: string; body: string; link?: string; star?: boolean }
  }
}
export type DualImageSlide = { type: 'dual-image'; title: string; subtitle?: string; images: Array<{ src: string; caption?: string; icon?: IconComponent }>; coachNotes?: Array<{ heading: string; note: string }>; quote?: { text: string; attribution?: string } }
export type InterstitialSlide = { type: 'interstitial'; lines: string[] }
export type PrinciplesTableSlide = { type: 'principles-table'; title: string; rows: PrinciplesTableRow[]; coachNote?: string }
export type FeatureItem = { icon: IconComponent; title: string; description: string | string[]; note?: string; link?: string; linkLabel?: string }
export type FeaturesSection = { label?: string; items: FeatureItem[] }
export type FeaturesSlide = {
  type: 'features'
  title: string
  subtitle?: string
  hook?: string
  cols?: 2 | 3
  sections: FeaturesSection[]
  quote?: { text: string; attribution: string; context?: string }
  note?: { label: string; text: string }
  imageQuote?: { text: string; attribution: string; image: string; href?: string }
}

export type HeroQuestionPoint = { icon: IconComponent; title: string; description: string }
export type HeroQuestionSlide = {
  type: 'hero-question'
  eyebrow: string
  question: string
  intro: string | string[]
  image: string
  imageLink?: string
  points: HeroQuestionPoint[]
  pathway: { heading: string; body: string; link?: { text: string; url: string } }
}

export type TierCard = {
  tier: string
  sublabel: string
  tag: string
  tagColor: 'gold' | 'amber' | 'blue' | 'green'
  description: string
  honest: string
}
export type CoachStory = { person: string; role: string; story: string }
export type JourneyReflectionSlide = {
  type: 'journey-reflection'
  eyebrow: string
  question: string
  intro: string[]
  tiers: TierCard[]
  storiesLabel: string
  stories: CoachStory[]
  promise: { label: string; heading: string; body: string }
}

export type Slide = { id: string } & (
  | DividerSlide
  | TitleSlide
  | TwoColumnSlide
  | GridSlide
  | TextSlide
  | ProblemSolutionSlide
  | ToolsSlide
  | QuoteCollageSlide
  | ImageSlide
  | DualImageSlide
  | InterstitialSlide
  | PrinciplesTableSlide
  | FeaturesSlide
  | HeroQuestionSlide
  | JourneyReflectionSlide
)

export const slides: Slide[] = [
  // ── 1 ──────────────────────────────────────────────────────────
  {
    id: 'title',
    type: 'title',
    title: 'U11 Boys Season Plan',
    subtitle: '2026 – 27',
  },

  // ── 2 ──────────────────────────────────────────────────────────
  {
    id: 'section-changes',
    type: 'divider',
    title: 'Staff, Player, & Competition Changes',
  },

  // ── 3 ──────────────────────────────────────────────────────────
  {
    id: 'whats-changing-people',
    type: 'two-column',
    title: "What's Changing?",
    columns: [
      {
        heading: 'Coaching',
        icon: IconClipboard,
        items: [
          {
            label: 'Brent Shirk joining as assistant coach',
            subitems: [
              'Aligned on core values, brings a non-Montone perspective',
              'More individual attention with another coach on the field',
            ],
          },
          'Synergy is adding goalie training',
        ],
      },
      {
        heading: 'Players',
        icon: IconUsers,
        items: [
          {
            label: 'Players Not Returning (Confirmed):',
            subitems: [
              'U12 players — Tyler, Caleb E, Leo, Caleb C, Gabe',
              'U11 players — Param',
            ],
          },
          '3 new players already planned',
          'We hope to add in tryouts but only if they have a basic club level foundation.',
          "We will start with ~10 if needed, goal of 12–13",
        ],
      },
      {
        heading: 'Competition Level',
        icon: IconTrophy,
        items: [
          'Target ~50% win rate — close, competitive games, not blowouts',
          'We\'ll seek harder competition but also schedule winnable games; exact division is whatever challenges us',
          'Tight games build skill (soccer is time & space) and character — both matter more than trophies',
        ],
      },
    ],
    kicker: 'If you prioritize winning the U11 tournament as your definition of success, I\'m not your coach.\nIf you want to win because you love the game and are competitive, I am your coach.',
  },

  // ── 6 ──────────────────────────────────────────────────────────
  {
    id: 'section-philosophy',
    type: 'divider',
    title: 'Our Philosophy',
    subtitle: 'Our philosophy ensures we are all aligned on a common vision.',
  },

  // ── 7 ──────────────────────────────────────────────────────────
  {
    id: 'resetting-foundation',
    type: 'two-column',
    title: 'Resetting Our Foundation',
    columns: [
      {
        heading: 'Last Season',
        icon: IconHistory,
        items: [
          'A significant learning experience — while reaching "Silver" was an achievement, it highlighted specific gaps in our cohesion and technical consistency.',
          'Knowing the age-group split was coming, I chose to finish without making the major changes necessary to fix those issues — those changes are now my priority.',
        ],
      },
      {
        heading: 'Next Season',
        icon: IconRocket,
        items: [
          "While I'm sad to see the last group go, don't take that as disappointment — I'm even more excited to start with this group.",
          {
            label: 'Tighter age range = more effective, targeted coaching',
            subitems: ['Juggling 3 grades of players wasn\'t easy'],
          },
          "I believe this group has the 'team-first' attitude required to be successful in our system.",
          {
            label: "My coaching philosophy hasn't changed — but it wasn't shared by some players and parents last season",
            subitems: [
              "That's my fault — so this year I will be much more direct about its importance",
              'Please review our Core Values and Principles of Play — not words on a page; players will learn them, see them weekly, reflect on them, and be held to them as our team code',
              'To reach our goals, we need everyone moving in the same direction',
            ],
          },
        ],
      },
    ],
    kicker: 'We all see the duck',
    kickerHref: 'https://youtube.com/shorts/alobMCIBl9s?si=NPoGfXIgIMb3T2UP',
    kickerImage: 'assets/images/season-plan/duck-or-rabbit.png',
    kickerAttribution: 'Mikel Arteta',
  },

  // ── 9 ──────────────────────────────────────────────────────────
  {
    id: 'core-values',
    type: 'grid',
    title: 'What We Stand For',
    subtitle: 'Our core values — the foundation everything else is built on.',
    cols: 2,
    items: [
      {
        title: 'Collective Dominance',
        body: "We teach Total Soccer — every player masters game intelligence and positional roles. We don't rely on one player to dribble through everyone; we rely on tactical discipline and passing combinations to out-think and out-move opponents. Our competitive edge is a team that functions as a single, unstoppable unit.",
        iconImage: 'assets/icons/icon-collective.png',
        tags: ['TOTAL SOCCER', 'TEAM OVER STARS', 'TACTICAL IQ'],
      },
      {
        title: 'Built for the Next Level',
        body: "We're building long-term talent for the higher leagues. We define our standard by mastery of the process — effort, focus, and technical precision. The scoreboard is a byproduct of high-intensity training; by focusing on mastery today, we ensure our players don't just win at U11.",
        iconImage: 'assets/icons/icon-mastery.png',
        tags: ['LONG-TERM DEVELOPMENT', 'PROCESS OVER RESULTS', 'NEXT LEAGUE READY'],
      },
      {
        title: 'High-Performance, Child-Centered Culture',
        body: "The enjoyment of the game is the primary driver of improvement — you will not get better at a sport you don't love. Our love for the game is rooted in the pursuit of excellence. We provide a psychologically safe environment where players are encouraged to take risks, but we hold every player to a high standard of respect, discipline, and effort.",
        iconImage: 'assets/icons/icon-culture.png',
        tags: ['LOVE THE GAME', 'SAFE TO FAIL', 'HIGH STANDARDS'],
      },
      {
        title: 'Competitive Growth for the Whole Roster',
        body: 'Players who meet our work-rate and focus requirements are guaranteed at least half of every game. We build a deep, resilient roster rather than "hiding" players to protect a result. This creates a more competitive environment for the full match duration and ensures every player is battle-tested for high-stakes moments.',
        iconImage: 'assets/icons/icon-growth.png',
        tags: ['HALF-GAME MINIMUM', 'DEEP ROSTER', 'EVERY PLAYER COUNTS'],
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────────
  {
    id: 'pop-players',
    type: 'principles-table',
    title: 'Principles of Play — Players',
    rows: [
      { icon: IconBallFootball,     name: '1, 2 or 3 Touch Maximum',       description: 'Minimizing touches improves speed of play. (Longer-term goal, not a current requirement)' },
      { icon: IconCheck,            name: 'Keep the Game Simple',           description: "Don't force situations, over-dribble, or be careless with the ball." },
      { icon: IconArrowNarrowDown,  name: 'Keep the Ball on the Ground',    description: 'Easier to control and move efficiently. (Exceptions apply)' },
      { icon: IconTarget,           name: 'Accuracy and Quality of the Pass', description: 'Firm, accurate, proper weight.' },
      { icon: IconHandStop,         name: 'First Touch',                    description: 'Clean, controlled first touch without stopping the ball. Take the touch away from pressure and into free space.' },
      { icon: IconEye,              name: 'Perception and Awareness',       description: 'All players should constantly scan the field.' },
      { icon: IconShield,           name: '1v1 Situations',                 description: 'Determined to regain control in defense. Keep it simple in attack — touch to the side, at speed.' },
      { icon: IconArrowsExchange,   name: 'Individual Transition',          description: 'React quickly when possession changes.' },
      { icon: IconBolt,             name: 'Shooting',                       description: 'Always keep an eye on the goal. All players are encouraged to shoot.' },
      { icon: IconRocket,           name: 'Take Risks',                     description: 'Mistakes are part of learning. Players are encouraged to take risks (especially in training) to increase speed of play.' },
    ],
    coachNote: "These principles aren't just tactics — they define how we train and compete every week. If they don't align with how you or your son approach the game, that's okay. It just means we may not be the right fit for each other, and being upfront about that now is better for everyone.",
  },

  // ── 12 ─────────────────────────────────────────────────────────
  {
    id: 'pop-team',
    type: 'principles-table',
    title: 'Principles of Play — Team',
    rows: [
      { icon: IconUsers,           name: 'All Players Attack and All Players Defend', description: 'All players must be involved in the game as a unit.' },
      { icon: IconHash,            name: 'Numerical Advantage',                       description: 'Create a numerical advantage in attack and avoid being at a numerical disadvantage in defense.' },
      { icon: IconArrowsLeftRight, name: 'Flow of the Ball',                          description: 'The ball should flow from inside to outside and outside to inside. Wide is more secure; middle increases options.' },
      { icon: IconTriangle,        name: 'Triangle Principle and Passing Options',    description: 'The player in possession must receive constant support and have at least two passing options.' },
      { icon: IconBolt,            name: 'Speed of Play',                             description: 'Quick movement of the ball creates 2v1 situations.' },
      { icon: IconArrowsMove,      name: 'Movement Off the Ball',                     description: 'Find the best available space to create passing options for the player in possession.' },
      { icon: IconCrosshair,       name: 'Pressure as a Unit',                        description: 'Organized pressure forces the opponents to commit errors.' },
      { icon: IconRefresh,         name: 'Transition',                                description: 'Improve transition by reducing the number of passes needed to arrive at the target area or the opponent\'s goal.' },
      { icon: IconCompass,         name: 'Direction of the Game',                     description: 'Play in any direction — back, wide, or forward — whatever creates the best opportunity.' },
      { icon: IconBulb,            name: 'Take Initiative During the Game',           description: 'Team breakdowns will occur. The team must adapt to new situations and impose its own style of play.' },
    ],
    coachNote: "These principles aren't just tactics — they define how we train and compete every week. If they don't align with how you or your son approach the game, that's okay. It just means we may not be the right fit for each other, and being upfront about that now is better for everyone.",
  },

  // ── 14 ─────────────────────────────────────────────────────────
  {
    id: 'section-dev',
    type: 'divider',
    title: 'Player Development',
    subtitle: 'Technique through play. Game intelligence from the start. Tools that follow your son home.',
  },

  // ── 15 ─────────────────────────────────────────────────────────
  {
    id: 'dev-approach',
    type: 'features',
    title: 'Our Approach',
    subtitle: 'Technique & Game Intelligence — Together',
    hook: 'A common parent question: "Team practices are filled with teamwork — so how does my son improve individually?" We\'ve thought about this carefully.',
    cols: 3,
    sections: [
      {
        items: [
          {
            icon: IconBallFootball,
            title: 'Technical Foundation',
            description: 'Roughly a quarter of every practice is dedicated to focused technical work — passing patterns, dribbling moves, and finishing.',
            note: 'That quarter is intentional — unopposed technical reps are most effective in short, focused bursts. The volume is meant to be supplemented at home through Anytime Soccer Training, where your son can log structured touches any day of the week.',
          },
          {
            icon: IconBrain,
            title: 'Game Intelligence',
            description: 'The other three-quarters are spent inside the questions a player will actually face on Saturday — small-sided games, rondos, and scrimmages built around a tactical theme.',
            note: 'Combination play, pressing shape, and transition can only be trained with a full team on the pitch. That makes team time the rarest resource we have — using it for individual ball work that your son can do at home any day of the week would be a waste of it.',
          },
          {
            icon: IconAffiliate,
            title: 'The Dutch TIC Model',
            description: 'Technique, Insight, Communication — the KNVB argues these cannot be effectively trained in isolation. Game intelligence grows through playing the game.',
            note: '18 million people. Smaller than Texas. 3 World Cup finals. 1 European Championship. A generation of players — Cruyff, Bergkamp, van Basten, Robben, van Dijk — that every era of global soccer has tried to explain. The Netherlands doesn\'t win because of better athletes. They win because they\'ve built a system that develops smarter players. TIC is the curriculum behind that.',
            link: 'https://en.wikipedia.org/wiki/Total_football',
            linkLabel: 'Total Football — Wikipedia ↗',
          },
        ],
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────────
  {
    id: 'dev-approach-u11',
    type: 'features',
    title: 'Our Approach',
    subtitle: 'Why U11 Is the Right Age',
    cols: 3,
    sections: [
      {
        items: [
          {
            icon: IconStar,
            title: 'The Ideal Window',
            description: 'U11 is the ideal developmental phase to initiate game intelligence and creativity.',
          },
          {
            icon: IconMap,
            title: 'Rules & Shape',
            description: 'Kids this age understand the rules well enough to grasp the offensive and defensive shape of the game.',
          },
          {
            icon: IconPuzzle,
            title: 'Fitting the Bigger Picture',
            description: "They're keen to learn how their abilities fit into the team — which is exactly what our practices train.",
          },
        ],
      },
    ],
    quote: {
      text: 'Driving a car is best learnt when you sit behind the wheel and join the traffic. You must play soccer in order to learn the techniques.',
      attribution: 'Royal Dutch Football Association (KNVB)',
    },
    note: {
      label: 'ONE LAST NOTE',
      text: "Great coaches disagree about technique-first vs. game-first, and we respect both views. We've made our choice based on what we've seen work for U11 players — and on the same approach the world's most successful youth systems use. But ultimately, we just want your son to fall in love with this game and keep getting better.",
    },
  },

  // ── 16 ─────────────────────────────────────────────────────────
  {
    id: 'dev-tools',
    type: 'tools',
    title: 'Four Tools That Follow Your Son Home',
    items: [
      {
        name: 'Trace',
        description: "After games and tournaments, the coach saves a highlight reel for each player calling out their wins and the next thing to work on. It's tied directly to your son's IDP so the feedback he gets on Saturday becomes the focus of his next training week.",
        image: 'assets/images/dev-tools/trace.png',
        imageFit: 'contain',
        link: 'https://traceup.com/',
      },
      {
        name: 'Individual Development Plans',
        description: "Individual Development Plans shift the conversation from team results to your son's specific next step. We review them together, update them as he grows, and use them to anchor every other tool on this page.",
        image: 'assets/images/dev-tools/idp.png',
        imageFit: 'contain',
      },
      {
        name: 'Sports Lab 360',
        description: "Sports Lab 360 builds game intelligence off the field. Players watch real match footage, work through an interactive lesson, and take a short quiz — and then come back to practice already speaking the language we're using on the pitch.",
        image: 'assets/images/dev-tools/sports-lab-360.png',
        imageFit: 'contain',
        link: 'https://sportslab360.com/',
      },
      {
        name: 'Anytime Soccer Training',
        description: "Team practice alone doesn't build a great first touch. Anytime Soccer Training gives your son a structured at-home program — and lets the coach assign sessions, track progress, and align the work with his IDP.",
        image: 'assets/images/dev-tools/anytime-soccer-training.png',
        imageFit: 'contain',
        link: 'https://www.anytime-soccer.com/',
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────────
  {
    id: 'dev-love',
    type: 'text',
    title: 'Love of the Game',
    image: 'assets/images/action/teach-teaching-highlights.png',
    bullets: [
      { heading: 'Highlights', body: 'We study clips from our own matches and from the pros. They become a shared vocabulary for what we\'re trying to do on Saturday — and a window into a level of the game that inspires kids to keep working.' },
      'At U11, our number one priority is making sure these players love the game. Tactics, technique, and tools all matter — but they only matter if a kid wants to put in the work.',
      'That\'s where every single thing on this page begins.',
    ],
    quote: 'Commitment starts with love. At U11, our number one priority is making sure these players love the game — because the rest only happens when they want to put in the work.',
  },

  // ── 18a ────────────────────────────────────────────────────────
  {
    id: 'dev-curriculum-1',
    type: 'dual-image',
    title: "What He'll Learn Across a Season",
    subtitle: 'U.S. Soccer Player Development Curriculum',
    images: [
      { src: 'assets/images/season-plan/tactical-by-age.png', caption: 'Tactical Development by Age', icon: IconCompass },
      { src: 'assets/images/season-plan/technical-by-age.png', caption: 'Technical Development by Age', icon: IconBallFootball },
    ],
    coachNotes: [
      {
        heading: 'Tactical — Our Adjustments',
        note: 'Compactness (staying organized and narrow in defense) and Switching Play (moving the ball wide to change the point of attack) are priorities we go deeper on than the curriculum shows. These two concepts shape how we defend and create space in attack.',
      },
      {
        heading: 'Technical — Our Adjustments',
        note: 'Heading is not permitted at U11 under current U.S. Soccer concussion guidelines — this chart predates that rule, so ignore it here. We also invest more time in 1v1 defending than the curriculum reflects, as individual defensive technique is foundational at this age.',
      },
    ],
  },

  // ── 18b ────────────────────────────────────────────────────────
  {
    id: 'dev-curriculum-2',
    type: 'dual-image',
    title: "What He'll Learn Across a Season",
    subtitle: 'U.S. Soccer Player Development Curriculum',
    images: [
      { src: 'assets/images/season-plan/psychosocial-by-age.png', caption: 'Psychological Development by Age', icon: IconBrain },
      { src: 'assets/images/season-plan/physical-by-age.png', caption: 'Physical Development by Age', icon: IconBolt },
    ],
    coachNotes: [
      {
        heading: 'Psychological — Our Focus',
        note: 'Attitude and Effort are our baselines — the two things every player is held to regardless of the scoreboard. This season, the areas we expect to grow into are Commitment and Self-Motivation: the internal drive to keep working, keep showing up, and keep improving when no one is pushing you.',
      },
      {
        heading: 'Physical — Our Adjustments',
        note: "Strength and cardiovascular endurance are not meaningful training targets at U11 — the body simply isn't ready for that work. What the research consistently shows: coordination, agility, and movement quality are what compound at this age. The big, fast kid advantage fades. The player who moves well keeps getting better.",
      },
    ],
  },

  // ── 19 ─────────────────────────────────────────────────────────
  {
    id: 'section-beyond',
    type: 'divider',
    title: 'Beyond U11',
    subtitle: 'Understanding youth soccer pathways',
  },

  // ── 20 ─────────────────────────────────────────────────────────
  {
    id: 'advanced-leagues',
    type: 'hero-question',
    eyebrow: 'Advanced Leagues',
    question: "Does playing for Synergy limit my future options?",
    intro: [
      'One of the most common questions we hear — and the short answer is no.',
      'But the more useful question is: what actually develops a player at this age?',
    ],
    image: 'assets/images/season-plan/synergy-phx-premier-mls-next.png',
    imageLink: 'https://www.instagram.com/p/DXYIf7zDLHi/',
    points: [
      {
        icon: IconHistory,
        title: "It's still the beginning",
        description: "At U10–U11, performance reflects physical maturity, early specialization, and hours already on the ball — not who will be the better player at 15. The early standout is often not the same player who excels in high school. The skills worth building right now are technical habit and love of the game, not a league resume.",
      },
      {
        icon: IconBallFootball,
        title: 'Playing time is the unit of development',
        description: "A player earning meaningful minutes on a well-coached team — making decisions, making mistakes, solving real problems — develops faster than one riding the bench on a higher-division roster. The rep count matters more than the label on the schedule.",
      },
      {
        icon: IconUsers,
        title: 'A trusted coach is irreplaceable',
        description: "When a player trusts his coach, he takes risks. When he takes risks, he grows. That feedback loop — try something, hear why, try again — is what development actually looks like. A 'slightly better' team with a new coaching relationship can slow that down more than most parents realize.",
      },
      {
        icon: IconTrophy,
        title: 'Chasing wins at this age can backfire',
        description: "Teams that dominate U11 often do it by playing down or leaning on physical advantages that fade by U14. An 8-0 blowout teaches almost nothing. A tight 2-1 loss against real competition teaches everything. We want close, demanding games — that's where growth actually happens.",
      },
    ],
    pathway: {
      heading: 'When the time is right, the path is clear.',
      body: "Synergy has a direct relationship with Phoenix Premier's MLS Next program — boys from our team are already on their U13 roster. We're not closing a door. We're saying there's real value in building the right foundation first. By U13, the next step becomes obvious, and we'll say so plainly.",
      link: { text: 'Phoenix Premier', url: 'https://www.phoenixpremierfc.com/' },
    },
  },

  // ── 21 ─────────────────────────────────────────────────────────
  {
    id: 'things-you-will-hear',
    type: 'quote-collage',
    eyebrow: 'A brief intermission',
    title: 'The Noise',
    intro: [
      "If you're just here for the soccer and not thinking about scholarships, exposure trips, or which division signals serious — feel free to scroll past the next few slides.",
      "But these conversations are coming for you either way.",
    ],
    quotes: [
      '"I heard there\'s ECNL, then ECNL Regional, then MLS Next, then MLS Next Tier 2… honestly I don\'t even know which one we should be in. Is regional bad?"',
      '"It only costs $2,000 a year in club fees, but with travel, kit, and private training I spent $6,000 last year. Hopefully the college exposure is worth it."',
      '"Wait — what\'s MLS Next? Is that like the \'gold\' division?"',
      '"Yeah we paid the fees, got him into the club, got the jacket… honestly he\'s only played in like three games but the director said he\'s \'in the system\' and there could be a showcase in the spring."',
      '"We\'re seriously considering moving him to an ECNL club next fall. I mean… if he\'s not in ECNL by U14, does he even have a shot at D1?"',
      '"We\'re paying $4,000 a year, he sits most games, and whenever I ask the coach he just says \'development takes time.\' I love the club but I\'m starting to feel like we\'re just… subsidizing someone else\'s kid\'s travel."',
    ],
  },

  // ── 23 ─────────────────────────────────────────────────────────
  {
    id: 'soccer-pyramid',
    type: 'image',
    title: 'Understanding the Youth Soccer Pyramid',
    image: 'assets/images/season-plan/soccer-pyramid.png',
    caption: 'Complete Guide to US Youth Soccer Structure 2026',
    sidebar: {
      items: [
        {
          name: 'MLS Academy',
          tag: 'PROFESSIONAL CLUB',
          description: "Youth academies operated directly by MLS professional clubs. Players train in a pro environment tied to an actual first team — fully funded, no club fees. The very top of the US youth pyramid.",
        },
        {
          name: 'MLS Next',
          tag: 'NATIONAL · TIER 1',
          description: 'The premier national youth league, launched in 2021. Open to MLS Academies and elite independent clubs. The primary pathway to the professional game and the D1 programs that feed it. ~73% of D1 men\'s recruits come from MLS Next or ECNL.',
        },
        {
          name: 'MLS Next Tier 2',
          tag: 'NATIONAL · TIER 2',
          description: 'A second division within the MLS Next ecosystem — slightly less selective than Tier 1 but still national competition. A legitimate stepping stone for players progressing toward the top flight.',
        },
        {
          name: 'ECNL',
          tag: 'NATIONAL · INDEPENDENT',
          description: 'Elite Clubs National League — the top independent club league, considered on par with MLS Next for college recruitment. Heavy emphasis on college exposure through showcase tournaments attended by D1 coaches across the country.',
        },
        {
          name: 'ECNL Regional',
          tag: 'REGIONAL',
          description: 'The regional division of ECNL. It sits below the national conference level but maintains the ECNL training standards and brand. The most common entry point into the ECNL structure.',
        },
      ],
      callout: {
        label: 'Phoenix — A Unique Advantage',
        heading: 'FC Barcelona Residency Academy',
        body: "Casa Grande, AZ — 45 min from Phoenix — is home to the only FC Barcelona-affiliated residency program in the US. Every graduate has earned a college scholarship or professional contract. On par with an MLS Academy in terms of pathway and prestige.",
        link: 'https://barcaresidencyacademyusa.com/',
        star: true,
      },
    },
  },

  // ── 24 ─────────────────────────────────────────────────────────
  {
    id: 'league-outcomes',
    type: 'image',
    title: 'What Are the Outcomes of These Leagues?',
    image: 'assets/images/season-plan/league-outcomes.png',
    caption: 'MLS Next top tier + ECNL together supply ~73% of men\'s D1 recruits (NE study, 2024). 37% of D1 men\'s rosters are international players.',
    fade: true,
  },

  // ── 25 ─────────────────────────────────────────────────────────
  {
    id: 'personal-take',
    type: 'journey-reflection',
    eyebrow: 'Beyond U11 — A Personal Take',
    question: "What do you want your son's soccer journey to look like?",
    intro: [
      'For players with real internal drive and a love for the game, aiming for MLS Next and ECNL is a fantastic goal. We celebrate and support that ambition.',
      "But every family's situation is unique — and there's nothing wrong with the middle tier. It's just not for the Montone family.",
    ],
    tiers: [
      {
        tier: 'Elite',
        sublabel: 'MLS Next · ECNL',
        tag: 'Worth chasing if the drive is genuine',
        tagColor: 'green',
        description: "The only two tiers with a clear pathway to college recruitment and the professional game. ~73% of D1 men's recruits come from here. If the drive is real and the player is ready, this is the destination.",
        honest: "Getting there requires real sacrifice — heavy travel, high fees, an intensely competitive environment. When it's the right fit, it's worth every bit of it.",
      },
      {
        tier: 'The Middle Zone',
        sublabel: 'Everything in between',
        tag: "We'd think hard before committing",
        tagColor: 'amber',
        description: "The leagues between local club and MLS Next/ECNL cost nearly as much and demand just as much travel — without the same developmental or recruitment payoff. 5–10 travel weekends, several requiring flights.",
        honest: "Joining win-now environments before a player is ready often leads to burnout and anxiety. It takes the joy out of the sport during the most crucial learning years. All sports become play-to-win — and that's a dangerous place to be at U11.",
      },
      {
        tier: 'Foundation',
        sublabel: 'Club · Local (Where We Are)',
        tag: 'Where love is built',
        tagColor: 'blue',
        description: "Not a consolation prize. This is where most great players spend their formative years — building fundamentals, trusting their coach, and falling in love with the game before the pressure sets in.",
        honest: "Give your son a dedicated coach and a stable environment before chasing the next level. Imagine learning your job while they kept rotating in new people to replace you during your training. That's what constant team-switching does.",
      },
    ],
    storiesLabel: 'Why we feel this way — our own experiences',
    stories: [
      {
        person: 'Coach Ashley',
        role: 'Reached local · state · regional teams',
        story: "Made it all the way to state and regional teams. When she hit the top, she realized she'd lost the love along the way. She went back to her club team — and found it again there.",
      },
      {
        person: 'Coach Jeff',
        role: 'Win-first teams · switched every year',
        story: 'Played on teams that prioritized winning. Switched clubs every year chasing the next level. Walked away from the sport never wanting to play again — only to rediscover that love in his 20s, playing with players from other countries who showed him a completely different way to play the game.',
      },
      {
        person: 'Our Daughter',
        role: 'New club · advanced league placement',
        story: "Joined a new club she was excited about. Because the club only competed in advanced leagues, this beginner team was placed in DPL — requiring flights to Utah, Colorado, and Texas. No one stopped to ask whether the team was ready to compete at that level.",
      },
    ],
    promise: {
      label: 'Our Commitment to You',
      heading: "If Charlie's path changes, you'll know well in advance. Our deeper goal is a lifelong love of the game.",
      body: '',
    },
  },
]
