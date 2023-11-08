import Nav from '@/components/Nav'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Filter from '@/components/Filter'
import CollectionDesc from '@/components/CollectionDesc'
import ProductCard from '@/components/ProductCard'
import { useSelector } from 'react-redux'
import { selectProduct } from '@/store/productSlice'

function Kid() {
    const [loading, setLoading] = useState(false)
    const products = useSelector(selectProduct)
    return (
        <>
            <div className='bg-accent py-2'>
                <p className='text-center'>Save Up to 50% Off On First Order!</p>
            </div>
            <Nav />
            <div className='flex flex-col-reverse md:flex-row container py-12 gap-8'>

                <Filter setLoading={setLoading} loading={loading} type='Men' />
                <main className='flex flex-col gap-8 w-full'>
                    <CollectionDesc collection="Men" />
                    {loading ?
                        <span className="loading loading-spinner loading-lg mx-auto"></span>
                        :
                        <div className='grid grid-cols-2 gap-8'>
                            {products && products.map((product) => {
                                return (
                                    <ProductCard
                                        key={product.id}
                                        productImg={product.picture}
                                        productName={product.name}
                                        productPrice={product.price}
                                        productStar={product.rating}
                                    />
                                )
                            })}
                        </div>
                    }
                    <div></div>
                </main>
            </div>
        </>
    )
}

export default Kid  
