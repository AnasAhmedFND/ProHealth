import { Inter } from 'next/font/google';
import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
const inter = Inter({
    subsets:["latin"],
    weight:["500","700"]
})
const Appointment = () => {
    return (
        <section className='container mx-auto flex  '>
            {/* left-div */}
            <div className="w-1/2 ">
                <p className='text-blue-600'><small>BOOK AN</small></p>
                <h2 className={`${inter.className} text-2xl font-bold text-[#274760] `}>Appointment</h2>
                <form className='mt-6' action="appointment">
                    <div className="flex justify-between">
                        <div className="w-[48%] ">
                            <label htmlFor="name">Name</label><br />
                            <input className='border rounded-lg shadow-md p-2 w-full outline-none ' type="text" placeholder='Your Name..' />
                        </div>
                        <div className="w-[48%] ">
                            <label className='' htmlFor="Phone Number">Phone Number</label><br />
                            <input className='border rounded-lg shadow-md p-2 w-full outline-none ' type="text" placeholder='(123) 456-789' />
                        </div>

                    </div>
                    <p className='mt-4'>
                    <label className='' htmlFor="number">Medical Record Number</label><br />
                    </p>
                    <input className='border w-full p-2 rounded-lg outline-none' type="text" placeholder='123456-7890-0987' />
                    <div className="mt-4 flex justify-between">
                        <div className="w-[48%]">
                            <label htmlFor="date">Preferred Date</label>
                            <div className="flex border gap-3 items-center  p-2 rounded-lg">
                                <p className='text-blue-600'><FaCalendarAlt /></p>
                                <input className='outline-none' type="text" placeholder='dd/mm/yyy ' />
                            </div>
                        </div>

                        <div className="w-[48%] ">
                            <label htmlFor="time">Preferred Time</label><br />
                            <div className="flex gap-3 items-center border rounded-lg p-2">
                                <p><FaRegClock /></p>
                                <input className='outline-none' type="time" placeholder='--:-- --' />
                            </div>
                        </div>
                    </div>
                    <h6 className='mt-4'># Reason for visit</h6>
                    <div className="mt-3">
                        <div className="flex gap-2">
                            <input type="radio" id='routine checkup' name='routine checkup' value='Routine Checkup' />
                            <label htmlFor="Routine Checkup">Routine Checkup</label><br />

                            <input type="radio" id='visit' name='New patient visit' value='New Patient Visit' />
                            <label htmlFor="New Patient Visit">New Patient Visit</label><br />

                        </div>
                        <div className="flex gap-2">
                        <input type="radio" id='concern' name='concern' value='Specitic concern' />
                        <label htmlFor="Specitic concern">Specitic Concern</label><br />

                        </div>

                    </div>

                    <h6 className='mt-4'># Department</h6>
                    
                        <div className="flex flex-wrap gap-4 mt-4">
                            <input type="radio" id='pediatric' name='pediatric' value='pediatric' />
                            <label htmlFor="pediatric">Pediatric</label><br />

                            <input type="radio" id='Obstetrics' name='Obstetrics' value='Obstetrics' />
                            <label htmlFor="Obstetrics">Obstetrics and Gynecology</label><br />

                            <input type="radio" id='Cardiology' name='Cardiology' value='Cardiology' />
                            <label htmlFor="Cardiology">Cardiology</label><br />
                            
                            <input type="radio" id='Cardiology' name='Cardiology' value='Cardiology' />
                            <label htmlFor="Cardiology">Cardiology</label><br />
                            
                        </div>
                    <button className='items-center flex gap-2 border rounded-2xl bg-linear-60 from-[#307BC4] to-[#274760] px-6 py-2 text-center text-white mt-2 '>Submit<FaLongArrowAltRight /></button>
                </form>
            </div>
            {/* Right div */}
            <div className="w-1/2  ">
                <img src="/home/appointment.png" alt="digsin" />
                
            </div>

        </section>
    )
}

export default Appointment
