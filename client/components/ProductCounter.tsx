import React from 'react'

function ProductCounter({ productCount, setProductCount }: { productCount: number, setProductCount: React.Dispatch<React.SetStateAction<number>> }) {

    return (
        <div className='flex'>
            <button className='p-2 w-10 h-10 text-center border border-gray-300'
                onClick={() => {
                    if (productCount === 1) return
                    setProductCount(prev => prev - 1)
                }}
            >-</button>
            <p className='p-2 w-10 h-10 text-center border-t border-b border-gray-300'>{productCount}</p>
            <button className='p-2 w-10 h-10 text-center border border-gray-300' onClick={() => { setProductCount(prev => prev + 1) }}>+</button>
        </div>
    )
}

export default ProductCounter