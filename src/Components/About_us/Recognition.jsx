import { Inter } from 'next/font/google'
import React from 'react'
const inter = Inter({
    subsets:["latin"],
    weight:["500", "700"]
})
const Recognition = () => {
  return (
    <section className='container mx-auto  text-center  '>
        <p className='text-blue-500 '>AWARDS</p>
        <h2 className={`${inter.className} font-bold text-4xl text-[#274760] mt-2 `}>Winning Awards and <br /> Recognition</h2>
        <p className='mt-2 '>We have been recognized for our commitment to <br /> excellence in healthcare.</p>
        {/* card's main div */}
        <div className="  flex flex-wrap justify-between mt-4 uppercase">
            {/* one */}
            <div className="flex gap-2 items-center w-[49%] px-2 py-2 shadow-2xl rounded-xl ">
                <img src="/home/dep2-pic.png" alt="logo" />
                <p>Malcolm Baldrige National Quality Award</p>
            </div>

             {/* one */}
            <div className="flex gap-2 items-center w-[49%] px-2 py-2 shadow-2xl rounded-xl ">
                <img src="/home/dep2-pic.png" alt="logo" />
                <p>Malcolm Baldrige National Quality Award</p>
            </div>

             {/* one */}
            <div className="flex gap-2 items-center w-[49%] px-2 py-2 shadow-2xl rounded-xl mt-4 ">
                <img src="/home/dep2-pic.png" alt="logo" />
                <p>Malcolm Baldrige National Quality Award</p>
            </div>

             {/* one */}
            <div className="flex gap-2 items-center w-[49%] px-2 py-2 shadow-2xl rounded-xl mt-4 ">
                <img src="/home/dep2-pic.png" alt="logo" />
                <p>Malcolm Baldrige National Quality Award</p>
            </div>


        </div>

    </section>
  )
}

export default Recognition
