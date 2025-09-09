"use client"
import React from 'react'

import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { IoCallOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiClock } from "react-icons/fi";


const Related = () => {

    return (
        <section className='container mx-auto  py-10 '>

            <div className=" flex ">
                {/* left */}
                <div className="  w-1/2   ">
                    <img className='relative' src="/department/related.png" alt="" />
                </div>

                {/* right */}
                <div className=" w-1/2 text-[#274760] ">
                    <h4 className='font-bold text-4xl ml-10 '>Related <br /> Doctor</h4>

                    {/* card */}
                    <article className="shadow-2xl pt-3 rounded-xl bg-white w-[500px] border absolute left-[480px] mt-32 ">
                        <div className="pl-3 ">
                            <h5 className='font-bold text-xl  '>Dr. Susan Bones, MD</h5>
                            <p className='font-bold mt-2   '>Board-certified Pediatrician</p>
                            <small className='mt-2  '>With experience in managing complex <br />
                                medical conditions in children</small>

                            <div className="flex gap-3 items-center mt-2   ">
                                <p className='border rounded-full bg-blue-500 text-white p-1 '><TiSocialFacebook /></p>
                                <p className='border rounded-full bg-blue-500 text-white p-1 '><TiSocialLinkedin /></p>
                                <p className='border rounded-full bg-blue-500 text-white p-1 '><TiSocialTwitter /></p>
                            </div>

                        </div>

                        <div className="py-4 px-4 flex justify-between items-center bg-blue-500 text-white mt-2 rounded-b-xl ">
                            <div className="flex gap-3 items-center">
                                <p className='flex items-center gap-2 '><FiClock /> Avaibility</p>
                                <p className='flex items-center gap-2 '><IoCallOutline /> Call</p>
                                <p className='flex items-center gap-2 '><IoChatbubbleEllipsesOutline /> Chat</p>

                            </div>
                            <button className='flex items-center gap-2 underline'>Booking <IoIosArrowRoundForward /></button>
                        </div>
                    </article>
                </div>

            </div>





        </section>
    )
}

export default Related
