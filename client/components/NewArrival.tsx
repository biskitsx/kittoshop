import React, { useEffect } from 'react'
import ProductCard, { ProductCardProps } from './ProductCard'
import Link from 'next/link'
import { Product } from '@/store/productSlice'
import { ENDPOINT } from '@/store/api'

function NewArrival() {
    const [loading, setLoading] = React.useState(false)
    const [products, setProducts] = React.useState<Product[]>([])
    useEffect(() => {
        setLoading(true)
        fetch(`${ENDPOINT}/products?limit=4`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])
    return (
        <div className='py-12'>
            <div className='container flex flex-col gap-12 justify-center items-center'>
                <h1 className='text-center text-3xl tracking-wider font-medium'>New Arrivals</h1>
                {loading ?
                    <span className="loading loading-spinner loading-lg mx-auto"></span>
                    :
                    <div className='grid gap-3 grid-cols-2 sm:grid-cols-4'>

                        {products && products.map((product) => {
                            return (
                                <ProductCard
                                    key={product.id}
                                    productImg={product.picture}
                                    productName={product.name}
                                    productPrice={product.price}
                                    productStar={product.rating}
                                    productSize={product.size}
                                />
                            )
                        })}
                    </div>
                }
                {/* <div className='grid gap-3 grid-cols-4'>
                </div> */}
                <Link href="/collections" className='border-b border-neutral pb-1'>VIEW ALL</Link>
            </div>
        </div>
    )
}

export default NewArrival