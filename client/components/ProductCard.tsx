import React, { SyntheticEvent } from 'react'
import Rating from './Rating'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ProductCounter from './ProductCounter';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';
import SizeSelector from './SizeSelector';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        xs: '90%',
        // sm: '50%',
        md: '50%',
        // lg: '50%',
        // xl: '50%',
    },
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export interface ProductCardProps {
    productImg: string,
    productName: string,
    productPrice: number,
    productStar: number,
    productSize: string[]
}

function ProductCard({ productImg, productName, productPrice, productStar, productSize }: ProductCardProps) {
    const [open, setOpen] = React.useState(false);
    const [productCount, setProductCount] = React.useState(1)
    const [loading, setLoading] = React.useState(false)
    const drawerRef = React.useRef<HTMLLabelElement | null>(null)
    const dispatch = useDispatch()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function delay(time: number) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    const addProductToCart = (e: SyntheticEvent) => {
        setLoading(true)
        e.preventDefault()
        const product = {
            name: productName,
            price: productPrice,
            image: productImg,
            count: productCount

        }
        dispatch(addToCart(product))
        delay(500).then(() => {
            setLoading(false)
            handleClose()
            if (drawerRef.current) {
                drawerRef.current.click()
            }
        });
    }
    return (
        <>
            <div className="rounded-none card-compact hover:shadow-md transition-all delay-200 cursor-pointer" onClick={handleOpen}>
                <Image src={productImg} alt="Shoes" className='w-full hover:brightness-95 transition-all' width={1000} height={1000} />
                <div className="card-body text-center flex flex-col justify-center">
                    <Rating rating={productStar} />
                    <h2 className="font-normal cursor-pointer text-lg" onClick={handleOpen}>{productName}</h2>
                    <h2 className=""><span className='line-through text-zinc-400'>${productPrice + 20}.00</span><span className='font-medium'> ${productPrice}.00</span></h2>
                </div>
            </div>
            <label htmlFor="my-drawer-4" className='hidden' ref={drawerRef}></label>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <div className='grid grid-cols-2 gap-4 h-full w-full'>
                        <Image src={productImg} alt="Shoes" className='hover:brightness-95 transition-all' width={1000} height={1000} />
                        <div className='flex flex-col gap-4 '>
                            <h1 className='text-2xl font-medium'>{productName}</h1>
                            <h2 className=""><span className='line-through text-zinc-400'>${productPrice + 20}.00</span><span className='font-medium text-2xl'> ${productPrice}.00</span></h2>
                            <Rating rating={productStar} />
                            <p className='text-sm'>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you&apos;re ready for summer!</p>
                            <SizeSelector productSize={productSize} />
                            <ProductCounter productCount={productCount} setProductCount={setProductCount} />
                            <div>
                                <button className='black-button w-32 grid place-items-center' onClick={addProductToCart} disabled={loading} >
                                    {loading ?
                                        // <span className="loading loading-spinner loading-xs"></span>
                                        <span className="loading loading-spinner loading-sm "></span>
                                        :
                                        <p>
                                            add to cart
                                        </p>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ProductCard
