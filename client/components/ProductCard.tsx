import React from 'react'
import Rating from './Rating'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: '50%',
    // height: '70%',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface ProductCardProps {
    productImg: string,
    productName: string,
    productPrice: number,
    productStar: number,
}

function ProductCard({ productImg, productName, productPrice, productStar }: ProductCardProps) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="  rounded-none card-compact hover:shadow-md transition-all delay-200 cursor-pointer" onClick={handleOpen}>
                <Image src={productImg} alt="Shoes" className='w-full hover:brightness-95 transition-all' width={1000} height={1000} />
                {/* <figure className='hover:bg-black'>
                </figure> */}
                <div className="card-body text-center flex flex-col justify-center">
                    <Rating rating={Math.floor(Math.random() * 10) % 5} />
                    <h2 className="font-medium cursor-pointer" onClick={handleOpen}>{productName}</h2>
                    <h2 className=""><span className='line-through text-zinc-400'>${productPrice + 20}.00</span><span className='font-semibold'> ${productPrice}.00</span></h2>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <div className='grid grid-cols-2 gap-4 h-full w-full'>
                        <Image src={productImg} alt="Shoes" className='w-full hover:brightness-95 transition-all h-full' width={1000} height={1000} />
                        <div className='flex flex-col gap-4 '>
                            <h1 className='text-2xl font-medium'>{productName}</h1>
                            <h2 className=""><span className='line-through text-zinc-400'>${productPrice + 20}.00</span><span className='font-medium text-2xl'> ${productPrice}.00</span></h2>
                            <Rating rating={Math.floor(Math.random() * 10) % 5} />
                            <p>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>
                            <div>
                                <button className='black-button'>add to cart</button>

                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ProductCard