import React from 'react'
import { Box, SimpleGrid, Stack, Text, Title, Group } from '@mantine/core'
import { slides } from '../data/seasonPlan'
import type { BulletItem, Slide,
  TitleSlide,
  DividerSlide,
  TwoColumnSlide,
  GridSlide,
  TextSlide,
  ProblemSolutionSlide,
  ToolsSlide,
  QuoteCollageSlide,
  ImageSlide,
  DualImageSlide,
  InterstitialSlide,
  PrinciplesTableSlide,
  FeaturesSlide,
  HeroQuestionSlide,
  JourneyReflectionSlide,
} from '../data/seasonPlan'

const base = import.meta.env.BASE_URL

const SERIF = "'Cormorant Garamond', Georgia, serif"
const MONO = "'JetBrains Mono', 'Courier New', monospace"

// ─── Shared primitives ────────────────────────────────────────────

function SlideHeading({ title, center }: { title: string; center?: boolean }) {
  return (
    <>
      <Title
        order={2}
        style={{
          fontFamily: SERIF,
          fontWeight: 400,
          fontSize: 'clamp(28px, 3.2vw, 44px)',
          color: 'white',
          lineHeight: 1.2,
          textAlign: center ? 'center' : undefined,
        }}
      >
        {title}
      </Title>
      <Box
        style={{
          width: 80,
          height: 2,
          background: 'linear-gradient(to right, rgba(255,255,255,0.5), rgba(255,255,255,0.08))',
          margin: center ? '16px auto 24px' : '16px 0 24px',
        }}
      />
    </>
  )
}

const DOT = (
  <Box
    style={{
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.35)',
      marginTop: 10,
      flexShrink: 0,
    }}
  />
)

function BulletList({ items }: { items: BulletItem[] }) {
  return (
    <Stack gap="xs">
      {items.map((item, i) => {
        if (typeof item === 'string') {
          return (
            <Group key={i} gap="sm" align="flex-start" wrap="nowrap">
              {DOT}
              <Text style={{ fontSize: 'clamp(13px, 1.35vw, 16px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)' }}>
                {item}
              </Text>
            </Group>
          )
        }
        if ('heading' in item) {
          return (
            <Box key={i}>
              <Group gap="sm" align="flex-start" wrap="nowrap">
                {DOT}
                <Text style={{ fontSize: 'clamp(16px, 1.7vw, 21px)', lineHeight: 1.4, color: 'white', fontFamily: SERIF }}>
                  {item.heading}
                </Text>
              </Group>
              <Text style={{ paddingLeft: 20, marginTop: 4, fontSize: 'clamp(13px, 1.35vw, 16px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.7)' }}>
                {item.body}
              </Text>
            </Box>
          )
        }
        return (
          <Box key={i}>
            <Group gap="sm" align="flex-start" wrap="nowrap">
              {DOT}
              <Text style={{ fontSize: 'clamp(13px, 1.35vw, 16px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)' }}>
                {item.label}
              </Text>
            </Group>
            <Stack gap={2} style={{ paddingLeft: 20, marginTop: 4 }}>
              {item.subitems.map((sub, j) => (
                <Group key={j} gap="xs" align="flex-start" wrap="nowrap">
                  <Box style={{ width: 10, height: 1, background: 'rgba(255,255,255,0.2)', marginTop: 12, flexShrink: 0 }} />
                  <Text style={{ fontSize: 'clamp(13px, 1.4vw, 17px)', lineHeight: 1.65, color: 'rgba(255,255,255,0.6)' }}>
                    {sub}
                  </Text>
                </Group>
              ))}
            </Stack>
          </Box>
        )
      })}
    </Stack>
  )
}

function QuoteBlock({ text }: { text: string }) {
  return (
    <Box
      style={{
        marginTop: 28,
        padding: '18px 24px',
        background: 'rgba(255,255,255,0.025)',
        borderLeft: '2px solid rgba(255,255,255,0.15)',
      }}
    >
      <Text
        style={{
          fontFamily: SERIF,
          fontSize: 'clamp(15px, 1.7vw, 21px)',
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.85)',
          lineHeight: 1.6,
        }}
      >
        "{text}"
      </Text>
    </Box>
  )
}

// ─── Slide type renderers ─────────────────────────────────────────

function RenderTitle({ slide }: { slide: TitleSlide }) {
  return (
    <Stack align="center" gap={0} style={{ textAlign: 'center' }}>
      <Text
        style={{
          fontFamily: MONO,
          fontSize: 13,
          letterSpacing: '5px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.65)',
          marginBottom: 28,
        }}
      >
        Season Plan
      </Text>
      <Title
        order={1}
        style={{
          fontFamily: SERIF,
          fontWeight: 400,
          fontSize: 'clamp(42px, 6.5vw, 96px)',
          color: 'white',
          lineHeight: 1.1,
        }}
      >
        {slide.title}
      </Title>
      <Box
        style={{
          width: 64,
          height: 1,
          background: 'rgba(255,255,255,0.2)',
          margin: '28px auto',
        }}
      />
      <Text
        style={{
          fontFamily: MONO,
          fontSize: 'clamp(14px, 1.6vw, 20px)',
          letterSpacing: '4px',
          color: 'rgba(255,255,255,0.55)',
        }}
      >
        {slide.subtitle}
      </Text>
    </Stack>
  )
}

