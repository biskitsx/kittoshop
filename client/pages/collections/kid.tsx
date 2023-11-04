import Nav from '@/components/Nav'
import React from 'react'
import Image from 'next/image'
import Filter from '@/components/Filter'
import CollectionDesc from '@/components/CollectionDesc'

function kid() {
    return (
        <>
            <Nav />
            <div className='flex container py-12 gap-8'>
                <Filter />
                <main className='flex flex-col gap-4 w-full'>
                    <CollectionDesc collection="Kids" />
                    <div></div>
                    <div></div>
                </main>
            </div>
        </>
    )
}

export default kid