import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { Inter } from 'next/font/google'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const inter = Inter({
    subsets: ["latin"],
    weight: ["200", "500", "600", "700", "800"]
})

const Reviews = () => {
    return (
        <section className='container mx-auto  py-10  pt-10'>
            <h2 className={`${inter.className} text-center font-bold text-3xl `} >Some Reviews</h2>
            <h6 className='text-center text-[#307BC4] '>OF OUR CLIENTS</h6>
            {/* mother div 2-col*/}
            <div className="flex mt-5">
                <div className="border-r-2 w-1/2 px-5 py-10  ">
                    {/* client-1 */}
                    <div className="flex gap-4 items-center">
                        <img src="/home/avatar_1.png" alt="clients man" />
                        <div className="">
                            <h5 className='font-bold'>PAULO HUBERT</h5>
                            <p>New York, USA</p>
                        </div>
                    </div>
                    {/* client-2 */}
                    <div className="flex gap-4 items-center mt-6 w-[70%] pl-2 ml-[15%] rounded-2xl shadow-lg/30  ">
                        <img src="/home/avatar_2.png" alt="clients man" />
                        <div className="">
                            <h5 className='font-bold'>LAURENCE VENDETTA</h5>
                            <p>New York, USA</p>
                        </div>
                    </div>
                    {/* client-3 */}
                    <div className="flex gap-4 items-center mt-6 ">
                        <img src="/home/avatar_3.png" alt="clients man" />
                        <div className="">
                            <h5 className='font-bold'>CASSANDRA RAUL</h5>
                            <p>Florida</p>
                        </div>
                    </div>
                </div>


                <div className="flex w-1/2 justify-center gap-4 mt-14 ">
                    <p className=' text-4xl '><FaQuoteLeft /></p>
                    <div className="">
                        <p>The pediatrician was great with him and made him feel at <br />
                            ease, and the entire staff was kind and attentive. I recently <br />
                            had to bring my child to ProHealth for a minor injury, and I <br />
                            was so impressed with the care he received.</p>
                            <p className='flex gap-2 text-[#307BC4] mt-5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /> </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Reviews
