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
    <Card
      className="pillar-card dev-tool-card"
      withBorder
      padding={0}
      radius="md"
      h="100%"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Image
        src={`${base}assets/images/dev-tools/${tool.image}`}
        alt={tool.name}
        h={variant === 'compact' ? 160 : 180}
        fit="cover"
        fallbackSrc={`${base}assets/images/action/team-teaching-1.jpg`}
      />
      <Stack gap="xs" p="md" style={{ flex: 1, minHeight: 0 }}>
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
        {variant === 'full' && tool.secondaryImage && (
          <Image
            src={`${base}assets/images/dev-tools/${tool.secondaryImage}`}
            alt={`${tool.name} (additional)`}
            fit="contain"
            radius="sm"
            mt="xs"
            style={{ width: '100%', flex: 1, minHeight: 0 }}
          />
        )}
        {tool.link && (
          <Anchor
            href={tool.link}
            target="_blank"
            rel="noreferrer"
            className="practice-link"
            mt="auto"
          >
            Visit {tool.name} →
          </Anchor>
        )}
      </Stack>
    </Card>
  )
}
