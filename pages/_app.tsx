import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { mediaQueries } from 'theme/constants'
import '../styles/globals.css'
import "animate.css/animate.min.css";

const ThemeProviderWrapper = (props: { [key: string]: any }) => {
  return <ThemeProvider theme={mediaQueries} {...props} />
}

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProviderWrapper>
    <Component {...pageProps} />
  </ThemeProviderWrapper>
}

export default MyApp
