import React from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link'

function NewArrival() {
    return (
        <div className='py-12'>
            <div className='container flex flex-col gap-12 justify-center items-center'>
                <h1 className='text-center text-3xl font-medium tracking-wider'>New Arrivals</h1>
                <div className='grid gap-3 grid-cols-4'>
                    <ProductCard
                        productImg='https://cdn.shopify.com/s/files/1/2802/3570/files/1_7c928f71-f9ad-4b1f-8f15-8ec920c95ae8.png?v=1690354703'
                        productName='Epauletter Cotton'
                        productPrice={100}
                        productStar={3}
                    />
                    <ProductCard
                        productImg='https://jewelleryishi.myshopify.com/cdn/shop/files/4_b6655176-de58-4fc3-a8c9-202e22220bbe_720x.png?v=1690354834'
                        productName='Epauletter Cotton'
                        productPrice={100}
                        productStar={3}
                    />
                    <ProductCard
                        productImg='https://cdn.shopify.com/s/files/1/2802/3570/files/2_ae053932-3010-4241-954c-12354a6aa17a.png?v=1690354834'
                        productName="Chico's Railroad"
                        productPrice={100}
                        productStar={3}
                    />
                    <ProductCard
                        productImg='https://cdn.shopify.com/s/files/1/2802/3570/files/6_4142c849-11e5-4625-a292-748b08561ab9.png?v=1690355122'
                        productName='Epauletter Cotton'
                        productPrice={100}
                        productStar={3}
                    />
                </div>
                <Link href="/collections" className='border-b border-neutral pb-1'>VIEW ALL</Link>
            </div>
        </div>
    )
}

export default NewArrival