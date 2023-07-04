import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { darkTheme, lightTheme } from '@/src/themes'
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return <>
    <ThemeProvider
      theme={ darkTheme }
    >
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </ThemeProvider>
  </>
}
