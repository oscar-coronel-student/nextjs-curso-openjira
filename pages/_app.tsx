import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { darkTheme, lightTheme } from '@/src/themes'
import '@/styles/globals.css'
import { UIProvider } from '@/src/providers/ui/UIProvider'
import { EntryProvider } from '@/src/providers/entries'


export default function App({ Component, pageProps }: AppProps) {
  return <>
    <EntryProvider>
      <UIProvider>
        <ThemeProvider
          theme={ darkTheme }
        >
          <CssBaseline>
              <Component {...pageProps} />
          </CssBaseline>
        </ThemeProvider>
      </UIProvider>
    </EntryProvider>
  </>
}
