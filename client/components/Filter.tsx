import React from 'react'

function Filter() {
    return (
        <aside className='flex-col '>
            <div className='flex-col border-gray-300 border-t border-x flex'>
                <div className='bg-gray-100 p-4'>
                    <h2>Filter By</h2>
                </div>
                <div className='p-4 flex-col gap-4 flex border-b border-gray-300'>
                    <div>
                        <button className='black-button'>clear all</button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm font-bold'>Availability</p>
                        <div className='text-sm text-zinc-500'>
                            <div className='flex items-center gap-2'>
                                <input type='checkbox' />
                                <label>In stock</label>

                            </div>
                            <div className='flex items-center gap-2'>
                                <input type='checkbox' />
                                <label>Out of stock</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-4 flex-col gap-1 flex border-b border-gray-300'>
                    <p className='text-sm font-bold'>Prices</p>
                    <div className='grid grid-cols-2 w-full gap-2'>
                        <div className='flex items-center gap-2'>
                            <label className='text-sm' >$</label>
                            <input type='number' className='border-gray-300 border w-full pl-1' placeholder='FROM' />
                        </div>
                        <div className='flex items-center gap-2'>
                            <label className='text-sm'>$</label>
                            <input type='number' className='border-gray-300 border w-full pl-1' placeholder='TO' />
                        </div>
                        {/* <div className='flex items-center gap-2'>
                                    <input type='checkbox' />
                                    <label>Out of stock</label>
                                </div> */}
                    </div>
                </div>
                <div className='p-4 flex-col gap-1 flex border-b border-gray-300'>
                    <p className='text-sm font-bold'>Colors</p>
                    <div className='flex flex-wrap gap-3'>
                        <button className='w-8 h-8 shadow-md bg-gray-700'></button>
                        <button className='w-8 h-8 shadow-md bg-cyan-500'></button>
                        <button className='w-8 h-8 shadow-md bg-white-700'></button>
                        <button className='w-8 h-8 shadow-md bg-gray-600'></button>
                        <button className='w-8 h-8 shadow-md bg-pink-300'></button>
                        <button className='w-8 h-8 shadow-md bg-purple-300'></button>
                        <button className='w-8 h-8 shadow-md bg-red-400'></button>
                    </div>
                </div>
                <div className='p-4 flex-col gap-1 flex border-b border-gray-300'>
                    <p className='text-sm font-bold'>Sizes</p>
                    <div className='text-sm text-zinc-500'>
                        <div className='flex items-center gap-2 '>
                            <input type='checkbox' />
                            <label>S</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' />
                            <label>M</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' />
                            <label>L</label>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Filter