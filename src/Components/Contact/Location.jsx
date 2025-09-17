"use client"
import { Inter } from 'next/font/google';
import React from 'react'
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";

const inter = Inter({
    subsets:['latin'],
    weight:["500", "700"]
})

const Location = () => {

  return (
    <section className='container mx-auto pb-10 md:px-0 px-2'>
        <h2 className={`${inter.className} text-4xl font-bold text-[#274760] mt-4 `}>Find Us Here</h2>
        {/* contact card's mother div */}
        <div className="mt-8 md:flex justify-between ">
            {/* one */}
            <div className="flex border gap-4 md:w-[30%] bg-[#D2EAEF] rounded-xl items-center px-4 py-2  ">
                <p className='text-4xl text-blue-500 '><FiPhone /></p>
                <div className="">
                    <h6>Phone</h6>
                    <p>123-456-7890</p>
                </div>
            </div>

             {/* two */}
            <div className="flex border gap-4 md:w-[30%] md:mt-0 mt-2 bg-[#D2EAEF] rounded-xl items-center px-4 py-2  ">
                <p className='text-4xl text-blue-500 '><TfiEmail /></p>
                <div className="">
                    <h6>Email</h6>
                    <p>hellocallcenter@gmail.com</p>
                </div>
            </div>

             {/* three */}
            <div className="flex gap-4 md:w-[30%] md:mt-0 mt-2 bg-[#D2EAEF] rounded-xl items-center px-4 py-2  ">
                <p className='text-4xl text-blue-500 '><SlLocationPin /></p>
                <div className="">
                    <h6>Location</h6>
                    <p><small> 123 Anywhere St., Any City, 12345</small></p>
                </div>
                
            </div>
        </div>

        <div className="h-[300px] rounded-xl mt-10 ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902511493518!2d90.39945231543073!3d23.750885284590376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894d3a4dfab%3A0x9a2c9f79a3c9d10c!2sDhaka!5e0!3m2!1sen!2sbd!4v1693659134911!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{border : 0}}
            allowFullScreen=""
            loading='lazy'

             frameborder="0">

            </iframe>

        </div>

    </section>
  )
}

export default Location
