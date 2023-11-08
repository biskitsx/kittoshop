import Image from 'next/image'
import Carousel from 'nuka-carousel'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
function CarouselPicture() {
    return (
        <Carousel
            autoplay={true}
            adaptiveHeight={true}
            wrapAround={true}
        >
            <div className='relative'>
                <Image src="https://jewelleryishi.myshopify.com/cdn/shop/files/slider2.png?v=1692851555" alt="123" width={4000} height={4000} className='w-full h-full' />
                <motion.div className="absolute left-12 z-2 bottom-2 sm:left-32 sm:bottom-16 text-white flex flex-col gap-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: { duration: 1 },
                    }}>
                    <div>
                        <p className='text-sm md:text-xl uppercase'>End Of Season</p>
                        <p className='text-xl md:text-5xl'>New Arrival</p>
                    </div>
                    <Link className='white-button text-center' href='/collections/fashion'>SHOP NOW</Link>
                </motion.div>
            </div>
            <div className='relative'>
                < Image src="https://jewelleryishi.myshopify.com/cdn/shop/files/Rectangle_2.png?v=1690284812" alt="123" width={4000} height={4000} className='w-full h-full' />
                <motion.div className="absolute left-12 z-2 bottom-2 sm:left-32 sm:bottom-16 text-white flex flex-col gap-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: { duration: 1 },
                    }}>
                    <div>
                        <p className='text-sm md:text-xl uppercase'>New Collection</p>
                        <p className='text-xl md:text-5xl'>Summer Vibes</p>

                    </div>
                    <Link className='white-button text-center' href='/collections/fashion'>SHOP NOW</Link>
                </motion.div>
            </div>
        </Carousel >
    )
}

export default CarouselPicture