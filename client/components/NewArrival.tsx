import React, { useEffect } from 'react'
import ProductCard, { ProductCardProps } from './ProductCard'
import Link from 'next/link'
import { Product } from '@/store/productSlice'

function NewArrival() {
    const [loading, setLoading] = React.useState(false)
    const [products, setProducts] = React.useState<Product[]>([])
    useEffect(() => {
        fetch('http://localhost:3001/products?limit=4')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])
    return (
        <div className='py-12'>
            <div className='container flex flex-col gap-12 justify-center items-center'>
                <h1 className='text-center text-3xl font-medium tracking-wider'>New Arrivals</h1>
                {loading ?
                    <span className="loading loading-spinner loading-lg mx-auto"></span>
                    :
                    <div className='grid gap-3 grid-cols-4'>

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
                {/* <div className='grid gap-3 grid-cols-4'>
                </div> */}
                <Link href="/collections" className='border-b border-neutral pb-1'>VIEW ALL</Link>
            </div>
        </div>
    )
}

export default NewArrival