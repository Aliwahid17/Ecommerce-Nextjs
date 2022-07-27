import React from 'react'
import Link from 'next/link'
import Product from "../models/Product"
import mongoose from "mongoose";

const Tshirts = ({ products }) => {

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-3 pr-20 pl-20 mx-auto ">
          <div className="flex flex-wrap -m-4  ">

            {products.map((item) => {
              return <Link passHref={true} key={item._id} href={`/product/${item.slug}`}>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full grid justify-items-center cursor-pointer shadow-lg mb-6   ">
                  <a className="block relative  rounded overflow-hidden">
                    <img alt="ecommerce" className="h-[30vh] md:h-[36vh] object-center block" src={item.img} />
                  </a>
                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                    <p className="mt-1">₹{item.price}</p>
                    <p className="mt-1">S, M, L, XL, XXL</p>
                  </div>
                </div>
              </Link>
            })}



          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }

  let products = await Product.find({ category: 'tshirts' })

  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  }
}

export default Tshirts