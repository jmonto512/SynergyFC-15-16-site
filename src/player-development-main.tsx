import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import { theme } from './theme'
import './styles.css'
import PlayerDevelopment from './pages/PlayerDevelopment'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <PlayerDevelopment />
    </MantineProvider>
  </React.StrictMode>
)
