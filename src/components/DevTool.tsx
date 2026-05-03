import { Card, Image, Title, Text, Stack, Badge, Group, Anchor, Box } from '@mantine/core'
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
    <Card className="pillar-card dev-tool-card" withBorder padding={0} radius="md">
      <Box
        style={{
          height: 180,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255,255,255,0.02)',
          padding: 12,
        }}
      >
        <Image
          src={`${base}assets/images/dev-tools/${tool.image}`}
          alt={tool.name}
          fit="contain"
          style={{ maxHeight: '100%', width: 'auto' }}
          fallbackSrc={`${base}assets/images/action/team-teaching-1.jpg`}
        />
      </Box>
      {tool.secondaryImage && (
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.02)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: 8,
          }}
        >
          <Image
            src={`${base}assets/images/dev-tools/${tool.secondaryImage}`}
            alt={`${tool.name} (additional)`}
            fit="contain"
            style={{ maxHeight: 100, width: 'auto' }}
          />
        </Box>
      )}
      <Stack gap="xs" p="md">
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
        {tool.link && (
          <Anchor
            href={tool.link}
            target="_blank"
            rel="noreferrer"
            className="practice-link"
            mt="xs"
          >
            Visit {tool.name} →
          </Anchor>
        )}
      </Stack>
    </Card>
  )
}
