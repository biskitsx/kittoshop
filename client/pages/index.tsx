import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'

import CarouselPicture from '@/components/CarouselPicture'
import NewArrival from '@/components/NewArrival'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Nav />
            <CarouselPicture />
            <NewArrival />

        </>
    )
}