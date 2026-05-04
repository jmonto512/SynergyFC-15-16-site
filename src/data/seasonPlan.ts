// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IconComponent = React.ComponentType<any>

export type BulletItem = string | { label: string; subitems: string[] }

export interface Column {
  heading: string
  items: BulletItem[]
  quote?: string
  icon?: IconComponent
}

export interface GridItem {
  title: string
  body: string
}

export interface ToolItem {
  name: string
  description: string
  image: string
  imageFit?: 'contain' | 'cover'
}

import { IconClipboard, IconUsers, IconTrophy } from '@tabler/icons-react'

export type DividerSlide = { type: 'divider'; title: string; subtitle?: string }
export type TitleSlide = { type: 'title'; title: string; subtitle: string }
export type TwoColumnSlide = { type: 'two-column'; title: string; columns: Column[]; kicker?: string }
export type GridSlide = { type: 'grid'; title: string; cols: 2 | 3; items: GridItem[] }
export type TextSlide = { type: 'text'; title: string; bullets: BulletItem[]; quote?: string }
export type ProblemSolutionSlide = { type: 'problem-solution'; title: string; problem: Column; solution: Column }
export type ToolsSlide = { type: 'tools'; title: string; items: ToolItem[] }
export type QuoteCollageSlide = { type: 'quote-collage'; title: string; quotes: string[] }
export type ImageSlide = { type: 'image'; title: string; image: string; caption?: string }
export type InterstitialSlide = { type: 'interstitial'; lines: string[] }

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
  | InterstitialSlide
)

