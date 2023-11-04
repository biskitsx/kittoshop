import Image from 'next/image'
import React from 'react'

function CollectionDesc({ collection }: { collection: string }) {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-3xl font-bold'>{collection}</h1>
            <p className='text-sm text-zinc-500'>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer! Accessorize with a straw hat and you're ready for summer! Accessorize with a straw hat and you're ready for summer! </p>
            <p className='text-sm text-zinc-500'>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!...</p>
            <Image src='https://jewelleryishi.myshopify.com/cdn/shop/collections/Rectangle_1621_3998c42e-3497-4b77-ac48-da1e56efa8d7.png?v=1692678076' alt='collection' width={1000} height={1000} className='w-full' />
        </div>
    )
}

export default CollectionDesc