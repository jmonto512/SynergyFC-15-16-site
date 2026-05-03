import { Card, Image, Title, Text, Stack, Badge, Group, Anchor, Flex } from '@mantine/core'
import type { DevTool as DevToolData } from '../data/devTools'

interface DevToolProps {
  tool: DevToolData
  variant: 'compact' | 'full'
}

const base = import.meta.env.BASE_URL

export default function DevTool({ tool, variant }: DevToolProps) {
  const description =
    variant === 'compact' ? tool.shortDescription : tool.longDescription

  const badge = tool.status === 'rolling-out' && (
    <Badge variant="outline" radius={0} tt="uppercase" fz="10px" className="skill-badge">
      Rolling out this season
    </Badge>
  )

  if (variant === 'full') {
    return (
      <Card
        className="pillar-card dev-tool-card"
        withBorder
        padding={0}
        radius="md"
        style={{ overflow: 'hidden' }}
      >
        <Flex direction={{ base: 'column', sm: 'row' }}>
          <Image
            src={`${base}assets/images/dev-tools/${tool.image}`}
            alt={tool.name}
            h={{ base: 200, sm: 'auto' }}
            w={{ base: '100%', sm: 240 }}
            fit="contain"
            style={{ flexShrink: 0, background: 'rgba(255,255,255,0.04)' }}
            fallbackSrc={`${base}assets/images/action/team-teaching-1.jpg`}
          />
          <Stack gap="xs" p="lg" style={{ flex: 1 }}>
            <Group gap="xs" wrap="wrap" align="center">
              <Title order={3} style={{ marginBottom: 0 }}>{tool.name}</Title>
              {badge}
            </Group>
            <Text>{description}</Text>
            {tool.link && (
              <Anchor
                href={tool.link}
                target="_blank"
                rel="noreferrer"
                className="practice-link"
                mt="sm"
              >
                Visit {tool.name} →
              </Anchor>
            )}
          </Stack>
        </Flex>
      </Card>
    )
  }

  return (
    <Card
      className="pillar-card dev-tool-card"
      withBorder
      padding={0}
      radius="md"
      h={{ base: 'auto', sm: '100%' }}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Image
        src={`${base}assets/images/dev-tools/${tool.image}`}
        alt={tool.name}
        h={160}
        fit="cover"
        visibleFrom="sm"
        fallbackSrc={`${base}assets/images/action/team-teaching-1.jpg`}
      />
      <Stack gap="xs" p="md" style={{ flex: 1, minHeight: 0 }}>
        <Group gap="xs" wrap="wrap" align="center">
          <Title order={3} style={{ marginBottom: 0 }}>{tool.name}</Title>
          {badge}
        </Group>
        <Text>{description}</Text>
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
