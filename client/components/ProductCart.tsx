import { Delete } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

interface ProductCartProps {
    productImg: string,
    productName: string,
    productPrice: number,
    count: number
}


function ProductCart({ productImg, productName, productPrice, count }: ProductCartProps) {
    return (
        <div className='flex flex-row gap-4 relative'>
            <Image src={productImg} alt="Shoes" className='w-32 border border-gray-300' width={1000} height={1000} />
            <div>
                <p>{productName}</p>
                <p>{count} x ${productPrice}.00</p>
            </div>
            <Delete className='absolute top-1 right-1' />
        </div>
    )
}

export default ProductCart