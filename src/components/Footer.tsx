import { Box, Title, Text, Button, Group, Anchor } from '@mantine/core'
import { site } from '../data/site'

interface FooterProps {
  heading?: string
  sub?: string
}

export default function Footer({
  heading = "Interested?",
  sub = "Come watch a practice. Ask us anything. We're an open book.",
}: FooterProps) {
  return (
    <Box component="section" id="contact" className="contact">
      <Title>{heading}</Title>
      <Text className="contact-sub">{sub}</Text>
      <Button component="a" href={`mailto:${site.email}`} variant="filled">Get in Touch</Button>

      <Group justify="center" gap="lg" className="footer-links">
        <Anchor href={site.links.clubSite} target="_blank" rel="noreferrer">Synergy FC</Anchor>
        <Text component="span" className="dot">·</Text>
        <Anchor href={site.links.instagram} target="_blank" rel="noreferrer">Instagram</Anchor>
        <Text component="span" className="dot">·</Text>
        <Anchor href={site.links.gotSport} target="_blank" rel="noreferrer">GotSport Rankings</Anchor>
      </Group>

      <Text className="age-range">{site.ageRange}</Text>
    </Box>
  )
}
