import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { LuStethoscope } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LuHandHeart } from "react-icons/lu";
import { TbBulb } from "react-icons/tb";
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ["latin"],
    weight: ["200", "500", "600", "700", "800"]
})

const Values = () => {


    return (
        <section className="container mx-auto border-t relative" >
            <div className="flex justify-between w-[90%]  px-5 py-8 rounded-xl ml-[5%] absolute top-[-60px] bg-white shadow-md/30 ">
                <div className="flex gap-3 items-center">
                    <p className="border text-xl w-[40px] h-[40px] flex justify-center items-center bg-blue-500 rounded-full text-white " ><FaPhoneAlt /></p>
                    <div className="">
                        <h6>Hotline</h6>
                        <p>123-456-7890</p>
                    </div>
                </div>

                <div className="flex gap-3 items-center">
                    <p className="border text-xl w-[40px] h-[40px] flex justify-center items-center bg-blue-500 rounded-full text-white " ><LuStethoscope /></p>
                    <div className="">
                        <h6>Ambulance</h6>
                        <p>876-456-8760</p>
                    </div>
                </div>

                <div className="flex gap-3 items-center">
                    <p className="border text-xl w-[40px] h-[40px] flex justify-center items-center bg-blue-500 rounded-full text-white " ><SlLocationPin /></p>
                    <div className="">
                        <h6>Location</h6>
                        <p>New York, US</p>
                    </div>
                </div>

                <button className='border px-6 py-2 text-white bg-linear-60 from-[#307BC4] to-[#274760] rounded-full flex items-center gap-2 '>BOOK NOW <FaLongArrowAltRight /></button>
            </div>

            <div className="mt-28">
                <h2 className={`${inter.className}  text-4xl text-center text-[#274760] font-bold  `} >Our Values </h2>
                {/* Mother card items  */}
                <div className="mother flex justify-around mt-10   ">
                    {/* Card-1 */}
                    <div className=" px-2 py-5 w-[31%] rounded-2xl text-center shadow-md/30 mt-6 h-[280px] ">
                        <div className="flex justify-center gap-2 mt-8 font-bold items-center   ">
                            <p className='border text-xl w-[30px] h-[30px] flex justify-center items-center bg-blue-500 rounded-full text-white'><LuHandHeart /></p>
                            <h5>Compassion</h5>
                        </div>
                        <p className='mt-4 '>We understand that seeking medical
                            care can be a stressful and emotional
                            experience, and we strive to create a
                            welcoming and supportive environment
                            that puts our patients at ease and every
                            one.</p>
                    </div>
                    {/* Card-2 */}
                     <div className=" px-2 py-5 w-[31%] rounded-2xl text-center shadow-md/30 h-[280px] ">
                        <div className="flex justify-center gap-2 mt-8 font-bold items-center   ">
                            <p className='border text-xl w-[30px] h-[30px] flex justify-center items-center bg-blue-500 rounded-full text-white'><TbBulb /></p>
                            <h5>Excellence</h5>
                        </div>
                        <p className='mt-4 '>We understand that seeking medical
                            care can be a stressful and emotional
                            experience, and we strive to create a
                            welcoming and supportive environment
                            that puts our patients at ease and every
                            one.</p>
                    </div>
                    {/* Card-3 */}
                     <div className=" px-2 py-5 w-[31%] rounded-2xl text-center shadow-md/30 mt-6 h-[280px]  ">
                        <div className="flex justify-center gap-2 mt-8 font-bold items-center   ">
                            <p className='border text-xl w-[30px] h-[30px] flex justify-center items-center bg-blue-500 rounded-full text-white'><LuHandHeart /></p>
                            <h5>Integrity</h5>
                        </div>
                        <p className='mt-4 '>We understand that seeking medical
                            care can be a stressful and emotional
                            experience, and we strive to create a
                            welcoming and supportive environment
                            that puts our patients at ease and every
                            one.</p>
                    </div>


                </div>
                    {/* 2nd row 4-5 card */}
                    <div className="flex mt-5 justify-center gap-6">
                    {/* Card-4 */}
                     <div className=" px-2 py-5 w-[31%] rounded-2xl text-center shadow-md/30 h-[280px]  ">
                        <div className="flex justify-center gap-2 font-bold items-center mt-8   ">
                            <p className='border text-xl w-[30px] h-[30px] flex justify-center items-center bg-blue-500 rounded-full text-white'><TbBulb /></p>
                            <h5>Respect</h5>
                        </div>
                        <p className='mt-4 '>We understand that seeking medical
                            care can be a stressful and emotional
                            experience, and we strive to create a
                            welcoming and supportive environment
                            that puts our patients at ease and every
                            one.</p>
                    </div>

                    {/* Card-5 */}
                     <div className=" px-2 py-5 w-[31%] rounded-2xl text-center shadow-md/30 h-[280px]  ">
                        <div className="flex justify-center gap-2 font-bold items-center mt-8   ">
                            <p className='border text-xl w-[30px] h-[30px] flex justify-center items-center bg-blue-500 rounded-full text-white'><TbBulb /></p>
                            <h5>Teamwork</h5>
                        </div>
                        <p className='mt-4 '>We understand that seeking medical
                            care can be a stressful and emotional
                            experience, and we strive to create a
                            welcoming and supportive environment
                            that puts our patients at ease and every
                            one.</p>
                    </div>

                    </div>
            </div>
        </section>
    )
}

export default Values
