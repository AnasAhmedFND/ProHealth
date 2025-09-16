"use client"
import React, { useState } from 'react'
import data from '@/Components/index.json'
import { Henny_Penny } from 'next/font/google'
import Link from 'next/link'
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoFacebook } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";

const henny = Henny_Penny({
  subsets: ["latin"],
  weight: ["400"]
})



const Blog = () => {

  // state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemParPage = 9;

  // calculate which items to show
  const indexOfLastItems = currentPage * itemParPage;
  const indexOfFirstItems = indexOfLastItems - itemParPage;
  const currentItems = data.products.slice(indexOfFirstItems, indexOfLastItems);

  // total pages

  const totalPages = Math.ceil(data.products.length / itemParPage);

  return (
    <section className='container mx-auto text-[#274760] md:px-0 px-2 '>
      <p className={`${henny.className}  `}><Link href={"/"}>Home</Link> / <Link href={"/blog"}>Blog</Link> </p>
      <h2 className='font-bold md:text-4xl mt-4'>Psychology and Life Style</h2>

      {/* blog items's mother div */}
      
      <div className="mt-5  md:flex md:flex-wrap justify-between ">
        {/* cards */}
        {currentItems.map((item) => (
          <article className=" md:w-[32%] rounded-2xl shadow-xl mt-4 " key={item.id} >
            <img className=' w-full rounded-t-2xl' src={item.image} alt="health" />
            <div className="px-4 pb-4">
              <div className="flex mt-2 justify-between">
                <p>{item.date}</p>
                <div className="flex gap-2 text-blue-500">
                  <p className='border p-2 rounded-full border-blue-400'><TiSocialLinkedin /></p>
                  <p className='border p-2 rounded-full border-blue-400'><BiLogoFacebook /></p>
                  <p className='border p-2 rounded-full border-blue-400'><TiSocialTwitter /></p>
                </div>

              </div>
              <h6 className='font-bold mt-5 text-xl'>
                {item.title}
              </h6>

              <button className='mt-4'>Learn More</button>
            </div>

          </article>

        ))}

      </div>

      {/* pagination button */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({length: totalPages}, (_, index) => (
          <button 
          key={index + 1} 
          onClick={() => setCurrentPage(index + 1)}
          className={`px-4 py-2 border rounded-lg 
              ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white text-blue-500"}
            `}

          >
            {index + 1}

          </button>
        ))}
      </div>

    </section>
  )
}

export default Blog
