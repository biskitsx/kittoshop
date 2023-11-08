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
                {/* <motion.div className="absolute left-32 z-2 bottom-1/4 text-white flex flex-col gap-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: { duration: 1 },
                    }}>
                    <p className='text-sm md:text-xl'>End Of Season</p>
                    <p className='text-xl md:text-5xl'>New Arrival</p>
                    <Link className='white-button text-center' href='/collections/fashion'>SHOP NOW</Link>
                </motion.div> */}
                <motion.h1 className='text-secondary-focus uppercase'
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: { duration: 0.5 },
                    }}>
                    About Me
                </motion.h1>
            </div>
            < Image src="https://jewelleryishi.myshopify.com/cdn/shop/files/Rectangle_2.png?v=1690284812" alt="123" width={4000} height={4000} className='w-full h-full' />
        </Carousel >
    )
}

export default CarouselPicture