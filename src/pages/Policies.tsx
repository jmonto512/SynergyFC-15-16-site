import { Container, Title, Text, Stack, Box } from '@mantine/core'
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
        image="team-teaching-1.jpg"
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
            or defender. For instance, while you may be best at center back, you're also
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
              Kids are developing physically, mentally, and as soccer players. A person's
              strengths at age 11 may look completely different at 16. Strict focus on a
              single position is not in the best long-term interest of a developing player.
            </p>
          </Box>

          <Text>All players attack. All players defend.</Text>
          <Text>All players must be involved in the game as a unit.</Text>
          <Text>
            Switching positions in-game — temporarily — is a fundamental component of
            successful soccer tactics.
          </Text>
        </Stack>
      </Container>

      {/* ─── 02 PLAYING TIME ─── */}
      <Container size="lg" px="md" py={56} component="section" id="playing-time" className="section-border">
        <Text className="label">PLAYING TIME</Text>
        <Title order={2} mb="md">Our goal for every player</Title>
        <Stack gap="md">
          <Text>
            All players should play roughly half of every game. This isn't a guarantee or an
            exact science — but it is our standard. Players who are significantly behind due
            to missed practices, games, or injury will play less than 50%.
          </Text>
          <Text>
            Our roster target is only 3–4 subs available per game, which means most players
            will see 66% to 75% or more of game time. The game is the best teacher — players
            need time on the field.
          </Text>

          <Box className="learn-area" mt="lg">
            <h3>Does this mean we don't care about winning?</h3>
            <p>
              No. We play to win every game. But we only win as a team — which means we
              operate with a "next man up" philosophy.
            </p>
          </Box>

          <Box className="policy-list">
            <Box className="policy-item">
              <span className="policy-num">—</span>
              <p>At this age, every player who commits to the team deserves a chance to develop.</p>
            </Box>
            <Box className="policy-item">
              <span className="policy-num">—</span>
              <p>At our club level, families should be able to go on vacation and miss an occasional tournament without consequence.</p>
            </Box>
            <Box className="policy-item">
              <span className="policy-num">—</span>
              <p>We often play multiple games in a day. A deep, rested roster wins games — tired players don't.</p>
            </Box>
            <Box className="policy-item">
              <span className="policy-num">—</span>
              <p>Arizona isn't exactly cool. If players are moving without the ball — as they should be — they will need a break.</p>
            </Box>
          </Box>

          <Text
            mt="lg"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(22px, 3vw, 28px)',
              color: 'white',
              lineHeight: 1.4,
            }}
          >
            We build teams. Teams win games.
          </Text>
        </Stack>
      </Container>

      <Footer heading="Questions?" sub="We're an open book. Reach out anytime." />
    </>
  )
}
