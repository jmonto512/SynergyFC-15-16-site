import { createTheme } from '@mantine/core'

export const theme = createTheme({
  fontFamily: "'Inter', system-ui, sans-serif",
  fontFamilyMonospace: "'JetBrains Mono', 'Courier New', monospace",
  headings: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontWeight: '400',
  },
  breakpoints: {
    xs: '540px',
    sm: '640px',
    md: '700px',
    lg: '900px',
    xl: '1200px',
  },
  defaultRadius: 0,
})
