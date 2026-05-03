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
  InterstitialSlide,
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
          width: 48,
          height: 1,
          background: 'rgba(255,255,255,0.2)',
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
              <Text style={{ fontSize: 'clamp(15px, 1.65vw, 20px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)' }}>
                {item}
              </Text>
            </Group>
          )
        }
        return (
          <Box key={i}>
            <Group gap="sm" align="flex-start" wrap="nowrap">
              {DOT}
              <Text style={{ fontSize: 'clamp(15px, 1.65vw, 20px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.75)' }}>
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
          fontSize: 11,
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
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

function SlideKicker({ text }: { text: string }) {
  return (
    <Box
      style={{
        marginTop: 20,
        padding: '20px 40px',
        background: 'rgba(255,255,255,0.025)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        style={{
          position: 'absolute',
          top: -32,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: SERIF,
          fontSize: 160,
          color: 'rgba(255,255,255,0.04)',
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
          fontSize: 'clamp(15px, 1.7vw, 22px)',
          fontStyle: 'italic',
          color: 'white',
          lineHeight: 1.55,
          maxWidth: 860,
          margin: '0 auto',
        }}
      >
        "{text}"
      </Text>
    </Box>
  )
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
      {slide.kicker && <SlideKicker text={slide.kicker} />}
    </Box>
  )
}

function RenderGrid({ slide }: { slide: GridSlide }) {
  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      <SimpleGrid cols={{ base: 1, sm: slide.cols }} spacing="md">
        {slide.items.map((item) => (
          <Box key={item.title} className="slide-card">
            <div className="slide-card-title">{item.title}</div>
            <div className="slide-card-body">{item.body}</div>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

function RenderText({ slide }: { slide: TextSlide }) {
  return (
    <Box style={{ width: '100%', maxWidth: 840 }}>
      <SlideHeading title={slide.title} />
      <BulletList items={slide.bullets} />
      {slide.quote && <QuoteBlock text={slide.quote} />}
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
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

function RenderQuoteCollage({ slide }: { slide: QuoteCollageSlide }) {
  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      <Group gap="md" style={{ flexWrap: 'wrap' }}>
        {slide.quotes.map((quote, i) => (
          <Box key={i} className="slide-quote-chip">
            {quote}
          </Box>
        ))}
      </Group>
    </Box>
  )
}

function RenderImage({ slide }: { slide: ImageSlide }) {
  return (
    <Box style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <SlideHeading title={slide.title} />
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src={`${base}${slide.image}`}
          alt={slide.title}
          style={{
            maxWidth: '100%',
            maxHeight: '62vh',
            objectFit: 'contain',
            opacity: 0.92,
          }}
        />
        {slide.caption && (
          <Text
            style={{
              marginTop: 14,
              fontSize: 'clamp(11px, 1vw, 13px)',
              color: 'rgba(255,255,255,0.45)',
              textAlign: 'center',
              fontFamily: MONO,
              letterSpacing: '1px',
            }}
          >
            {slide.caption}
          </Text>
        )}
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
    case 'interstitial':     return <RenderInterstitial slide={slide} />
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
