import { Container, Title, Text, Stack, Box, SimpleGrid, Accordion } from '@mantine/core'
import SiteHeader from '../components/SiteHeader'
import SubPageHero from '../components/SubPageHero'
import SubPageOverview from '../components/SubPageOverview'
import Footer from '../components/Footer'

export default function Policies() {
  return (
    <>
      <SiteHeader inSubPage />

      <SubPageHero
        label="TEAM POLICIES"
        title="How we run this team."
        image="action/team-teaching-1.jpg"
      />

      <SubPageOverview
        items={[
          {
            num: '01',
            title: 'Positions',
            subtitle: 'How we assign and rotate roles across the roster.',
            href: '#positions',
          },
          {
            num: '02',
            title: 'Playing Time',
            subtitle: 'Our commitment to every player getting meaningful minutes.',
            href: '#playing-time',
          },
        ]}
      />

      {/* ─── 01 POSITIONS ─── */}
      <Container size="lg" px="md" py={56} component="section" id="positions" className="section-border">
        <Text className="label">POSITIONS</Text>
        <Title order={2} mb="md">How we approach positions</Title>
        <Stack gap="md">
          <Text>
            Players are expected to play more than one general position — forward, midfielder,
            or defender. For instance, while a player may be best at center back, they're also
            expected to be comfortable stepping into a midfield role.
          </Text>
          <Text>
            Even though we don't specialize in positions, we still learn position-specific
            skills as a team.
          </Text>

          <Box className="learn-area" mt="lg">
            <h3>Preferred Positions</h3>
            <p>
              Players are encouraged to share with their coach what position they'd like to
              play. If the coach can't put a player in their preferred position, the coach will:
            </p>
          </Box>

          <Box className="policy-list">
            <Box className="policy-item">
              <span className="policy-num">01</span>
              <p>Explain why that decision was made.</p>
            </Box>
            <Box className="policy-item">
              <span className="policy-num">02</span>
              <p>Provide guidance on what the player can improve to be a better fit for that position.</p>
            </Box>
            <Box className="policy-item">
              <span className="policy-num">03</span>
              <p>
                Give the player a clear path — so they can choose to work toward it, find a
                better fit elsewhere, or learn to love another position... at least for now.
              </p>
            </Box>
          </Box>

          <Box className="learn-area" mt="lg">
            <h3>Why?</h3>
            <p>
              The KNVB and clubs like Ajax deliberately avoid position-specific
              training until age 15 — not as an oversight, but as a core development
              principle. A player's strengths at 11 look nothing like their strengths at 16.
            </p>
          </Box>

          <Box
            style={{
              borderLeft: '2px solid rgba(255,255,255,0.2)',
              paddingLeft: 24,
              marginBottom: 40,
            }}
          >
            <Text
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(19px, 2.5vw, 23px)',
                color: 'white',
                lineHeight: 1.55,
                fontStyle: 'italic',
              }}
            >
              "Defenders who only play centrally learn to think one-dimensionally.
              Outside backs must learn to anticipate and cover space creatively."
            </Text>
            <Text
              mt="xs"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '2px',
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
              }}
            >
              — KNVB / Dutch Youth Development
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, xs: 2, sm: 4 }} spacing="sm" mb="xl">
            {[
              { ages: 'U11–U12', label: 'Free Discovery', desc: 'No position-specific training. Players explore the game freely.', active: true },
              { ages: 'U13–U14', label: 'First Positions', desc: 'Positions assigned, but rotated week to week. Flexibility is key.' },
              { ages: 'U15–U16', label: 'Finding Fit', desc: 'Clubs begin asking who fits where. Tailored development starts.' },
              { ages: 'U17–U19', label: 'Specialization', desc: 'True position specialists emerge for the first time.' },
            ].map(({ ages, label, desc, active }) => (
              <Box
                key={ages}
                p="md"
                style={{
                  background: active ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${active ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)'}`,
                }}
              >
                <Text
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    letterSpacing: '2px',
                    color: active ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.4)',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}
                >
                  {ages}{active && ' · us'}
                </Text>
                <Text
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 18,
                    color: 'white',
                    marginBottom: 6,
                    lineHeight: 1.3,
                  }}
                >
                  {label}
                </Text>
                <Text style={{ fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,0.6)' }}>
                  {desc}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          <Box className="section-kicker">
            <Text>
              All players attack. All players defend. Switching positions is not a
              mistake — it's the point.
            </Text>
          </Box>
        </Stack>
      </Container>

      {/* ─── 02 PLAYING TIME ─── */}
      <Container size="lg" px="md" py={56} component="section" id="playing-time" className="section-border">
        <Text className="label">PLAYING TIME</Text>
        <Title order={2} mb="md">Our goal for every player</Title>
        <Stack gap="md">
          <Text>
            All players should play roughly half of every game — that's our standard, not a
            guarantee. We keep rosters to 3–4 subs per game, so most players see 66–75% or
            more of game time. Players who have missed significant practice time due to absence
            or injury will play less.
          </Text>

          <Box className="learn-area" mt="lg">
            <h3>Why?</h3>
            <p>
              At this age, players need the freedom to take risks without fear of losing their
              spot. If a player is afraid that one bad touch costs them minutes, they stop
              being creative. They stop trying things they haven't mastered yet. And that's
              exactly when development stops.
            </p>
          </Box>

          <Box
            style={{
              borderLeft: '2px solid rgba(255,255,255,0.2)',
              paddingLeft: 24,
              marginBottom: 40,
            }}
          >
            <Text
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(19px, 2.5vw, 23px)',
                color: 'white',
                lineHeight: 1.55,
                fontStyle: 'italic',
              }}
            >
              "One must and has the right to make mistakes, for this is the only way to learn."
            </Text>
            <Text
              mt="xs"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '2px',
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
              }}
            >
              — Dutch Football Culture
            </Text>
          </Box>

          <Accordion className="policies-faq" variant="separated" chevronPosition="right">
            <Accordion.Item value="winning">
              <Accordion.Control>What about winning?</Accordion.Control>
              <Accordion.Panel>
                We play to win every game. But we only win as a team — which means we operate
                with a "next man up" mindset. The depth of the roster is an advantage, not a compromise.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="multiple-games">
              <Accordion.Control>What about playing multiple games in a day?</Accordion.Control>
              <Accordion.Panel>
                A deep, rested roster wins games — tired players don't. Rotating through a full
                squad isn't charity; it's strategy.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="heat">
              <Accordion.Control>Does the Arizona heat factor in?</Accordion.Control>
              <Accordion.Panel>
                Players are expected to move without the ball — and in Arizona, players who do that
                will need a break. That's not optional; it's safety and performance.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="vacation">
              <Accordion.Control>What if we need to miss a tournament?</Accordion.Control>
              <Accordion.Panel>
                At our club level, life happens. Families should be able to take a vacation or miss
                an event without it defining their kid's place on the team or their minutes when they return.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          <Box className="section-kicker">
            <Text>
              We build teams. Teams win games.
            </Text>
          </Box>
        </Stack>
      </Container>

      <Footer heading="Questions?" sub="We're an open book. Reach out anytime." />
    </>
  )
}
