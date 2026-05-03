import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Stack,
  Group,
  Card,
  Image,
  Badge,
  Anchor,
  Box,
} from '@mantine/core'
import { seasonResults } from '../data/seasonResults'
import { site } from '../data/site'

const base = import.meta.env.BASE_URL

export default function SeasonResults() {
  return (
    <Container size="lg" px="md" py={56} component="section" id="season" className="section-border">
      <Text className="label">2025–26 SEASON</Text>
      <Title order={2} mb="md">When the work is right, the results follow.</Title>
      <Text mb="xl" maw={560}>
        We measure ourselves by the player we send into next year, not the trophy on the shelf.
        But when the work is honest, the results show. This past season, ours did.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
        <Stack gap="xs">
          <Image
            src={`${base}assets/images/results/champions1.jpg`}
            alt="Team after winning the RSL-AZ Holiday Classic 2025"
            className="season-photo"
            fit="cover"
          />
          <Text className="label" mt="xs">RSL-AZ HOLIDAY CLASSIC · CHAMPIONS</Text>
        </Stack>

        <Stack gap="sm">
          {seasonResults.map((result) => (
            <Card
              key={`${result.competition}-${result.detail}`}
              className="pillar-card result-card"
              withBorder
              padding="md"
              radius="md"
            >
              <Group wrap="nowrap" align="center" gap="md">
                <Badge
                  variant="outline"
                  radius={0}
                  tt="none"
                  fz="sm"
                  className="skill-badge result-rank"
                >
                  {result.rank}
                </Badge>
                <Box style={{ minWidth: 0, flex: 1 }}>
                  <Text className="result-competition">{result.competition}</Text>
                  <Text className="result-detail">{result.detail}</Text>
                </Box>
              </Group>
            </Card>
          ))}
        </Stack>
      </SimpleGrid>

      <Anchor
        href={site.links.gotSport}
        target="_blank"
        rel="noreferrer"
        className="practice-link"
        mt="xl"
        display="inline-block"
      >
        See the full match record on GotSport →
      </Anchor>
    </Container>
  )
}
