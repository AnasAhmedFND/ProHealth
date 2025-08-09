import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";

const Hero = () => {
    return (
        <section className='container mx-auto bg-[#C7E3F1]  h-[492px] '>
            <div className='flex relative justify-between '>
                <div className="w-1/2  pl-5">
                    <h1 className="text-4xl font-bold text-[#274760] mt-[14%] " >Your Partner in <br /> Health and Wellness</h1>
                    <p className="mt-5" >We are committed to providing you with the best medical
                        and healthcare services to help you live healthier and
                        happier.</p>
                        <div className="flex mt-15 gap-2 items-center">
                        <p className="text-2xl cursor-pointer "><FaRegCirclePlay /></p>
                        <a  href="https://doctime.com.bd/">
                        <button className="cursor-pointer">See how we work</button>
                        </a>

                        </div>
                </div>

                <div className="w-1/2    ">
                    <img className="absolute right-14 w-[60%] h-[163%] " src="/hero_img.png" alt="health hero" />
                </div>
            </div>
        </section>
    )
}

export default Hero
