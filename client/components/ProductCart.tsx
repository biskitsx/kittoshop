import { removeFromCart } from '@/store/cartSlice'
import { Delete } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'

interface ProductCartProps {
    productImg: string,
    productName: string,
    productPrice: number,
    count: number
}


function ProductCart({ productImg, productName, productPrice, count }: ProductCartProps) {
    const dispatch = useDispatch()
    const handleDeleteButton = () => {
        dispatch(removeFromCart({ name: productName }))

    }
    return (
        <div className='flex flex-row gap-4 relative'>
            <Image src={productImg} alt="Shoes" className='w-32 border border-gray-300' width={1000} height={1000} />
            <div>
                <p>{productName}</p>
                <p>{count} x ${productPrice}.00</p>
            </div>
            <button onClick={handleDeleteButton}>
                <Delete className='absolute top-1 right-1' />

            </button>
        </div>
    )
}

export default ProductCart