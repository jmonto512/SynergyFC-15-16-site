import { BackgroundImage, Overlay, Box, Title, Text } from '@mantine/core'

interface SubPageHeroProps {
  label: string
  title: string
  subtitle?: string
  image?: string
  minHeight?: string
}

const base = import.meta.env.BASE_URL

export default function SubPageHero({
  label,
  title,
  subtitle,
  image = 'action/team-teaching-1.jpg',
  minHeight = '40vh',
}: SubPageHeroProps) {
  const src = image.startsWith('http') || image.startsWith('/')
    ? image
    : `${base}assets/images/${image}`

  return (
    <Box className="hero-wrap">
      <BackgroundImage src={src} className="hero-bg">
        <Overlay
          color="#0a0a0f"
          backgroundOpacity={0.78}
          zIndex={1}
          gradient="linear-gradient(180deg, rgba(10,10,15,0.55) 0%, rgba(10,10,15,0.85) 70%, rgba(10,10,15,1) 100%)"
        />
        <Box
          component="section"
          className="hero"
          style={{ position: 'relative', zIndex: 2, minHeight }}
        >
          <Text className="label">{label}</Text>
          <Title order={1}>{title}</Title>
          {subtitle && <Text className="subtitle">{subtitle}</Text>}
        </Box>
      </BackgroundImage>
    </Box>
  )
}
