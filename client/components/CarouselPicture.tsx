import Image from 'next/image'
import Carousel from 'nuka-carousel'
import React from 'react'

function CarouselPicture() {
    return (
        <Carousel
            autoplay={true}
            adaptiveHeight={true}
            wrapAround={true}
        // className='h-5/6'
        >
            {/* <img src="https://jewelleryishi.myshopify.com/cdn/shop/files/Rectangle_1510.png?v=1692178083" alt="" /> */}

            <div className='relative'>
                < Image src="https://jewelleryishi.myshopify.com/cdn/shop/files/slider2.png?v=1692851555" alt="123" width={4000} height={4000} className='w-full h-full' />
                <div className="absolute left-32 z-2 bottom-1/4 text-white" >
                    <p className='text-xl'>End Of Season</p>
                    <p className='text-5xl'>New Arrival</p>
                    <button className='white-button'>SHOP NOW</button>
                </div>
            </div>
            < Image src="https://jewelleryishi.myshopify.com/cdn/shop/files/Rectangle_2.png?v=1690284812" alt="123" width={4000} height={4000} className='w-full h-full' />
            {/* <img src="https://jewelleryishi.myshopify.com/cdn/shop/files/Rectangle_2.png?v=1690284812" alt="" className='object-fill' /> */}
            {/* <img src="https://cdn.mercular.com/images/homepage/sections/8/spaces/11/1698242117666_HP-Banner.jpg" alt="" className='object-fill' />
            <img src="https://cdn.mercular.com/images/homepage/sections/8/spaces/11/1698242117666_HP-Banner.jpg" alt="" className='object-fill' /> */}
        </Carousel >
    )
}

export default CarouselPicture