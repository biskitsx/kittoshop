import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CollectionsProps {
    collectionName: string,
    collectionImg: string
}

function Collections({ collectionName, collectionImg }: CollectionsProps) {
    return (
        <Link href={`/collections/${collectionName.toLowerCase()}`} onMouseOver={() => console.log("first")}>
            <div className="card  rounded-none card-compact">
                <figure>
                    <Image src={collectionImg} alt='collection' width={1000} height={1000} />
                </figure>
                <div className="card-body text-center">
                    <h2 className="font-medium capitalize text-xl">{collectionName}</h2>
                </div>
            </div>
        </Link>
    )
}

export default Collections;
