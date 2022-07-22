import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ImCart } from 'react-icons/Im';

const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-start justify-center items-center mb-4 py-2 shadow-xl">
            <Link href='/' >
                <a className="logo mx-5">
                    <Image width={160} height={50} src='/logo.png' alt="" />
                </a>
            </Link>
            <div className="nav">
                <ul className='flex items-center space-x-6 font-medium mb-[5px] md:text-md'>
                    <Link href={'/tshirts'}><a><li>Tshirts</li></a></Link>
                    <Link href={'hoodies/'}><a><li>Hoodies</li></a></Link>
                    <Link href={'/stickers'}><a><li>Stickers</li></a></Link>
                    <Link href={'/mugs'}><a><li>Mugs</li></a></Link>
                </ul>
            </div>
            <div className="cart absolute right-0 mx-5 top-4">
                <ImCart className=' text-xl mt-2 md:text-2xl' />
            </div>
        </div>

    )
}

export default Navbar