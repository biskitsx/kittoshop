import React from 'react';
import Drawer from './Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { selectCart } from '@/store/cartSlice';
import Link from 'next/link';

function Nav() {
    const cart = useSelector(selectCart)
    return (
        <div className='flex flex-col shadow-md sticky top-0 z-10'>
            <div className='w-full bg-white'>
                <div className="navbar bg-base-100 container">
                    <div className="navbar-start">
                        <Link className="btn btn-ghost normal-case text-2xl tracking-widest" href='/'>KITTOSHOP</Link>
                    </div>
                    <div className="navbar-center  gap-3 hidden md:flex md:text-md text-zinc-500">
                        <Link href='/collections' className=''>Collection</Link>
                        <Link href='/collections/fashion' className=''>Fashion</Link>
                        <Link href='/collections/kid' className=''>Kids</Link>
                        <Link href='/collections/women' className=''>Women</Link>
                        <Link href='/collections/men' className=''>Men</Link>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <div className="drawer drawer-end">
                                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    {/* Page content here */}
                                </div>
                                <label tabIndex={0} className="btn btn-ghost btn-circle" htmlFor="my-drawer-4">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="badge badge-sm indicator-item">{cart.length}</span>
                                    </div>
                                </label>
                                <Drawer />
                            </div>
                        </div>
                        {/* <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v 3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
