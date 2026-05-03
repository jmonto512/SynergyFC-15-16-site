import { Box, Group, Anchor, Burger, Drawer, Stack, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

const base = import.meta.env.BASE_URL

interface SiteHeaderProps {
  inSubPage?: boolean
}

export default function SiteHeader({ inSubPage = false }: SiteHeaderProps) {
  const [opened, { toggle, close }] = useDisclosure(false)
  const prefix = inSubPage ? base : ''
  const brandHref = inSubPage ? base : '#top'

  const navLinks = [
    { label: 'Coaches', href: `${prefix}#coaches` },
    { label: 'Pillars', href: `${prefix}#pillars` },
    { label: 'Development', href: `${prefix}#development` },
    { label: 'Policies', href: `${base}policies.html` },
    { label: 'Contact', href: `${prefix}#contact` },
  ]

  return (
    <>
      <Box component="header" className="site-header">
        <Group justify="space-between" align="center" h="100%" px="md">
          <Anchor href={brandHref} className="site-header-brand" underline="never">
            <Text component="span">SYNERGY FC</Text>
          </Anchor>

          <Group gap="lg" visibleFrom="sm" className="site-header-nav">
            {navLinks.map((link) => (
              <Anchor key={link.href} href={link.href} underline="never">
                {link.label}
              </Anchor>
            ))}
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            color="white"
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />
        </Group>
      </Box>

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="70%"
        hiddenFrom="sm"
        withCloseButton
        title={<Text className="site-header-brand">SYNERGY FC</Text>}
        styles={{
          content: { background: '#0a0a0f' },
          header: { background: '#0a0a0f', borderBottom: '1px solid rgba(255,255,255,0.06)' },
        }}
      >
        <Stack gap="lg" p="md" className="site-header-nav site-header-nav-mobile">
          {navLinks.map((link) => (
            <Anchor
              key={link.href}
              href={link.href}
              onClick={close}
              underline="never"
            >
              {link.label}
            </Anchor>
          ))}
        </Stack>
      </Drawer>
    </>
  )
}
