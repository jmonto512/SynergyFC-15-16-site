import {
  Container,
  Title,
  Text,
  Button,
  Group,
  SimpleGrid,
  Flex,
  Stack,
  Paper,
  Card,
  Image,
  Anchor,
} from '@mantine/core'
import { pillars } from '../data/pillars'
import { learningAreas } from '../data/learningAreas'
import { site } from '../data/site'
import Pillar from '../components/Pillar'
import LearningArea from '../components/LearningArea'
import Footer from '../components/Footer'

const base = import.meta.env.BASE_URL

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero section-border">
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
      </section>

      {/* ─── PHOTO BANNER ─── */}
      <div className="photo-banner section-border">
        <Image src={`${base}assets/images/team1.png`} alt="Team photo" h={280} fit="cover" style={{ opacity: 0.85 }} />
      </div>

      {/* ─── COACHES ─── */}
      <Container size={700} px="md" py={48} component="section" id="coaches" className="section-border">
        <Text className="label">WHO ARE MY COACHES?</Text>
        <Title order={2} mb="xl">Meet Jeff &amp; Ashley Montone</Title>
        <Flex gap={40} align="flex-start" direction={{ base: 'column', sm: 'row' }}>
          <div className="coach-photos">
            <Image className="coach-photo" src={`${base}assets/images/PXL_20231111_220634438.PORTRAIT.jpg`} alt="Our kids in our old jerseys front" />
            <Image className="coach-photo" src={`${base}assets/images/PXL_20231111_220612115.MP~2.jpg`} alt="Our kids in our old jerseys back" />
            <Image className="coach-photo" src={`${base}assets/images/03252025Rickey'sSoccer194.jpg`} alt="Training teaching team" />
            <Image className="coach-photo" src={`${base}assets/images/03252025Rickey'sSoccer338.jpg`} alt="Training teaching solo" />
          </div>
          <Stack gap="md" style={{ flex: 1 }}>
            <Text>We're not just coaches — we're products of this game.</Text>
            <Text>We both grew up playing for the same club, and soccer shaped who we are. Now we're committed to guiding the next generation of players.</Text>
            <Text>At U11, the single most important factor in youth development is the coach. Our job is to build an environment where players learn to think for themselves, solve problems on the field, and develop the persistence, effort, and teamwork that will serve them far beyond soccer.</Text>
            <Text>We've spent the last three years at the club level, creating a culture where our players develop real skills, compete with confidence, and — most importantly — fall in love with the sport the way we did.</Text>
            <Text>We've been through every stage of youth soccer as players and as parents, and we bring that firsthand perspective to everything we do on the training ground.</Text>
            <Text className="closing-line">This isn't a side project for us. It's personal.</Text>
          </Stack>
        </Flex>
      </Container>

      {/* ─── HOOK CALLOUT ─── */}
      <section className="hook section-border">
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={{ base: 12, md: 20 }} style={{ maxWidth: 960, margin: '0 auto' }}>
          <Paper className="hook-box">
            <Text>At this age, development should come first. We get to know your player, build their game, and grow with them — not replace them.</Text>
          </Paper>
          <Paper className="hook-box">
            <Text>Your child isn't a number on a roster. If we bring them in, we're committed to their development — every step of the way.</Text>
          </Paper>
          <Paper className="hook-box">
            <Text>Every player we take on gets real attention and a real role on this team — not a spot that disappears when a guest player shows up.</Text>
          </Paper>
        </SimpleGrid>
      </section>

      {/* ─── PILLARS ─── */}
      <Container size={700} px="md" py={48} component="section" className="section-border">
        <Text className="label">OUR PILLARS</Text>
        <Title order={2} mb="xl">What we stand for</Title>
        {pillars.map((pillar) => (
          <Pillar key={pillar.title} {...pillar} />
        ))}
      </Container>

      {/* ─── PLAYER DEVELOPMENT ─── */}
      <Container size={700} px="md" py={48} component="section" className="section-border">
        <Text className="label">PLAYER DEVELOPMENT</Text>
        <Title order={2} mb="xl">What will my son learn?</Title>
        {learningAreas.map((area) => (
          <LearningArea key={area.title} {...area} />
        ))}
      </Container>

      {/* ─── GALLERY ─── */}
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={4}
        px="md"
        style={{ maxWidth: 900, margin: '0 auto', paddingTop: 4, paddingBottom: 4 }}
        className="section-border"
      >
        <Image src={`${base}assets/images/rondo.jpg`} alt="Game action" h={220} fit="cover" style={{ opacity: 0.8 }} />
        <Image src={`${base}assets/images/team-teaching-1.jpg`} alt="Game action" h={220} fit="cover" style={{ opacity: 0.8 }} />
      </SimpleGrid>

      {/* ─── PRACTICE ─── */}
      <Container size={700} px="md" py={48} component="section" className="section-border">
        <Text className="label">FULL TRANSPARENCY</Text>
        <Title order={2} mb="xl">What does practice look like?</Title>
        <Text mb="lg">
          We believe in full transparency. Here's an actual practice plan so you can see
          exactly what your son will experience — no secrets.
        </Text>
        <Paper className="practice-box">
          <Text mb="md">
            Our pattern: <span>Technical Block</span> (unopposed → opposed)
            → <span>Tactical Block</span> (small-sided games for team principles)
            → <span>Scrimmage</span> (apply everything in a fully unrestricted environment)
          </Text>
          <Anchor href={site.links.samplePractice} target="_blank" rel="noreferrer" className="practice-link">
            View a Sample Practice →
          </Anchor>
        </Paper>
        <Text className="practice-location">Location: Paloma Community Park · Two nights a week</Text>
      </Container>

      {/* ─── POLICIES LINK ─── */}
      <Container size={700} px="md" py={48} component="section" className="section-border">
        <Group>
          <Card component="a" href={`${base}policies.html`} className="link-card" style={{ flex: '1 1 260px' }}>
            <Title order={3}>Team Policies</Title>
            <Text>Philosophy, development stages, evaluations, playing time, and responsibilities.</Text>
          </Card>
        </Group>
      </Container>

      <Footer />
    </>
  )
}
