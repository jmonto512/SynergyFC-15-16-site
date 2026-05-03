export interface LearningArea {
  title: string
  skills: string[]
}

export const learningAreas: LearningArea[] = [
  {
    title: 'Technical',
    skills: [
      'Passing & receiving',
      'Running with the ball',
      'Dribbling',
      'Turning',
      'Shooting',
      'Ball control',
      '1v1 attacking',
      '1v1 defending',
    ],
  },
  {
    title: 'Tactical',
    skills: [
      'Creating space',
      'Combination play',
      'Through balls',
      'Switching the field',
      'Individual defending',
      'Zonal defending',
      'Pressing',
      'Recovering as a unit',
      'Playing out of the back',
      'Set pieces',
    ],
  },
  {
    title: 'Psychological',
    skills: [
      'Teamwork & cooperation',
      'Motivation',
      'Self-confidence',
      'Competitiveness',
      'Communication',
      'Freedom to fail & grow',
    ],
  },
  {
    title: 'Physical',
    skills: [
      'Speed',
      'Agility',
      'Coordination',
      'Balance with the ball',
      'Balance without the ball',
    ],
  },
]
