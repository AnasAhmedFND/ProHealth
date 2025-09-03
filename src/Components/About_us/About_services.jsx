"use client"
import { motion } from "framer-motion";
import { Inter } from 'next/font/google';
import React from 'react'
import { FaCalendarDays } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
const inter = Inter({
    subsets: ['latin'],
    weight: ['500', '700']
})

const About_services = () => {
    return (
        <section className='container mx-auto pb-10 '>
            <p className='text-blue-500'>SERVICES</p>

            {/* Services mother div */}
            <div className="flex flex-wrap  justify-between gap-4 mt-2 text-[#274760] ">
                {/* ziro  ( 0 ) */}
                <motion.div
                    whileHover={{
                        scale: [null, 1.1],
                        transition: {
                            duration: 0.5,
                            times: [0, 0.6, 1],
                            ease: ["easeInOut", "easeOut"],
                        },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                    }}
                    className=" w-[32%]  shadow-xl  rounded-xl rounded-r-2xl p-2">
                    <h2 className={`${inter.className} text-4xl font-bold`}>Provides Our <br /> Best Services</h2>
            </motion.div>

            {/* one */}
            <motion.div
             whileHover={{
                        scale: [null, 1.1],
                        transition: {
                            duration: 0.5,
                            times: [0, 0.6, 1],
                            ease: ["easeInOut", "easeOut"],
                        },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                    }}
             className=" w-[32%] pl-2 pt-2 shadow-xl  rounded-xl rounded-r-2xl">
                <p className='border p-2 rounded-full text-white bg-blue-500 w-[40px] h-[40px] flex justify-center items-center text-xl  '><FaCalendarDays /></p>
                <h4 className='font-bold mt-2 text-xl  text-[#274760] '>Diagnostic testing</h4>
                <p className='mt-2'> Blood tests, imaging studies, and <br />
                    other tests to diagnose health <br />
                    conditions
                </p>
                <div className="flex justify-end">
                    <a href="https://www.bing.com/ck/a?!&&p=07420d96e1c01074038288c8fe5961d90c38b10b00822c604ad626d967d3b5edJmltdHM9MTc1Njc3MTIwMA&ptn=3&ver=2&hsh=4&fclid=2343fabc-9275-6684-28bf-ee1093746753&psq=Diagnostic+testing&u=a1aHR0cHM6Ly93d3cucG9wdWxhcmRpYWdub3N0aWMuY29tLw&ntb=1">
                        <p className='border p-2 rounded-l-xl rounded-b-2xl text-white bg-blue-500 w-[60px] h-[40px] flex justify-center items-center text-xl mt-2  '><FaArrowRight /></p>
                    </a>

                </div>

            </motion.div>


            {/* two */}
            <motion.div
             whileHover={{
                        scale: [null, 1.1],
                        transition: {
                            duration: 0.5,
                            times: [0, 0.6, 1],
                            ease: ["easeInOut", "easeOut"],
                        },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                    }} 
             className=" w-[32%] pl-2 pt-2 shadow-xl  rounded-xl rounded-r-2xl">
                <p className='border p-2 rounded-full text-white bg-blue-500 w-[40px] h-[40px] flex justify-center items-center text-xl  '><FaCalendarDays /></p>
                <h4 className='font-bold mt-2 text-xl  text-[#274760] '>Rehabilitation services</h4>
                <p className='mt-2'> Blood tests, imaging studies, and <br />
                    other tests to diagnose health <br />
                    conditions
                </p>
                <div className="flex justify-end">
                    <a href="https://www.bing.com/ck/a?!&&p=d4bd8b8080802ae9d0a42855e502743e9b9f2a7ca30fa5c3537718e3a66032c4JmltdHM9MTc1Njc3MTIwMA&ptn=3&ver=2&hsh=4&fclid=2343fabc-9275-6684-28bf-ee1093746753&psq=Rehabilitation+services&u=a1aHR0cHM6Ly9iY3IuY29tLmJkLw&ntb=1">

                        <p className='border p-2 rounded-l-xl rounded-b-2xl text-white bg-blue-500 w-[60px] h-[40px] flex justify-center items-center text-xl mt-2  '><FaArrowRight /></p>
                    </a>

                </div>

            </motion.div>

            {/* therr */}
            <motion.div
             whileHover={{
                        scale: [null, 1.1],
                        transition: {
                            duration: 0.5,
                            times: [0, 0.6, 1],
                            ease: ["easeInOut", "easeOut"],
                        },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                    }} 
             className=" w-[32%] pl-2 pt-2 shadow-xl  rounded-xl rounded-r-2xl  ">
                <p className='border p-2 rounded-full text-white bg-blue-500 w-[40px] h-[40px] flex justify-center items-center text-xl  '><FaCalendarDays /></p>
                <h4 className='font-bold mt-2 text-xl  text-[#274760] '>Preventive care</h4>
                <p className='mt-2'> Blood tests, imaging studies, and <br />
                    other tests to diagnose health <br />
                    conditions
                </p>
                <div className="flex justify-end">
                    <a href="https://www.bing.com/ck/a?!&&p=7dcc7d467417f9fcbeeb4de3e427529e2d598203a83817a5f06b7143ac0b455fJmltdHM9MTc1Njc3MTIwMA&ptn=3&ver=2&hsh=4&fclid=2343fabc-9275-6684-28bf-ee1093746753&psq=Preventive+care&u=a1aHR0cHM6Ly93d3cuaGVhbHRobGluZS5jb20vaGVhbHRoL3doYXQtaXMtcHJldmVudGl2ZS1oZWFsdGgtYW5kLXdoeS1pcy1pdC1pbXBvcnRhbnQ&ntb=1">
                        <p className='border p-2 rounded-l-xl rounded-b-2xl text-white bg-blue-500 w-[60px] h-[40px] flex justify-center items-center text-xl mt-2  '><FaArrowRight /></p>
                    </a>

                </div>

            </motion.div>

            {/* four */}
            <motion.div
             whileHover={{
                        scale: [null, 1.1],
                        transition: {
                            duration: 0.5,
                            times: [0, 0.6, 1],
                            ease: ["easeInOut", "easeOut"],
                        },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                    }} 
             className=" w-[32%] pl-2 pt-2 shadow-xl  rounded-xl rounded-r-2xl ">
                <p className='border p-2 rounded-full text-white bg-blue-500 w-[40px] h-[40px] flex justify-center items-center text-xl  '><FaCalendarDays /></p>
                <h4 className='font-bold mt-2 text-xl  text-[#274760] '>Treatment for acute and <br />
                    chronic conditions</h4>
                <p className='mt-2'> Blood tests, imaging studies, and <br />
                    other tests to diagnose health <br />
                    conditions
                </p>
                <div className="flex justify-end">
                    <a href="https://www.bing.com/ck/a?!&&p=67a7168caaf5a1ffe658a07b71bfbf9f0064ac6fb2c5a2c5066be914843a4418JmltdHM9MTc1Njc3MTIwMA&ptn=3&ver=2&hsh=4&fclid=2343fabc-9275-6684-28bf-ee1093746753&psq=Treatment+for+acute+and+chronic+conditions&u=a1aHR0cHM6Ly93d3cubWVkaWNhbG5ld3N0b2RheS5jb20vYXJ0aWNsZXMvYWN1dGUtdnMtY2hyb25pYy1jb25kaXRpb25z&ntb=1">
                        <p className='border p-2 rounded-l-xl rounded-b-2xl text-white bg-blue-500 w-[60px] h-[40px] flex justify-center items-center text-xl mt-2  '><FaArrowRight /></p>
                    </a>

                </div>

            </motion.div>

            {/* five */}
            <motion.div
             whileHover={{
                        scale: [null, 1.1],
                        transition: {
                            duration: 0.5,
                            times: [0, 0.6, 1],
                            ease: ["easeInOut", "easeOut"],
                        },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                    }} 
             className=" w-[32%] pl-2 pt-2 shadow-xl  rounded-xl rounded-r-2xl ">
                <p className='border p-2 rounded-full text-white bg-blue-500 w-[40px] h-[40px] flex justify-center items-center text-xl  '><FaCalendarDays /></p>
                <h4 className='font-bold mt-2 text-xl  text-[#274760] '>Mental health services</h4>
                <p className='mt-2'> Blood tests, imaging studies, and <br />
                    other tests to diagnose health <br />
                    conditions
                </p>
                <div className="flex justify-end">
                    <a href="https://www.bing.com/ck/a?!&&p=0d93d9c37c0661bbdc1fa10d3d307d00107923fac07c30c8679b1e5969fc5099JmltdHM9MTc1Njc3MTIwMA&ptn=3&ver=2&hsh=4&fclid=2343fabc-9275-6684-28bf-ee1093746753&psq=Mental+health+services&u=a1aHR0cHM6Ly9uaXJhbW95aG9zcGl0YWwub3JnL3RvcC1tZW50YWwtaG9zcGl0YWxzLWluLWRoYWthLWJhbmdsYWRlc2gtZ292dC1wcml2YXRlLTIwMjUv&ntb=1">
                        <p className='border p-2 rounded-l-xl rounded-b-2xl text-white bg-blue-500 w-[60px] h-[40px] flex justify-center items-center text-xl mt-2  '><FaArrowRight /></p>
                    </a>

                </div>

            </motion.div>




        </div>

        </section >
    )
}

export default About_services
