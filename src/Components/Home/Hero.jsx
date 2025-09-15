"use client"
import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";


const Hero = () => { 
  
    return (
        <section className=' bg-[#C7E3F1]  md:h-[492px]  '>
            
            <div className='container mx-auto md:flex md:relative justify-between md:px-0 px-2 '>
                <div className="md:w-1/2 w-full  md:pl-5 md:pt-0 pt-2">
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

                <div className="md:w-1/2 w-full    ">
                    <img className="md:absolute right-14 md:w-[60%] h-[163%] " src="/hero_img.png" alt="health hero" />
                </div>
            </div>
        </section>
    )
}

export default Hero
