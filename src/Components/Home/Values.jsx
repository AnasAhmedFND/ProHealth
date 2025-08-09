import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { LuStethoscope } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";

const Values = () => {
  return (
   <section className="container mx-auto border" >
    <div className="flex justify-between w-[90%] border p-5 rounded-xl ml-[5%] ">
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

        <button>BOOK NOW</button>
    </div>

    <div className=""></div>
   </section>
  )
}

export default Values
