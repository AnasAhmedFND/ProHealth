import React from 'react'
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
  return (
    <section className='container mx-auto  pb-10 text-[#274760]'>
      <p className={`${henny.className}  `}><Link href={"/"}>Home</Link> / <Link href={"/blog"}>Blog</Link> </p>
      <h2 className='font-bold text-4xl mt-4'>Psychology and Life Style</h2>

      {/* blog items's mother div */}
      <div className="mt-5  flex flex-wrap justify-between ">
        {/* cards */}
        {data.products.map((item) => (
          <div className=" w-[32%] rounded-2xl shadow-xl mt-4 ">
            <img src={item.image} alt="health" />
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

          </div>

        ))}




      </div>

    </section>
  )
}

export default Blog
