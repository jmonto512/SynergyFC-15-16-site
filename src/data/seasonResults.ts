export interface SeasonResult {
  rank: string
  competition: string
  detail: string
  kind: 'tournament' | 'league'
}

export const seasonResults: SeasonResult[] = [
  {
    rank: 'Champions',
    competition: 'RSL-AZ Holiday Classic',
    detail: '2025',
    kind: 'tournament',
  },
  {
    rank: 'Finalists',
    competition: 'Christmas Angel',
    detail: '2025',
    kind: 'tournament',
  },
  {
    rank: 'Finalists',
    competition: 'Phoenix Rising Cup',
    detail: '2025',
    kind: 'tournament',
  },
  {
    rank: 'Champions',
    competition: 'MaxinMotion Open League — Season 1',
    detail: 'Division 10 — Promoted to Division 8',
    kind: 'league',
  },
  {
    rank: '3rd',
    competition: 'MaxinMotion Open League — Season 2',
    detail: 'Division 8',
    kind: 'league',
  },
]
