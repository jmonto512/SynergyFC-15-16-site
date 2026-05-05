import { QRCodeSVG } from 'qrcode.react'
import { pillars } from '../data/pillars'
import { devTools } from '../data/devTools'
import { site } from '../data/site'

const SERIF = "'Cormorant Garamond', Georgia, serif"
const MONO = "'JetBrains Mono', 'Courier New', monospace"
const BG = '#0a0a0f'
const TEXT = 'rgba(255,255,255,0.75)'
const MUTED = 'rgba(255,255,255,0.72)'   // was 0.45 — must be legible when printed
const DIM = 'rgba(255,255,255,0.58)'     // for secondary footer text
const GOLD = 'rgba(212,175,80,'
const SITE_URL = 'https://jmonto512.github.io/SynergyFC-15-16-site/'

const base = import.meta.env.BASE_URL

// ─── Shared primitives ────────────────────────────────────────────

function PosterPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="poster">
      {children}
    </div>
  )
}

function PosterLabel({ text }: { text: string }) {
  return (
    <div style={{
      fontFamily: MONO,
      fontSize: 12,
      letterSpacing: '5px',
      textTransform: 'uppercase' as const,
      color: MUTED,
      marginBottom: 14,
    }}>
      {text}
    </div>
  )
}

function PosterHeading({ children, size = 52 }: { children: React.ReactNode; size?: number }) {
  return (
    <h2 style={{
      fontFamily: SERIF,
      fontWeight: 400,
      fontSize: size,
      color: 'white',
      lineHeight: 1.15,
      margin: 0,
    }}>
      {children}
    </h2>
  )
}

function Divider({ center = false }: { center?: boolean }) {
  return (
    <div style={{
      width: 72,
      height: 1,
      background: 'linear-gradient(to right, rgba(255,255,255,0.35), rgba(255,255,255,0.06))',
      margin: center ? '20px auto' : '20px 0',
    }} />
  )
}

// ─── Page 1: QR Code ─────────────────────────────────────────────

function QRPage() {
  return (
    <PosterPage>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>

        {/* Eyebrow */}
        <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: '5px', textTransform: 'uppercase', color: MUTED, marginBottom: 36 }}>
          SYNERGY FC · U11 BOYS · PEORIA, AZ
        </div>

        {/* Main heading */}
        <h1 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 76, color: 'white', lineHeight: 1.1, margin: 0, maxWidth: 560 }}>
          Visit Our Team Site
        </h1>

        {/* Divider */}
        <div style={{ width: 64, height: 1, background: 'rgba(255,255,255,0.2)', margin: '28px auto' }} />

        {/* Subtext */}
        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 19, lineHeight: 1.75, color: TEXT, maxWidth: 460, margin: '0 0 52px' }}>
          Scan the code below for the full story — coaching philosophy,
          player development tools, season plan, team policies, and more.
        </p>

        {/* QR code */}
        <div style={{
          background: 'white',
          padding: 20,
          display: 'inline-flex',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.1)',
        }}>
          <QRCodeSVG
            value={SITE_URL}
            size={260}
            fgColor={BG}
            bgColor="white"
            level="M"
          />
        </div>

        {/* URL */}
        <div style={{ fontFamily: MONO, fontSize: 14, letterSpacing: '2px', color: MUTED, marginTop: 24 }}>
          jmonto512.github.io/SynergyFC-15-16-site
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '3px', textTransform: 'uppercase', color: DIM }}>
          Synergy FC · U11 Boys · 2026–27
        </span>
        <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '2px', color: DIM }}>
          {site.email}
        </span>
      </div>
    </PosterPage>
  )
}

// ─── Page 2: Meet the Coaches ─────────────────────────────────────

