import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/GlobalStyles'

import { themeDefault } from '../styles/theme/themeDefault'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
