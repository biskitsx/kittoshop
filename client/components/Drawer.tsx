import React from 'react'
import ProductCart from './ProductCart'
import { useSelector } from 'react-redux'
import { selectCart } from '@/store/cartSlice'

function Drawer() {
    const carts = useSelector(selectCart)
    return (
        <div className="drawer-side z-40">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-96 min-h-full bg-base-200 text-base-content flex flex-col gap-4">
                <h1>CART</h1>
                <div className='border-b border-gray-500' />
                <div className='bg-accent p-2'>
                    <p>You are eligible for free shipping!</p>
                </div>
                <div className='flex flex-col gap-4'>
                    {carts.map((cart, index) => {
                        return <ProductCart key={index} productName={cart.name} productPrice={cart.price} productImg={cart.image} count={cart.count} />
                    })}
                </div>
            </ul>
        </div>
    )
}

export default Drawer
