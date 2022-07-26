import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ImCart } from 'react-icons/Im';
import { BsBagCheck } from 'react-icons/Bs';
import { VscClearAll } from 'react-icons/Vsc';
import { RiAccountPinCircleFill } from 'react-icons/Ri';
import { AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/Ai';
import { useRef } from 'react';

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {

    // function to close cart icon

    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    const ref = useRef()

    return (

        <div className="flex flex-col md:flex-row md:justify-start justify-center items-center mb-4 py-2 shadow-xl sticky top-0 bg-white z-10">

            {/* Logo  */}

            <Link href='/' >
                <a className="logo mx-5 mt-2">
                    <Image width={160} height={50} src='/logo.png' alt="" />
                </a>
            </Link>

            {/* Categories of Shopping */}

            <div className="nav">
                <ul className='flex items-center space-x-6 font-medium  md:text-md'>
                    <Link href={'/tshirts'}><a><li>Tshirts</li></a></Link>
                    <Link href={'hoodies/'}><a><li>Hoodies</li></a></Link>
                    <Link href={'/stickers'}><a><li>Stickers</li></a></Link>
                    <Link href={'/mugs'}><a><li>Mugs</li></a></Link>
                </ul>
            </div>

            {/* SideCart Icons */}

            <div className=" cursor-pointer cart absolute right-0 mx-5 flex">
                <Link href={"/login"}><RiAccountPinCircleFill className=' text-xl top-2 md:text-2xl mx-3' /></Link>
                <ImCart onClick={toggleCart} className=' text-xl top-2 md:text-2xl' />
            </div>

            {/* Shopping Cart menu */}

            <div ref={ref} className={`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-blue-300 px-8 py-10 transform transition-transform ${Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"}`}>
                <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
                <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-blue-600"><AiFillCloseCircle /></span>
                <ol className='list-decimal font-semibold'>
                    {Object.keys(cart).length === 0 && <div className='my-4 font-semibold'>Your Cart is Empty! 😮😮</div>}
                    {Object.keys(cart).map((k) => {
                        return <li key={k}>
                            <div className="item flex my-5">
                                <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                                <div className='flex items-center justify-center w-1/3 font-semibold text-lg'><AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-blue-600' /><span className="mx-2 text-sm">{cart[k].qty}</span><AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-blue-600' /></div>
                            </div>
                        </li>
                    })}
                </ol>
                <div className="font-semibold my-2">Subtotal: ₹{subTotal}</div>
                <div className="flex">
                    <Link href={'/checkout'}><button className="flex mx-2  text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-sm"><BsBagCheck className='m-1' />Checkout</button></Link>
                    <button onClick={clearCart} className="flex mx-auto  text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-sm"><VscClearAll className='m-1' />Clear Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar