import { Box, Text } from '@mantine/core'
import type { Quote as QuoteData } from '../data/quotes'

interface QuoteProps {
  quote: QuoteData
  kicker?: string
  framing?: string
  className?: string
}

export default function Quote({ quote, kicker, framing, className = 'learn-area' }: QuoteProps) {
  return (
    <Box className={className} mt="md" mb="md">
      {kicker && <Text className="label">{kicker}</Text>}
      <Text
        fs="italic"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(20px, 2.4vw, 26px)',
          lineHeight: 1.4,
          color: 'white',
          marginBottom: 12,
        }}
      >
        “{quote.text}”
      </Text>
      <Text
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          letterSpacing: 1,
          color: 'rgba(255,255,255,0.55)',
          textTransform: 'uppercase',
        }}
      >
        — {quote.attribution}
        {quote.context ? ` · ${quote.context}` : ''}
      </Text>
      {framing && (
        <Text mt="md" style={{ color: 'rgba(255,255,255,0.78)' }}>
          {framing}
        </Text>
      )}
    </Box>
  )
}