function RenderDivider({ slide }: { slide: DividerSlide }) {
  return (
    <Stack align="center" gap="md" style={{ textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
      <Title
        order={1}
        style={{
          fontFamily: SERIF,
          fontWeight: 400,
          fontSize: 'clamp(34px, 5vw, 72px)',
          color: 'white',
          lineHeight: 1.15,
        }}
      >
        {slide.title}
      </Title>
      {slide.subtitle && (
        <>
          <Box style={{ width: 64, height: 1, background: 'rgba(255,255,255,0.2)', margin: '4px auto' }} />
          <Text
            style={{
              fontSize: 'clamp(14px, 1.5vw, 19px)',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.65,
              maxWidth: 640,
            }}
          >
            {slide.subtitle}
          </Text>
        </>
      )}
    </Stack>
  )
}

const GOLD = 'rgba(212,175,80,'
const AMBER = 'rgba(230,155,50,'
const BLUE = 'rgba(80,140,255,'
const GREEN = 'rgba(60,185,110,'

function SlideKicker({ text, href }: { text: string; href?: string }) {
  const quote = (
    <>
      <Text
        style={{
          position: 'relative',
          fontFamily: SERIF,
          fontSize: 'clamp(15px, 1.7vw, 22px)',
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.95)',
          lineHeight: 1.6,
          maxWidth: 860,
          margin: '0 auto',
        }}
      >
        "{text.split('\n').map((line, i, arr) => (
          <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
        ))}"
      </Text>
      {href && (
        <Text
          style={{
            position: 'relative',
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: '2px',
            color: `${GOLD}0.65)`,
            marginTop: 10,
          }}
        >
          ↗ watch the clip
        </Text>
      )}
    </>
  )

  return (
    <Box
      style={{
        marginTop: 28,
        padding: '26px 48px 28px',
        background: `linear-gradient(135deg, ${GOLD}0.07) 0%, rgba(255,255,255,0.05) 50%, ${GOLD}0.05) 100%)`,
        border: `1px solid ${GOLD}0.2)`,
        borderTop: `2px solid ${GOLD}0.75)`,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        style={{
          position: 'absolute',
          top: -28,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: SERIF,
          fontSize: 160,
          color: `${GOLD}0.12)`,
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        "
      </Box>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
          {quote}
        </a>
      ) : quote}
    </Box>
  )
}

function KickerImageQuote({
  text, image, attribution, href,
}: { text: string; image: string; attribution?: string; href?: string }) {
  const inner = (
    <Group
      gap="xl"
      align="center"
      wrap="nowrap"
      style={{
        marginTop: 28,
        padding: '20px 28px',
        background: `linear-gradient(135deg, ${GOLD}0.08) 0%, rgba(255,255,255,0.04) 100%)`,
        border: `1px solid ${GOLD}0.22)`,
        borderLeft: `3px solid ${GOLD}0.7)`,
      }}
    >
      <img
        src={`${base}${image}`}
        alt={text}
        style={{
          width: 88,
          flexShrink: 0,
          opacity: 0.85,
          filter: 'invert(1)',
        }}
      />
      <Box>
        <Text
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(17px, 2vw, 26px)',
            fontStyle: 'italic',
            color: 'white',
            lineHeight: 1.35,
          }}
        >
          "{text}"
        </Text>
        {attribution && (
          <Text
            style={{
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: '2px',
              color: `${GOLD}0.75)`,
              marginTop: 8,
            }}
          >
            — {attribution}
          </Text>
        )}
        {href && (
          <Box
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              marginTop: 12,
              padding: '6px 14px',
              border: `1px solid ${GOLD}0.4)`,
              color: `${GOLD}0.9)`,
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ fontSize: 13, lineHeight: 1 }}>▶</span>
            Watch the clip
          </Box>
        )}
      </Box>
    </Group>
  )

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
      {inner}
    </a>
  ) : inner
}

function RenderTwoColumn({ slide }: { slide: TwoColumnSlide }) {
  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      <SimpleGrid cols={{ base: 1, sm: slide.columns.length }} spacing="md">
        {slide.columns.map((col) => (
          <Box
            key={col.heading}
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '18px 22px 22px',
            }}
          >
            <Group
              gap="sm"
              align="center"
              style={{
                paddingBottom: 12,
                marginBottom: 16,
                borderBottom: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {col.icon && (
                <col.icon
                  size={22}
                  stroke={1.4}
                  color="rgba(255,255,255,0.5)"
                />
              )}
              <Text
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(18px, 2vw, 24px)',
                  color: 'white',
                  lineHeight: 1.2,
                }}
              >
                {col.heading}
              </Text>
            </Group>
            <BulletList items={col.items} />
          </Box>
        ))}
      </SimpleGrid>
      {slide.kicker && !slide.kickerImage && <SlideKicker text={slide.kicker} href={slide.kickerHref} />}
      {slide.kickerImage && slide.kicker && (
        <KickerImageQuote
          text={slide.kicker}
          image={slide.kickerImage}
          attribution={slide.kickerAttribution}
          href={slide.kickerHref}
        />
      )}
    </Box>
  )
}

