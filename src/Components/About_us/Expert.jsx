"use client"
import { motion } from "framer-motion";
import React from 'react'
import { Inter } from 'next/font/google'
import { RiFacebookFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "700"]
})
const Expert = () => {
  return (
    <section className='container mx-auto  py-10'>
      <p className='text-[#307BC4] text-center '>MEET OUR</p>
      <h2 className={`${inter.className} text-center font-bold mt-2 text-[#274760] text-4xl `} >Experts Doctor</h2>

      {/* Experts card main div */}
      <div className="mt-[120px]  flex justify-between ">
        {/* one */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}

          className="text-center relative  w-[32%] flex flex-col justify-center pb-4 pt-[200px]  rounded-2xl shadow-2xl ">
          <img className='w-[70%] mx-auto absolute -top-[90px] left-12 ' src="/about/Ellipse1.png" alt="doctor" />
          <h5 className='font-bold text-xl '>Dr. James Lee, MD</h5>
          <h6 className='font-bold text-[#3e2837] '>Head of Cardiologist</h6>
          <p>With expertise in managing complex <br /> heart conditions and performing <br /> advanced cardiac procedures</p>
          <div className="flex justify-center gap-2 mt-2 ">
            <p className='border p-2 bg-[#A2CDF0] rounded-full text-2xl text-white '><RiFacebookFill /></p>
            <p className='border p-2 bg-[#A2CDF0] rounded-full text-2xl text-white '><TiSocialLinkedin /></p>
            <p className='border p-2 bg-[#A2CDF0] rounded-full text-2xl text-white '><TiSocialTwitter /></p>
          </div>

        </motion.div>

        {/* two */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}

          className="text-center relative  w-[32%] flex flex-col justify-center pb-4 pt-[200px]  rounded-2xl shadow-2xl ">
          <img className='w-[70%] mx-auto absolute -top-[90px] left-12 ' src="/about/Ellipse2.png" alt="doctor" />
          <h5 className='font-bold text-xl '>Dr. Susan Bones, MD</h5>
          <h6 className='font-bold text-[#3e2837] '>Head of Cardiologist</h6>
          <p>With expertise in managing complex <br /> heart conditions and performing <br /> advanced cardiac procedures</p>
          <div className="flex justify-center gap-2 mt-2">
            <p className='border p-2 bg-[#A2CDF0] rounded-full text-2xl text-white '><RiFacebookFill /></p>
            <p className='border p-2 bg-[#A2CDF0] rounded-full text-2xl text-white '><TiSocialLinkedin /></p>
            <p className='border p-2 bg-[#A2CDF0] rounded-full text-2xl text-white '><TiSocialTwitter /></p>
          </div>

        </motion.div>

        {/* three */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}

          className="text-center relative  w-[32%] flex flex-col justify-center pb-4 pt-[200px]  rounded-2xl shadow-2xl ">
          <img className='w-[70%] mx-auto absolute -top-[90px] left-12 ' src="/about/Ellipse1.png" alt="doctor" />
          <h5 className='font-bold text-xl '>Dr. John Smith, MD</h5>
          <h6 className='font-bold text-[#3e2837] '>Head of Cardiologist</h6>
          <p>With expertise in managing complex <br /> heart conditions and performing <br /> advanced cardiac procedures</p>
          <div className="flex justify-center gap-2 mt-2">
            <p className='border p-2 bg-[#A2CDF0] rounded-full text-2xl text-white '><RiFacebookFill /></p>
            <p className='border p-2 bg-[#A2CDF0] rounded-full text-2xl text-white '><TiSocialLinkedin /></p>
            <p className='border p-2 bg-[#A2CDF0] rounded-full text-2xl text-white '><TiSocialTwitter /></p>
          </div>

        </motion.div>




      </div>

    </section>
  )
}

export default Expert
