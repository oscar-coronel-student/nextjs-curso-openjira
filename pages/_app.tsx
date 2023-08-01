import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { darkTheme, lightTheme } from '@/src/themes'
import '@/styles/globals.css'
import { UIProvider } from '@/src/providers/ui/UIProvider'
import { EntryProvider } from '@/src/providers/entries'
import { SnackbarProvider } from 'notistack'


export default function App({ Component, pageProps }: AppProps) {
  return <>
    <SnackbarProvider maxSnack={ 3 }>
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
    </SnackbarProvider>
  </>
}
