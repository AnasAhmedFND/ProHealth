"use client"
import React, { useState } from 'react'
import { BiCategory } from "react-icons/bi";
import { SiBaserow } from "react-icons/si";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const find_item = {
  "All": [
    "/find/doctor_1.png",
    "/find/doctor_2.png",
    "/find/doctor_3.png",
    "/find/doctor_4.png",
    "/find/doctor_5.png",
    "/find/doctor_6.png",
    "/find/doctor_7.png",
    "/find/doctor_8.png",
    "/find/doctor_9.png",
    "/find/doctor_10.png",
    "/find/doctor_11.png",
    "/find/doctor_12.png",
  ],

  "Cardiology": [
    "/find/doctor_6.png",
    "/find/doctor_7.png",
    "/find/doctor_8.png",
    "/find/doctor_9.png",
    "/find/doctor_10.png",
    "/find/doctor_11.png",
    "/find/doctor_12.png",

  ],

  "Emergency": [
    "/find/doctor_2.png",
    "/find/doctor_3.png",
    "/find/doctor_4.png",
    "/find/doctor_5.png",
    "/find/doctor_6.png",
    "/find/doctor_7.png",
    "/find/doctor_8.png",
    "/find/doctor_9.png",
    "/find/doctor_10.png"

  ],

  "pediatric": [
    "/find/doctor_1.png",
    "/find/doctor_2.png",
    "/find/doctor_3.png",
    "/find/doctor_4.png",
    "/find/doctor_5.png",
    "/find/doctor_6.png",
    "/find/doctor_7.png",
    "/find/doctor_8.png",

  ],

  "Others": [
    "/find/doctor_5.png",
    "/find/doctor_6.png",
    "/find/doctor_7.png",
    "/find/doctor_8.png",
    "/find/doctor_2.png",
    "/find/doctor_3.png",
    "/find/doctor_4.png",
    "/find/doctor_5.png",
    "/find/doctor_6.png",
    "/find/doctor_7.png",
    "/find/doctor_8.png",
    "/find/doctor_9.png",
    "/find/doctor_10.png"

  ],

  "Psychiatry": [
    "/find/doctor_2.png",
    "/find/doctor_3.png",
    "/find/doctor_4.png",
    "/find/doctor_5.png",
    "/find/doctor_6.png",
    "/find/doctor_7.png",
    "/find/doctor_8.png",
    "/find/doctor_9.png",
    "/find/doctor_10.png"

  ]

}

const Doctor_items = () => {
  const [active, setActive] = useState("All")
  const [viewType, setViewType] = useState("grid") // grid or list

  return (
    <section className='container mx-auto  pb-10'>
      {/* category */}
      <div className="flex  items-center  justify-between">
        <div className="flex items-center gap-2">
          <small>Short By:-</small>
          <nav className='ml-2'>
            <ul className='flex items-center gap-2'>
              {Object.keys(find_item).map((portfolio) => (
                <li key={portfolio} onClick={() => setActive(portfolio)} className={`${active === portfolio ? "bg-blue-500 text-white " : " "} border py-2 px-4 rounded-2xl shadow-md cursor-pointer`}>
                  {portfolio}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <small>Showing {find_item[active].length} items</small>
          <p 
            onClick={() => setViewType("grid")} 
            className={`text-2xl cursor-pointer ${viewType==="grid" ? "text-blue-500" : ""}`}>
            <BiCategory />
          </p>
          <p 
            onClick={() => setViewType("list")} 
            className={`text-2xl cursor-pointer ${viewType==="list" ? "text-blue-500" : ""}`}>
            <SiBaserow />
          </p>
        </div>
      </div>

      {/* items-img */}
      <div className={`mt-5 flex flex-wrap gap-4 ${viewType === "grid" ? "justify-between" : "flex-col"}`}>
        {find_item[active].map((imgSrc, index) => (
          <div 
            key={index} 
            className={`pb-5 rounded-xl shadow-2xl bg-white 
              ${viewType === "grid" ? "w-[32%] mt-5" : "w-full flex gap-4 p-4 items-center"}
            `}
          >
            {/* image */}
            <div className={`relative ${viewType === "grid" ? "bg-[#c8dcef] rounded-t-xl" : "bg-[#c8dcef] w-40 h-40 flex-shrink-0 rounded-xl overflow-hidden"}`}>
              <img src={imgSrc} alt={`doctor ${index + 1}`} className="w-full h-full object-cover"/>
              {viewType === "grid" && (
                <p className='border bg-blue-500 text-white px-5 py-2 rounded-2xl w-[70%] mx-auto absolute bottom-0 left-[15%] '>Emergency Department</p>
              )}
            </div>

            {/* text content */}
            <div className={`${viewType === "grid" ? "text-center" : "flex-1"}`}>
              <h4 className='mt-4 font-bold text-xl'>Dr. Lisa Chen, MD</h4>
              <h6 className='font-bold mt-2'>Emergency Medicine Specialist</h6>
              <p className='mt-4'><small> With more than 15 years of experience <br />
                learning human psychology and <br />
                behavior, Dr. Jones is an expert in <br />
                managing mood disorders and anxiety <br />
                disorders </small></p>
              <div className="flex justify-center gap-2 mt-2">
                <p className='border p-2 rounded-full text-white bg-blue-500 '><BiLogoFacebook /></p>
                <p className='border p-2 rounded-full text-white bg-blue-500 '><FaLinkedinIn /></p>
                <p className='border p-2 rounded-full text-white bg-blue-500 '><FaTwitter /></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Doctor_items