function RenderGrid({ slide }: { slide: GridSlide }) {
  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      {slide.subtitle && (
        <Text
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(15px, 1.6vw, 20px)',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.6,
            marginTop: -18,
            marginBottom: 22,
          }}
        >
          {slide.subtitle}
        </Text>
      )}
      <SimpleGrid cols={{ base: 1, sm: slide.cols }} spacing="md">
        {slide.items.map((item) => (
          <Box key={item.title} className="slide-card">
            {item.iconImage && (
              <img
                src={`${base}${item.iconImage}`}
                alt=""
                style={{ width: 88, height: 88, objectFit: 'contain', marginBottom: 20, opacity: 0.85 }}
              />
            )}
            <div className="slide-card-title">{item.title}</div>
            {item.tags && item.tags.length > 0 && (
              <div className="slide-card-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="slide-card-tag">{tag}</span>
                ))}
              </div>
            )}
            <div className="slide-card-body">{item.body}</div>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

function RenderText({ slide }: { slide: TextSlide }) {
  const hasImage = Boolean(slide.image)
  return (
    <Box style={{ width: '100%', maxWidth: hasImage ? undefined : 840 }}>
      <SlideHeading title={slide.title} />
      <SimpleGrid cols={{ base: 1, sm: hasImage ? 2 : 1 }} spacing="xl">
        <Box>
          <BulletList items={slide.bullets} />
          {slide.quote && <QuoteBlock text={slide.quote} />}
        </Box>
        {slide.image && (
          <Box style={{ display: 'flex', alignItems: 'flex-start' }}>
            <img
              src={`${base}${slide.image}`}
              alt=""
              style={{ width: '100%', height: 'auto', maxHeight: '52vh', objectFit: 'cover', objectPosition: 'top center', opacity: 0.88 }}
            />
          </Box>
        )}
      </SimpleGrid>
      {slide.note && (
        <Box
          style={{
            marginTop: 28,
            padding: '20px 24px',
            background: 'rgba(80, 160, 255, 0.08)',
            border: '1px solid rgba(80, 160, 255, 0.22)',
            borderTop: '2px solid rgba(80, 160, 255, 0.55)',
          }}
        >
          <Text
            style={{
              fontFamily: MONO,
              fontSize: 10,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(120, 190, 255, 0.75)',
              marginBottom: 10,
            }}
          >
            {slide.note.label}
          </Text>
          <Text
            style={{
              fontSize: 'clamp(13px, 1.4vw, 17px)',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.7,
            }}
          >
            {slide.note.text}
          </Text>
        </Box>
      )}
    </Box>
  )
}

