import React from 'react'

function WhyMe() {
    return (
        <div className="container flex flex-col gap-6 items-center py-12">
            <h1 className='text-3xl tracking-wider font-medium'>Why KITTOSHOP Store ?</h1>
            <div className='grid grid-cols-3 gap-4'>
                <div className='flex flex-col gap-1 items-center text-center'>
                    <img src="https://jewelleryishi.myshopify.com/cdn/shop/files/delivery-status_1_1_fe2937f3-4dca-4b41-bb4b-c1b8d0478f64.png?v=1692429000" alt="" className='mb-3 imageRotateHorizontal' />
                    <h1>Free Delivery</h1>
                    <p className='text-zinc-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugiat?</p>
                </div>
                <div className='flex flex-col gap-1 items-center text-center'>
                    <img src="https://jewelleryishi.myshopify.com/cdn/shop/files/delivery-status_1_2_304f7f24-cbd1-4fab-b480-7fa56654f1b7.png?v=1692429000" alt="" className='mb-3 imageRotateHorizontal' />
                    <h1>Gift Voucher</h1>
                    <p className='text-zinc-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugiat?</p>
                </div>
                <div className='flex flex-col gap-1 items-center text-center'>
                    <img src="https://jewelleryishi.myshopify.com/cdn/shop/files/delivery-status_1_3_e1da81bf-3302-4862-8e43-3cc0cc80b11a.png?v=1692428999" alt="" className='mb-3 imageRotateHorizontal' />
                    <h1>Customer Support</h1>
                    <p className='text-zinc-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugiat?</p>
                </div>
            </div>
        </div>
    )
}

export default WhyMe