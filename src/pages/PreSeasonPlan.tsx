import React, { useState, useMemo, createContext, useContext } from 'react'
import { Box, SimpleGrid, Stack, Text, Title, Group } from '@mantine/core'
import { slides } from '../data/preSeasonPlan'
import type {
  PreSeasonSlide, CoachesSlide, StorySlide, DevSplitSlide,
  PlayingRosterSlide, ContinuumSlide, ZpdGoalsSlide,
  ScheduleStatsSlide, CostsTableSlide, QuoteImageSlide,
} from '../data/preSeasonPlan'
import type {
  BulletItem,
  TitleSlide,
  DividerSlide,
  TwoColumnSlide,
  GridSlide,
  TextSlide,
  ToolsSlide,
  FeaturesSlide,
  InterstitialSlide,
  DualImageSlide,
  PrinciplesTableSlide,
  ImageSlide,
  HeroQuestionSlide,
  JourneyReflectionSlide,
} from '../data/seasonPlan'

const base = import.meta.env.BASE_URL

const SERIF = "'Cormorant Garamond', Georgia, serif"
const MONO = "'JetBrains Mono', 'Courier New', monospace"
const GOLD = 'rgba(212,175,80,'

// ─── Theme ─────────────────────────────────────────────────────────

function makeTheme(light: boolean) {
  const b = light ? '15,15,25' : '255,255,255'
  const r = (n: number) => `rgba(${b},${n})`
  return {
    light,
    bg: light ? '#f5f3ef' : '#0a0a0f',
    chartBg: light ? '#ede9e3' : '#0a0a0f',
    text: light ? '#0f0f1a' : 'white',
    r,
    gold: light ? 'rgba(185,110,0,' : 'rgba(212,175,80,',
    noteBg: light ? 'rgba(40,100,200,0.07)' : 'rgba(80,160,255,0.08)',
    noteBorder: light ? 'rgba(40,100,200,0.2)' : 'rgba(80,160,255,0.22)',
    noteTop: light ? 'rgba(40,100,200,0.5)' : 'rgba(80,160,255,0.55)',
    noteLabel: light ? 'rgba(40,100,200,0.85)' : 'rgba(120,190,255,0.75)',
    noteBody: r(0.85),
    blueAccent: light ? 'rgba(40,100,220,0.9)' : 'rgba(90,155,255,0.9)',
  }
}

type SlideTheme = ReturnType<typeof makeTheme>
const ThemeCtx = createContext<SlideTheme>(makeTheme(false))
function useT() { return useContext(ThemeCtx) }

// ─── Toggle button ─────────────────────────────────────────────────

function ThemeToggle({ light, onToggle }: { light: boolean; onToggle: () => void }) {
  return (
    <button
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
      onClick={onToggle}
      style={{
        position: 'fixed',
        top: 18,
        left: 40,
        zIndex: 1000,
        background: 'none',
        border: `1px solid ${light ? 'rgba(15,15,25,0.2)' : 'rgba(255,255,255,0.18)'}`,
        color: light ? 'rgba(15,15,25,0.6)' : 'rgba(255,255,255,0.5)',
        fontFamily: MONO,
        fontSize: 10,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        padding: '5px 11px',
        cursor: 'pointer',
        userSelect: 'none',
        lineHeight: 1,
        transition: 'border-color 0.2s, color 0.2s',
      }}
    >
      {light ? '● Dark' : '○ Light'}
    </button>
  )
}

// ─── Shared primitives ────────────────────────────────────────────

function SlideHeading({ title, center }: { title: string; center?: boolean }) {
  const T = useT()
  return (
    <>
      <Title
        order={2}
        style={{
          fontFamily: SERIF,
          fontWeight: 400,
          fontSize: 'clamp(28px, 3.2vw, 44px)',
          color: T.text,
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
          background: `linear-gradient(to right, ${T.r(0.5)}, ${T.r(0.08)})`,
          margin: center ? '16px auto 24px' : '16px 0 24px',
        }}
      />
    </>
  )
}

function Dot() {
  const T = useT()
  return (
    <Box
      style={{
        width: 4,
        height: 4,
        borderRadius: '50%',
        background: T.r(0.35),
        marginTop: 10,
        flexShrink: 0,
      }}
    />
  )
}

