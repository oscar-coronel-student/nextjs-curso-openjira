import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { darkTheme, lightTheme } from '@/src/themes'
import '@/styles/globals.css'
import { UIProvider } from '@/src/providers/ui/UIProvider'


export default function App({ Component, pageProps }: AppProps) {
  return <>
    <UIProvider>
      <ThemeProvider
        theme={ darkTheme }
      >
        <CssBaseline>
            <Component {...pageProps} />
        </CssBaseline>
      </ThemeProvider>
    </UIProvider>
  </>
}
