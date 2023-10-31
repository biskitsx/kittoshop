import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fira_Sans } from 'next/font/google/index'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
