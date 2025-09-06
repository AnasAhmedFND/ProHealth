import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const Contact = () => {
    return (
        <section className='container mx-auto   relative -top-[150px] '>
            <form action="contact" className=' w-[90%] mx-auto bg-white shadow-xl rounded-xl py-20 px-[130px] '>
                <div className="flex  justify-between  ">
                    <div className="w-[49%]  ">
                        <label htmlFor="name">Name</label> <br />
                        <input className='border p-2  rounded-lg shadow-lg w-full mt-2 ' type="name" placeholder='Type Name..' />
                    </div>

                    <div className="w-[49%]  ">
                        <label htmlFor="email">Email</label> <br />
                        <input className='border p-2  rounded-lg shadow-lg w-full mt-2 ' type="email" placeholder='Type Email..' />

                    </div>

                </div>

                <div className="mt-5">
                    <label className='' htmlFor="sub">Subject</label> <br />
                    <input className='border p-2  rounded-lg shadow-lg w-full mt-2 ' type="text" placeholder='Your Subject' />

                </div>

                <div className="mt-5">
                <label htmlFor="message">Message</label> <br />
                <input className='border p-2  rounded-lg shadow-lg w-full mt-2 h-[250px] ' type="message"  />

                </div>

                <button className='border py-2 px-5 text-white bg-linear-60 from-[#307BC4] to-[#274760] rounded-full mt-10 flex gap-2 items-center '>Submit <FaLongArrowAltRight /></button>


            </form>
        </section>
    )
}

export default Contact
