import {
  IconClipboard, IconTarget, IconBallFootball, IconEye, IconBrain,
  IconBriefcase, IconTrophy, IconUsers, IconClock, IconArrowsShuffle,
  IconCompass, IconBolt, IconBell, IconVolume, IconMessageCircle,
  IconHeart, IconShield, IconCheck, IconArrowNarrowDown, IconHandStop,
  IconArrowsExchange, IconRocket, IconHash, IconArrowsLeftRight,
  IconTriangle, IconArrowsMove, IconCrosshair, IconRefresh, IconBulb,
  IconHistory,
} from '@tabler/icons-react'
import type { IconComponent, BulletItem } from './seasonPlan'
import type { Slide as BaseSlide } from './seasonPlan'

export type CoachSection = { label: string; text: string; icon?: IconComponent }
export type CoachEntry = { name: string; role: string; sections: CoachSection[]; placeholder?: boolean }
export type CoachesSlide = { id: string; type: 'coaches'; title: string; coaches: CoachEntry[] }

export type StoryBullet = { heading: string; body: string }
export type StorySlide = { id: string; type: 'story'; title: string; bullets: StoryBullet[]; quote?: string; images: string[] }

export type DevSplitSlide = { id: string; type: 'dev-split'; title: string; note?: { label: string; text: string } }

export type PlayingRosterColumn = { heading: string; icon?: IconComponent; items: BulletItem[]; note?: { label: string; text: string } }
export type PlayingRosterSlide = { id: string; type: 'playing-roster'; title: string; left: PlayingRosterColumn; right: PlayingRosterColumn }

export type ContinuumSlide = { id: string; type: 'continuum'; title: string; note?: { label: string; text: string } }

export type ZpdGoalsSlide = { id: string; type: 'zpd-goals'; title: string }

export type ScheduleStat = { number: string; label: string; detail: string }
export type ScheduleStatsSlide = {
  id: string
  type: 'schedule-stats'
  title: string
  stats: ScheduleStat[]
  note?: { label: string; text: string }
}

export type CostRow = { item: string; cost: string; notes: string; optional?: boolean }
export type CostsTableSlide = {
  id: string
  type: 'costs-table'
  title: string
  rows: CostRow[]
  total?: string
  note?: { label: string; text: string }
  disclaimer?: string
}

export type QuoteImageSlide = {
  id: string
  type: 'quote-image'
  image: string
  quote: string
  attribution: string
  href?: string
}

export type PreSeasonSlide = BaseSlide | CoachesSlide | StorySlide | DevSplitSlide | PlayingRosterSlide | ContinuumSlide | ZpdGoalsSlide | ScheduleStatsSlide | CostsTableSlide | QuoteImageSlide

