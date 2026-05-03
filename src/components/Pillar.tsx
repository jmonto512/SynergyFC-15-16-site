import { Card, Image, Title, Text, ThemeIcon, Stack } from '@mantine/core'
import type { Pillar as PillarData } from '../data/pillars'

export default function Pillar({ icon, title, body }: PillarData) {
  return (
    <Card className="pillar-card" withBorder padding="xl" radius="md" h="100%">
      <Stack gap="md">
        <ThemeIcon
          size={96}
          radius="md"
          variant="default"
          className="pillar-icon-wrap"
        >
          <Image
            src={`${import.meta.env.BASE_URL}assets/icons/${icon}`}
            alt=""
            w={64}
            h={64}
            className="pillar-icon"
            fit="contain"
          />
        </ThemeIcon>
        <Title order={3}>{title}</Title>
        <Text>{body}</Text>
      </Stack>
    </Card>
  )
}
