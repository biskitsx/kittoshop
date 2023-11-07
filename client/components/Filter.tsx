import { setProduct } from '@/store/productSlice';
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { FilterProps, PriceDTO, SizeDTO, AvailabilityDTO } from './Filter.dto'
import axios from 'axios';

function Filter({ loading, setLoading, type }: FilterProps) {
    const [availabilityFilters, setAvailabilityFilters] = useState<AvailabilityDTO>({
        inStock: false,
        outOfStock: false,
    });

    const [priceFilters, setPriceFilters] = useState<PriceDTO>({
        from: null,
        to: null,
    });

    const [colorFilters, setColorFilters] = useState<string[]>([]);

    const [sizeFilters, setSizeFilters] = useState<SizeDTO>({
        S: false,
        M: false,
        L: false,
    });

    const handleAvailabilityChange = (filterName: keyof AvailabilityDTO) => {
        setAvailabilityFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName],
        }));
    };

    const handlePriceChange = (e: SyntheticEvent) => {
        // @ts-ignore
        const { name, value } = e.target;
        setPriceFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleColorChange = (color: string) => {
        if (colorFilters.includes(color)) {
            setColorFilters((prevFilters) => prevFilters.filter((c) => c !== color));
        } else {
            setColorFilters((prevFilters) => [...prevFilters, color]);
        }
    };

    const handleSizeChange = (size: keyof SizeDTO) => {
        setSizeFilters((prevFilters) => ({
            ...prevFilters,
            [size]: !prevFilters[size],
        }));
    };

    const resetFilters = () => {
        setAvailabilityFilters({
            inStock: false,
            outOfStock: false,
        });
        setPriceFilters({
            from: null,
            to: null,
        });
        setColorFilters([]);
        setSizeFilters({
            S: false,
            M: false,
            L: false,
        });
    }

    // const handleFilter = async () => {
    //     setLoading(true)
    //     try {
    //         const res = await axios.get('http://localhost:3001/products', {})
    //     }
    // }
    // console.log({ availabilityFilters, priceFilters, colorFilters, sizeFilters })
    const dispatch = useDispatch()
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            try {
                const res = await axios.get('http://localhost:3001/products', {
                    params: {
                        type: type
                    }
                })
                dispatch(setProduct(res.data))
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getProduct()
    }, [])


    return (
        <aside className='flex-col '>
            <div className='flex-col border-gray-300 border-t border-x flex'>
                <div className='bg-gray-100 p-4'>
                    <h2>Filter By</h2>
                </div>
                <div className='p-4 flex-col gap-4 flex border-b border-gray-300'>
                    <div>
                        <button className='black-button' onClick={resetFilters}>clear all</button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm font-bold'>Availability</p>
                        <div className='text-sm text-zinc-500'>
                            <div className='flex items-center gap-2'>
                                <input type='checkbox' onChange={() => handleAvailabilityChange("inStock")} checked={availabilityFilters.inStock} />
                                <label>In stock</label>

                            </div>
                            <div className='flex items-center gap-2'>
                                <input type='checkbox' onChange={() => handleAvailabilityChange("outOfStock")} checked={availabilityFilters.outOfStock} />
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
                            <input type='number' className='border-gray-300 border w-full pl-1' placeholder='FROM' name='from' onChange={handlePriceChange} value={priceFilters.from ? priceFilters.from : undefined} />
                        </div>
                        <div className='flex items-center gap-2'>
                            <label className='text-sm'>$</label>
                            <input type='number' className='border-gray-300 border w-full pl-1' placeholder='TO' name='to' onChange={handlePriceChange} value={priceFilters.to ? priceFilters.to : undefined} />
                        </div>
                    </div>
                </div>
                <div className='p-4 flex-col gap-1 flex border-b border-gray-300'>
                    <p className='text-sm font-bold'>Colors</p>
                    <div className='flex flex-wrap gap-3'>
                        <button className={colorFilters.includes('black') ? 'w-8 h-8 shadow-md border border-gray-400 bg-gray-700' : 'w-8 h-8 shadow-md bg-gray-700'} onClick={() => { handleColorChange("black") }}></button>
                        <button className={colorFilters.includes('blue') ? 'w-8 h-8 shadow-md bg-cyan-500 border border-gray-400' : 'w-8 h-8 shadow-md bg-cyan-500'} onClick={() => { handleColorChange("blue") }}></button>
                        <button className={colorFilters.includes('white') ? 'w-8 h-8 shadow-md bg-white-700 border border-gray-400' : 'w-8 h-8 shadow-md bg-white-700'} onClick={() => { handleColorChange("white") }}></button>
                        <button className={colorFilters.includes('gray') ? 'w-8 h-8 shadow-md bg-gray-600 border border-gray-400' : 'w-8 h-8 shadow-md bg-gray-600'} onClick={() => { handleColorChange("gray") }}></button>
                        <button className={colorFilters.includes('pink') ? 'w-8 h-8 shadow-md bg-pink-300 border border-gray-400' : 'w-8 h-8 shadow-md bg-pink-300'} onClick={() => { handleColorChange("pink") }}></button>
                        <button className={colorFilters.includes('purple') ? 'w-8 h-8 shadow-md bg-purple-300 border border-gray-400' : 'w-8 h-8 shadow-md bg-purple-300'} onClick={() => { handleColorChange("purple") }}></button>
                        <button className={colorFilters.includes('red') ? 'w-8 h-8 shadow-md bg-red-400 border border-gray-400' : 'w-8 h-8 shadow-md bg-red-400'} onClick={() => { handleColorChange("red") }}></button>
                    </div>
                </div>
                <div className='p-4 flex-col gap-1 flex border-b border-gray-300'>
                    <p className='text-sm font-bold'>Sizes</p>
                    <div className='text-sm text-zinc-500'>
                        <div className='flex items-center gap-2 '>
                            <input type='checkbox' onChange={() => handleSizeChange("S")} checked={sizeFilters.S} />
                            <label>S</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' onChange={() => handleSizeChange("M")} checked={sizeFilters.M} />
                            <label>M</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' onChange={() => handleSizeChange("L")} checked={sizeFilters.L} />
                            <label>L</label>
                        </div>
                    </div>
                </div>
            </div>
        </aside >
    )
}

export default Filter