export const slides: PreSeasonSlide[] = [
  // ── 1 ──────────────────────────────────────────────────────────
  {
    id: 'title',
    type: 'title',
    title: 'Welcome to Synergy FC',
    subtitle: '2025–26 Pre-Season Family Meeting · U11 Boys',
  },

  // ── 2 ──────────────────────────────────────────────────────────
  {
    id: 'coaches',
    type: 'coaches',
    title: 'Meet Your Coaches',
    coaches: [
      {
        name: 'Jeff Montone',
        role: 'Head Coach',
        sections: [
          {
            label: 'Professional',
            icon: IconBriefcase,
            text: 'Software Architect with 20+ years of experience in software development and technology leadership.',
          },
          {
            label: 'Player Background',
            icon: IconBallFootball,
            text: "I loved soccer as a kid, but hated it in my teens and stopped playing entirely. In my 20s, playing on an international corporate team with teammates from Brazil, Ireland, and Mexico, I fell in love with the game again. I learned how to win with your brain and since then, I've been hooked.",
          },
          {
            label: 'Coaching',
            icon: IconTrophy,
            text: 'Entering my 4th season of youth coaching, 2nd consecutive at U11. I coach because this is the age when game intelligence clicks — and I want to be the one guiding that.',
          },
        ],
      },
      {
        name: 'Ashley Montone',
        role: 'Assistant Coach & Team Manager',
        sections: [
          {
            label: 'Player Background',
            icon: IconBallFootball,
            text: 'Joining my local club at age 8, I played for the same team and coach for a decade. We were #1 in the state.  I earned a spot on the PA Olympic Development Team (ODP) and also played varsity soccer as a freshman.',
          },
          {
            label: 'Coaching & Logistics',
            icon: IconUsers,
            text: "This will be my third year co-coaching with Jeff, while also serving as team manager. Previously, I was the assistant coach for my daughter’s club team and my son's rec team.  I coach because of the impact my own club coach had on me. He taught us to play with our brains and pushed us to reach our full potential, while always supporting us and building our love for the game. I want to bring that same balance and environment to the players.",
          },
        ],
      },
      {
        name: 'Coach Brent Shirk',
        role: 'Assistant Coach',
        sections: [
          {
            label: 'Player Background',
            icon: IconBallFootball,
            text: "Played competitive soccer through high school and played indoor into my mid 20's. I have coached Soccer, Football and Wrestling.",
          },
          {
            label: 'Coaching',
            icon: IconTrophy,
            text: "Make sure every player knows we're having fun out here, and also that we're serious about it. I hold players accountable without making it a big deal.",
          },
        ],
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────────
  {
    id: 'why-we-coach',
    type: 'story',
    title: 'Why We Coach',
    bullets: [
      {
        heading: 'We Coach What We Wish We Had',
        body: 'A system that makes players smarter, more confident, and more resilient — on and off the field.  U11 deserves a sold foundation with clear goals, not coaches playing headgames with kids who never had a chance to learn the game.',
      },
      {
        heading: 'Athletic Burnout Is Real',
        body: 'Both Jeff and Ashley have seen — and felt — what happens when youth sports become pressure instead of play. When the game stops being fun, motivation collapses and development stalls.',
      },
      {
        heading: 'Our Goal Is Dual',
        body: 'Build competitive players AND protect their love of the game. This sport requires a lot of hard work.  A player who loves soccer will outwork, outlast, and outgrow one who is burned out by 15.',
      },
    ],
    images: [
      'assets/images/coaches/PXL_20231111_220612115.MP~2.jpg',
      'assets/images/coaches/PXL_20231111_220634438.PORTRAIT.jpg',
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────────
  {
    id: 'section-dev',
    type: 'divider',
    title: 'Player Development',
    subtitle: 'How we build better players — and why it looks the way it does.',
  },

  // ── 5 ──────────────────────────────────────────────────────────
  {
    id: 'how-we-develop',
    type: 'dev-split',
    title: 'How We Develop Players',
    note: {
      label: 'What This Looks Like in Practice',
      text: "Practices will feel like organized chaos at times. Players will be problem-solving constantly — that's by design. Struggle in practice is how breakthroughs happen.",
    },
  },

  // ── 6 ──────────────────────────────────────────────────────────
  {
    id: 'coaching-continuum',
    type: 'continuum',
    title: 'The Coaching Continuum',
    note: {
      label: 'How We Coach',
      text: "We use a range of these styles — sometimes in the same session. We command when safety or time demands it, ask questions when players are close to the answer, and step back entirely when the game itself is teaching. The goal is to move as far right as the moment allows.",
    },
  },

  // ── 7 ──────────────────────────────────────────────────────────
  {
    id: 'dev-tools',
    type: 'tools',
    title: 'Individual Development Tools',
    items: [
      {
        name: 'Individual Development Plans (IDPs)',
        description: 'A personalized written plan for each player — strengths, areas to develop, specific drills, and measurable goals. Updated throughout the season. Parents receive a copy.',
        image: 'assets/images/dev-tools/idp.png',
        imageFit: 'contain',
      },
      {
        name: 'Trace — Personal Highlight Reels',
        description: 'Auto-generates game highlights, heat maps, and performance stats after every game. Optional at $25–35/month.',
        image: 'assets/images/dev-tools/trace.png',
        imageFit: 'contain',
        link: 'https://traceup.com/',
      },
      {
        name: 'Sports Lab 360 — Video Lessons',
        description: "Interactive video lessons covering tactical and technical concepts at your son's own pace. Introduces ideas we reinforce on the field.",
        image: 'assets/images/dev-tools/sports-lab-360.png',
        imageFit: 'contain',
        link: 'https://sportslab360.com',
      },
      {
        name: 'Anytime Soccer Training',
        description: 'A structured ball mastery program your son can do in the driveway in 15 minutes a day. Builds the touch and confidence that shows up in games.',
        image: 'assets/images/dev-tools/anytime-soccer-training.png',
        imageFit: 'contain',
        link: 'https://anytimesoccertraining.com',
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────────
  {
    id: 'playing-roster',
    type: 'playing-roster',
    title: 'Playing Time & Positions',
    left: {
      heading: 'Playing Time & Roster Approach',
      icon: IconClock,
      items: [
        {
          heading: 'How Minutes Are Earned',
          body: 'Playing time reflects effort, consistency, and attitude — in practice and in games. Players who apply what we coach earn more time on the field.',
        },
        {
          heading: 'Roster Breakdown (15 Players)',
          body: 'Top 5–6 performers: 63–75% game time · Middle 5–6: 47–58% · Others: 33–47%. These numbers shift weekly based on focus and effort.',
        },
        "Continued missed practices reduce game time. We can't evaluate or trust what we don't see.",
        'No player sits out an entire game unless disciplinary or injury-related.',
      ],
      note: {
        label: 'A Note for New Club Families',
        text: 'The goal is to give every player meaningful minutes while competing at a level that challenges the whole roster.  We are still in a developmental phase — not trying to win every game.',
      },
    },
    right: {
      heading: 'Positions & Multi-Position Learning',
      icon: IconArrowsShuffle,
      items: [
        {
          heading: 'Preferred Position',
          body: "Every player is expected to play multiple positions over the course of a season.  Its your journey so we encourage players to share a preferred position. We'll honor it when it fits the team's needs — but development sometimes requires playing somewhere unfamiliar.",
        },
        {
          heading: 'Why This Matters',
          body: 'Players who understand the whole field make better decisions everywhere. The best defenders think like attackers. The best forwards understand defensive shape.',
        },
        {
          heading: "You Don't Know Your Position Yet",
          body: "It's now common for professional players to play 2 or more positions across their career. The position your son will thrive in at 18 may not even be on his radar at 11 — the future team he plays for doesn't exist yet.",
        },
      ],
      note: {
        label: 'Looking Ahead',
        text: 'Position-specific development increases at U13+. For now, building a complete soccer brain is the highest-leverage investment we can make.',
      },
    },
  },

  // ── 9 ──────────────────────────────────────────────────────────
  {
    id: 'section-culture',
    type: 'divider',
    title: 'Success & Culture',
    subtitle: "What we're actually measuring — and what we expect from everyone involved.",
  },

  // ── 10 ─────────────────────────────────────────────────────────
  {
    id: 'team-goals',
    type: 'zpd-goals',
    title: 'Team Goals & What Success Looks Like',
  },

  // ── 11a ────────────────────────────────────────────────────────
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

  // ── 11b ────────────────────────────────────────────────────────
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

  // ── 11c ────────────────────────────────────────────────────────
  {
    id: 'pop-players',
    type: 'principles-table',
    title: 'Principles of Play — Players',
    rows: [
      { icon: IconBallFootball,    name: '1, 2 or 3 Touch Maximum',          description: 'Minimizing touches improves speed of play. (Longer-term goal, not a current requirement)' },
      { icon: IconCheck,           name: 'Keep the Game Simple',             description: "Don't force situations, over-dribble, or be careless with the ball." },
      { icon: IconArrowNarrowDown, name: 'Keep the Ball on the Ground',      description: 'Easier to control and move efficiently. (Exceptions apply)' },
      { icon: IconTarget,          name: 'Accuracy and Quality of the Pass', description: 'Firm, accurate, proper weight.' },
      { icon: IconHandStop,        name: 'First Touch',                      description: 'Clean, controlled first touch without stopping the ball. Take the touch away from pressure and into free space.' },
      { icon: IconEye,             name: 'Perception and Awareness',         description: 'All players should constantly scan the field.' },
      { icon: IconShield,          name: '1v1 Situations',                   description: 'Determined to regain control in defense. Keep it simple in attack — touch to the side, at speed.' },
      { icon: IconArrowsExchange,  name: 'Individual Transition',            description: 'React quickly when possession changes.' },
      { icon: IconBolt,            name: 'Shooting',                         description: 'Always keep an eye on the goal. All players are encouraged to shoot.' },
      { icon: IconRocket,          name: 'Take Risks',                       description: 'Mistakes are part of learning. Players are encouraged to take risks (especially in training) to increase speed of play.' },
    ],
    coachNote: "These principles aren't just tactics — they define how we train and compete every week. If they don't align with how you or your son approach the game, that's okay. It just means we may not be the right fit for each other, and being upfront about that now is better for everyone.",
  },

  // ── 11d ────────────────────────────────────────────────────────
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
      { icon: IconRefresh,         name: 'Transition',                                description: "Improve transition by reducing the number of passes needed to arrive at the target area or the opponent's goal." },
      { icon: IconCompass,         name: 'Direction of the Game',                     description: 'Play in any direction — back, wide, or forward — whatever creates the best opportunity.' },
      { icon: IconBulb,            name: 'Take Initiative During the Game',           description: 'Team breakdowns will occur. The team must adapt to new situations and impose its own style of play.' },
    ],
    coachNote: "These principles aren't just tactics — they define how we train and compete every week. If they don't align with how you or your son approach the game, that's okay. It just means we may not be the right fit for each other, and being upfront about that now is better for everyone.",
  },

  // ── 12 ─────────────────────────────────────────────────────────
  {
    id: 'section-family',
    type: 'divider',
    title: 'Your Role in the Team',
    subtitle: 'Parent expectations, home support, season schedule, and what this commitment looks like.',
  },

  // ── 13 ─────────────────────────────────────────────────────────
  {
    id: 'parent-expectations',
    type: 'grid',
    title: 'Parent Expectations & Communication',
    cols: 3,
    items: [
      {
        title: 'Team Culture',
        body: [
          "Never discuss another player's performance in front of your son.",
          'We are one team. Lift every player — not just your own.',
        ],
        icon: IconHeart,
        iconColor: 'rgba(212,175,80,0.9)',
        star: true,
      },
      {
        title: 'GameChanger App',
        body: [
          'All scheduling, cancellations, lineups, and updates go through GameChanger.',
          'Set up the app and turn on notifications before the season starts.',
          "If you don't decline a game or practice, we assume your son is available.",
        ],
        icon: IconBell,
        iconColor: 'rgba(60,185,110,0.85)',
      },
      {
        title: '24-Hour Rule',
        body: [
          'Wait 24 hours after a game before contacting coaches about concerns.',
          'This gives everyone time to process emotions and have a productive conversation.',
        ],
        icon: IconClock,
        iconColor: 'rgba(80,140,255,0.85)',
      },
      {
        title: 'No Sideline Coaching',
        body: [
          'Cheering and encouragement only.',
          "Tactical instructions from the sideline create conflicting signals and undermine your son's ability to think for himself.",
        ],
        icon: IconVolume,
        iconColor: 'rgba(230,120,50,0.85)',
      },
      {
        title: 'Kids Advocate First',
        body: [
          'Teach your son to talk to coaches directly about playing time, positions, or feedback.',
          "This builds the self-advocacy skills he'll need his whole life.",
        ],
        icon: IconMessageCircle,
        iconColor: 'rgba(160,90,240,0.85)',
      },
      {
        title: 'Referee Respect',
        body: [
          'Model the behavior you want your son to have on the field.',
          'No arguing calls from the sideline.',
          'Bad calls are part of the game at every level.',
        ],
        icon: IconShield,
        iconColor: 'rgba(50,185,180,0.85)',
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────────
  {
    id: 'home-support',
    type: 'features',
    title: 'HOME SUPPORT',
    subtitle: 'How to Support Your Son at Home',
    cols: 3,
    sections: [
      {
        items: [
          {
            icon: IconClipboard,
            title: 'Review the Content',
            description: [
              'Check GameChanger updates marked with the 🧠 icon and watch the linked videos with your son.',
              "When you understand what we're building, you can reinforce it at home.",
            ],
          },
          {
            icon: IconTarget,
            title: 'Take the IDP Seriously',
            description: [
              "Your son's Individual Development Plan is his roadmap for the season.",
              'Review it together, set goals, and celebrate small wins along the way.',
            ],
          },
          {
            icon: IconBallFootball,
            title: '15 Minutes a Day',
            description: [
              'Juggling, wall passes, cone drills — Anytime Soccer Training keeps it structured and short.',
              'In AZ heat, inside works great. The House Ball is built for hard floors.',
            ],
            link: 'https://www.amazon.com/House-Ball-Designed-Addictive-Realistic/dp/B0BM892H45',
            linkLabel: 'House Ball on Amazon',
          },
          {
            icon: IconEye,
            title: 'Watch the Game Together',
            description: [
              'Pull up a Premier League or MLS match together.',
              'Ask: what did the striker do without the ball? Why did the midfielder switch the play?',
            ],
          },
          {
            icon: IconBrain,
            title: 'Let Him Play FC 26',
            description: [
              'Football video games build real tactical pattern recognition — formations, spacing, pressing.',
              'Players who follow the game mimic their heroes on the field. It deepens the love for the sport.',
            ],
          },
        ],
      },
    ],
  },

  // ── 14b ────────────────────────────────────────────────────────
  {
    id: 'duck-rabbit',
    type: 'quote-image',
    image: 'assets/images/season-plan/duck-or-rabbit.png',
    quote: "This is the most difficult thing in a football club — my only aim is that everyone sees a rabbit or a duck. Because if you see the duck and I see the rabbit, we are in a different pathway, a different direction.",
    attribution: 'Mikel Arteta',
    href: 'https://youtube.com/shorts/alobMCIBl9s?si=NPoGfXIgIMb3T2UP',
  },

  // ── 15 ─────────────────────────────────────────────────────────
  {
    id: 'schedule',
    type: 'schedule-stats',
    title: 'Season Schedule & Logistics',
    stats: [
      { number: '2', label: 'Practices per Week', detail: '~1.5 hours each · typically Tues/Thurs evenings' },
      { number: '12', label: 'League Games', detail: 'August through April' },
      { number: '8–10', label: 'Tournaments', detail: 'Throughout the season · Planned at the start of the season' },
      { number: '1', label: 'Free Weekend / Month', detail: 'Communicated well in advance — family time matters' },
    ],
    note: {
      label: 'Communication Protocol',
      text: "All scheduling goes through GameChanger. If you have a known conflict, communicate it early — last-minute drops hurt roster planning and the team.",
    },
  },

  // ── 16 ─────────────────────────────────────────────────────────
  {
    id: 'costs',
    type: 'costs-table',
    title: 'Costs & Financial Commitment',
    rows: [
      { item: 'ASA Card', cost: '$150', notes: 'Required for league play. Covers player registration with the Arizona Soccer Association.' },
      { item: 'Uniforms', cost: '~$150', notes: 'Home, away and practice kits. Purchased through the club.' },
      { item: 'Club Dues', cost: '$975', notes: 'Coaching, field time, administration, and club overhead.' },
      { item: 'Team Fees', cost: '$500 – $600', notes: 'Covers all tournament entries and team expenses for the season. Divided equally across 15 players regardless of tournament attendance. Half due in August, half due in December.' },
      { item: 'Trace', cost: '$25 – $35/mo', notes: 'GPS tracking + personal highlight reels. Highly recommended but not required. Can be started or stopped at any time.', optional: true },
    ],
    total: '~$1,775 – $1,875',
    note: {
      label: 'Financial Hardship',
      text: "Please reach out privately if cost is a barrier. We don't want finances to prevent a player from being part of this team.",
    },
    disclaimer: 'Does not include personal travel costs. Last season we had one away tournament in Prescott and one away league game in Flagstaff.',
  },

  // ── 17 ─────────────────────────────────────────────────────────
  {
    id: 'faq',
    type: 'grid',
    title: 'Frequently Asked Questions',
    cols: 2,
    items: [
      {
        title: 'How does my son earn more playing time?',
        body: [
          'Consistent effort and focus in practice is the biggest factor.',
          'Players who apply what we coach — in training and in games — earn more minutes.',
          'Practices include scrimmages and small-sided games, so even players with less league time have opportunities to show us what they can do.',
        ],
      },
      {
        title: 'What if he misses a practice?',
        body: [
          'One miss is manageable — patterns are not.',
          'Let us know in advance through GameChanger.',
          'Unexcused absences affect game time.',
        ],
      },
      {
        title: 'Can he play his preferred position?',
        body: [
          'He can express a preference and we\'ll honor it when possible.',
          'But development sometimes requires playing out of the comfort zone.',
          'We havent had a problem with this in the past, I am flexible.',
        ],
      },
      {
        title: 'What if he gets frustrated or emotional?',
        body: [
          "That's healthy. We coach through emotional reactions — we don't pull players for them.",
          'Talk about it at home after the 24-hour cooldown.',
        ],
      },
      {
        title: 'Can I coach from the sideline?',
        body: [
          "Please don't — even if your advice is correct.",
          "Conflicting instructions create confusion and undermine his ability to process what he's learning.",
        ],
      },
      {
        title: 'What about vacations or schedule conflicts?',
        body: [
          'Family comes first.',
          'Give us as much notice as possible so we can plan lineups accordingly.',
          'Communicate early — not the day before.',
        ],
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────────
  {
    id: 'section-beyond',
    type: 'divider',
    title: 'Beyond U11',
    subtitle: 'Understanding youth soccer pathways',
  },

  // ── 18a ────────────────────────────────────────────────────────
  {
    id: 'beyond-intro',
    type: 'interstitial',
    lines: [
      'Our team is mostly new this season — beyond U11 pathways are not today\'s focus.',
      'But this world exists, it matters, and the earlier you understand it, the better prepared you\'ll be.',
      'Ask us anything. We\'re here for the long game — not just this season.',
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────────
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

  // ── 19 ─────────────────────────────────────────────────────────
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
          star: true,
        },
        {
          name: 'MLS Next',
          tag: 'NATIONAL · TIER 1',
          description: "The premier national youth league, launched in 2021. Open to MLS Academies and elite independent clubs. The primary pathway to the professional game and the D1 programs that feed it. ~73% of D1 men's recruits come from MLS Next or ECNL.",
          star: true,
        },
        {
          name: 'MLS Next Tier 2',
          tag: 'NATIONAL · TIER 2',
          description: 'A second division within the MLS Next ecosystem — slightly less selective than Tier 1 but still national competition. A legitimate stepping stone for players progressing toward the top flight.',
        },
        {
          name: 'ECNL',
          tag: 'NATIONAL · INDEPENDENT',
          description: "Elite Clubs National League — the top independent club league, considered on par with MLS Next for college recruitment. Heavy emphasis on college exposure through showcase tournaments attended by D1 coaches across the country.",
          star: true,
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
      },
    },
  },

  // ── 20 ─────────────────────────────────────────────────────────
  {
    id: 'league-outcomes',
    type: 'image',
    title: 'What Are the Outcomes of These Leagues?',
    image: 'assets/images/season-plan/league-outcomes.png',
    caption: "MLS Next top tier + ECNL together supply ~73% of men's D1 recruits (NE study, 2024). 37% of D1 men's rosters are international players.",
    sidebar: {
      items: [
        {
          name: '~73% of D1 Recruits',
          description: "MLS Next Tier 1 and ECNL together supply roughly 73% of men's D1 soccer recruits nationally (NE study, 2024).",
        },
        {
          name: '37% International',
          description: "37% of D1 men's rosters are international players — directly reducing the spots available for domestic youth players.",
        },
      ],
      callout: {
        label: 'The Reality Check',
        heading: 'Even ECNL: Just ~35% Reach D1',
        body: "Even among players who reach elite leagues like ECNL, only ~35% earn a Division 1 scholarship. On a typical 18-player ECNL team, that's roughly 6 players. The other 12 find different paths — and those paths are not failures. Understanding this early helps you make decisions for the right reasons.",
      },
    },
  },

  // ── 21 ─────────────────────────────────────────────────────────
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
        honest: "Joining win-now environments before a player is ready often leads to burnout and anxiety. It takes the joy out of the sport during the most crucial learning years.",
      },
      {
        tier: 'Foundation',
        sublabel: 'Club · Local (Where We Are)',
        tag: 'Where love is built',
        tagColor: 'blue',
        description: "Not a consolation prize. This is where most great players spend their formative years — building fundamentals, trusting their coach, and falling in love with the game before the pressure sets in.",
        honest: "Give your son a dedicated coach and a stable environment before chasing the next level. Constant team-switching during the development years costs more than it gains.",
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
        story: 'Played on teams that prioritized winning. Switched clubs every year chasing the next level. Walked away from the sport never wanting to play again — only to rediscover that love in his 20s.',
      },
      {
        person: 'Our Daughter',
        role: 'New club · advanced league placement',
        story: "Joined a new club she was excited about. Because the club only competed in advanced leagues, this beginner team was placed in DPL — requiring flights to Utah, Colorado, and Texas. No one stopped to ask whether the team was ready.",
      },
    ],
    promise: {
      label: 'Our Commitment to You',
      heading: "If our son's path changes, you'll know well in advance. Our deeper goal is a lifelong love of the game.",
      body: '',
    },
  },

  // ── 26 ─────────────────────────────────────────────────────────
  {
    id: 'love-of-game',
    type: 'interstitial',
    lines: [
      'We are here for one reason.',
      'To help your son fall in love with this game — so deeply that he wants to work, compete, and grow on his own terms.',
      'Everything else is in service of that.',
    ],
  },
]
