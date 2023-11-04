import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'

import CarouselPicture from '@/components/CarouselPicture'
import NewArrival from '@/components/NewArrival'
import WhyMe from '@/components/WhyMe'
import Countdown from '@/components/Countdown'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <div className='bg-accent py-2'>
                <p className='text-center'>Save Up to 50% Off On First Order!</p>
            </div>
            <Nav />
            <CarouselPicture />
            <NewArrival />
            <WhyMe />
            <div className='bg-purple-50 py-12'>
                <div className="container flex gap-12 justify-between items-center">
                    <div>
                        <h1 className="text-2xl   text-gray-800">
                            Fashion & Extraordinary
                        </h1>
                        <p className='capitalize'></p>
                        Celebrate In Style At Our In-Store <br /> Launch For Our Newest Collection & Accessories
                    </div>
                    <Countdown />
                    <div>

                        <button className='black-button'>get 20% off</button>
                    </div>
                    {/* <button className=''>get 20% off</button> */}
                </div>
            </div>
            <div className='py-12'>
                <div className="container flex-col gap-12 justify-between items-center">
                    <h1 className="text-2xl   text-gray-800">
                        This Week's Highlight
                    </h1>
                    <Image src={'https://jewelleryishi.myshopify.com/cdn/shop/files/Rectangle_60_1.png?v=1690363154'} alt='collection' width={1000} height={1000} className='w-full' />
                </div>

                {/* <button className='black-button'>get 20% off</button> */}
                {/* <button className=''>get 20% off</button> */}
            </div>
            {/* </div > */}
        </>
    )
}
