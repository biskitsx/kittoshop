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
            < img src="https://jewelleryishi.myshopify.com/cdn/shop/files/slider2.png?v=1692851555" alt="" />
            <img src="https://jewelleryishi.myshopify.com/cdn/shop/files/Rectangle_2.png?v=1690284812" alt="" className='object-fill' />
            {/* <img src="https://cdn.mercular.com/images/homepage/sections/8/spaces/11/1698242117666_HP-Banner.jpg" alt="" className='object-fill' />
            <img src="https://cdn.mercular.com/images/homepage/sections/8/spaces/11/1698242117666_HP-Banner.jpg" alt="" className='object-fill' /> */}
        </Carousel >
    )
}

export default CarouselPicture