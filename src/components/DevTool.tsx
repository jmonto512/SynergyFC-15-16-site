import { Card, Image, Title, Text, Stack, Badge, Group, Anchor } from '@mantine/core'
import type { DevTool as DevToolData } from '../data/devTools'

interface DevToolProps {
  tool: DevToolData
  variant: 'compact' | 'full'
}

const base = import.meta.env.BASE_URL

export default function DevTool({ tool, variant }: DevToolProps) {
  const description =
    variant === 'compact' ? tool.shortDescription : tool.longDescription

  return (
    <Card className="pillar-card" withBorder padding={0} radius="md" h="100%">
      <Image
        src={`${base}assets/images/dev-tools/${tool.image}`}
        alt={tool.name}
        h={160}
        fit="cover"
        fallbackSrc={`${base}assets/images/team-teaching-1.jpg`}
      />
      <Stack gap="sm" p="lg">
        <Group gap="xs" wrap="wrap" align="center">
          <Title order={3} style={{ marginBottom: 0 }}>{tool.name}</Title>
          {tool.status === 'rolling-out' && (
            <Badge
              variant="outline"
              radius={0}
              tt="uppercase"
              fz="10px"
              className="skill-badge"
            >
              Rolling out this season
            </Badge>
          )}
        </Group>
        <Text>{description}</Text>
        {variant === 'full' && tool.link && (
          <Anchor
            href={tool.link}
            target="_blank"
            rel="noreferrer"
            className="practice-link"
            mt="xs"
          >
            Learn more →
          </Anchor>
        )}
      </Stack>
    </Card>
  )
}
