import { Container, SimpleGrid, Card, Group, Text, Title } from '@mantine/core'

export interface OverviewItem {
  num: string
  title: string
  subtitle: string
  href: string
}

interface SubPageOverviewProps {
  items: OverviewItem[]
}

export default function SubPageOverview({ items }: SubPageOverviewProps) {
  const lgCols = Math.min(items.length, 4)
  const smCols = items.length > 1 ? 2 : 1

  return (
    <Container size="lg" px="md" py={48} component="section" className="section-border">
      <SimpleGrid cols={{ base: 1, sm: smCols, lg: lgCols }} spacing="md">
        {items.map((item) => (
          <Card
            key={item.href}
            component="a"
            href={item.href}
            className="pillar-card overview-card"
            withBorder
            padding="lg"
            radius="md"
          >
            <Group gap="md" wrap="nowrap" align="flex-start">
              <Text
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: 11,
                  letterSpacing: 1,
                  paddingTop: 4,
                  flexShrink: 0,
                }}
              >
                {item.num}
              </Text>
              <div style={{ minWidth: 0 }}>
                <Title
                  order={4}
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: 'white',
                    fontSize: 22,
                    fontWeight: 400,
                    lineHeight: 1.2,
                    marginBottom: 6,
                  }}
                >
                  {item.title}
                </Title>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.5,
                  }}
                >
                  {item.subtitle}
                </Text>
              </div>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  )
}
