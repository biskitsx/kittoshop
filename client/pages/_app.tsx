import { wrapper } from '@/store/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fira_Sans } from 'next/font/google/index'

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
