import React from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/Ai';
import { BsBagCheck } from 'react-icons/Bs';
import Link from 'next/link'

const Checkout = ({ cart, subTotal, addToCart, removeFromCart }) => {
  return (
    <>

      <div className="container flex justify-center items-center flex-col px-2 sm:m-auto ">

        <h1 className="font-bold text-3xl my-4 text-left">Checkout</h1>

        <div className=" pr-[210px] text-xl my-5 mb-4 font-semibold mr-20">
          <h2 className='text-left'>1. Delivery Details</h2>
        </div>

        <form >

          <div className="relative z-0 mb-6 w-full group">
            <input type="text" name="name" id="name" className=" block py-2.5 px-0 w-full text-sm rounded-md text-gray-900  bg-transparent border-2 border-b-2 border-gray-300 appearance-none  dark:text-black pl-2 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label htmlFor="name" className="  peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">Full Name</label>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input type="email" name="email" id="email" className=" block py-2.5 px-0 w-full text-sm rounded-md text-gray-900 bg-transparent border-2 border-b-2 border-gray-300 appearance-none  dark:text-black pl-2 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label htmlFor="email" className="  peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">Email address</label>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input type="Address" name="Address" id="Address" className=" block py-2.5 px-0 w-full text-sm rounded-md text-gray-900 bg-transparent border-2 border-b-2 border-gray-300 appearance-none  dark:text-black pl-2 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label htmlFor="address" className="  peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">Address</label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">

            <div className="relative z-0 mb-6 w-full group">
              <input type="phone" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm rounded-md text-gray-900 bg-transparent border-2 border-b-2 border-gray-300 appearance-none  dark:text-black pl-2 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label htmlFor="phone" className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">Phone No.</label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <input type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm rounded-md text-gray-900 bg-transparent border-2 border-b-2 border-gray-300 appearance-none  dark:text-black pl-2 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label htmlFor="city" className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">City</label>
            </div>

          </div>

          <div className="grid md:grid-cols-2 md:gap-6">

            <div className="relative z-0 mb-6 w-full group">
              <input type="text" name="state" id="state" className="block py-2.5 px-0 w-full text-sm rounded-md text-gray-900 bg-transparent border-2 border-b-2 border-gray-300 appearance-none  dark:text-black pl-2 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label htmlFor="state" className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">State</label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <input type="phone" name="pincode" id="pincode" className="block py-2.5 px-0 w-full text-sm rounded-md text-gray-900 bg-transparent border-2 border-b-2 border-gray-300 appearance-none  dark:text-black pl-2 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label htmlFor="pincode" className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">Pincode</label>
            </div>

          </div>

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

        </form>

        <div className=" pr-[210px] text-xl my-5 mb-4 font-semibold ">
          <h2 className='text-left '>2. Review Cart Items & Pay</h2>
        </div>


        <div className="sideCart  bg-blue-300 px-8 m-2 pb-3">


          <ol className='list-decimal font-semibold'>
            {Object.keys(cart).length === 0 && <div className='my-4 font-semibold'>Your Cart is Empty! 😮😮</div>}
            {Object.keys(cart).map((k) => {
              return <li key={k}>
                <div className="item flex my-5 ">
                  <div className=' font-semibold mr-8'>{cart[k].name}</div>
                  <div className='flex items-center justify-center w-1/3 font-semibold text-lg  ml-12'>
                    <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-blue-600' />
                    <span className="mx-2 text-sm ">
                      {cart[k].qty}
                    </span>
                    <AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-blue-600' />
                  </div>
                </div>
              </li>
            })}

          </ol>

          <span className="font-semibold">Subtotal: ₹{subTotal}</span>

        </div>
          <div className="mr-64">
            <Link href={'/checkout'}><button className="flex mx-2  text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-sm"><BsBagCheck className='m-1' />Pay ₹{subTotal}</button></Link>
          </div>



      </div>
    </>

  )
}

export default Checkout