function RenderProblemSolution({ slide }: { slide: ProblemSolutionSlide }) {
  const columns = [
    { data: slide.problem, accent: 'rgba(220,120,90,0.5)' },
    { data: slide.solution, accent: 'rgba(90,195,145,0.5)' },
  ]
  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
        {columns.map(({ data, accent }) => (
          <Box key={data.heading} style={{ borderTop: `2px solid ${accent}`, paddingTop: 16 }}>
            <Text
              style={{
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: accent.replace('0.5)', '0.85)'),
                marginBottom: 14,
              }}
            >
              {data.heading}
            </Text>
            <BulletList items={data.items} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

function RenderTools({ slide }: { slide: ToolsSlide }) {
  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {slide.items.map((item) => (
          <Box key={item.name} className="slide-tool-card">
            <img
              src={`${base}${item.image}`}
              alt={item.name}
              className="slide-tool-img"
              style={{ objectFit: item.imageFit ?? 'cover' }}
            />
            <Box className="slide-tool-content">
              <Text
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(16px, 1.8vw, 22px)',
                  color: 'white',
                  marginBottom: 8,
                  lineHeight: 1.25,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 'clamp(12px, 1.2vw, 15px)',
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.62)',
                }}
              >
                {item.description}
              </Text>
              {item.link && (
                <Box
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    marginTop: 14,
                    padding: '5px 12px',
                    border: '1px solid rgba(255,255,255,0.18)',
                    color: 'rgba(255,255,255,0.55)',
                    fontFamily: MONO,
                    fontSize: 10,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  Visit ↗
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

function RenderDualImage({ slide }: { slide: DualImageSlide }) {
  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      {slide.subtitle && (
        <Text
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(15px, 1.6vw, 20px)',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.6,
            marginTop: -18,
            marginBottom: 22,
          }}
        >
          {slide.subtitle}
        </Text>
      )}
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {slide.images.map((img, i) => (
          <Box key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {img.caption && (
              <Group gap="xs" justify="center" style={{ marginBottom: 12 }}>
                {img.icon && <img.icon size={16} stroke={1.5} color="white" />}
                <Text
                  style={{
                    fontFamily: MONO,
                    fontSize: 'clamp(12px, 1.3vw, 15px)',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'white',
                    lineHeight: 1,
                  }}
                >
                  {img.caption}
                </Text>
              </Group>
            )}
            <img
              src={`${base}${img.src}`}
              alt={img.caption ?? ''}
              style={{ width: '100%', objectFit: 'contain', maxHeight: '46vh', opacity: 0.92 }}
            />
          </Box>
        ))}
      </SimpleGrid>
      {slide.coachNotes && slide.coachNotes.length > 0 && (
        <Box
          style={{
            marginTop: 24,
            padding: '18px 22px 20px',
            background: `linear-gradient(135deg, ${GOLD}0.06) 0%, rgba(255,255,255,0.03) 100%)`,
            border: `1px solid ${GOLD}0.18)`,
            borderTop: `2px solid ${GOLD}0.55)`,
          }}
        >
          <Text
            style={{
              fontFamily: MONO,
              fontSize: 9,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: `${GOLD}0.6)`,
              marginBottom: 14,
            }}
          >
            Coach's Notes
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            {slide.coachNotes.map((note, i) => (
              <Box key={i}>
                <Text
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(15px, 1.6vw, 19px)',
                    color: `${GOLD}0.9)`,
                    lineHeight: 1.25,
                    marginBottom: 8,
                  }}
                >
                  {note.heading}
                </Text>
                <Text
                  style={{
                    fontSize: 'clamp(12px, 1.2vw, 15px)',
                    color: 'rgba(255,255,255,0.72)',
                    lineHeight: 1.65,
                  }}
                >
                  {note.note}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      )}
      {slide.quote && (
        <Box
          style={{
            marginTop: 24,
            padding: '18px 24px',
            background: 'rgba(255,255,255,0.025)',
            borderLeft: '2px solid rgba(255,255,255,0.15)',
          }}
        >
          <Text
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(14px, 1.5vw, 19px)',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.65,
            }}
          >
            "{slide.quote.text}"
          </Text>
          {slide.quote.attribution && (
            <Text
              style={{
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: '2px',
                color: 'rgba(255,255,255,0.4)',
                marginTop: 10,
              }}
            >
              — {slide.quote.attribution}
            </Text>
          )}
        </Box>
      )}
    </Box>
  )
}

function RenderQuoteCollage({ slide }: { slide: QuoteCollageSlide }) {
  const cardAccents = [
    { bg: 'rgba(255,255,255,0.04)',    border: 'rgba(255,255,255,0.28)',    mark: 'rgba(255,255,255,0.07)' },
    { bg: 'rgba(70,130,255,0.07)',     border: 'rgba(70,130,255,0.45)',     mark: 'rgba(70,130,255,0.12)' },
    { bg: `${GOLD}0.07)`,             border: `${GOLD}0.45)`,              mark: `${GOLD}0.12)` },
  ]
  return (
    <Box style={{ width: '100%' }}>
      {slide.eyebrow && (
        <Text
          style={{
            fontFamily: MONO,
            fontSize: 10,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.38)',
            marginBottom: 16,
          }}
        >
          {slide.eyebrow}
        </Text>
      )}
      <Title
        order={2}
        style={{
          fontFamily: SERIF,
          fontWeight: 400,
          fontSize: 'clamp(32px, 4.5vw, 64px)',
          color: 'white',
          lineHeight: 1.1,
          letterSpacing: '-0.5px',
          marginBottom: slide.intro ? 16 : 24,
        }}
      >
        {slide.title}
      </Title>
      {slide.intro && (
        <Box style={{ marginBottom: 32 }}>
          {(Array.isArray(slide.intro) ? slide.intro : [slide.intro]).map((line, i) => (
            <Text
              key={i}
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(18px, 2.2vw, 26px)',
                color: 'rgba(255,255,255,0.62)',
                lineHeight: 1.6,
                maxWidth: 820,
                marginBottom: i < (Array.isArray(slide.intro) ? slide.intro.length : 1) - 1 ? 16 : 0,
              }}
            >
              {line}
            </Text>
          ))}
        </Box>
      )}
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="sm">
        {slide.quotes.map((quote, i) => {
          const accent = cardAccents[i % cardAccents.length]
          return (
            <Box
              key={i}
              style={{
                position: 'relative',
                padding: '18px 18px 20px',
                border: `1px solid ${accent.border.replace('0.45)', '0.18)')}`,
                borderLeft: `3px solid ${accent.border}`,
                background: accent.bg,
                overflow: 'hidden',
              }}
            >
              <Box
                style={{
                  position: 'absolute',
                  top: -8,
                  right: 10,
                  fontFamily: SERIF,
                  fontSize: 72,
                  color: accent.mark,
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                "
              </Box>
              <Text
                style={{
                  position: 'relative',
                  fontFamily: SERIF,
                  fontSize: 'clamp(14px, 1.45vw, 18px)',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.88)',
                  lineHeight: 1.55,
                }}
              >
                {quote}
              </Text>
            </Box>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

function RenderImage({ slide }: { slide: ImageSlide }) {
  const hasSidebar = Boolean(slide.sidebar)
  return (
    <Box style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <SlideHeading title={slide.title} />
      <SimpleGrid cols={{ base: 1, sm: hasSidebar ? 2 : 1 }} spacing="xl" style={{ alignItems: 'flex-start' }}>
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: hasSidebar ? 'flex-start' : 'center' }}>
        <Box
          style={{
            position: 'relative',
            display: 'inline-flex',
            ...(slide.fade && { boxShadow: 'inset 0 0 80px 36px #0a0a0f' }),
          }}
        >
          <img
            src={`${base}${slide.image}`}
            alt={slide.title}
            style={{
              maxWidth: '100%',
              maxHeight: hasSidebar ? '58vh' : '62vh',
              objectFit: 'contain',
              opacity: 0.92,
              display: 'block',
            }}
          />
        </Box>
          {slide.caption && (
            <Text
              style={{
                marginTop: 14,
                fontSize: 'clamp(11px, 1vw, 13px)',
                color: 'rgba(255,255,255,0.45)',
                textAlign: hasSidebar ? 'left' : 'center',
                fontFamily: MONO,
                letterSpacing: '1px',
              }}
            >
              {slide.caption}
            </Text>
          )}
        </Box>

        {slide.sidebar && (
          <Box>
            <Stack gap="xs">
              {slide.sidebar.items.map((item) => (
                <Box
                  key={item.name}
                  style={{
                    padding: '12px 16px 14px',
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderLeft: '2px solid rgba(255,255,255,0.18)',
                  }}
                >
                  <Group gap="sm" align="baseline" style={{ marginBottom: 5 }}>
                    <Text style={{ fontFamily: SERIF, fontSize: 'clamp(14px, 1.5vw, 17px)', color: 'white', lineHeight: 1.2 }}>
                      {item.name}
                    </Text>
                    {item.tag && (
                      <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '2px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>
                        {item.tag}
                      </Text>
                    )}
                  </Group>
                  <Text style={{ fontSize: 'clamp(11px, 1.1vw, 13px)', color: 'rgba(255,255,255,0.58)', lineHeight: 1.6 }}>
                    {item.description}
                  </Text>
                </Box>
              ))}
            </Stack>

            {slide.sidebar.callout && (
              <Box
                style={{
                  marginTop: 10,
                  padding: '14px 16px 16px',
                  background: `linear-gradient(135deg, ${GOLD}0.08) 0%, rgba(255,255,255,0.03) 100%)`,
                  border: `1px solid ${GOLD}0.2)`,
                  borderTop: `2px solid ${GOLD}0.65)`,
                }}
              >
                <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: `${GOLD}0.6)`, marginBottom: 7 }}>
                  {slide.sidebar.callout.label}
                </Text>
                <Text style={{ fontFamily: SERIF, fontSize: 'clamp(14px, 1.5vw, 17px)', color: `${GOLD}0.9)`, lineHeight: 1.25, marginBottom: 7 }}>
                  {slide.sidebar.callout.heading}
                </Text>
                <Text style={{ fontSize: 'clamp(11px, 1.1vw, 13px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: 10 }}>
                  {slide.sidebar.callout.body}
                </Text>
                {slide.sidebar.callout.link && (
                  <Box
                    component="a"
                    href={slide.sidebar.callout.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 5,
                      padding: '4px 10px',
                      border: `1px solid ${GOLD}0.35)`,
                      color: `${GOLD}0.85)`,
                      fontFamily: MONO, fontSize: 9, letterSpacing: '2px',
                      textTransform: 'uppercase', textDecoration: 'none',
                    }}
                  >
                    Visit ↗
                  </Box>
                )}
              </Box>
            )}
          </Box>
        )}
      </SimpleGrid>
    </Box>
  )
}

function RenderFeatures({ slide }: { slide: FeaturesSlide }) {
  const cols = slide.cols ?? 3
  return (
    <Box style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box style={{ marginBottom: 28 }}>
        <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 10 }}>
          {slide.title}
        </Text>
        {slide.subtitle && (
          <Title order={2} style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 'clamp(26px, 3vw, 42px)', color: 'white', lineHeight: 1.2 }}>
            {slide.subtitle}
          </Title>
        )}
        <Box style={{ width: 64, height: 1, background: 'rgba(255,255,255,0.15)', margin: '16px 0' }} />
        {slide.hook && (
          <Text style={{ fontFamily: SERIF, fontSize: 'clamp(15px, 1.6vw, 20px)', fontStyle: 'italic', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, maxWidth: 760 }}>
            {slide.hook}
          </Text>
        )}
      </Box>

      <Stack gap="md" mb={slide.quote ? 28 : 0}>
        {slide.sections.map((section, si) => (
          <Box key={si}>
            {section.label && (
              <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 10, marginTop: si > 0 ? 8 : 0 }}>
                {section.label}
              </Text>
            )}
            <SimpleGrid cols={{ base: 1, sm: cols }} spacing="md">
              {section.items.map((item) => (
                <Box
                  key={item.title}
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    padding: '18px 20px 22px',
                  }}
                >
                  <Box style={{
                    width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)',
                    marginBottom: 14,
                  }}>
                    <item.icon size={20} stroke={1.4} color={`${GOLD}0.85)`} />
                  </Box>
                  <Text style={{ fontFamily: SERIF, fontSize: 'clamp(15px, 1.6vw, 20px)', color: 'white', lineHeight: 1.25, marginBottom: 8 }}>
                    {item.title}
                  </Text>
                  <Text style={{ fontSize: 'clamp(12px, 1.1vw, 14px)', color: 'rgba(255,255,255,0.62)', lineHeight: 1.6 }}>
                    {item.description}
                  </Text>
                  {item.note && (
                    <Box
                      style={{
                        marginTop: 14,
                        padding: '10px 14px',
                        background: 'rgba(255,255,255,0.04)',
                        borderLeft: '2px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      <Text style={{ fontSize: 'clamp(11px, 1vw, 13px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, fontStyle: 'italic' }}>
                        {item.note}
                      </Text>
                    </Box>
                  )}
                  {item.link && (
                    <Box
                      component="a"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        marginTop: 12,
                        padding: '5px 12px',
                        border: '1px solid rgba(255,255,255,0.18)',
                        color: 'rgba(255,255,255,0.55)',
                        fontFamily: MONO,
                        fontSize: 10,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                      }}
                    >
                      {item.linkLabel ?? 'Learn more ↗'}
                    </Box>
                  )}
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </Stack>

      {slide.quote && (
        <Box style={{ paddingLeft: 24, borderLeft: '2px solid rgba(255,255,255,0.15)' }}>
          <Text style={{ fontFamily: SERIF, fontSize: 'clamp(18px, 2.2vw, 26px)', fontStyle: 'italic', color: 'white', lineHeight: 1.5, marginBottom: 12 }}>
            "{slide.quote.text}"
          </Text>
          <Text style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
            — {slide.quote.attribution}{slide.quote.context ? ` · ${slide.quote.context}` : ''}
          </Text>
        </Box>
      )}
      {slide.note && (
        <Box
          style={{
            marginTop: 'auto',
            padding: '20px 24px',
            background: 'rgba(80, 160, 255, 0.08)',
            border: '1px solid rgba(80, 160, 255, 0.22)',
            borderTop: '2px solid rgba(80, 160, 255, 0.55)',
          }}
        >
          <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(120, 190, 255, 0.75)', marginBottom: 10 }}>
            {slide.note.label}
          </Text>
          <Text style={{ fontSize: 'clamp(13px, 1.4vw, 17px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
            {slide.note.text}
          </Text>
        </Box>
      )}
    </Box>
  )
}

function RenderPrinciplesTable({ slide }: { slide: PrinciplesTableSlide }) {
  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
            <th style={{ width: 40, padding: '0 12px 10px', textAlign: 'left', fontFamily: MONO, fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}>#</th>
            <th style={{ width: 44, padding: '0 8px 10px' }}></th>
            <th style={{ padding: '0 16px 10px 8px', textAlign: 'left', fontFamily: MONO, fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontWeight: 400, width: '28%' }}>Principle</th>
            <th style={{ padding: '0 12px 10px', textAlign: 'left', fontFamily: MONO, fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {slide.rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <td style={{ padding: '9px 12px', verticalAlign: 'middle' }}>
                <span style={{ fontFamily: MONO, fontSize: 11, color: 'rgba(255,255,255,0.7)', letterSpacing: '1px' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </td>
              <td style={{ padding: '9px 8px', verticalAlign: 'middle' }}>
                <Box style={{
                  width: 34, height: 34,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)',
                }}>
                  <row.icon size={17} stroke={1.5} color={`${GOLD}0.9)`} />
                </Box>
              </td>
              <td style={{ padding: '9px 16px 9px 8px', verticalAlign: 'middle' }}>
                <Text style={{ fontFamily: SERIF, fontSize: 'clamp(15px, 1.55vw, 19px)', color: 'white', lineHeight: 1.25 }}>
                  {row.name}
                </Text>
              </td>
              <td style={{ padding: '9px 12px', verticalAlign: 'middle' }}>
                <Text style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                  {row.description}
                </Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {slide.coachNote && (
        <Box
          style={{
            marginTop: 24,
            padding: '16px 22px 18px',
            background: `linear-gradient(135deg, ${GOLD}0.06) 0%, rgba(255,255,255,0.03) 100%)`,
            border: `1px solid ${GOLD}0.18)`,
            borderTop: `2px solid ${GOLD}0.55)`,
          }}
        >
          <Text
            style={{
              fontFamily: MONO,
              fontSize: 9,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: `${GOLD}0.6)`,
              marginBottom: 10,
            }}
          >
            Coach's Notes
          </Text>
          <Text
            style={{
              fontSize: 'clamp(13px, 1.3vw, 16px)',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.65,
            }}
          >
            {slide.coachNote}
          </Text>
        </Box>
      )}
    </Box>
  )
}

function RenderHeroQuestion({ slide }: { slide: HeroQuestionSlide }) {
  return (
    <Box style={{ width: '100%' }}>
      {/* Hero: eyebrow + question + image */}
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" style={{ marginBottom: 18 }}>
        <Box>
          <Text
            style={{
              fontFamily: MONO,
              fontSize: 10,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: 10,
            }}
          >
            {slide.eyebrow}
          </Text>
          <Title
            order={2}
            style={{
              fontFamily: SERIF,
              fontWeight: 400,
              fontSize: 'clamp(20px, 2.2vw, 32px)',
              fontStyle: 'italic',
              color: 'white',
              lineHeight: 1.25,
              marginBottom: 10,
            }}
          >
            "{slide.question}"
          </Title>
          <Box style={{ width: 64, height: 1, background: 'rgba(255,255,255,0.15)', marginBottom: 10 }} />
          <Box>
            {(Array.isArray(slide.intro) ? slide.intro : [slide.intro]).map((line, i, arr) => (
              <Text
                key={i}
                style={{
                  fontSize: 'clamp(13px, 1.35vw, 16px)',
                  color: 'rgba(255,255,255,0.68)',
                  lineHeight: 1.6,
                  marginBottom: i < arr.length - 1 ? 8 : 0,
                }}
              >
                {line}
              </Text>
            ))}
          </Box>
        </Box>
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {slide.imageLink ? (
            <Box component="a" href={slide.imageLink} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
              <img src={`${base}${slide.image}`} alt="" style={{ width: '72%', height: 'auto', maxHeight: '26vh', objectFit: 'contain', opacity: 0.92, display: 'block' }} />
            </Box>
          ) : (
            <img src={`${base}${slide.image}`} alt="" style={{ width: '72%', height: 'auto', maxHeight: '26vh', objectFit: 'contain', opacity: 0.92 }} />
          )}
        </Box>
      </SimpleGrid>

      {/* Feature cards */}
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" style={{ marginBottom: 14 }}>
        {slide.points.map((point) => (
          <Box
            key={point.title}
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.09)',
              padding: '12px 16px 16px',
            }}
          >
            <Box
              style={{
                width: 34, height: 34,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                marginBottom: 10,
              }}
            >
              <point.icon size={18} stroke={1.4} color={`${GOLD}0.85)`} />
            </Box>
            <Text style={{ fontFamily: SERIF, fontSize: 'clamp(14px, 1.5vw, 18px)', color: 'white', lineHeight: 1.25, marginBottom: 6 }}>
              {point.title}
            </Text>
            <Text style={{ fontSize: 'clamp(11px, 1.05vw, 13px)', color: 'rgba(255,255,255,0.62)', lineHeight: 1.6 }}>
              {point.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* Pathway callout */}
      <Box
        style={{
          padding: '14px 22px 16px',
          background: `linear-gradient(135deg, ${GOLD}0.07) 0%, rgba(255,255,255,0.04) 50%, ${GOLD}0.05) 100%)`,
          border: `1px solid ${GOLD}0.2)`,
          borderTop: `2px solid ${GOLD}0.7)`,
        }}
      >
        <Text
          style={{
            fontFamily: MONO, fontSize: 9, letterSpacing: '4px',
            textTransform: 'uppercase', color: `${GOLD}0.6)`, marginBottom: 8,
          }}
        >
          The Pathway
        </Text>
        <Text style={{ fontFamily: SERIF, fontSize: 'clamp(15px, 1.6vw, 20px)', color: 'white', lineHeight: 1.3, marginBottom: 8 }}>
          {slide.pathway.heading}
        </Text>
        <Text style={{ fontSize: 'clamp(12px, 1.2vw, 14px)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65 }}>
          {slide.pathway.link
            ? slide.pathway.body.split(slide.pathway.link.text).map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <Box component="a" href={slide.pathway.link!.url} target="_blank" rel="noopener noreferrer"
                      style={{ color: `${GOLD}0.9)`, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                      {slide.pathway.link!.text}
                    </Box>
                  )}
                </React.Fragment>
              ))
            : slide.pathway.body}
        </Text>
      </Box>
    </Box>
  )
}

function RenderInterstitial({ slide }: { slide: InterstitialSlide }) {
  return (
    <Stack align="center" gap="xl" style={{ textAlign: 'center', maxWidth: 840, margin: '0 auto' }}>
      {slide.lines.map((line, i) => (
        <Text
          key={i}
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(20px, 2.6vw, 34px)',
            fontStyle: 'italic',
            color: i === 0 ? 'white' : 'rgba(255,255,255,0.55)',
            lineHeight: 1.5,
          }}
        >
          {line}
        </Text>
      ))}
    </Stack>
  )
}

function RenderJourneyReflection({ slide }: { slide: JourneyReflectionSlide }) {
  function tierAccent(color: 'gold' | 'amber' | 'blue' | 'green') {
    if (color === 'gold') return GOLD
    if (color === 'amber') return AMBER
    if (color === 'green') return GREEN
    return BLUE
  }

  return (
    <Box style={{ width: '100%' }}>
      {/* Hero question */}
      <Box style={{ marginBottom: 18 }}>
        <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: 10 }}>
          {slide.eyebrow}
        </Text>
        <Title
          order={2}
          style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 'clamp(20px, 2.4vw, 34px)', fontStyle: 'italic', color: 'white', lineHeight: 1.2, marginBottom: 10 }}
        >
          "{slide.question}"
        </Title>
        <Box style={{ width: 64, height: 1, background: 'rgba(255,255,255,0.15)', marginBottom: 10 }} />
        {slide.intro.map((line, i) => (
          <Text key={i} style={{ fontSize: 'clamp(13px, 1.35vw, 16px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: i < slide.intro.length - 1 ? 6 : 0 }}>
            {line}
          </Text>
        ))}
      </Box>

      {/* Three tier cards */}
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" style={{ marginBottom: 14 }}>
        {slide.tiers.map((tier) => {
          const a = tierAccent(tier.tagColor)
          return (
            <Box
              key={tier.tier}
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderTop: `2px solid ${a}0.7)`,
                padding: '12px 16px 16px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase', color: `${a}0.6)`, marginBottom: 5 }}>
                {tier.tier}
              </Text>
              <Text style={{ fontFamily: SERIF, fontSize: 'clamp(14px, 1.5vw, 18px)', color: 'white', lineHeight: 1.2, marginBottom: 8 }}>
                {tier.sublabel}
              </Text>
              <Box style={{ display: 'inline-block', padding: '2px 8px', background: `${a}0.1)`, border: `1px solid ${a}0.28)`, marginBottom: 10, alignSelf: 'flex-start' }}>
                <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', color: `${a}0.9)` }}>
                  {tier.tag}
                </Text>
              </Box>
              <Text style={{ fontSize: 'clamp(11px, 1.05vw, 13px)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, marginBottom: 10, flex: 1 }}>
                {tier.description}
              </Text>
              <Box style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 8 }}>
                <Text style={{ fontSize: 'clamp(10px, 0.95vw, 12px)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.55, fontStyle: 'italic' }}>
                  {tier.honest}
                </Text>
              </Box>
            </Box>
          )
        })}
      </SimpleGrid>

      {/* Personal stories */}
      <Box style={{ marginBottom: 14 }}>
        <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', marginBottom: 8 }}>
          {slide.storiesLabel}
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="sm">
          {slide.stories.map((s, i) => (
            <Box
              key={i}
              style={{
                padding: '10px 14px 12px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderLeft: '2px solid rgba(255,255,255,0.2)',
              }}
            >
              <Text style={{ fontFamily: SERIF, fontSize: 'clamp(13px, 1.3vw, 16px)', color: 'white', lineHeight: 1.2, marginBottom: 3 }}>
                {s.person}
              </Text>
              <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', marginBottom: 6 }}>
                {s.role}
              </Text>
              <Text style={{ fontSize: 'clamp(11px, 1.05vw, 13px)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontStyle: 'italic' }}>
                {s.story}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Promise callout */}
      <Box
        style={{
          padding: '14px 22px 16px',
          background: `linear-gradient(135deg, ${GOLD}0.07) 0%, rgba(255,255,255,0.04) 50%, ${GOLD}0.05) 100%)`,
          border: `1px solid ${GOLD}0.2)`,
          borderTop: `2px solid ${GOLD}0.7)`,
        }}
      >
        <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase', color: `${GOLD}0.6)`, marginBottom: 8 }}>
          {slide.promise.label}
        </Text>
        <Text style={{ fontFamily: SERIF, fontSize: 'clamp(15px, 1.6vw, 20px)', color: 'white', lineHeight: 1.3 }}>
          {slide.promise.heading}
        </Text>
        {slide.promise.body && (
          <Text style={{ fontSize: 'clamp(13px, 1.3vw, 16px)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, marginTop: 8 }}>
            {slide.promise.body}
          </Text>
        )}
      </Box>
    </Box>
  )
}

// ─── Slide dispatcher ─────────────────────────────────────────────

function renderSlide(slide: Slide) {
  switch (slide.type) {
    case 'title':            return <RenderTitle slide={slide} />
    case 'divider':          return <RenderDivider slide={slide} />
    case 'two-column':       return <RenderTwoColumn slide={slide} />
    case 'grid':             return <RenderGrid slide={slide} />
    case 'text':             return <RenderText slide={slide} />
    case 'problem-solution': return <RenderProblemSolution slide={slide} />
    case 'tools':            return <RenderTools slide={slide} />
    case 'quote-collage':    return <RenderQuoteCollage slide={slide} />
    case 'image':            return <RenderImage slide={slide} />
    case 'dual-image':       return <RenderDualImage slide={slide} />
    case 'features':          return <RenderFeatures slide={slide} />
    case 'principles-table': return <RenderPrinciplesTable slide={slide} />
    case 'interstitial':     return <RenderInterstitial slide={slide} />
    case 'hero-question':    return <RenderHeroQuestion slide={slide} />
    case 'journey-reflection': return <RenderJourneyReflection slide={slide} />
  }
}

// ─── Slide wrapper ────────────────────────────────────────────────

function SlideWrapper({ children, isLast }: { children: React.ReactNode; isLast: boolean }) {
  return (
    <Box className="slide">
      <Box className="slide-badge">SYNERGY FC · U11 BOYS</Box>
      {children}
      {!isLast && <Box className="scroll-indicator">↓</Box>}
    </Box>
  )
}

// ─── Page ─────────────────────────────────────────────────────────

export default function SeasonPlan() {
  return (
    <Box className="slide-container">
      {slides.map((slide, i) => (
        <SlideWrapper key={slide.id} isLast={i === slides.length - 1}>
          {renderSlide(slide)}
        </SlideWrapper>
      ))}
    </Box>
  )
}
