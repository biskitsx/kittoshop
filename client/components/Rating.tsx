import React from 'react'
import { Star } from '@mui/icons-material';

function Rating({ rating }: { rating: number }) {
    return (
        // <div>
        <div className='flex gap-1 text-sm justify-center'>
            <Star className={rating >= 1 ? 'text-yellow-400' : 'text-gray-400'} sx={{ fontSize: 18 }} />
            <Star className={rating >= 2 ? 'text-yellow-400' : 'text-gray-400'} sx={{ fontSize: 18 }} />
            <Star className={rating >= 3 ? 'text-yellow-400' : 'text-gray-400'} sx={{ fontSize: 18 }} />
            <Star className={rating >= 4 ? 'text-yellow-400' : 'text-gray-400'} sx={{ fontSize: 18 }} />
            <Star className={rating >= 5 ? 'text-yellow-400' : 'text-gray-400'} sx={{ fontSize: 18 }} />
        </div>
        // </div>
    )
}

export default Rating