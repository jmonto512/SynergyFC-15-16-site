import { Box, Text, Group, Badge } from '@mantine/core'
import type { LearningArea as LearningAreaData } from '../data/learningAreas'

export default function LearningArea({ title, skills }: LearningAreaData) {
  return (
    <Box mb="xl" pb="xl" className="learn-block">
      <Text ff="monospace" fz={11} fw={500} c="rgba(255,255,255,0.6)" tt="uppercase" lts="2px" mb="md">
        {title}
      </Text>
      <Group gap="xs" wrap="wrap">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            radius={0}
            tt="none"
            fz="sm"
            className="skill-badge"
          >
            {skill}
          </Badge>
        ))}
      </Group>
    </Box>
  )
}