function BulletList({ items }: { items: BulletItem[] }) {
  const T = useT()
  return (
    <Stack gap="xs">
      {items.map((item, i) => {
        if (typeof item === 'string') {
          return (
            <Group key={i} gap="sm" align="flex-start" wrap="nowrap">
              <Dot />
              <Text style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: 1.75, color: T.r(0.78), fontWeight: 500 }}>
                {item}
              </Text>
            </Group>
          )
        }
        if ('heading' in item) {
          return (
            <Box key={i}>
              <Group gap="sm" align="flex-start" wrap="nowrap">
                <Dot />
                <Text style={{ fontSize: 'clamp(16px, 1.7vw, 21px)', lineHeight: 1.4, color: T.text, fontFamily: SERIF }}>
                  {item.heading}
                </Text>
              </Group>
              <Text style={{ paddingLeft: 20, marginTop: 4, fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: 1.75, color: T.r(0.75), fontWeight: 500 }}>
                {item.body}
              </Text>
            </Box>
          )
        }
        return (
          <Box key={i}>
            <Group gap="sm" align="flex-start" wrap="nowrap">
              <Dot />
              <Text style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: 1.75, color: T.r(0.78), fontWeight: 500 }}>
                {item.label}
              </Text>
            </Group>
            <Stack gap={2} style={{ paddingLeft: 20, marginTop: 4 }}>
              {item.subitems.map((sub, j) => (
                <Group key={j} gap="xs" align="flex-start" wrap="nowrap">
                  <Box style={{ width: 10, height: 1, background: T.r(0.2), marginTop: 12, flexShrink: 0 }} />
                  <Text style={{ fontSize: 'clamp(14px, 1.45vw, 17px)', lineHeight: 1.65, color: T.r(0.65), fontWeight: 500 }}>
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
  const T = useT()
  return (
    <Box
      style={{
        marginTop: 28,
        padding: '18px 24px',
        background: T.r(0.025),
        borderLeft: `2px solid ${T.r(0.15)}`,
      }}
    >
      <Text
        style={{
          fontFamily: SERIF,
          fontSize: 'clamp(15px, 1.7vw, 21px)',
          fontStyle: 'italic',
          color: T.r(0.88),
          lineHeight: 1.6,
        }}
      >
        "{text}"
      </Text>
    </Box>
  )
}

function ImageQuoteBlock({
  text, image, attribution, href,
}: { text: string; image: string; attribution?: string; href?: string }) {
  const T = useT()
  const inner = (
    <Group
      gap="xl"
      align="center"
      wrap="nowrap"
      style={{
        marginTop: 0,
        padding: '12px 20px',
        background: `linear-gradient(135deg, ${T.gold}0.08) 0%, ${T.r(0.04)} 100%)`,
        border: `1px solid ${T.gold}0.22)`,
        borderLeft: `3px solid ${T.gold}0.7)`,
      }}
    >
      <img
        src={`${base}${image}`}
        alt={text}
        style={{ width: 56, flexShrink: 0, opacity: 0.85, filter: T.light ? 'none' : 'invert(1)' }}
      />
      <Box>
        <Text
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(17px, 2vw, 26px)',
            fontStyle: 'italic',
            color: T.text,
            lineHeight: 1.35,
          }}
        >
          "{text}"
        </Text>
        {attribution && (
          <Text style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '2px', color: `${T.gold}0.75)`, marginTop: 4 }}>
            — {attribution}
          </Text>
        )}
        {href && (
          <Box
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 6,
              padding: '4px 12px', border: `1px solid ${T.gold}0.4)`,
              color: `${T.gold}0.9)`, fontFamily: MONO, fontSize: 11,
              letterSpacing: '2px', textTransform: 'uppercase',
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

// ─── Slide type renderers ─────────────────────────────────────────

function RenderTitle({ slide }: { slide: TitleSlide }) {
  const T = useT()
  return (
    <Stack align="center" gap={0} style={{ textAlign: 'center' }}>
      <Text
        style={{
          fontFamily: MONO,
          fontSize: 13,
          letterSpacing: '5px',
          textTransform: 'uppercase',
          color: T.r(0.55),
          marginBottom: 28,
        }}
      >
        Synergy FC · U11 Boys
      </Text>
      <Title
        order={1}
        style={{
          fontFamily: SERIF,
          fontWeight: 400,
          fontSize: 'clamp(42px, 6.5vw, 96px)',
          color: T.text,
          lineHeight: 1.1,
        }}
      >
        {slide.title}
      </Title>
      <Box style={{ width: 64, height: 1, background: T.r(0.2), margin: '28px auto' }} />
      <Text
        style={{
          fontFamily: MONO,
          fontSize: 'clamp(14px, 1.6vw, 20px)',
          letterSpacing: '4px',
          color: T.r(0.5),
        }}
      >
        {slide.subtitle}
      </Text>
    </Stack>
  )
}

function RenderDivider({ slide }: { slide: DividerSlide }) {
  const T = useT()
  return (
    <Stack align="center" gap="md" style={{ textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
      <Title
        order={1}
        style={{
          fontFamily: SERIF,
          fontWeight: 400,
          fontSize: 'clamp(34px, 5vw, 72px)',
          color: T.text,
          lineHeight: 1.15,
        }}
      >
        {slide.title}
      </Title>
      {slide.subtitle && (
        <>
          <Box style={{ width: 64, height: 1, background: T.r(0.2), margin: '4px auto' }} />
          <Text
            style={{
              fontSize: 'clamp(14px, 1.5vw, 19px)',
              color: T.r(0.5),
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

function RenderTwoColumn({ slide }: { slide: TwoColumnSlide }) {
  const T = useT()
  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      <SimpleGrid cols={{ base: 1, sm: slide.columns.length as 2 | 3 }} spacing="md">
        {slide.columns.map((col) => (
          <Box
            key={col.heading}
            style={{
              background: T.r(0.025),
              border: `1px solid ${T.r(0.1)}`,
              padding: '18px 22px 22px',
            }}
          >
            <Group
              gap="sm"
              align="center"
              style={{ paddingBottom: 12, marginBottom: 16, borderBottom: `1px solid ${T.r(0.1)}` }}
            >
              {col.icon && <col.icon size={22} stroke={1.4} color={`${T.gold}0.85)`} />}
              <Text style={{ fontFamily: SERIF, fontSize: 'clamp(18px, 2vw, 24px)', color: T.text, lineHeight: 1.2 }}>
                {col.heading}
              </Text>
            </Group>
            <BulletList items={col.items} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

function RenderText({ slide }: { slide: TextSlide }) {
  const T = useT()
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
            marginTop: 28, padding: '20px 24px',
            background: T.noteBg,
            border: `1px solid ${T.noteBorder}`,
            borderTop: `2px solid ${T.noteTop}`,
          }}
        >
          <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: T.noteLabel, marginBottom: 10 }}>
            {slide.note.label}
          </Text>
          <Text style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', color: T.noteBody, lineHeight: 1.7, fontWeight: 500 }}>
            {slide.note.text}
          </Text>
        </Box>
      )}
    </Box>
  )
}

function RenderTools({ slide }: { slide: ToolsSlide }) {
  const T = useT()
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
              <Text style={{ fontFamily: SERIF, fontSize: 'clamp(16px, 1.8vw, 22px)', color: T.text, marginBottom: 8, lineHeight: 1.25 }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 'clamp(14px, 1.35vw, 17px)', lineHeight: 1.65, color: T.r(0.72), fontWeight: 500 }}>
                {item.description}
              </Text>
              {item.link && (
                <Box
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 14,
                    padding: '5px 12px', border: `1px solid ${T.r(0.18)}`,
                    color: T.r(0.55), fontFamily: MONO, fontSize: 10,
                    letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none',
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

function RenderGrid({ slide }: { slide: GridSlide }) {
  const T = useT()
  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      {slide.subtitle && (
        <Text
          style={{
            fontFamily: SERIF, fontSize: 'clamp(15px, 1.6vw, 20px)', fontStyle: 'italic',
            color: T.r(0.65), lineHeight: 1.6, marginTop: -18, marginBottom: 22,
          }}
        >
          {slide.subtitle}
        </Text>
      )}
      <SimpleGrid cols={{ base: 1, sm: slide.cols }} spacing="md">
        {slide.items.map((item) => (
          <Box key={item.title} className="slide-card" style={{ position: 'relative' }}>
            {item.star && (
              <Box
                style={{
                  position: 'absolute', top: 10, right: 10,
                  padding: '3px 8px',
                  background: `${T.gold}0.15)`,
                  border: `1px solid ${T.gold}0.4)`,
                  display: 'flex', alignItems: 'center', gap: 4,
                }}
              >
                <span style={{ color: `${T.gold}0.95)`, fontSize: 11, lineHeight: 1 }}>★</span>
                <Text style={{ fontFamily: MONO, fontSize: 8, letterSpacing: '2px', textTransform: 'uppercase', color: `${T.gold}0.85)` }}>
                  Priority
                </Text>
              </Box>
            )}
            {item.icon && (
              <Box style={{
                width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: T.r(0.04), border: `1px solid ${T.r(0.09)}`,
                marginBottom: 14,
              }}>
                <item.icon size={20} stroke={1.4} color={item.iconColor ?? `${T.gold}0.85)`} />
              </Box>
            )}
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
            {Array.isArray(item.body) ? (
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {item.body.map((line, i) => (
                  <li key={i} style={{ fontSize: 'clamp(14px, 1.3vw, 16px)', lineHeight: 1.65, color: T.r(0.75), fontWeight: 500, marginBottom: i < item.body.length - 1 ? 6 : 0 }}>
                    {line}
                  </li>
                ))}
              </ul>
            ) : (
              <Text style={{ fontSize: 'clamp(14px, 1.3vw, 16px)', lineHeight: 1.65, color: T.r(0.75), fontWeight: 500 }}>{item.body}</Text>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

function RenderFeatures({ slide }: { slide: FeaturesSlide }) {
  const T = useT()
  const cols = slide.cols ?? 3
  return (
    <Box style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box style={{ marginBottom: 28 }}>
        <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: T.r(0.4), marginBottom: 10 }}>
          {slide.title}
        </Text>
        {slide.subtitle && (
          <Title order={2} style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 'clamp(26px, 3vw, 42px)', color: T.text, lineHeight: 1.2 }}>
            {slide.subtitle}
          </Title>
        )}
        <Box style={{ width: 64, height: 1, background: T.r(0.15), margin: '16px 0' }} />
        {slide.hook && (
          <Text style={{ fontFamily: SERIF, fontSize: 'clamp(15px, 1.6vw, 20px)', fontStyle: 'italic', color: T.r(0.65), lineHeight: 1.6, maxWidth: 760 }}>
            {slide.hook}
          </Text>
        )}
      </Box>

      {slide.imageQuote && (
        <Box mb={20}>
          <ImageQuoteBlock
            text={slide.imageQuote.text}
            image={slide.imageQuote.image}
            attribution={slide.imageQuote.attribution}
            href={slide.imageQuote.href}
          />
        </Box>
      )}

      <Stack gap="md" mb={slide.quote || slide.note ? 28 : 0}>
        {slide.sections.map((section, si) => (
          <Box key={si}>
            {section.label && (
              <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: T.r(0.4), marginBottom: 10, marginTop: si > 0 ? 8 : 0 }}>
                {section.label}
              </Text>
            )}
            <SimpleGrid cols={{ base: 1, sm: cols }} spacing="md">
              {section.items.map((item) => (
                <Box
                  key={item.title}
                  style={{
                    background: T.r(0.025),
                    border: `1px solid ${T.r(0.09)}`,
                    padding: '18px 20px 22px',
                  }}
                >
                  <Box style={{
                    width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: T.r(0.04), border: `1px solid ${T.r(0.09)}`,
                    marginBottom: 14,
                  }}>
                    <item.icon size={20} stroke={1.4} color={`${T.gold}0.85)`} />
                  </Box>
                  <Text style={{ fontFamily: SERIF, fontSize: 'clamp(15px, 1.6vw, 20px)', color: T.text, lineHeight: 1.25, marginBottom: 8 }}>
                    {item.title}
                  </Text>
                  {Array.isArray(item.description) ? (
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      {item.description.map((line, i) => (
                        <li key={i} style={{ fontSize: 'clamp(14px, 1.3vw, 16px)', color: T.r(0.75), lineHeight: 1.6, fontWeight: 500, marginBottom: i < item.description.length - 1 ? 6 : 0 }}>
                          {line}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Text style={{ fontSize: 'clamp(14px, 1.3vw, 16px)', color: T.r(0.75), lineHeight: 1.6, fontWeight: 500 }}>
                      {item.description}
                    </Text>
                  )}
                  {item.note && (
                    <Box style={{ marginTop: 14, padding: '10px 14px', background: T.r(0.04), borderLeft: `2px solid ${T.r(0.2)}` }}>
                      <Text style={{ fontSize: 'clamp(13px, 1.1vw, 14px)', color: T.r(0.55), lineHeight: 1.6, fontStyle: 'italic', fontWeight: 500 }}>
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
                        display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 12,
                        padding: '5px 12px', border: `1px solid ${T.r(0.18)}`,
                        color: T.r(0.55), fontFamily: MONO, fontSize: 10,
                        letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none',
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

      {slide.note && (
        <Box
          style={{
            marginTop: 'auto',
            padding: '20px 24px',
            background: T.noteBg,
            border: `1px solid ${T.noteBorder}`,
            borderTop: `2px solid ${T.noteTop}`,
          }}
        >
          <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: T.noteLabel, marginBottom: 10 }}>
            {slide.note.label}
          </Text>
          <Text style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', color: T.noteBody, lineHeight: 1.7, fontWeight: 500 }}>
            {slide.note.text}
          </Text>
        </Box>
      )}
    </Box>
  )
}

function RenderInterstitial({ slide }: { slide: InterstitialSlide }) {
  const T = useT()
  return (
    <Stack align="center" gap="xl" style={{ textAlign: 'center', maxWidth: 840, margin: '0 auto' }}>
      {slide.lines.map((line, i) => (
        <Text
          key={i}
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(20px, 2.6vw, 34px)',
            fontStyle: 'italic',
            color: i === 0 ? T.text : T.r(0.55),
            lineHeight: 1.5,
          }}
        >
          {line}
        </Text>
      ))}
    </Stack>
  )
}

function RenderStory({ slide }: { slide: StorySlide }) {
  const T = useT()
  return (
    <Box style={{ width: '100%', position: 'relative' }}>
      <Box
        style={{
          position: 'absolute', top: 0, right: 0,
          padding: '6px 16px', background: 'rgba(212,175,80,1)',
          fontFamily: MONO, fontSize: 11, letterSpacing: '3px',
          textTransform: 'uppercase', color: '#0a0a0f', fontWeight: 700,
        }}
      >
        100% Volunteers
      </Box>
      <SlideHeading title={slide.title} />
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
        <Stack gap="xl">
          {slide.bullets.map((bullet, i) => (
            <Box
              key={i}
              style={{
                padding: '16px 20px 18px',
                background: T.r(0.025),
                borderLeft: `3px solid ${T.gold}0.65)`,
                borderBottom: `1px solid ${T.r(0.06)}`,
              }}
            >
              <Text style={{ fontFamily: SERIF, fontSize: 'clamp(17px, 1.8vw, 22px)', color: T.text, lineHeight: 1.25, marginBottom: 8 }}>
                {bullet.heading}
              </Text>
              <Text style={{ fontSize: 'clamp(13px, 1.3vw, 15px)', lineHeight: 1.72, color: T.r(0.75), fontWeight: 500 }}>
                {bullet.body}
              </Text>
            </Box>
          ))}
          {slide.quote && (
            <Box
              style={{
                padding: '16px 20px',
                background: `linear-gradient(135deg, ${T.gold}0.06) 0%, ${T.r(0.02)} 100%)`,
                borderLeft: `3px solid ${T.gold}0.55)`,
              }}
            >
              <Text style={{ fontFamily: SERIF, fontSize: 'clamp(14px, 1.5vw, 18px)', fontStyle: 'italic', color: T.r(0.88), lineHeight: 1.6 }}>
                "{slide.quote}"
              </Text>
            </Box>
          )}
        </Stack>
        <SimpleGrid cols={2} spacing={4} style={{ alignContent: 'start' }}>
          {slide.images.map((src, i) => (
            <Box key={i} style={{ overflow: 'hidden', border: `1px solid ${T.r(0.08)}` }}>
              <img
                src={`${base}${src}`}
                alt=""
                style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', objectPosition: 'center top', display: 'block', opacity: 0.9 }}
              />
            </Box>
          ))}
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  )
}

function RenderCoaches({ slide }: { slide: CoachesSlide }) {
  const T = useT()
  return (
    <Box style={{ width: '100%' }}>
      <Group align="center" gap="md" mb={16} wrap="nowrap">
        <Title
          order={2}
          style={{
            fontFamily: SERIF,
            fontWeight: 400,
            fontSize: 'clamp(28px, 3.2vw, 44px)',
            color: T.text,
            lineHeight: 1.2,
          }}
        >
          {slide.title}
        </Title>
        <Box
          style={{
            padding: '6px 16px', background: 'rgba(212,175,80,1)',
            fontFamily: MONO, fontSize: 11, letterSpacing: '3px',
            textTransform: 'uppercase', color: '#0a0a0f', fontWeight: 700,
            flexShrink: 0,
          }}
        >
          100% Volunteers
        </Box>
      </Group>
      <Box
        style={{
          width: 80, height: 2,
          background: `linear-gradient(to right, ${T.r(0.5)}, ${T.r(0.08)})`,
          margin: '0 0 24px',
        }}
      />
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
        {slide.coaches.map((coach) => (
          <Box
            key={coach.name}
            style={{
              background: T.r(0.025),
              border: `1px solid ${T.r(0.1)}`,
              borderTop: `2px solid ${T.gold}${coach.placeholder ? '0.3)' : '0.75)'}`,
              padding: '24px 22px 26px',
              opacity: coach.placeholder ? 0.55 : 1,
              display: 'flex', flexDirection: 'column',
            }}
          >
            <Text style={{ fontFamily: SERIF, fontSize: 'clamp(20px, 2.1vw, 26px)', color: T.text, lineHeight: 1.15, marginBottom: 6 }}>
              {coach.name}
            </Text>
            <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: `${T.gold}0.7)`, marginBottom: 18 }}>
              {coach.role}
            </Text>
            <Box style={{ height: 1, background: T.r(0.08), marginBottom: 20 }} />
            <Stack gap="lg" style={{ flex: 1 }}>
              {coach.sections.map((section) => (
                <Box key={section.label}>
                  <Group gap={7} align="center" style={{ marginBottom: 8 }}>
                    {section.icon && <section.icon size={14} stroke={1.8} color={`${T.gold}0.85)`} />}
                    <Text style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: `${T.gold}0.85)` }}>
                      {section.label}
                    </Text>
                  </Group>
                  <Text style={{ fontSize: 'clamp(13px, 1.3vw, 15px)', lineHeight: 1.72, color: T.r(0.78), fontWeight: 500 }}>
                    {section.text}
                  </Text>
                </Box>
              ))}
              {coach.placeholder && (
                <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: T.r(0.3) }}>
                  Details coming soon
                </Text>
              )}
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

function RenderContinuum({ slide }: { slide: ContinuumSlide }) {
  const T = useT()
  const styles = [
    { name: 'Command', description: 'The coach instructs players on what he wants them to do', color: 'rgba(212,175,80,1)' },
    { name: 'Question & Answer', description: 'The coach asks questions and receives answers from players', color: 'rgba(185,165,100,1)' },
    { name: 'Skillful Neglect', description: 'The coach recognises errors but waits to see if players can self-correct', color: 'rgba(155,160,155,1)' },
    { name: 'Observation & Feedback', description: 'The coach and players observe together and offer feedback', color: 'rgba(110,158,200,1)' },
    { name: 'Guided Discovery', description: 'The coach sets conditions to guide players towards solutions', color: 'rgba(80,148,230,1)' },
    { name: 'Trial & Error', description: 'The coach and players work together to find the best solution to problems', color: 'rgba(60,138,255,1)' },
  ]

  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      <Box style={{ marginBottom: 20, border: `1px solid ${T.r(0.1)}`, overflow: 'hidden' }}>
        <Group
          justify="space-between"
          align="center"
          style={{ padding: '10px 20px', background: T.r(0.02), borderBottom: `1px solid ${T.r(0.08)}` }}
        >
          <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: `${T.gold}0.9)` }}>← Autocratic</Text>
          <Box style={{ flex: 1, height: 1, background: 'linear-gradient(to right, rgba(212,175,80,0.6), rgba(60,138,255,0.6))', margin: '0 20px' }} />
          <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: T.blueAccent }}>Democratic →</Text>
        </Group>
        <svg viewBox="0 0 1000 80" width="100%" height="auto" style={{ display: 'block' }}>
          <defs>
            <linearGradient id="ccAuthGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(212,175,80,0.22)" />
              <stop offset="100%" stopColor="rgba(212,175,80,0)" />
            </linearGradient>
            <linearGradient id="ccFreeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(60,138,255,0)" />
              <stop offset="100%" stopColor="rgba(60,138,255,0.18)" />
            </linearGradient>
          </defs>
          <polygon points="0,0 1000,0 0,80" fill="url(#ccAuthGrad)" />
          <polygon points="0,80 1000,80 1000,0" fill="url(#ccFreeGrad)" />
          <line x1="0" y1="0" x2="1000" y2="80" stroke={T.r(0.16)} strokeWidth="1.5" strokeDasharray="6 5" />
          <text x="14" y="20" fontFamily="JetBrains Mono, monospace" fontSize="11" fill={`${T.gold}0.85)`} letterSpacing="2">COACH AUTHORITY</text>
          <text x="658" y="72" fontFamily="JetBrains Mono, monospace" fontSize="11" fill={T.blueAccent} letterSpacing="2">PLAYER FREEDOM</text>
        </svg>
      </Box>
      <SimpleGrid cols={{ base: 2, sm: 6 }} spacing="sm">
        {styles.map((s, i) => (
          <Box
            key={i}
            style={{
              background: T.r(0.025),
              border: `1px solid ${T.r(0.08)}`,
              borderTop: `2px solid ${s.color}`,
              padding: '14px 14px 16px',
            }}
          >
            <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '2px', color: s.color, marginBottom: 10 }}>
              {String(i + 1).padStart(2, '0')}
            </Text>
            <Text style={{ fontFamily: SERIF, fontSize: 'clamp(15px, 1.6vw, 19px)', color: T.text, lineHeight: 1.25, marginBottom: 8 }}>
              {s.name}
            </Text>
            <Text style={{ fontSize: 'clamp(14px, 1.4vw, 17px)', lineHeight: 1.6, color: T.r(0.62), fontWeight: 500 }}>
              {s.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      {slide.note && (
        <Box
          style={{
            marginTop: 20, padding: '20px 24px',
            background: T.noteBg,
            border: `1px solid ${T.noteBorder}`,
            borderTop: `2px solid ${T.noteTop}`,
          }}
        >
          <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: T.noteLabel, marginBottom: 10 }}>
            {slide.note.label}
          </Text>
          <Text style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', color: T.noteBody, lineHeight: 1.7, fontWeight: 500 }}>
            {slide.note.text}
          </Text>
        </Box>
      )}
    </Box>
  )
}

function RenderDevSplit({ slide }: { slide: DevSplitSlide }) {
  const T = useT()
  const r = 40, cx = 50, cy = 50
  const circum = 2 * Math.PI * r
  const gameDash = 0.75 * circum
  const techDash = 0.25 * circum

  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      <Box
        style={{
          marginBottom: 28, padding: '22px 32px',
          background: `linear-gradient(135deg, ${T.gold}0.18) 0%, ${T.gold}0.06) 100%)`,
          borderLeft: `4px solid ${T.gold}1)`,
          borderBottom: `1px solid ${T.gold}0.2)`,
        }}
      >
        <Text style={{ fontFamily: SERIF, fontSize: 'clamp(15px, 1.8vw, 23px)', fontStyle: 'italic', color: T.r(0.95), lineHeight: 1.5, marginBottom: 12 }}>
          "Driving a car is best learnt when you sit behind the wheel and join the traffic. You must play soccer in order to learn the techniques."
        </Text>
        <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: `${T.gold}0.85)` }}>
          — Royal Dutch Football Association (KNVB)
        </Text>
      </Box>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        <Box style={{ background: T.r(0.03), border: `1px solid ${T.r(0.12)}`, padding: '24px 22px 26px', display: 'flex', flexDirection: 'column' }}>
          <Text style={{ fontFamily: MONO, fontSize: 13, letterSpacing: '4px', textTransform: 'uppercase', color: `${T.gold}0.8)`, marginBottom: 20 }}>
            Practice Structure
          </Text>
          <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <svg viewBox="0 0 100 100" width={170} height={170} style={{ overflow: 'visible' }}>
              <circle r={r} cx={cx} cy={cy} fill="none" stroke="rgba(100,170,255,0.7)" strokeWidth={22} strokeDasharray={`${gameDash} ${circum}`} transform={`rotate(-90 ${cx} ${cy})`} />
              <circle r={r} cx={cx} cy={cy} fill="none" stroke={`${T.gold}0.9)`} strokeWidth={22} strokeDasharray={`${techDash} ${circum}`} strokeDashoffset={-gameDash} transform={`rotate(-90 ${cx} ${cy})`} />
              <circle r={27} cx={cx} cy={cy} fill={T.chartBg} />
              <text x="50" y="45" textAnchor="middle" fontSize="8" fill={T.r(0.45)} fontFamily="JetBrains Mono, monospace" letterSpacing="1">GAMES</text>
              <text x="50" y="59" textAnchor="middle" fontSize="16" fill={T.text} fontFamily="Cormorant Garamond, Georgia, serif">75%</text>
            </svg>
          </Box>
          <Group justify="center" gap="lg" mb={24}>
            <Group gap={8} align="center">
              <Box style={{ width: 10, height: 10, background: 'rgba(100,170,255,0.7)' }} />
              <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', color: T.r(0.55) }}>Game Play · 75%</Text>
            </Group>
            <Group gap={8} align="center">
              <Box style={{ width: 10, height: 10, background: `${T.gold}0.9)` }} />
              <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', color: T.r(0.55) }}>Technical · 25%</Text>
            </Group>
          </Group>
          <Stack gap="sm" style={{ flex: 1 }}>
            <Group gap="sm" align="flex-start" wrap="nowrap">
              <Dot />
              <Text style={{ fontSize: 'clamp(13px, 1.3vw, 15px)', lineHeight: 1.72, color: T.r(0.75), fontWeight: 500 }}>
                Players touch the ball 3–5× more in small-sided games than 11v11 — more decisions per minute, more development in less time
              </Text>
            </Group>
            <Group gap="sm" align="flex-start" wrap="nowrap">
              <Dot />
              <Text style={{ fontSize: 'clamp(13px, 1.3vw, 15px)', lineHeight: 1.72, color: T.r(0.75), fontWeight: 500 }}>
                Draws from KNVB (Dutch model): game intelligence over rote drills, decision-making over repetition
              </Text>
            </Group>
          </Stack>
          {slide.note && (
            <Box style={{ marginTop: 20, padding: '16px 18px', background: T.noteBg, border: `1px solid ${T.noteBorder}`, borderTop: `2px solid ${T.noteTop}` }}>
              <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: T.noteLabel, marginBottom: 8 }}>
                {slide.note.label}
              </Text>
              <Text style={{ fontSize: 'clamp(13px, 1.3vw, 15px)', color: T.noteBody, lineHeight: 1.7, fontWeight: 500 }}>
                {slide.note.text}
              </Text>
            </Box>
          )}
        </Box>
        <Box style={{ background: T.r(0.03), border: `1px solid ${T.r(0.12)}`, padding: '24px 22px 26px', display: 'flex', flexDirection: 'column' }}>
          <Text style={{ fontFamily: MONO, fontSize: 13, letterSpacing: '4px', textTransform: 'uppercase', color: `${T.gold}0.8)`, marginBottom: 16 }}>
            Coaching Philosophy
          </Text>
          <Title order={3} style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 'clamp(20px, 2.1vw, 28px)', color: T.text, lineHeight: 1.2, marginBottom: 24 }}>
            Player-Centered,<br />Not Coach-Centered
          </Title>
          <Stack gap="md" style={{ flex: 1 }}>
            {[
              { heading: 'We guide, not dictate', body: 'Players solve problems first. If they struggle, we step in with questions before answers. Learning sticks when answers are found, not given.' },
              { heading: 'Development over scoreboard', body: 'We measure growth in decision-making, spatial awareness, and confidence — not just goals and assists.' },
              { heading: 'A range of coaching styles', body: "Command when needed, guided discovery when possible. Modern coaches adapt — they don't run one mode for every situation." },
            ].map((item, i) => (
              <Box key={i} style={{ padding: '12px 16px', background: T.r(0.02), borderLeft: `2px solid ${T.gold}0.55)` }}>
                <Text style={{ fontFamily: SERIF, fontSize: 'clamp(15px, 1.6vw, 19px)', color: T.text, lineHeight: 1.25, marginBottom: 6 }}>
                  {item.heading}
                </Text>
                <Text style={{ fontSize: 'clamp(12px, 1.2vw, 14px)', lineHeight: 1.68, color: T.r(0.68), fontWeight: 500 }}>
                  {item.body}
                </Text>
              </Box>
            ))}
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

function RenderPlayingRoster({ slide }: { slide: PlayingRosterSlide }) {
  const T = useT()
  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {[slide.left, slide.right].map((col, ci) => (
          <Box
            key={ci}
            style={{
              background: T.r(0.025), border: `1px solid ${T.r(0.1)}`,
              padding: '24px 22px 26px', display: 'flex', flexDirection: 'column',
            }}
          >
            <Group
              gap="sm"
              align="center"
              style={{ marginBottom: 16, paddingBottom: 14, borderBottom: `1px solid ${T.r(0.1)}` }}
            >
              {col.icon && <col.icon size={22} stroke={1.4} color={`${T.gold}0.85)`} />}
              <Text style={{ fontFamily: SERIF, fontSize: 'clamp(18px, 2vw, 24px)', color: T.text, lineHeight: 1.2 }}>
                {col.heading}
              </Text>
            </Group>
            <Box style={{ flex: 1 }}>
              <BulletList items={col.items} />
            </Box>
            {col.note && (
              <Box style={{ marginTop: 24, padding: '16px 18px', background: T.noteBg, border: `1px solid ${T.noteBorder}`, borderTop: `2px solid ${T.noteTop}` }}>
                <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: T.noteLabel, marginBottom: 8 }}>
                  {col.note.label}
                </Text>
                <Text style={{ fontSize: 'clamp(13px, 1.3vw, 15px)', color: T.noteBody, lineHeight: 1.7, fontWeight: 500 }}>
                  {col.note.text}
                </Text>
              </Box>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

function RenderZpdGoals({ slide }: { slide: ZpdGoalsSlide }) {
  const T = useT()
  const philosophyPoints = [
    { heading: 'Measured relative to themselves', body: "Every player enters at a different current level. We don't compare them to each other — we track how far each one travels from where they started." },
    { heading: 'The stretch zone is where growth lives', body: 'Too comfortable and development stalls. Too far ahead and players shut down. We deliberately work in the zone between — challenged, guided, growing.' },
    { heading: 'Success is movement, not position', body: "A player who enters at the bottom and grows consistently is succeeding. The goal is to push every player into their potential — wherever that lands them at season's end." },
  ]

  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
        <Box>
          <svg viewBox="0 0 680 340" width="100%" style={{ display: 'block', maxHeight: 305 }}>
            <defs>
              <marker id="zpd-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill={`${T.gold}0.8)`} />
              </marker>
            </defs>
            <rect x="3" y="3" width="674" height="334" rx="3" fill={T.r(0.025)} stroke={T.r(0.07)} strokeWidth="1" />

            {/* Outer ring: anxiety zone — "Can't do" */}
            <circle cx="192" cy="170" r="155" fill="rgba(82,82,98,0.5)" stroke="rgba(112,112,128,0.38)" strokeWidth="1.5" />
            {/* Middle ring: learning zone / ZPD — "Can do with help" */}
            <circle cx="192" cy="170" r="107" fill="rgba(18,152,148,0.74)" stroke="rgba(35,188,184,0.5)" strokeWidth="1.5" />
            {/* Inner circle: comfort zone — "Can do now" */}
            <circle cx="192" cy="170" r="58" fill="rgba(42,100,218,0.84)" stroke="rgba(75,138,255,0.55)" strokeWidth="1.5" />

            {/* Inner label */}
            <text x="192" y="163" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="19" fill="rgba(255,255,255,0.95)">Can do</text>
            <text x="192" y="185" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="19" fill="rgba(255,255,255,0.95)">now</text>

            {/* Middle ring label — upper portion of the teal ring */}
            <text x="192" y="80" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="17" fill="rgba(255,255,255,0.9)">Can do</text>
            <text x="192" y="100" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="17" fill="rgba(255,255,255,0.9)">with help</text>

            {/* Outer ring label — near top of gray ring */}
            <text x="192" y="35" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="17" fill={T.r(0.72)}>Can't do</text>

            {/* ZPD title + arrow pointing into the learning ring */}
            <text x="378" y="88" fontFamily="JetBrains Mono, Courier New, monospace" fontSize="13" fill={`${T.gold}0.92)`} letterSpacing="1.5">ZONE OF PROXIMAL</text>
            <text x="378" y="106" fontFamily="JetBrains Mono, Courier New, monospace" fontSize="13" fill={`${T.gold}0.92)`} letterSpacing="1.5">DEVELOPMENT</text>
            <line x1="373" y1="97" x2="270" y2="112" stroke={`${T.gold}0.62)`} strokeWidth="1.3" markerEnd="url(#zpd-arrow)" />

            {/* Legend */}
            <rect x="378" y="148" width="14" height="14" rx="2" fill="rgba(82,82,98,0.5)" stroke="rgba(112,112,128,0.5)" strokeWidth="1" />
            <text x="400" y="160" fontFamily="JetBrains Mono, Courier New, monospace" fontSize="11" fill={T.r(0.62)} letterSpacing="0.5">Anxiety zone</text>
            <text x="400" y="174" fontFamily="JetBrains Mono, Courier New, monospace" fontSize="10" fill={T.r(0.38)} letterSpacing="0.5">Unable to learn</text>

            <rect x="378" y="198" width="14" height="14" rx="2" fill="rgba(18,152,148,0.74)" stroke="rgba(35,188,184,0.5)" strokeWidth="1" />
            <text x="400" y="210" fontFamily="JetBrains Mono, Courier New, monospace" fontSize="11" fill={T.r(0.62)} letterSpacing="0.5">Learning zone</text>
            <text x="400" y="224" fontFamily="JetBrains Mono, Courier New, monospace" fontSize="10" fill={T.r(0.38)} letterSpacing="0.5">Can learn with support</text>

            <rect x="378" y="248" width="14" height="14" rx="2" fill="rgba(42,100,218,0.84)" stroke="rgba(75,138,255,0.55)" strokeWidth="1" />
            <text x="400" y="260" fontFamily="JetBrains Mono, Courier New, monospace" fontSize="11" fill={T.r(0.62)} letterSpacing="0.5">Comfort zone</text>
            <text x="400" y="274" fontFamily="JetBrains Mono, Courier New, monospace" fontSize="10" fill={T.r(0.38)} letterSpacing="0.5">Can learn independently</text>
          </svg>
        </Box>
        <Stack gap="md">
          <Text style={{ fontFamily: SERIF, fontSize: 'clamp(16px, 1.7vw, 21px)', fontStyle: 'italic', color: T.r(0.78), lineHeight: 1.55, marginBottom: 4 }}>
            Success isn't a destination — it's movement. Every player enters at a different starting point. Our job is to find the zone just beyond where they are now and guide them into it.
          </Text>
          {philosophyPoints.map((item, i) => (
            <Box key={i} style={{ padding: '12px 16px', background: T.r(0.02), borderLeft: `2px solid ${T.gold}0.55)` }}>
              <Text style={{ fontFamily: SERIF, fontSize: 'clamp(16px, 1.7vw, 21px)', color: T.text, lineHeight: 1.25, marginBottom: 6 }}>
                {item.heading}
              </Text>
              <Text style={{ fontSize: 'clamp(13px, 1.3vw, 15px)', lineHeight: 1.68, color: T.r(0.68), fontWeight: 500 }}>
                {item.body}
              </Text>
            </Box>
          ))}
        </Stack>
      </SimpleGrid>
      <Box style={{ marginTop: 28, padding: '20px 24px', background: T.noteBg, border: `1px solid ${T.noteBorder}`, borderTop: `2px solid ${T.noteTop}` }}>
        <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: T.noteLabel, marginBottom: 10 }}>
          Win Target
        </Text>
        <Text style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', color: T.noteBody, lineHeight: 1.7, fontWeight: 500 }}>
          We target a ~50% win rate. A team winning 80% of its games is competing below its level — the right competition should challenge your son. Appropriate difficulty is a feature, not a problem to solve.
        </Text>
      </Box>
    </Box>
  )
}

function RenderDualImage({ slide }: { slide: DualImageSlide }) {
  const T = useT()
  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      {slide.subtitle && (
        <Text style={{ fontFamily: SERIF, fontSize: 'clamp(15px, 1.6vw, 20px)', fontStyle: 'italic', color: T.r(0.65), lineHeight: 1.6, marginTop: -18, marginBottom: 22 }}>
          {slide.subtitle}
        </Text>
      )}
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {slide.images.map((img, i) => (
          <Box key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {img.caption && (
              <Group gap="xs" justify="center" style={{ marginBottom: 12 }}>
                {img.icon && <img.icon size={16} stroke={1.5} color={T.text} />}
                <Text style={{ fontFamily: MONO, fontSize: 'clamp(12px, 1.3vw, 15px)', letterSpacing: '2px', textTransform: 'uppercase', color: T.text, lineHeight: 1 }}>
                  {img.caption}
                </Text>
              </Group>
            )}
            <img src={`${base}${img.src}`} alt={img.caption ?? ''} style={{ width: '100%', objectFit: 'contain', maxHeight: '46vh', opacity: 0.92 }} />
          </Box>
        ))}
      </SimpleGrid>
      {slide.coachNotes && slide.coachNotes.length > 0 && (
        <Box style={{ marginTop: 24, padding: '18px 22px 20px', background: `linear-gradient(135deg, ${T.gold}0.06) 0%, ${T.r(0.03)} 100%)`, border: `1px solid ${T.gold}0.18)`, borderTop: `2px solid ${T.gold}0.55)` }}>
          <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase', color: `${T.gold}0.6)`, marginBottom: 14 }}>
            Coach's Notes
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            {slide.coachNotes.map((note, i) => (
              <Box key={i}>
                <Text style={{ fontFamily: SERIF, fontSize: 'clamp(15px, 1.6vw, 19px)', color: `${T.gold}0.9)`, lineHeight: 1.25, marginBottom: 8 }}>
                  {note.heading}
                </Text>
                <Text style={{ fontSize: 'clamp(12px, 1.2vw, 15px)', color: T.r(0.72), lineHeight: 1.65 }}>
                  {note.note}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  )
}

function RenderPrinciplesTable({ slide }: { slide: PrinciplesTableSlide }) {
  const T = useT()
  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${T.r(0.12)}` }}>
            <th style={{ width: 40, padding: '0 12px 10px', textAlign: 'left', fontFamily: MONO, fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: T.r(0.35), fontWeight: 400 }}>#</th>
            <th style={{ width: 44, padding: '0 8px 10px' }}></th>
            <th style={{ padding: '0 16px 10px 8px', textAlign: 'left', fontFamily: MONO, fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: T.r(0.35), fontWeight: 400, width: '28%' }}>Principle</th>
            <th style={{ padding: '0 12px 10px', textAlign: 'left', fontFamily: MONO, fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: T.r(0.35), fontWeight: 400 }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {slide.rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: `1px solid ${T.r(0.06)}` }}>
              <td style={{ padding: '9px 12px', verticalAlign: 'middle' }}>
                <span style={{ fontFamily: MONO, fontSize: 11, color: T.r(0.7), letterSpacing: '1px' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </td>
              <td style={{ padding: '9px 8px', verticalAlign: 'middle' }}>
                <Box style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', background: T.r(0.04), border: `1px solid ${T.r(0.09)}` }}>
                  <row.icon size={17} stroke={1.5} color={`${T.gold}0.9)`} />
                </Box>
              </td>
              <td style={{ padding: '9px 16px 9px 8px', verticalAlign: 'middle' }}>
                <Text style={{ fontFamily: SERIF, fontSize: 'clamp(15px, 1.55vw, 19px)', color: T.text, lineHeight: 1.25 }}>
                  {row.name}
                </Text>
              </td>
              <td style={{ padding: '9px 12px', verticalAlign: 'middle' }}>
                <Text style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', color: T.r(0.6), lineHeight: 1.5 }}>
                  {row.description}
                </Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {slide.coachNote && (
        <Box style={{ marginTop: 24, padding: '16px 22px 18px', background: `linear-gradient(135deg, ${T.gold}0.06) 0%, ${T.r(0.03)} 100%)`, border: `1px solid ${T.gold}0.18)`, borderTop: `2px solid ${T.gold}0.55)` }}>
          <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase', color: `${T.gold}0.6)`, marginBottom: 10 }}>
            Coach's Notes
          </Text>
          <Text style={{ fontSize: 'clamp(13px, 1.3vw, 16px)', color: T.r(0.75), lineHeight: 1.65 }}>
            {slide.coachNote}
          </Text>
        </Box>
      )}
    </Box>
  )
}

function RenderImage({ slide }: { slide: ImageSlide }) {
  const T = useT()
  const hasSidebar = Boolean(slide.sidebar)
  return (
    <Box style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <SlideHeading title={slide.title} />
      <SimpleGrid cols={{ base: 1, sm: hasSidebar ? 2 : 1 }} spacing="xl" style={{ alignItems: 'flex-start' }}>
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: hasSidebar ? 'flex-start' : 'center' }}>
          <Box style={{ position: 'relative', display: 'inline-flex', ...(slide.fade && { boxShadow: `inset 0 0 80px 36px ${T.bg}` }) }}>
            <img
              src={`${base}${slide.image}`}
              alt={slide.title}
              style={{ maxWidth: '100%', maxHeight: hasSidebar ? '58vh' : '62vh', objectFit: 'contain', opacity: 0.92, display: 'block' }}
            />
          </Box>
          {slide.caption && (
            <Text style={{ marginTop: 14, fontSize: 'clamp(11px, 1vw, 13px)', color: T.r(0.45), textAlign: hasSidebar ? 'left' : 'center', fontFamily: MONO, letterSpacing: '1px' }}>
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
                    background: T.r(0.025),
                    border: `1px solid ${T.r(0.08)}`,
                    borderLeft: item.star ? `2px solid ${T.gold}0.75)` : `2px solid ${T.r(0.18)}`,
                  }}
                >
                  <Group gap="sm" align="baseline" style={{ marginBottom: 5 }}>
                    <Text style={{ fontFamily: SERIF, fontSize: 'clamp(14px, 1.5vw, 17px)', color: T.text, lineHeight: 1.2 }}>
                      {item.name}
                    </Text>
                    {item.star && (
                      <Text style={{ color: `${T.gold}0.9)`, fontSize: 13, lineHeight: 1 }}>★★</Text>
                    )}
                    {item.tag && (
                      <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '2px', color: T.r(0.35), textTransform: 'uppercase' }}>
                        {item.tag}
                      </Text>
                    )}
                  </Group>
                  <Text style={{ fontSize: 'clamp(11px, 1.1vw, 13px)', color: T.r(0.58), lineHeight: 1.6 }}>
                    {item.description}
                  </Text>
                </Box>
              ))}
            </Stack>
            {slide.sidebar.callout && (
              <Box
                style={{
                  marginTop: 10, padding: '14px 16px 16px',
                  background: `linear-gradient(135deg, ${T.gold}0.08) 0%, ${T.r(0.03)} 100%)`,
                  border: `1px solid ${T.gold}0.2)`,
                  borderTop: `2px solid ${T.gold}0.65)`,
                  position: 'relative',
                }}
              >
                {slide.sidebar.callout.star && (
                  <Box
                    style={{
                      position: 'absolute', top: 10, right: 10,
                      padding: '3px 8px',
                      background: `${T.gold}0.15)`,
                      border: `1px solid ${T.gold}0.4)`,
                      display: 'flex', alignItems: 'center', gap: 4,
                    }}
                  >
                    <span style={{ color: `${T.gold}0.95)`, fontSize: 11, lineHeight: 1 }}>★</span>
                    <Text style={{ fontFamily: MONO, fontSize: 8, letterSpacing: '2px', textTransform: 'uppercase', color: `${T.gold}0.85)` }}>
                      Priority
                    </Text>
                  </Box>
                )}
                <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: `${T.gold}0.6)`, marginBottom: 7 }}>
                  {slide.sidebar.callout.label}
                </Text>
                <Text style={{ fontFamily: SERIF, fontSize: 'clamp(14px, 1.5vw, 17px)', color: `${T.gold}0.9)`, lineHeight: 1.25, marginBottom: 7 }}>
                  {slide.sidebar.callout.heading}
                </Text>
                <Text style={{ fontSize: 'clamp(11px, 1.1vw, 13px)', color: T.r(0.65), lineHeight: 1.6, marginBottom: 10 }}>
                  {slide.sidebar.callout.body}
                </Text>
                {slide.sidebar.callout.link && (
                  <Box
                    component="a"
                    href={slide.sidebar.callout.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px',
                      border: `1px solid ${T.gold}0.35)`, color: `${T.gold}0.85)`,
                      fontFamily: MONO, fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none',
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

function RenderHeroQuestion({ slide }: { slide: HeroQuestionSlide }) {
  const T = useT()
  return (
    <Box style={{ width: '100%' }}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" style={{ marginBottom: 18 }}>
        <Box>
          <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: T.r(0.4), marginBottom: 10 }}>
            {slide.eyebrow}
          </Text>
          <Title order={2} style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 'clamp(20px, 2.2vw, 32px)', fontStyle: 'italic', color: T.text, lineHeight: 1.25, marginBottom: 10 }}>
            "{slide.question}"
          </Title>
          <Box style={{ width: 64, height: 1, background: T.r(0.15), marginBottom: 10 }} />
          <Box>
            {(Array.isArray(slide.intro) ? slide.intro : [slide.intro]).map((line, i, arr) => (
              <Text key={i} style={{ fontSize: 'clamp(13px, 1.35vw, 16px)', color: T.r(0.68), lineHeight: 1.6, marginBottom: i < arr.length - 1 ? 8 : 0 }}>
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
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" style={{ marginBottom: 14 }}>
        {slide.points.map((point) => (
          <Box key={point.title} style={{ background: T.r(0.025), border: `1px solid ${T.r(0.09)}`, padding: '12px 16px 16px' }}>
            <Box style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', background: T.r(0.04), border: `1px solid ${T.r(0.09)}`, marginBottom: 10 }}>
              <point.icon size={18} stroke={1.4} color={`${T.gold}0.85)`} />
            </Box>
            <Text style={{ fontFamily: SERIF, fontSize: 'clamp(14px, 1.5vw, 18px)', color: T.text, lineHeight: 1.25, marginBottom: 6 }}>
              {point.title}
            </Text>
            <Text style={{ fontSize: 'clamp(11px, 1.05vw, 13px)', color: T.r(0.62), lineHeight: 1.6 }}>
              {point.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      <Box style={{ padding: '14px 22px 16px', background: `linear-gradient(135deg, ${T.gold}0.07) 0%, ${T.r(0.04)} 50%, ${T.gold}0.05) 100%)`, border: `1px solid ${T.gold}0.2)`, borderTop: `2px solid ${T.gold}0.7)` }}>
        <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase', color: `${T.gold}0.6)`, marginBottom: 8 }}>
          The Pathway
        </Text>
        <Text style={{ fontFamily: SERIF, fontSize: 'clamp(15px, 1.6vw, 20px)', color: T.text, lineHeight: 1.3, marginBottom: 8 }}>
          {slide.pathway.heading}
        </Text>
        <Text style={{ fontSize: 'clamp(12px, 1.2vw, 14px)', color: T.r(0.72), lineHeight: 1.65 }}>
          {slide.pathway.link
            ? slide.pathway.body.split(slide.pathway.link.text).map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <Box component="a" href={slide.pathway.link!.url} target="_blank" rel="noopener noreferrer"
                      style={{ color: `${T.gold}0.9)`, textDecoration: 'underline', textUnderlineOffset: 3 }}>
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

function RenderJourneyReflection({ slide }: { slide: JourneyReflectionSlide }) {
  const T = useT()
  function tierAccent(color: 'gold' | 'amber' | 'blue' | 'green') {
    if (color === 'gold') return GOLD
    if (color === 'amber') return 'rgba(230,155,50,'
    if (color === 'green') return 'rgba(60,185,110,'
    return 'rgba(80,140,255,'
  }

  return (
    <Box style={{ width: '100%' }}>
      <Box style={{ marginBottom: 18 }}>
        <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: T.r(0.38), marginBottom: 10 }}>
          {slide.eyebrow}
        </Text>
        <Title order={2} style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 'clamp(20px, 2.4vw, 34px)', fontStyle: 'italic', color: T.text, lineHeight: 1.2, marginBottom: 10 }}>
          "{slide.question}"
        </Title>
        <Box style={{ width: 64, height: 1, background: T.r(0.15), marginBottom: 10 }} />
        {slide.intro.map((line, i) => (
          <Text key={i} style={{ fontSize: 'clamp(13px, 1.35vw, 16px)', color: T.r(0.65), lineHeight: 1.6, marginBottom: i < slide.intro.length - 1 ? 6 : 0 }}>
            {line}
          </Text>
        ))}
      </Box>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" style={{ marginBottom: 14 }}>
        {slide.tiers.map((tier) => {
          const a = tierAccent(tier.tagColor)
          return (
            <Box key={tier.tier} style={{ background: T.r(0.025), border: `1px solid ${T.r(0.08)}`, borderTop: `2px solid ${a}0.7)`, padding: '12px 16px 16px', display: 'flex', flexDirection: 'column' }}>
              <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase', color: `${a}0.6)`, marginBottom: 5 }}>{tier.tier}</Text>
              <Text style={{ fontFamily: SERIF, fontSize: 'clamp(14px, 1.5vw, 18px)', color: T.text, lineHeight: 1.2, marginBottom: 8 }}>{tier.sublabel}</Text>
              <Box style={{ display: 'inline-block', padding: '2px 8px', background: `${a}0.1)`, border: `1px solid ${a}0.28)`, marginBottom: 10, alignSelf: 'flex-start' }}>
                <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', color: `${a}0.9)` }}>{tier.tag}</Text>
              </Box>
              <Text style={{ fontSize: 'clamp(11px, 1.05vw, 13px)', color: T.r(0.72), lineHeight: 1.6, marginBottom: 10, flex: 1 }}>{tier.description}</Text>
              <Box style={{ borderTop: `1px solid ${T.r(0.08)}`, paddingTop: 8 }}>
                <Text style={{ fontSize: 'clamp(10px, 0.95vw, 12px)', color: T.r(0.45), lineHeight: 1.55, fontStyle: 'italic' }}>{tier.honest}</Text>
              </Box>
            </Box>
          )
        })}
      </SimpleGrid>
      <Box style={{ marginBottom: 14 }}>
        <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: T.r(0.32), marginBottom: 8 }}>
          {slide.storiesLabel}
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="sm">
          {slide.stories.map((s, i) => (
            <Box key={i} style={{ padding: '10px 14px 12px', background: T.r(0.02), border: `1px solid ${T.r(0.07)}`, borderLeft: `2px solid ${T.r(0.2)}` }}>
              <Text style={{ fontFamily: SERIF, fontSize: 'clamp(13px, 1.3vw, 16px)', color: T.text, lineHeight: 1.2, marginBottom: 3 }}>{s.person}</Text>
              <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', color: T.r(0.32), marginBottom: 6 }}>{s.role}</Text>
              <Text style={{ fontSize: 'clamp(11px, 1.05vw, 13px)', color: T.r(0.6), lineHeight: 1.6, fontStyle: 'italic' }}>{s.story}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box style={{ padding: '14px 22px 16px', background: `linear-gradient(135deg, ${T.gold}0.07) 0%, ${T.r(0.04)} 50%, ${T.gold}0.05) 100%)`, border: `1px solid ${T.gold}0.2)`, borderTop: `2px solid ${T.gold}0.7)` }}>
        <Text style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase', color: `${T.gold}0.6)`, marginBottom: 8 }}>
          {slide.promise.label}
        </Text>
        <Text style={{ fontFamily: SERIF, fontSize: 'clamp(15px, 1.6vw, 20px)', color: T.text, lineHeight: 1.3 }}>
          {slide.promise.heading}
        </Text>
        {slide.promise.body && (
          <Text style={{ fontSize: 'clamp(13px, 1.3vw, 16px)', color: T.r(0.72), lineHeight: 1.7, marginTop: 8 }}>
            {slide.promise.body}
          </Text>
        )}
      </Box>
    </Box>
  )
}

function RenderScheduleStats({ slide }: { slide: ScheduleStatsSlide }) {
  const T = useT()
  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="lg" style={{ marginBottom: 28 }}>
        {slide.stats.map((stat, i) => (
          <Box
            key={i}
            style={{
              background: T.r(0.03),
              border: `1px solid ${T.r(0.1)}`,
              borderTop: `3px solid ${T.gold}0.65)`,
              padding: '28px 20px 28px',
              textAlign: 'center',
            }}
          >
            <Text
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(52px, 6.5vw, 88px)',
                color: T.text,
                lineHeight: 1,
                marginBottom: 10,
                fontWeight: 400,
              }}
            >
              {stat.number}
            </Text>
            <Text
              style={{
                fontFamily: MONO,
                fontSize: 10,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: `${T.gold}0.85)`,
                marginBottom: 8,
              }}
            >
              {stat.label}
            </Text>
            <Text
              style={{
                fontSize: 'clamp(12px, 1.2vw, 14px)',
                color: T.r(0.5),
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              {stat.detail}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      {slide.note && (
        <Box
          style={{
            padding: '20px 24px',
            background: T.noteBg,
            border: `1px solid ${T.noteBorder}`,
            borderTop: `2px solid ${T.noteTop}`,
          }}
        >
          <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: T.noteLabel, marginBottom: 10 }}>
            {slide.note.label}
          </Text>
          <Text style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', color: T.noteBody, lineHeight: 1.7, fontWeight: 500 }}>
            {slide.note.text}
          </Text>
        </Box>
      )}
    </Box>
  )
}

function RenderCostsTable({ slide }: { slide: CostsTableSlide }) {
  const T = useT()
  return (
    <Box style={{ width: '100%' }}>
      <SlideHeading title={slide.title} />
      <Box style={{ border: `1px solid ${T.r(0.1)}`, overflow: 'hidden', marginBottom: slide.note ? 24 : 0 }}>
        <Box
          style={{
            display: 'grid', gridTemplateColumns: '1fr 180px 2fr',
            padding: '12px 20px',
            background: T.r(0.04),
            borderBottom: `1px solid ${T.r(0.1)}`,
          }}
        >
          {['Item', 'Cost', 'Notes'].map((h) => (
            <Text key={h} style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: T.r(0.35), fontWeight: 400 }}>
              {h}
            </Text>
          ))}
        </Box>
        {slide.rows.map((row, i) => (
          <Box
            key={i}
            style={{
              display: 'grid', gridTemplateColumns: '1fr 180px 2fr',
              padding: '16px 20px',
              background: i % 2 === 0 ? T.r(0.015) : 'transparent',
              borderBottom: i < slide.rows.length - 1 ? `1px solid ${T.r(0.06)}` : undefined,
              alignItems: 'center',
            }}
          >
            <Group gap="sm" align="center">
              <Text style={{ fontFamily: SERIF, fontSize: 'clamp(16px, 1.7vw, 20px)', color: T.text, lineHeight: 1.2 }}>
                {row.item}
              </Text>
              {row.optional && (
                <Box style={{ padding: '2px 7px', background: T.r(0.06), border: `1px solid ${T.r(0.15)}` }}>
                  <Text style={{ fontFamily: MONO, fontSize: 8, letterSpacing: '2px', textTransform: 'uppercase', color: T.r(0.4) }}>
                    Optional
                  </Text>
                </Box>
              )}
            </Group>
            <Text
              style={{
                fontFamily: MONO,
                fontSize: 'clamp(14px, 1.5vw, 17px)',
                color: `${T.gold}0.9)`,
                fontWeight: 500,
              }}
            >
              {row.cost}
            </Text>
            <Text style={{ fontSize: 'clamp(13px, 1.3vw, 15px)', color: T.r(0.62), lineHeight: 1.55, fontWeight: 500 }}>
              {row.notes}
            </Text>
          </Box>
        ))}
        {slide.total && (
          <Box
            style={{
              display: 'grid', gridTemplateColumns: '1fr 180px 2fr',
              padding: '16px 20px',
              background: `linear-gradient(135deg, ${T.gold}0.08) 0%, ${T.r(0.04)} 100%)`,
              borderTop: `2px solid ${T.gold}0.4)`,
              alignItems: 'center',
            }}
          >
            <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: `${T.gold}0.6)` }}>
              Estimated Total
            </Text>
            <Text style={{ fontFamily: MONO, fontSize: 'clamp(14px, 1.5vw, 17px)', color: `${T.gold}0.9)`, fontWeight: 600 }}>
              {slide.total}
            </Text>
            <Text style={{ fontSize: 'clamp(12px, 1.2vw, 14px)', color: T.r(0.4), lineHeight: 1.55 }}>
              excluding optional Trace subscription
            </Text>
          </Box>
        )}
      </Box>
      {slide.note && (
        <Box
          style={{
            padding: '20px 24px',
            background: T.noteBg,
            border: `1px solid ${T.noteBorder}`,
            borderTop: `2px solid ${T.noteTop}`,
          }}
        >
          <Text style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: T.noteLabel, marginBottom: 10 }}>
            {slide.note.label}
          </Text>
          <Text style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', color: T.noteBody, lineHeight: 1.7, fontWeight: 500 }}>
            {slide.note.text}
          </Text>
        </Box>
      )}
      {slide.disclaimer && (
        <Text style={{ fontSize: 'clamp(12px, 1.2vw, 14px)', color: T.r(0.35), marginTop: 12, fontStyle: 'italic' }}>
          * {slide.disclaimer}
        </Text>
      )}
    </Box>
  )
}

function RenderQuoteImage({ slide }: { slide: QuoteImageSlide }) {
  const T = useT()
  return (
    <Box
      style={{
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', gap: 40,
      }}
    >
      <img
        src={`${base}${slide.image}`}
        alt=""
        style={{ width: 'clamp(180px, 22vw, 300px)', opacity: 0.9, filter: T.light ? 'none' : 'invert(1)' }}
      />
      <Box style={{ maxWidth: 720 }}>
        <Text
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(20px, 2.4vw, 34px)',
            fontStyle: 'italic',
            color: T.text,
            lineHeight: 1.5,
            marginBottom: 20,
          }}
        >
          "{slide.quote}"
        </Text>
        <Text style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '3px', textTransform: 'uppercase', color: `${T.gold}0.75)` }}>
          — {slide.attribution}
        </Text>
        {slide.href && (
          <Box
            component="a"
            href={slide.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 20,
              padding: '6px 16px', border: `1px solid ${T.gold}0.4)`,
              color: `${T.gold}0.9)`, fontFamily: MONO, fontSize: 11,
              letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none',
            }}
          >
            <span style={{ fontSize: 13, lineHeight: 1 }}>▶</span>
            Watch the clip
          </Box>
        )}
      </Box>
    </Box>
  )
}

// ─── Slide dispatcher ─────────────────────────────────────────────

function renderSlide(slide: PreSeasonSlide): React.ReactNode {
  switch (slide.type) {
    case 'story':             return <RenderStory slide={slide} />
    case 'coaches':           return <RenderCoaches slide={slide} />
    case 'title':             return <RenderTitle slide={slide} />
    case 'divider':           return <RenderDivider slide={slide} />
    case 'two-column':        return <RenderTwoColumn slide={slide} />
    case 'text':              return <RenderText slide={slide} />
    case 'tools':             return <RenderTools slide={slide} />
    case 'grid':              return <RenderGrid slide={slide} />
    case 'features':          return <RenderFeatures slide={slide} />
    case 'interstitial':      return <RenderInterstitial slide={slide} />
    case 'dev-split':         return <RenderDevSplit slide={slide} />
    case 'playing-roster':    return <RenderPlayingRoster slide={slide} />
    case 'continuum':         return <RenderContinuum slide={slide} />
    case 'zpd-goals':         return <RenderZpdGoals slide={slide} />
    case 'dual-image':        return <RenderDualImage slide={slide} />
    case 'principles-table':  return <RenderPrinciplesTable slide={slide} />
    case 'image':             return <RenderImage slide={slide} />
    case 'hero-question':     return <RenderHeroQuestion slide={slide} />
    case 'journey-reflection': return <RenderJourneyReflection slide={slide} />
    case 'schedule-stats':    return <RenderScheduleStats slide={slide} />
    case 'costs-table':       return <RenderCostsTable slide={slide} />
    case 'quote-image':       return <RenderQuoteImage slide={slide} />
    default:                  return null
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

export default function PreSeasonPlan() {
  const [light, setLight] = useState(false)
  const T = useMemo(() => makeTheme(light), [light])
  return (
    <ThemeCtx.Provider value={T}>
      <ThemeToggle light={light} onToggle={() => setLight(l => !l)} />
      <Box
        className={`slide-container${light ? ' light' : ''}`}
        style={{ background: T.bg }}
      >
        {slides.map((slide: PreSeasonSlide, i) => (
          <SlideWrapper key={slide.id} isLast={i === slides.length - 1}>
            {renderSlide(slide)}
          </SlideWrapper>
        ))}
      </Box>
    </ThemeCtx.Provider>
  )
}
