import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  styles: {
    global: false,
  },
  colors: {
    brand: {
      bg: '#0a0a0f',
      text: '#e8e8e8',
      muted: 'rgba(255,255,255,0.55)',
      border: 'rgba(255,255,255,0.10)',
    },
  },
  fonts: {
    heading: "'Cormorant Garamond', Georgia, serif",
    body: "'Inter', system-ui, sans-serif",
    mono: "'JetBrains Mono', 'Courier New', monospace",
  },
})