function CoachesPage() {
  return (
    <PosterPage>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <PosterLabel text="WHO ARE YOUR COACHES?" />
        <PosterHeading size={54}>Jeff &amp; Ashley Montone</PosterHeading>
        <Divider />
        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, lineHeight: 1.7, color: TEXT, marginBottom: 0, maxWidth: 660 }}>
          Head coaches, Synergy FC U11 Boys · Peoria, AZ
        </p>
      </div>

      {/* Two-column body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignContent: 'start' }}>

        {/* Left: Bio */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, lineHeight: 1.75, color: TEXT, margin: 0 }}>
            We're not just coaches — we're products of this game. We both grew up playing for the same club, and soccer shaped who we are. Now we're committed to guiding the next generation of players.
          </p>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, lineHeight: 1.75, color: TEXT, margin: 0 }}>
            At U11, the single most important factor in youth development is the coach. Our job is to build an environment where players learn to think for themselves, solve problems on the field, and develop the persistence, effort, and teamwork that will serve them far beyond soccer.
          </p>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, lineHeight: 1.75, color: TEXT, margin: 0 }}>
            We've spent the last three years at Synergy creating a culture where our players develop real skills, compete with confidence, and — most importantly — fall in love with the sport the way we did.
          </p>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, lineHeight: 1.75, color: TEXT, margin: 0 }}>
            We've been through every stage of youth soccer as players and as parents, and we bring that firsthand perspective to everything we do on the training ground.
          </p>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, lineHeight: 1.75, color: TEXT, margin: 0 }}>
            With the new US Soccer age-group realignment we now have availability — and we'd love to add the right players to this group.
          </p>
        </div>

        {/* Right: photo + key facts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

          {/* Team photo */}
          <img
            src={`${base}assets/images/coaches/PXL_20231111_220612115.MP~2.jpg`}
            alt="Team"
            style={{
              width: '100%',
              height: 190,
              objectFit: 'cover',
              objectPosition: 'center 50%',
              opacity: 0.88,
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          />

          {/* Practice info card */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '20px 22px',
          }}>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '4px', textTransform: 'uppercase', color: MUTED, marginBottom: 14 }}>
              Practice Info
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 15, color: 'white', lineHeight: 1.4 }}>
                <span style={{ color: MUTED, marginRight: 8, fontFamily: MONO, fontSize: 11, letterSpacing: '1px' }}>WHERE</span>
                Paloma Community Park
              </div>
              <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 15, color: 'white', lineHeight: 1.4 }}>
                <span style={{ color: MUTED, marginRight: 8, fontFamily: MONO, fontSize: 11, letterSpacing: '1px' }}>WHEN</span>
                Two nights per week
              </div>
              <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 15, color: 'white', lineHeight: 1.4 }}>
                <span style={{ color: MUTED, marginRight: 8, fontFamily: MONO, fontSize: 11, letterSpacing: '1px' }}>AGES</span>
                Born Aug 2015 – Jul 2016
                <div style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '1px', color: MUTED, marginTop: 3 }}>younger by exception</div>
              </div>
            </div>
          </div>

          {/* What we believe card */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '20px 22px',
          }}>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '4px', textTransform: 'uppercase', color: MUTED, marginBottom: 14 }}>
              What We Believe
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                'Every player earns real game time through effort and focus',
                'The love of the game is the foundation — everything else follows',
                'U11 is where habits, intelligence, and love for the game are built',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.4)', marginTop: 10, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 15, color: TEXT, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom quote */}
      <div style={{
        marginTop: 16,
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: 16,
      }}>
        <p style={{
          fontFamily: SERIF,
          fontSize: 22,
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.9)',
          lineHeight: 1.5,
          margin: 0,
        }}>
          "This isn't a side project for us. <em style={{ fontStyle: 'normal', color: 'white' }}>It's personal.</em>"
        </p>
        <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '2px', color: MUTED, marginTop: 8 }}>
          — Jeff & Ashley Montone · Head Coaches
        </div>
      </div>
    </PosterPage>
  )
}

// ─── Page 3: Four Pillars ─────────────────────────────────────────

const pillarTags: Record<string, string[]> = {
  'Collective Dominance':                    ['TOTAL SOCCER', 'TEAM OVER STARS', 'TACTICAL IQ'],
  'Built for the Next Level':                ['LONG-TERM DEVELOPMENT', 'PROCESS OVER RESULTS', 'NEXT LEAGUE READY'],
  'High-Performance, Child-Centered Culture':['LOVE THE GAME', 'SAFE TO FAIL', 'HIGH STANDARDS'],
  'Competitive Growth for the Whole Roster': ['HALF-GAME MINIMUM', 'DEEP ROSTER', 'EVERY PLAYER COUNTS'],
}

