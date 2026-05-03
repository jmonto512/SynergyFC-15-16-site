import {
  Container,
  Text,
  Title,
  SimpleGrid,
  Stack,
  Group,
  Image,
  Badge,
  Box,
  Tabs,
} from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import SiteHeader from '../components/SiteHeader'
import SubPageHero from '../components/SubPageHero'
import SubPageOverview from '../components/SubPageOverview'
import Footer from '../components/Footer'
import DevTool from '../components/DevTool'
import Quote from '../components/Quote'
import { devTools } from '../data/devTools'
import { quotes } from '../data/quotes'
import { learningAreas } from '../data/learningAreas'

const base = import.meta.env.BASE_URL

const philosophyImages = [
  { src: 'action/teach-teaching-highlights.png', alt: 'Coach teaching highlights' },
  { src: 'action/rondo.jpg', alt: 'Rondo training drill' },
  { src: 'action/team-teaching-1.jpg', alt: 'Coach teaching the team' },
  { src: "action/03252025Rickey'sSoccer328.jpg", alt: 'Practice action' },
]

export default function PlayerDevelopment() {
  return (
    <>
      <SiteHeader inSubPage />

      <SubPageHero
        label="PLAYER DEVELOPMENT"
        title="How a Synergy FC player grows."
        subtitle="Technique through play. Game intelligence from the start. Tools that follow your son home."
        image="action/rondo.jpg"
      />

      <SubPageOverview
        items={[
          {
            num: '01',
            title: 'Our Approach',
            subtitle: 'How we teach technique and game intelligence together.',
            href: '#approach',
          },
          {
            num: '02',
            title: 'Individual Tools',
            subtitle: 'Four ways your son keeps improving outside of practice.',
            href: '#tools',
          },
          {
            num: '03',
            title: 'Love of the Game',
            subtitle: 'Why we study the pros — and why love comes first.',
            href: '#love',
          },
          {
            num: '04',
            title: 'What He Learns',
            subtitle: 'The full curriculum across a season.',
            href: '#curriculum',
          },
        ]}
      />

      {/* ─── 01 OUR APPROACH ─── */}
      <Container size="lg" px="md" py={56} component="section" id="approach" className="section-border">
        <Text className="label">OUR APPROACH</Text>
        <Title order={2} mb="md">Technique and game intelligence, taught together.</Title>
        <Stack gap="md">
          <Text>
            A common question from parents:{' '}
            <em>"Team practices are filled with teamwork — small-sided games, rondos,
            scrimmages. So how does my son improve individually?"</em>{' '}
            It's a fair question, and one we've thought about carefully.
          </Text>
          <Text>
            Our answer is that technique and game intelligence aren't a sequence — they're a
            conversation. Roughly a quarter of every practice is dedicated to focused unopposed
            technical work: passing patterns, dribbling moves, finishing. The other three-quarters
            are spent inside the questions a player will actually face on Saturday — small-sided
            games, rondos, and scrimmages built around a tactical theme.
          </Text>

          <Quote quote={quotes['knvb-driving-car']} kicker="THE PRINCIPLE" />

          <Text>
            This mirrors the Dutch <strong>TIC model — Technique, Insight, Communication.</strong>{' '}
            The Royal Dutch Football Association (KNVB) treats these three as mutually reinforcing
            and argues they cannot be effectively trained in isolation. Insight is what we call
            "game intelligence": reading a give-and-go, recognizing when to switch the field,
            knowing when to press and when to drop. Communication is everything kids say to each
            other on the pitch — which only develops by playing the actual game.
          </Text>

          <Quote quote={quotes['knvb-d-juniors']} kicker="WHY U11 IS THE RIGHT AGE" />

          <Text>
            U11 corresponds to what the Dutch system calls the "D juniors." It's the age where
            kids understand the rules well enough to grasp the offensive and defensive shape of
            the game, and they're keen to learn how their abilities fit into the bigger picture.
            Coaches at this stage are encouraged to teach through simplified small-sided games —
            which is exactly what our practices look like.
          </Text>

          <Box
            mt="lg"
            p="xl"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 8,
            }}
          >
            <Text className="label" mb="xs">ONE LAST NOTE</Text>
            <Text>
              Great coaches disagree about technique-first vs. game-first, and we respect both
              views. We've made our choice based on what we've seen work for U11 players —
              and on the same approach the world's most successful youth systems use. But
              ultimately, we just want your son to fall in love with this game and keep getting
              better.
            </Text>
          </Box>
        </Stack>
      </Container>

      {/* ─── 02 INDIVIDUAL TOOLS ─── */}
      <Container size="lg" px="md" py={56} component="section" id="tools" className="section-border">
        <Text className="label">INDIVIDUAL DEVELOPMENT, BUILT IN</Text>
        <Title order={2} mb="md">Four tools that follow your son home.</Title>
        <Text mb="xl">
          Three hours a week of team practice is for the team. These four tools are how
          your son keeps developing as an individual — every one of them tied back to his
          personal plan.
        </Text>

        <Stack gap="lg">
          {devTools.map((tool) => (
            <DevTool key={tool.id} tool={tool} variant="full" />
          ))}
        </Stack>
      </Container>

      {/* ─── 03 HIGHLIGHTS & LOVE OF THE GAME ─── */}
      <Container size="lg" px="md" py={56} component="section" id="love" className="section-border">
        <Text className="label">HIGHLIGHTS & LOVE OF THE GAME</Text>
        <Title order={2} mb="md">The reason all of this works.</Title>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt="xl">
          <Stack gap="md">
            <Carousel
              slideSize="100%"
              slideGap="md"
              align="start"
              withIndicators
              withControls
              loop
              classNames={{
                control: 'gallery-control',
                indicator: 'gallery-indicator',
              }}
            >
              {philosophyImages.map((photo) => (
                <Carousel.Slide key={photo.src}>
                  <Image
                    src={`${base}assets/images/${photo.src}`}
                    alt={photo.alt}
                    h={300}
                    fit="cover"
                    className="gallery-photo"
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
            <Text>
              We study highlights from our own matches and from the pros. The clips become
              a shared vocabulary for what we're trying to do on Saturday — and a window into
              a level of the game that inspires kids to keep working.
            </Text>
          </Stack>

          <Stack justify="center" gap="md">
            <Quote quote={quotes['love-of-the-game']} kicker="LOVE OF THE GAME" />
            <Text>
              At U11, our number one priority is making sure these players love the game.
              Tactics, technique, and tools all matter — but they only matter if a kid wants
              to put in the work. That's where every single thing on this page begins.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* ─── 04 WHAT HE LEARNS ─── */}
      <Container size="lg" px="md" py={56} component="section" id="curriculum" className="section-border">
        <Text className="label">CURRICULUM</Text>
        <Title order={2} mb="md">What he'll learn across a season.</Title>
        <Text mb="xl">
          For the curious — here's the full curriculum we work through. Some of these come up
          in every practice. Others are seasonal focus areas. All of them sit inside the same
          philosophy: learn it through playing it.
        </Text>

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

      <Footer
        heading="Want to see it for yourself?"
        sub="Come watch a practice — bring questions. We're an open book."
      />
    </>
  )
}
