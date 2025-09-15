import React from 'react'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { Inter } from 'next/font/google';
const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "700", "800"]
})

const Latest = () => {
    return (
        <section className='container mx-auto  pb-10 md:px-0 px-2 '>
            <div className="text-center  ">
                <h6 className='text-blue-500'><small>BLOG POSTS  </small> </h6>
                <h2 className={`${inter.className}  font-bold text-4xl mt-1 text-[#274760] `}  >Latest Update</h2>
            </div>
            {/* latest-update card's mother div */}
            <div className="md:flex justify-between md:mt-20 mt-10">
                {/* one */}
                <div className=" md:w-[32%] mt-2 pb-4 bg-white rounded-2xl shadow-2xl">
                    <img src="/home/latest1.png" alt="healthy-man" />
                    <div className="flex items-center gap-2 mt-4 pl-4">
                        <p>May 1, 2025</p>
                        <p className='text-xl '><TiSocialLinkedinCircular /></p>
                        <p className='text-xl '><RiFacebookCircleLine /></p>
                        <p className='text-xl '><TiSocialTwitterCircular /></p>

                    </div>
                    <h5 className='font-bold  mt-4 pl-4'>The Benefits of Mindfulness <br />
                        Meditation for Stress and <br />
                        Anxiety</h5>
                    <a href="https://doctime.com.bd/">
                        <button className='cursor-pointer pl-4 mt-2 '><small> Learn More </small> </button>
                    </a>
                </div>

                {/* two */}
                <div className=" md:w-[32%] mt-2 pb-4 bg-white rounded-2xl shadow-2xl">
                    <img src="/home/latest2.png" alt="healthy-man" />
                    <div className="flex items-center gap-2 mt-4 pl-4">
                        <p>May 1, 2025</p>
                        <p className='text-xl '><TiSocialLinkedinCircular /></p>
                        <p className='text-xl '><RiFacebookCircleLine /></p>
                        <p className='text-xl '><TiSocialTwitterCircular /></p>

                    </div>
                    <h5 className='font-bold  mt-4 pl-4'>The Importance of Regular <br />
                        Cancer Screenings and <br />
                        Early Detection</h5>

                    <a href="https://doctime.com.bd/">
                        <button className='cursor-pointer pl-4 mt-2 '><small> Learn More </small> </button>
                    </a>
                </div>

                {/* three */}
                <div className=" md:w-[32%] mt-2 pb-4 bg-white rounded-2xl shadow-2xl">
                    <img src="/home/latest3.png" alt="healthy-man" />
                    <div className="flex items-center gap-2 mt-4 pl-4">
                        <p>May 1, 2025</p>
                        <p className='text-xl '><TiSocialLinkedinCircular /></p>
                        <p className='text-xl '><RiFacebookCircleLine /></p>
                        <p className='text-xl '><TiSocialTwitterCircular /></p>

                    </div>
                    <h5 className='font-bold  mt-4 pl-4'>Healthy Eating on a Budget: <br />
                        Tips and Strategies</h5>

                    <a href="https://doctime.com.bd/">
                        <button className='cursor-pointer pl-4 mt-2 '><small> Learn More </small> </button>
                    </a>
                </div>


            </div>

        </section>
    )
}

export default Latest
