import Collections from '@/components/Collections'
import Nav from '@/components/Nav'
import Link from 'next/link'
import React from 'react'

const collections = () => {
    return (
        <>
            <Nav />
            <div className="container py-12 flex flex-col items-center justify-center gap-8 tracking-wider">
                <h1 className='text-3xl'>Collection</h1>
                <div className='grid grid-cols-4 gap-4'>
                    <Collections collectionName='Fashion' collectionImg='https://jewelleryishi.myshopify.com/cdn/shop/files/21_720x.png?v=1690518940' />
                    <Collections collectionName='Kid' collectionImg='https://jewelleryishi.myshopify.com/cdn/shop/files/18_ac04a79f-0968-4337-b197-3125e1aad9c0_720x.png?v=1690355811' />
                    <Collections collectionName='Women' collectionImg='https://jewelleryishi.myshopify.com/cdn/shop/files/20_98aa8791-ba1a-47aa-9b0e-4c78c4c69734_533x.png?v=1690355731' />
                    <Collections collectionName='Men' collectionImg='https://jewelleryishi.myshopify.com/cdn/shop/files/16_c2060f90-68f9-4241-ae9f-a54464b7f2c9_533x.png?v=1690461813' />
                    {/* <Collections collectionName='Fashion' collectionImg='https://jewelleryishi.myshopify.com/cdn/shop/files/21_720x.png?v=1690518940' /> */}
                </div>
            </div>
        </>
    )
}

export default collections