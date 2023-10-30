import React from 'react'

interface ProductCardProps {
    productImg: string,
    productName: string,
    productPrice: number,
    productStar: number,
}

function ProductCard({ productImg, productName, productPrice, productStar }: ProductCardProps) {
    return (
        <div className="card  rounded-none card-compact">
            <figure><img src={productImg} alt="Shoes" className='w-full' />
            </figure>
            <div className="card-body text-center">
                <h2 className="font-medium">{productName}</h2>
                <h2 className=""><span className='line-through text-zinc-400'>${productPrice + 20}.00</span><span className='font-semibold'> ${productPrice}.00</span></h2>
            </div>
        </div>
    )
}

export default ProductCard