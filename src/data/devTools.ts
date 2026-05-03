export type DevToolStatus = 'active' | 'rolling-out'

export interface DevTool {
  id: string
  name: string
  image: string
  status: DevToolStatus
  shortDescription: string
  longDescription: string
  link?: string
}

export const devTools: DevTool[] = [
  {
    id: 'trace',
    name: 'Trace',
    image: 'trace.jpg',
    status: 'active',
    shortDescription:
      'A personal highlight reel from every match — what your son did well, and the next thing to work on.',
    longDescription:
      "After games and tournaments, the coach saves a highlight reel for each player calling out their wins and the next thing to work on. Tied directly to your son's IDP so the feedback he gets on Saturday becomes the focus of his next training week.",
  },
  {
    id: 'idp',
    name: 'Individual Development Plans',
    image: 'idp.jpg',
    status: 'active',
    shortDescription:
      "A living plan focused on your son's growth, not the weekend's score.",
    longDescription:
      "Individual Development Plans shift the conversation from team results to your son's specific next step. We review them together, update them as he grows, and use them to anchor every other tool on this page.",
  },
  {
    id: 'sports-lab-360',
    name: 'Sports Lab 360',
    image: 'sports-lab-360.jpg',
    status: 'rolling-out',
    shortDescription:
      'Become a smarter player through real game film, interactive lessons, and a quiz at the end.',
    longDescription:
      "Sports Lab 360 builds game intelligence off the field. Players watch real match footage, work through an interactive lesson, and take a short quiz — and then come back to practice already speaking the language we're using on the pitch.",
  },
  {
    id: 'anytime-soccer-training',
    name: 'Anytime Soccer Training',
    image: 'anytime-soccer-training.jpg',
    status: 'rolling-out',
    shortDescription:
      "Three hours a week isn't enough touches. A structured at-home program the coach assigns and tracks.",
    longDescription:
      "Team practice alone doesn't build a great first touch. Anytime Soccer Training gives your son a structured at-home program — and lets the coach assign sessions, track progress, and align the work with his IDP.",
  },
]
