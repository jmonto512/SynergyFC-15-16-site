import {
  Container,
  Title,
  Text,
  Button,
  Group,
  SimpleGrid,
  Stack,
  Card,
  Image,
  Anchor,
  BackgroundImage,
  Overlay,
  Box,
} from '@mantine/core'
import { pillars } from '../data/pillars'
import { devTools } from '../data/devTools'
import { quotes } from '../data/quotes'
import { site } from '../data/site'
import Pillar from '../components/Pillar'
import DevTool from '../components/DevTool'
import Quote from '../components/Quote'
import SeasonResults from '../components/SeasonResults'
import Footer from '../components/Footer'
import SiteHeader from '../components/SiteHeader'

const base = import.meta.env.BASE_URL

const coachPhotos: { src: string; alt: string; objectPosition?: string }[] = [
  { src: 'PXL_20231111_220634438.PORTRAIT.jpg', alt: 'Our kids in our old jerseys, front', objectPosition: 'center top' },
  { src: 'PXL_20231111_220612115.MP~2.jpg', alt: 'Our kids in our old jerseys, back' },
  { src: "03252025Rickey'sSoccer194.jpg", alt: 'Coaching the team' },
  { src: "03252025Rickey'sSoccer338.jpg", alt: 'Coaching one-on-one' },
]

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div id="top" />

      {/* ─── HERO ─── */}
      <Box className="hero-wrap">
        <BackgroundImage
          src={`${base}assets/images/team1.png`}
          className="hero-bg"
        >
          <Overlay
            color="#0a0a0f"
            backgroundOpacity={0.78}
            zIndex={1}
            gradient="linear-gradient(180deg, rgba(10,10,15,0.55) 0%, rgba(10,10,15,0.85) 70%, rgba(10,10,15,1) 100%)"
          />
          <Box component="section" className="hero" style={{ position: 'relative', zIndex: 2 }}>
            <Text className="label">SYNERGY FC · U11 BOYS · PEORIA, AZ</Text>
            <Title order={1}>Building complete soccer players</Title>
            <Text className="subtitle">
              We develop technically skilled, tactically intelligent players in a culture
              built on effort, precision, and love for the game.
            </Text>
            <Group gap={16} justify="center" wrap="wrap">
              <Button component="a" href="#coaches" variant="outline">Meet the Coaches</Button>
              <Button component="a" href="#contact" variant="filled">Get in Touch</Button>
            </Group>
          </Box>
        </BackgroundImage>
      </Box>
      <Container size="lg" px="md" className="section-border" />


      {/* ─── COACHES ─── */}
      <Container size="lg" px="md" py={56} component="section" id="coaches" className="section-border">
        <Text className="label">WHO ARE MY COACHES?</Text>
        <Title order={2} mb="xl">Meet Jeff &amp; Ashley Montone</Title>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 32, md: 48 }} verticalSpacing="md">
          <SimpleGrid cols={2} spacing={4} className="coach-photo-grid">
            {coachPhotos.map((photo) => (
              <Image
                key={photo.src}
                src={`${base}assets/images/${photo.src}`}
                alt={photo.alt}
                className="coach-photo"
                fit="cover"
                style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
              />
            ))}
          </SimpleGrid>
          <Stack gap="md" justify="center">
            <Text>We're not just coaches — we're products of this game.</Text>
            <Text>We both grew up playing for the same club, and soccer shaped who we are. Now we're committed to guiding the next generation of players.</Text>
            <Text>At U11, the single most important factor in youth development is the coach. Our job is to build an environment where players learn to think for themselves, solve problems on the field, and develop the persistence, effort, and teamwork that will serve them far beyond soccer.</Text>
            <Text>We've spent the last three years at the club level, creating a culture where our players develop real skills, compete with confidence, and — most importantly — fall in love with the sport the way we did.</Text>
            <Text>We've been through every stage of youth soccer as players and as parents, and we bring that firsthand perspective to everything we do on the training ground.</Text>
            <Text className="coach-kicker">This isn't a side project for us. <em>It's personal.</em></Text>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* ─── PILLARS ─── */}
      <Container size="lg" px="md" py={56} component="section" id="pillars" className="section-border">
        <Text className="label">OUR PILLARS</Text>
        <Title order={2} mb="xl">What we stand for</Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {pillars.map((pillar) => (
            <Pillar key={pillar.title} {...pillar} />
          ))}
        </SimpleGrid>
      </Container>

      {/* ─── SEASON RESULTS ─── */}
      <SeasonResults />

      {/* ─── HOW WE DEVELOP PLAYERS (merged section) ─── */}
      <Container size="lg" px="md" py={56} component="section" id="development" className="section-border">
        <Text className="label">HOW WE DEVELOP PLAYERS</Text>
        <Title order={2} mb="xl">Where individual growth meets team play.</Title>

        {/* Block 1 — Lead + practice facts */}
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mb={56}>
          <Stack gap="md" justify="center">
            <Text>
              We coach the way the world's best youth academies coach: small-sided games,
              rondos, and tactical scrimmages, with about a quarter of every practice on
              focused technical work.
            </Text>
            <Text>
              The result is players who can think <em>and</em> execute — not one or the other.
            </Text>
          </Stack>

          <Card className="practice-box" withBorder shadow="sm" padding="xl" radius="md">
            <Stack gap="sm">
              <Text>
                <span>Where:</span> Paloma Community Park
              </Text>
              <Text>
                <span>When:</span> Two nights a week
              </Text>
              <Text>
                <span>Practice arc:</span> Technical Block → Tactical Block → Scrimmage
              </Text>
              <Anchor
                href={site.links.samplePractice}
                target="_blank"
                rel="noreferrer"
                className="practice-link"
                mt="xs"
              >
                View a Sample Practice →
              </Anchor>
            </Stack>
          </Card>
        </SimpleGrid>

        {/* Block 2 — Four individual development tools */}
        <Box mb={56}>
          <Text className="label">INDIVIDUAL DEVELOPMENT, BUILT IN</Text>
          <Title order={3} mb="sm" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'white', fontWeight: 400, fontSize: 28 }}>
            Four tools that follow your son home.
          </Title>
          <Text mb="xl">
            Practice is for the team. These four tools are for your son.
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg" style={{ alignItems: 'start' }}>
            {devTools.map((tool) => (
              <DevTool key={tool.id} tool={tool} variant="compact" />
            ))}
          </SimpleGrid>
        </Box>

        {/* Block 3 — Philosophy pull-quote */}
        <Box mb={56}>
          <Quote
            quote={quotes['knvb-driving-car']}
            kicker="HOW WE TEACH"
            framing="At U11, technique and game intelligence aren't a sequence — they grow together. Our practices teach passing, dribbling, and shooting inside the questions kids actually face on Saturday."
          />
        </Box>

        {/* Block 4 — Sub-page promo */}
        <Card
          component="a"
          href={`${base}player-development.html`}
          className="policies-promo"
          withBorder
          radius="md"
          padding={0}
        >
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={0}>
            <Image
              src={`${base}assets/images/rondo.jpg`}
              alt="Rondo training drill"
              h={{ base: 180, sm: 220 }}
              fit="cover"
              className="policies-promo-img"
            />
            <Stack gap="sm" justify="center" p="xl">
              <Text className="label" mb={0}>READ MORE</Text>
              <Title order={3}>Player Development</Title>
              <Text>
                How we develop technique, game intelligence, and a love of the game — and
                the tools that follow your son home.
              </Text>
            </Stack>
          </SimpleGrid>
        </Card>
      </Container>

      {/* ─── POLICIES PROMO ─── */}
      <Container size="lg" px="md" py={56} component="section" className="section-border">
        <Card
          component="a"
          href={`${base}policies.html`}
          className="policies-promo"
          withBorder
          radius="md"
          padding={0}
        >
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={0}>
            <Image
              src={`${base}assets/images/team-teaching-1.jpg`}
              alt="Coaching the team"
              h={{ base: 180, sm: 220 }}
              fit="cover"
              className="policies-promo-img"
            />
            <Stack gap="sm" justify="center" p="xl">
              <Text className="label" mb={0}>READ MORE</Text>
              <Title order={3}>Team Policies</Title>
              <Text>Philosophy, development stages, evaluations, playing time, and responsibilities.</Text>
            </Stack>
          </SimpleGrid>
        </Card>
      </Container>

      <Footer />
    </>
  )
}
