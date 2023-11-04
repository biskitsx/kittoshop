import React from 'react'

interface ProductCartProps {
    productImg: string,
    productName: string,
    productPrice: number,
}


function ProductCart({ productImg, productName, productPrice }: ProductCartProps) {
    return (
        <div className='flex'>
            <Image src={productImg} alt="Shoes" className='w-full hover:brightness-95 transition-all' width={1000} height={1000} />
            <div>
                <p></p>
            </div>
        </div>
    )
}

export default ProductCart