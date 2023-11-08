import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'

import CarouselPicture from '@/components/CarouselPicture'
import NewArrival from '@/components/NewArrival'
import WhyMe from '@/components/WhyMe'
import Countdown from '@/components/Countdown'
import Link from 'next/link'
import Footer from '@/components/Footer'

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
            <div className='bg-primary py-12'>
                <div className="container flex gap-12 justify-between items-center">
                    <div>
                        <h1 className="text-2xl   text-gray-800">
                            Fashion & Extraordinary
                        </h1>
                        <p className='capitalize'></p>
                        Celebrate In Style At Our In-Store <br /> Launch For Our Newest Collection & Accessories
                    </div>
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-12 items-center justify-center'>
                        <Countdown />
                        <Link className='black-button' href="/collections/women">get 20% off</Link>
                    </div>
                    {/* <button className=''>get 20% off</button> */}
                </div>
            </div>
            <div className='py-12'>
                <div className="container flex flex-col gap-12 justify-between items-center">
                    <h1 className="text-3xl tracking-wider font-medium">
                        Collection List
                    </h1>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        <Link href={"/collection/fashion"} className='flex flex-col gap-2'>
                            <Image src={'https://jewelleryishi.myshopify.com/cdn/shop/files/img_bdd986bb-b532-404e-8b63-515ec732be25.png?v=1690373191'} alt='collection' width={1000} height={1000} className='w-full hover:scale-105 ease-in duration-100' />
                            <h3 className='text-center text-xl text-gray-800'>Fashion</h3>
                        </Link>
                        <Link href={"/collections/kid"} className='flex flex-col gap-2'>
                            <Image src={'https://jewelleryishi.myshopify.com/cdn/shop/files/img_2.png?v=1690373191'} alt='collection' width={1000} height={1000} className='w-full hover:scale-105 ease-in duration-100' />
                            <h3 className='text-center text-xl text-gray-800'>Kids</h3>
                        </Link>
                        <Link href={"/collections/men"} className='flex flex-col gap-2'>
                            <Image src={'https://jewelleryishi.myshopify.com/cdn/shop/files/Rectangle_1468-1.png?v=1690373191'} alt='collection' width={1000} height={1000} className='w-full hover:scale-105 ease-in duration-100' />
                            <h3 className='text-center text-xl text-gray-800'>Men</h3>
                        </Link>
                        <Link href={"/collections/women"} className='flex flex-col gap-2'>
                            <Image src={'https://jewelleryishi.myshopify.com/cdn/shop/files/Rectangle_1468.png?v=1690373191'} alt='collection' width={1000} height={1000} className='w-full hover:scale-105 ease-in duration-100' />
                            <h3 className='text-center text-xl text-gray-800'>Women</h3>
                        </Link>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}
