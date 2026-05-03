export interface Quote {
  id: string
  text: string
  attribution: string
  context?: string
}

export const quotes: Record<string, Quote> = {
  'knvb-driving-car': {
    id: 'knvb-driving-car',
    text: 'Driving a car is best learnt when you sit behind the wheel and join the traffic. You must play soccer in order to learn the techniques.',
    attribution: 'Royal Dutch Football Association (KNVB)',
  },
  'cruyff-play': {
    id: 'cruyff-play',
    text: "The best way to teach soccer to children is to play with them, not tell them what they shouldn't do.",
    attribution: 'Johan Cruyff',
  },
  'knvb-d-juniors': {
    id: 'knvb-d-juniors',
    text: 'U11 is the ideal developmental phase to initiate game intelligence and creativity.',
    attribution: 'Royal Dutch Football Association (KNVB)',
    context: 'On the "D juniors" age group, ages 10–12.',
  },
  'love-of-the-game': {
    id: 'love-of-the-game',
    text: 'Commitment starts with love. At U11, our number one priority is making sure these players love the game — because the rest only happens when they want to put in the work.',
    attribution: 'Coach Jeff',
  },
}