export const slides: Slide[] = [
  // ── 1 ──────────────────────────────────────────────────────────
  {
    id: 'title',
    type: 'title',
    title: 'U11 Boys Season Plan',
    subtitle: '2025 – 26',
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
          'Synergy adding goalie training',
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
          'Aim for 50% winning percentage — my goal is close, competitive games',
          'There were 13 AZ Open League levels last season; we seek the next challenge, but also schedule games where we\'re favorites',
          'Can\'t guarantee Division 8 or "silver" — too much unknown going in',
          'Why close games? Skill: 9-0 wins don\'t help — soccer is "time & space", better competition forces improvement',
          'Character: Lessons from close games > any soccer skill',
        ],
      },
    ],
    kicker: 'If you prioritize winning the U11 tournament as your definition of success, I\'m not your coach. If you want to win because you love the game and are competitive, I am your coach.',
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
        items: [
          'Significant learning experience. Reaching "Silver" was an achievement but highlighted gaps in cohesion and technical consistency.',
          'Knew the age-group split was coming, chose to finish without major changes — those changes are now the priority.',
        ],
      },
      {
        heading: 'Next Season',
        items: [
          'Excited to start fresh with this group despite losing older players',
          'Tighter age range = more effective, targeted coaching',
          '"I believe this specific group of players has the \'team-first\' attitude required to be successful in our system."',
        ],
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────────
  {
    id: 'resetting-foundation-cont',
    type: 'text',
    title: 'Resetting Our Foundation — Next Season (cont.)',
    bullets: [
      'Coaching philosophy hasn\'t changed, but it wasn\'t shared by some players/parents last season',
      '"That\'s my fault — I need to be much more direct about its importance this year."',
      'Please review our Core Values and Principles of Play',
      '"If they don\'t align with your own values, that is okay — it just means we aren\'t the right fit for the season ahead."',
      '"To reach our goals, we need everyone moving in the same direction."',
    ],
    quote: 'We all see the duck',
  },

  // ── 9 ──────────────────────────────────────────────────────────
  {
    id: 'core-values',
    type: 'grid',
    title: 'Core Values',
    cols: 2,
    items: [
      {
        title: 'Team Identity over "Star Players"',
        body: 'We teach "total soccer" where every player learns game intelligence, passing combinations, and how to attack/defend as a unit. We don\'t rely on one player to dribble through everyone.',
      },
      {
        title: 'Mastery over the Scoreboard',
        body: 'We are building long-term talent for the higher leagues. <FINISH LATER>',
      },
      {
        title: 'Child-Centered Culture',
        body: 'The needs and enjoyment of the players are placed above the egos or self-interests of the adults. Number one priority: build your son\'s love for the game. You will not get better at a sport you don\'t love.',
      },
      {
        title: 'Kids Develop by Playing',
        body: 'Players who meet requirements are guaranteed to play at least half of every game. Dedicated to building the whole team, not just a few individuals. Requires shared patience for every player\'s journey.',
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────────
  {
    id: 'pop-players-1',
    type: 'grid',
    title: 'Principles of Play — Players',
    cols: 3,
    items: [
      {
        title: '1, 2 or 3 Touch Maximum',
        body: 'Minimizing touches improves speed of play. (Longer term goal, not a current requirement)',
      },
      {
        title: 'Keep the Game Simple',
        body: "Don't force situations, over-dribble, or be careless with the ball.",
      },
      {
        title: 'Keep the Ball on the Ground',
        body: 'Easier to control and move efficiently. (Exceptions apply)',
      },
      {
        title: 'Accuracy and Quality of the Pass',
        body: 'Firm, accurate, proper weight.',
      },
      {
        title: 'First Touch',
        body: 'Clean, controlled first touch without stopping the ball. Take the touch away from pressure and into free space.',
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────────
  {
    id: 'pop-players-2',
    type: 'grid',
    title: 'Principles of Play — Players (cont.)',
    cols: 3,
    items: [
      {
        title: 'Perception and Awareness',
        body: 'All players should constantly scan the field.',
      },
      {
        title: '1v1 Situations',
        body: 'Determined to regain control in defense. Keep it simple in attack — touch to the side, at speed.',
      },
      {
        title: 'Individual Transition',
        body: 'React quickly when possession changes.',
      },
      {
        title: 'Shooting',
        body: 'Always keep an eye on the goal. All players are encouraged to shoot.',
      },
      {
        title: 'Take Risks',
        body: 'Mistakes are part of learning. Encouraged to take risks (especially in training) to increase speed of play.',
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────────
  {
    id: 'pop-team-1',
    type: 'grid',
    title: 'Principles of Play — Team',
    cols: 3,
    items: [
      {
        title: 'All Players Attack and All Players Defend',
        body: 'All involved as a unit.',
      },
      {
        title: 'Numerical Advantage',
        body: 'Create numerical advantage in attack, avoid disadvantage in defense.',
      },
      {
        title: 'Flow of the Ball',
        body: 'Inside to outside and outside to inside. Wide = more secure, middle = more options.',
      },
      {
        title: 'Triangle Principle and Passing Options',
        body: 'Player with the ball must have at least two passing options.',
      },
      {
        title: 'Speed of Play',
        body: 'Quick ball movement creates 2v1 situations.',
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────────
  {
    id: 'pop-team-2',
    type: 'grid',
    title: 'Principles of Play — Team (cont.)',
    cols: 3,
    items: [
      {
        title: 'Movement Off the Ball',
        body: 'Find the best available space for passing options.',
      },
      {
        title: 'Pressure as a Unit',
        body: 'Organized pressure forces opponent errors.',
      },
      {
        title: 'Transition',
        body: 'Reduce passes needed to reach the target area or goal.',
      },
      {
        title: 'Direction of the Game',
        body: 'The game flows in all directions.',
      },
      {
        title: 'Take Initiative During the Game',
        body: 'Team must adapt to breakdowns and impose its own style.',
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────────
  {
    id: 'section-dev',
    type: 'divider',
    title: 'Player Development',
    subtitle: 'We develop players by combining modern technology, personalized feedback, and a clear path to high-level competition.',
  },

  // ── 15 ─────────────────────────────────────────────────────────
  {
    id: 'dev-problem-solution',
    type: 'problem-solution',
    title: 'How We Develop Players',
    problem: {
      heading: 'The Problem',
      items: [
        'Parent: Team practices are filled with teamwork — how can my son improve individually?',
        'Coach: Not enough time to cover team and individual development in 3 hours per week.',
        'Player: How come I\'m not getting better but other players are?',
      ],
    },
    solution: {
      heading: 'The Solution',
      items: [
        'Four ways to provide tailored individual training while keeping group practices focused on total team development.',
        'Currently virtual — players self-coach and learn essential ball skills at home.',
        'Can consider in-person sessions or group packages in the future.',
      ],
    },
  },

  // ── 16 ─────────────────────────────────────────────────────────
  {
    id: 'dev-tools-1',
    type: 'tools',
    title: 'How We Develop Players — Tools',
    items: [
      {
        name: 'Trace',
        description: 'Coach saves player highlight reels pointing out accomplishments and ways to improve, linked with the player\'s IDP.',
        image: 'assets/images/dev-tools/trace.png',
        imageFit: 'contain',
      },
      {
        name: 'Individual Development Plans (IDP)',
        description: 'Shifts focus from weekend team results to the child\'s specific needs.',
        image: 'assets/images/dev-tools/idp.png',
        imageFit: 'contain',
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────────
  {
    id: 'dev-tools-2',
    type: 'tools',
    title: 'How We Develop Players — Tools (cont.)',
    items: [
      {
        name: 'Sports Lab 360',
        description: 'Become a smarter player through watching real game film, interactive lessons, and quizzes.',
        image: 'assets/images/dev-tools/sports-lab-360.png',
        imageFit: 'contain',
      },
      {
        name: 'Anytime Soccer Training',
        description: 'Structured system for home training. Coach can assign and track progress.',
        image: 'assets/images/dev-tools/anytime-soccer-training.png',
        imageFit: 'contain',
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────────
  {
    id: 'dev-culture',
    type: 'tools',
    title: 'How We Develop Players — Culture',
    items: [
      {
        name: 'Highlights & Videos',
        description: 'Study highlights from own matches and professional games to build love of the game and tactical awareness.',
        image: 'assets/images/action/teach-teaching-highlights.png',
        imageFit: 'cover',
      },
      {
        name: 'Love of the Game',
        description: 'Commitment starts with love of the game. At U11, the number one priority is ensuring players love the game so they want to put in the work.',
        image: 'assets/images/action/rondo.jpg',
        imageFit: 'cover',
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
    type: 'text',
    title: 'Advanced Leagues',
    bullets: [
      '"Aren\'t I limiting my future options if I play for Synergy?"',
      'Synergy focuses on personalized development, not treating kids like numbers. It builds a strong foundation for elite pathways.',
      'Direct relationship with Phoenix Premier provides a path to MLS Next.',
      'Open League allows dual-rostering — players can join Phoenix Premier MLS Next while continuing with Synergy.',
      'Boys from Synergy already play for the U13 Phoenix Premier MLS Next team.',
    ],
  },

  // ── 21 ─────────────────────────────────────────────────────────
  {
    id: 'interstitial-humor',
    type: 'interstitial',
    lines: [
      '"Wait, what\'s an MLS Next? Is that like the \'gold\' division?"',
      '"If you just drop your kid off and aren\'t thinking he is going to do this for money, you can skip this next section."',
    ],
  },

  // ── 22 ─────────────────────────────────────────────────────────
  {
    id: 'things-you-will-hear',
    type: 'quote-collage',
    title: 'Things You Will Hear',
    quotes: [
      '"Our team plays ECNL..."',
      '"We\'re in MLS Next..."',
      '"It costs $8,000 a year but the exposure is worth it."',
      '"My son plays every minute — I want that."',
      '"Is this the D1 level?"',
      '"Is Synergy the \'silver\' division?"',
      '"I heard their coach played professionally."',
      '"We need to start thinking about scholarships now."',
    ],
  },

  // ── 23 ─────────────────────────────────────────────────────────
  {
    id: 'soccer-pyramid',
    type: 'image',
    title: 'Understanding the Youth Soccer Pyramid',
    image: 'assets/images/season-plan/soccer-pyramid.png',
    caption: 'Complete Guide to US Youth Soccer Structure 2026',
  },

  // ── 24 ─────────────────────────────────────────────────────────
  {
    id: 'league-outcomes',
    type: 'image',
    title: 'What Are the Outcomes of These Leagues?',
    image: 'assets/images/season-plan/league-outcomes.png',
    caption: 'MLS Next top tier + ECNL together supply ~73% of men\'s D1 recruits (NE study, 2024). 37% of D1 men\'s rosters are international players.',
  },

  // ── 25 ─────────────────────────────────────────────────────────
  {
    id: 'personal-take',
    type: 'text',
    title: 'Understanding the Youth Soccer Pyramid — Personal Take',
    bullets: [
      'For players with deep internal drive, aiming for MLS Next and ECNL is a fantastic goal.',
      '"Start thinking: what do you want your son\'s Soccer Journey to be?"',
      'Every situation is unique; there\'s nothing wrong with chasing the middle tier.',
      'Montone family personal take: wouldn\'t recommend leagues below MLS Next & ECNL unless specifically to play with friends, want a specific badge, want to feel like a mini-pro, or just want to try it out for a year.',
    ],
  },
]
