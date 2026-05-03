import { Box, Group, Image, Title, Text } from '@mantine/core'
import type { Pillar as PillarData } from '../data/pillars'

export default function Pillar({ icon, title, body }: PillarData) {
  return (
    <Box className="pillar">
      <Group align="center" gap="md" mb="xs">
        <Image
          src={`${import.meta.env.BASE_URL}assets/icons/${icon}`}
          alt=""
          w={64}
          h={64}
          className="pillar-icon"
          fit="contain"
        />
        <Title order={3}>{title}</Title>
      </Group>
      <Text>{body}</Text>
    </Box>
  )
}
