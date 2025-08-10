import { Inter, Poppins } from 'next/font/google';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const poppins = Poppins({
  subsets:['latin'],
  weight:["100", "200", "500", "600", "700", "800"]
})

const inter = Inter({
  subsets: ["latin"],
  weight:["200", "500", "600", "700", "800"]
})

const About_Us = () => {
  return (
   <section className='container mx-auto  pt-20 '>
    {/* about mother div */}
    <div className="flex ">
      <div className="w-1/2 ">        
        <img src="/about.jpg" alt="" />
      </div>

      <div className="w-1/2  ">
        <h2 className={`${inter.className} font-bold text-4xl mt-16 `} >About Us</h2>
        <h6 className='text-[#307BC4]  '>PRO HEALTH</h6>
        <div className="flex mt-10  gap-5 ">
          <p className='text-[#307BC4] text-2xl'><FaArrowRightLong /></p>
          <div className="">
          <h6 className={`${inter.className} text-[#274760] text-lg  `}   >ProHealth is a team of experienced <br /> medical professionals</h6> 
          <p className={`${poppins.className} mt-4 text-sm `}>Dedicated to providing top-quality healthcare services. <br />We believe in a holistic approach to healthcare that <br />focuses on treating the whole person, not just the illness <br />or symptoms.</p>

          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default About_Us
