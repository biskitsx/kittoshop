import React, { useState } from 'react';

function SizeSelector({ productSize }: { productSize: string[] }) {
    // Use state to keep track of the selected size
    const [selectedSize, setSelectedSize] = useState(null);

    // Define a function to handle the button click
    const handleButtonClick = (size) => {
        // Only update the selected size if it is available
        if (productSize.includes(size)) {
            setSelectedSize(size);
        }
    };

    return (
        <div>
            <p className='font-semibold text-sm'>Sizes</p>
            <div className='flex gap-1'>
                <button
                    className={`w-9 h-9 text-center text-sm ${selectedSize === 'S'
                            ? 'bg-white text-zinc-900 border-2 border-zinc-900'
                            : productSize.includes('S')
                                ? 'bg-zinc-800 text-white'
                                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        }`}
                    onClick={() => handleButtonClick('S')}
                    disabled={!productSize.includes('S')}
                >
                    S
                </button>
                <button
                    className={`w-9 h-9 text-center text-sm ${selectedSize === 'M'
                            ? 'bg-white text-zinc-900 border-2 border-zinc-900'
                            : productSize.includes('M')
                                ? 'bg-zinc-800 text-white'
                                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        }`}
                    onClick={() => handleButtonClick('M')}
                    disabled={!productSize.includes('M')}
                >
                    M
                </button>
                <button
                    className={`w-9 h-9 text-center text-sm ${selectedSize === 'L'
                            ? 'bg-white text-zinc-900 border-2 border-zinc-900'
                            : productSize.includes('L')
                                ? 'bg-zinc-800 text-white'
                                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        }`}
                    onClick={() => handleButtonClick('L')}
                    disabled={!productSize.includes('L')}
                >
                    L
                </button>
            </div>
        </div>
    );
}

export default SizeSelector;
