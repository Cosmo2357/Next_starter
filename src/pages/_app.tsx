import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'next-themes'

function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider attribute="class" defaultTheme='light'>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  )
}

export default appWithTranslation(App)