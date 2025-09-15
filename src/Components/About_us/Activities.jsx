import { Inter } from 'next/font/google'
import React from 'react'
const inter = Inter({
    subsets: ["latin"],
    weight: ["500", "700"]
})

const Activities = () => {
    return (
        <section className='container mx-auto md:py-10 py-5 md:px-0 px-2  '>
            {/* main Activities div */}
            <div className="">
                {/* top */}
                <div className=" md:flex justify-between  ">
                    {/* top-left */}
                    <div className=" md:w-[69%] ">
                        <p className='text-blue-500 '>HAVE A LOOK AT</p>
                        <h2 className={`${inter.className} font-bold text-3xl mt-2 text-[#274760] `} >Our Facilities and <br /> Latest Activities </h2>
                        <div className="flex justify-between md:mt-20 mt-4 ">
                            <img className='w-[49%] ' src="/about/op2.png" alt="oparetions_word" />
                            <img className='w-[49%] ' src="/about/op3.png" alt="oparetions word" />

                        </div>
                    </div>
                    {/* top-right */}
                    <div className="md:w-[30%] md:mt-0 mt-2  ">
                        <img className='w-full h-full ' src="/about/op1.png" alt="oparetions_word" />

                    </div>

                </div>

                {/* bottom */}
                <div className=" flex justify-between mt-2 ">
                    <div className="w-[69%] ">
                        <img className='w-full ' src="/about/op4.png" alt="oparetion_team" />

                    </div>

                    <div className="w-[30%]  ">
                        <img className='w-full h-full ' src="/about/op5.png" alt="oparetion_team" />
                    </div>



                </div>

            </div>

        </section>
    )
}

export default Activities