function PillarsPage() {
  return (
    <PosterPage>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <PosterLabel text="COACHING PHILOSOPHY" />
        <PosterHeading size={52}>What We Stand For</PosterHeading>
        <Divider />
      </div>

      {/* 4 horizontal rows, one pillar each */}
      <div style={{ display: 'grid', gap: 12 }}>
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.09)',
              padding: '18px 24px',
              display: 'grid',
              gridTemplateColumns: '224px 1fr',
              gap: 28,
              alignItems: 'start',
            }}
          >
            {/* Left: icon + title */}
            <div>
              <img
                src={`${base}assets/icons/${pillar.icon}`}
                alt=""
                style={{ width: 72, height: 72, objectFit: 'contain', marginBottom: 12, opacity: 1, filter: 'brightness(0) invert(1)' }}
              />
              <div style={{ fontFamily: SERIF, fontSize: 20, color: 'white', lineHeight: 1.25 }}>
                {pillar.title}
              </div>
            </div>

            {/* Right: tags + body text */}
            <div style={{
              borderLeft: '1px solid rgba(255,255,255,0.07)',
              paddingLeft: 24,
            }}>
              <div className="slide-card-tags" style={{ marginBottom: 8 }}>
                {(pillarTags[pillar.title] ?? []).map((tag) => (
                  <span key={tag} className="slide-card-tag">{tag}</span>
                ))}
              </div>
              <div style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 12,
                lineHeight: 1.65,
                color: TEXT,
              }}>
                {pillar.body}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16, marginTop: 20 }}>
        <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', color: DIM }}>
          Visit the full site · jmonto512.github.io/SynergyFC-15-16-site
        </span>
      </div>
    </PosterPage>
  )
}

// ─── Page 4: Player Development Tools ────────────────────────────

function DevToolsPage() {
  return (
    <PosterPage>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <PosterLabel text="PLAYER DEVELOPMENT" />
        <PosterHeading size={50}>Four tools that follow your son home.</PosterHeading>
        <Divider />
        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 16, lineHeight: 1.7, color: TEXT, margin: 0, maxWidth: 640 }}>
          Practice is for the team. These four tools are for your son — individual development that continues between sessions.
        </p>
      </div>

      {/* 2×2 grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 16, flex: 1 }}>
        {devTools.map((tool) => (
          <div
            key={tool.id}
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.09)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Image header */}
            <div style={{
              height: 110,
              background: 'rgba(255,255,255,0.04)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 20px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              flexShrink: 0,
            }}>
              <img
                src={`${base}assets/images/dev-tools/${tool.image}`}
                alt={tool.name}
                style={{ maxHeight: 82, maxWidth: '100%', objectFit: 'contain', opacity: 0.88 }}
              />
            </div>

            {/* Content */}
            <div style={{ padding: '18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ fontFamily: SERIF, fontSize: 22, color: 'white', lineHeight: 1.2 }}>
                  {tool.name}
                </div>
                {tool.status === 'rolling-out' && (
                  <span style={{
                    fontFamily: MONO,
                    fontSize: 9,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: `${GOLD}0.7)`,
                    border: `1px solid ${GOLD}0.25)`,
                    padding: '2px 6px',
                    flexShrink: 0,
                    marginLeft: 8,
                    marginTop: 3,
                  }}>
                    Coming Soon
                  </span>
                )}
              </div>
              <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 15, lineHeight: 1.7, color: TEXT, flex: 1 }}>
                {tool.shortDescription}
              </div>
              {tool.link && (
                <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: MUTED, marginTop: 10 }}>
                  {tool.link.replace('https://', '').replace(/\/$/, '')}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: 16,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '3px', textTransform: 'uppercase', color: DIM }}>
          Synergy FC · U11 Boys · 2026–27
        </span>
        <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '2px', color: DIM }}>
          {site.email}
        </span>
      </div>
    </PosterPage>
  )
}

// ─── Page root ────────────────────────────────────────────────────

export default function TryoutPosters() {
  return (
    <div className="poster-container">
      <QRPage />
      <CoachesPage />
      <PillarsPage />
      <DevToolsPage />
    </div>
  )
}
