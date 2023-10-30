import daisyui from 'daisyui'
import { Days_One } from 'next/font/google'
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            width: {
                '128': '32rem',
                '540': '540px',
                '720': '720px',
                '960': '960px',
                '1140': '1140px',
                '1320': '1320px',
            }
        },
    },
    plugins: [daisyui],
}
export default config
