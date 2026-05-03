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
  Tabs,
  Badge,
} from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { pillars } from '../data/pillars'
import { learningAreas } from '../data/learningAreas'
import { site } from '../data/site'
import Pillar from '../components/Pillar'
import Footer from '../components/Footer'
import SiteHeader from '../components/SiteHeader'

const base = import.meta.env.BASE_URL

const galleryPhotos = [
  { src: 'team1.png', alt: 'Team photo' },
  { src: 'rondo.jpg', alt: 'Rondo training drill' },
  { src: 'team-teaching-1.jpg', alt: 'Coach teaching the team' },
  { src: 'team2.png', alt: 'Team' },
  { src: "03252025Rickey'sSoccer194.jpg", alt: 'Practice action' },
  { src: "03252025Rickey'sSoccer328.jpg", alt: 'Practice action' },
  { src: "03252025Rickey'sSoccer338.jpg", alt: 'Practice action' },
]

const coachPhotos = [
  { src: 'PXL_20231111_220634438.PORTRAIT.jpg', alt: 'Our kids in our old jerseys, front' },
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
      <Box className="hero-wrap section-border">
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
              />
            ))}
          </SimpleGrid>
          <Stack gap="md" justify="center">
            <Text>We're not just coaches — we're products of this game.</Text>
            <Text>We both grew up playing for the same club, and soccer shaped who we are. Now we're committed to guiding the next generation of players.</Text>
            <Text>At U11, the single most important factor in youth development is the coach. Our job is to build an environment where players learn to think for themselves, solve problems on the field, and develop the persistence, effort, and teamwork that will serve them far beyond soccer.</Text>
            <Text>We've spent the last three years at the club level, creating a culture where our players develop real skills, compete with confidence, and — most importantly — fall in love with the sport the way we did.</Text>
            <Text>We've been through every stage of youth soccer as players and as parents, and we bring that firsthand perspective to everything we do on the training ground.</Text>
            <Text>This isn't a side project for us. <em>It's personal.</em></Text>
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

      {/* ─── PLAYER DEVELOPMENT ─── */}
      <Container size="lg" px="md" py={56} component="section" className="section-border">
        <Text className="label">PLAYER DEVELOPMENT</Text>
        <Title order={2} mb="xl">What will my son learn?</Title>
        <Tabs
          variant="pills"
          color="gray"
          defaultValue={learningAreas[0].title}
          className="learning-tabs"
          keepMounted={false}
        >
          <Tabs.List mb="xl" className="learning-tabs-list">
            {learningAreas.map((area) => (
              <Tabs.Tab key={area.title} value={area.title}>
                {area.title}
              </Tabs.Tab>
            ))}
          </Tabs.List>
          {learningAreas.map((area) => (
            <Tabs.Panel key={area.title} value={area.title}>
              <Group gap="xs" wrap="wrap">
                {area.skills.map((skill) => (
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
            </Tabs.Panel>
          ))}
        </Tabs>
      </Container>

      {/* ─── GALLERY (Carousel) ─── */}
      <Box component="section" className="gallery section-border" py={32}>
        <Container size="xl" px="md">
          <Carousel
            slideSize={{ base: '100%', xs: '50%', md: '33.333%' }}
            slideGap={{ base: 'xs', sm: 'md' }}
            align="start"
            withIndicators
            withControls
            loop
            classNames={{
              control: 'gallery-control',
              indicator: 'gallery-indicator',
            }}
          >
            {galleryPhotos.map((photo) => (
              <Carousel.Slide key={photo.src}>
                <Image
                  src={`${base}assets/images/${photo.src}`}
                  alt={photo.alt}
                  h={280}
                  fit="cover"
                  className="gallery-photo"
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Container>
      </Box>

      {/* ─── PRACTICE ─── */}
      <Container size="lg" px="md" py={56} component="section" id="practice" className="section-border">
        <Text className="label">FULL TRANSPARENCY</Text>
        <Title order={2} mb="xl">What does practice look like?</Title>
        <Text mb="lg">
          We believe in full transparency. Here's an actual practice plan so you can see
          exactly what your son will experience — no secrets.
        </Text>
        <Card className="practice-box" withBorder shadow="sm" padding="xl" radius="md">
          <Text mb="md">
            Our pattern: <span>Technical Block</span> (unopposed → opposed)
            → <span>Tactical Block</span> (small-sided games for team principles)
            → <span>Scrimmage</span> (apply everything in a fully unrestricted environment)
          </Text>
          <Anchor href={site.links.samplePractice} target="_blank" rel="noreferrer" className="practice-link">
            View a Sample Practice →
          </Anchor>
        </Card>
        <Text className="practice-location">Location: Paloma Community Park · Two nights a week</Text>
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
