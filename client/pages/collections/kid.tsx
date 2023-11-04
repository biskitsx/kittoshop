import Nav from '@/components/Nav'
import React from 'react'
import Image from 'next/image'
import Filter from '@/components/Filter'
import CollectionDesc from '@/components/CollectionDesc'
import ProductCard from '@/components/ProductCard'

function kid() {
    return (
        <>
            <Nav />
            <div className='flex container py-12 gap-8'>
                <Filter />
                <main className='flex flex-col gap-8 w-full'>
                    <CollectionDesc collection="Kids" />
                    <div className='grid grid-cols-2 gap-8'>
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
                    </div>
                    <div></div>
                </main>
            </div>
        </>
    )
}

export default kid