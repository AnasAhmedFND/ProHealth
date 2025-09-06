"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion";
const Choose = () => {
    const [count, setCount]=useState(0)
    return (
        <section className='container mx-auto py-10'>
            {/* choose mother div */}
            <div className="flex justify-between">
                {/* left */}
                <div className="w-[38%]  ">
                    <img src="/about/abouts_main.png" alt="doctor" />
                </div>

                {/* right */}
                <div className="w-[59%]  p-2 text-[#274760] ">
                    <h2 className='font-bold  text-4xl'>Why Choose Us</h2>
                    <div className="flex flex-wrap mt-4 justify-between gap-2 ">
                        <div className=" w-[49%] py-3 ">
                            <img className='border rounded-full w-[40px] h-[40px] ' src="home/dep2-pic.png" alt="" />
                            <h4 className='font-bold text-xl mt-2'>Experienced Medical  <br />
                                Professionals</h4>
                            <p className='mt-2'><small> Our team includes experienced doctors, <br />
                                nurses, and other healthcare professionals <br />
                                who are dedicated to providing the best <br />
                                possible care to our patients.</small> </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 5 }}
                            whileInView={{ opacity: 4 }}
                            className=" w-[49%] py-3 ">
                            <img className='border rounded-full w-[40px] h-[40px] ' src="home/dep2-pic.png" alt="" />
                            <h4 className='font-bold text-xl mt-2'>Comprehensive Services </h4>
                            <p className='mt-2'><small> Our team includes experienced doctors, <br />
                                nurses, and other healthcare professionals <br />
                                who are dedicated to providing the best <br />
                                possible care to our patients.</small> </p>
                        </motion.div>

                        <div className=" w-[49%] py-3 ">
                            <img className='border rounded-full w-[40px] h-[40px] ' src="home/dep2-pic.png" alt="" />
                            <h4 className='font-bold text-xl mt-2'>Patient-centered Approach  </h4>
                            <p className='mt-2'><small> Our team includes experienced doctors, <br />
                                nurses, and other healthcare professionals <br />
                                who are dedicated to providing the best <br />
                                possible care to our patients.</small> </p>
                        </div>

                        <div className=" w-[49%] py-3 ">
                            <img className='border rounded-full w-[40px] h-[40px] ' src="home/dep2-pic.png" alt="" />
                            <h4 className='font-bold text-xl mt-2'>State-of-the-art Facilities </h4>
                            <p className='mt-2'><small> Our team includes experienced doctors, <br />
                                nurses, and other healthcare professionals <br />
                                who are dedicated to providing the best <br />
                                possible care to our patients.</small> </p>
                        </div>
                    </div>



                </div>

            </div>

            <img className='mt-10' src="/about/persent.png" alt="persent" />
                
        </section>
    )
}

export default Choose
